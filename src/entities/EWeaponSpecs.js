import getMods from '../helpers/Mods';
import { currentLegendaryIds } from '../helpers/Global';
import { copyAllDamages } from '../helpers/mods/DamageSetter';
import { ModParser } from '../helpers/mods/ModParser';
import DamageExtractor from '../helpers/mods/DamageExtractor';
import Strings from '../helpers/Strings';


const modParser = new ModParser(false);
const damageExtractor = new DamageExtractor(false);

// Id, value, isApplied
export function getDefaultLegs(legIds=null) {
    if (legIds) {
        const result = [];
        for (let i = 0; i < 5; i++) {
            let isUsed = false;
            if(legIds[i] && legIds[i] !== "") {
                isUsed = true;
            }
            result.push([legIds[i], null, isUsed]);
        }
        return result;
    }
    return [["", null, false], ["", null, false], ["", null, false], ["", null, false], ["", null, false]];
}

export function resetAdjustableLegendary(wSpec, starIndex, isUsed) {
    wSpec.legendary[starIndex] = ["", null, isUsed];
}

function getMaxMinDamage(damage1, damage2) {
    let dVal1 = damage1.damage;
    let dVal2 = damage2.damage;
    const time1 = damage1.time;
    const time2 = damage2.time;
    if (time1 > 0) {
        dVal1 *= time1;
    }
    if (time2 > 0) {
        dVal2 *= time2;
    }
    if (dVal1 > dVal2) {
        return [damage1, damage2];
    }
    return [damage2, damage1];
}

export function convertTemplateToSpecs(template, alt) {
    modParser.setAlt(alt);
    damageExtractor.setAlt(alt);

    let mods = [];
    for (const modCategoryName in template.allMods) {
        if (modCategoryName.includes("Legendary")) {
            continue;
        }
        const categoryMods = template.allMods[modCategoryName];
        for (let j = 0; j < categoryMods.length; j++) {
            if (categoryMods[j][1]) {
                let mod = getMods().get(categoryMods[j][0]);
                mods.push({group: modCategoryName, id: mod.id, name: mod.name});
                break;
            }
        }
    }
    const leg1 = template.legendary1.id ? template.legendary1.id : "";
    const leg2 = template.legendary2.id ? template.legendary2.id : "";
    const leg3 = template.legendary3.id ? template.legendary3.id : "";
    const leg4 = template.legendary4.id ? template.legendary4.id : "";
    const leg5 = template.legendary5.id ? template.legendary5.id : "";
    const legs = getDefaultLegs([leg1, leg2, leg3, leg4, leg5]);


    let bonusMult = template.bonusMult[1] * 100;

    // As damage bonus multiplier can be adjusted by legendary it will be calculated separately, so we need to remove
    // this value from bonus multiplier
    //bonusMult = replaceAdjustableLegs(legs, bonusMult);
    for (let i = 0; i < legs.length; i++) {
        const curLeg = legs[i];
        const bonus = template.legBonusMult[curLeg[0]];
        if (bonus) {
            curLeg[1] = bonus * 100;
            curLeg[2] = true;
        }
    }
    let creatures = [];
    for (let i = 0; i < template.creature.length; i++) {
        const creature = template.creature[i];
        creatures.push({"name": creature.name, "value": creature.value})
    }
    const damages = copyAllDamages(template);

    // Disable same damages if they have different conditions (leave only one enabled)
    const mapDamages = new Map();
    for (let i = 0; i < damages.length; i++) {
        const damage = damages[i];
        const damageId = damage.damageId;
        if (damageId && damageId !== "" && damage.conditions && damage.conditions.length > 0) {
            const existedDamage = mapDamages.get(damageId);
            if (existedDamage) {
                const [maxDamage, minDamage] = getMaxMinDamage(damage, existedDamage);
                minDamage.isUsed = false;
                mapDamages.set(damageId, maxDamage);
            } else {
                mapDamages.set(damageId, damage);
            }
        }
    }

    // Remove ignored (it can be useful later though (for now they are useless)
    const sortedDamages = [];
    let k = 0;
    for (let i = 0; i < damages.length; i++) {
        const d = damages[i];
        if (!d.ignored) {
            d.index = k++;
            sortedDamages.push(d);
        }
    }
    const defReloadTime = template.reloadTime[1] * template.reloadSpeed[1];
    let wSpec = {
        weaponId: template.id,
        shot_size: template.shotSize[1],
        defReloadTime: defReloadTime,
        reloadSpeed: template.reloadSpeed[1],
        triggerDelay: template.triggerDelay[1],
        autoDelay: template.autoDelay[1],
        attackDelay: template.attackDelay[1],
        isAuto: template.isAuto[1],
        hand: template.hand[1],
        ammoCapacity: template.capacity[1],
        speed: template.speed[1],
        attackDamage: template.attackDamage[1],
        totalD: template.totalD[1],
        aa: template.antiArmor[1],
        strengthBoost: template.strengthBoost[1],
        damageBonusCond: template.damageBonusCond,
        crit: template.crit[1],
        sneak: template.sneak[1],
        cripple: template.cripple[1],
        exp: template.exp[1],
        bonus: bonusMult,
        crippleChance: 50,
        accuracy: 100, // General accuracy the same for every weapon by default
        creature: creatures,
        strPoints: template.strPoints[1],
        powerAttack: template.powerAttack[1],
        powerAttackChance: 50,
        minPowerMult: template.minPowerMult[1],
        maxPowerMult: template.maxPowerMult[1],
        bash: template.bash[1],
        type: template.type[1],
        ammoType: {name: template.ammoType.name, type: template.ammoType.type, codeName: template.ammoType.codeName},
        level: template.level,
        defaultName: template.name,
        typeNumber: template.typeNumber,
        weaponName: template.name,
        chargeTime: template.chargePowerTime[1],
        maxChargeTime: template.chargePowerTime[1],
        iconName: template.iconName[template.type[1]],
        tags: template.tags,
        mods: mods,
        legendary: legs,
        damages: sortedDamages,
        startAttackDelay: template.startAttackDelay[1],
        alt: alt,
        legendaryHealthUpdated: false,
    };
    return wSpec;
}

export function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        defReloadTime: 0,
        reloadSpeed: 1,
        triggerDelay: 0.5,
        autoDelay: 0.11,
        attackDelay: 2.2,
        isAuto: 1,
        hand: 1,
        ammoCapacity: 1,
        aa: 0,
        strengthBoost: 0,
        bonus: 0,
        crit: 0,
        speed: 1,
        sneak: 0,
        totalD: 0,
        chargeTime: 0,
        attackDamage: 1,
        accuracy: 100, // General accuracy the same for every weapon by default
        maxChargeTime: 0,
        minPowerMult: 0.5,
        maxPowerMult: 1,
        cripple: 0,
        crippleChance: 50,
        bash: 0,
        strPoints: 0,
        powerAttack: 0,
        powerAttackChance: 50,
        exp: 0,
        creature: [],
        level: 1,
        damageBonusCond: [],
        ammoType: {name: "", type: "", codeName: ""},
        defaultName: "Weapon",
        weaponName: "Weapon",
        iconName: "",
        weaponId: "",
        type: "All",
        tags: [],
        mods: [],
        legendary: getDefaultLegs(),
        damages: [],
        startAttackDelay: 0,
        alt: false,
        typeNumber: 0,
        legendaryHealthUpdated: true,
    };
}

// TODO: get rid of hardcore values
// This workaround is acceptable only for 'Damage Bonus' as it has
// the special cell to be placed (only for legendary) because it can be adjusted by a user
function replaceAdjustableLegs(legs, bonusMult) {
    for (let i = 0; i < legs.length; i++) {
        const leg = legs[i];
        switch (leg[0]) {
            case '00606b71': // Aristocrat
            case '004f6aa7': // Berserker
            case '007acbf5': // Encircler
                bonusMult -= 50;
                leg[1] = 50;
                break;
            case '004f6aa0': // Bloodied
                //bonusMult -= 95;
                //leg[1] = 95;
                break;
            case '0072a8c1': // Gourmand2 not used
            case '006069f2': // Gourmand
                bonusMult -= 24;
                leg[1] = 24;
                break;
            case '00606b73': // Juggernaut
            case '005299f5': // Mutant
                bonusMult -= 25;
                leg[1] = 25;
                break;
            default:
                break;
        }
    }
    return bonusMult;
}

export function removeDamage(wSpec, id) {
    const result = [];
    for (let i = 0; i < wSpec.damages.length; i++) {
        const damage = wSpec.damages[i];
        if (damage.damageId !== id) {
            result.push(damage);
        }
    }
    wSpec.damages = result;
}

export function isWeaponRanged(wSpec) {
    return !(wSpec.type === Strings.Melee || wSpec.type === Strings.Unarmed);
}