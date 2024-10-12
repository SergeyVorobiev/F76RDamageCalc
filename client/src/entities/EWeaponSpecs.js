import getMods from '../helpers/Mods';
import { currentLegendaryIds } from '../helpers/Global';
import { getCritDamages } from '../helpers/CritView';
import { collectAllDamages, convertDamageDataToDamageItem } from '../helpers/mods/DamageSetter';
import { ModParser } from '../helpers/mods/ModParser';


const modParser = new ModParser();

// Id, value, type (BDB, TDB...)
export function getDefaultLegs(legIds=null) {
    if (legIds) {
        return [[legIds[0], 0, ""], [legIds[1], 0, ""], [legIds[2], 0, ""], [legIds[3], 0, ""], [legIds[4], 0, ""]];
    }
    return [["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""]];

}

export function convertTemplateToSpecs(template) {
    let fireRate = (template.isAuto[1]) ? template.defRate : ((10 / template.manualRate[1]) / template.speed[1]);
    fireRate = parseFloat(fireRate.toFixed(3));
    const defReloadTime = template.reloadTime[1] * template.reloadSpeed[1];
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
    bonusMult = replaceAdjustableLegs(legs, bonusMult);

    let creatures = [];
    for (let i = 0; i < template.creature.length; i++) {
        const creature = template.creature[i];
        creatures.push({"name": creature.name, "value": creature.value})
    }
    const damages = collectAllDamages(template);

    // Remove ignored (it can be useful later though (for now they are useless)
    const sortedDamages = [];
    let k = 0;
    for (let i = 0; i < damages.length; i++) {
        const d = damages[i];
        if (!d.ignore) {
            d.index = k++;
            sortedDamages.push(d);
        }
    }

    const critDamagesData = getCritDamages(template.crSpellId[1], template.id);
    let critDamages = [];
    for (let i = 0; i < critDamagesData.length; i++) {
        const critDamageData = critDamagesData[i];
        for (let j = 0; j < critDamageData.length; j++) {
            const critItem = critDamageData[j];
            critDamages.push(convertDamageDataToDamageItem(critItem));
        }
    }
    let wSpec = {
        weaponId: template.id,
        shot_size: template.shotSize[1],
        defReloadTime: defReloadTime,
        reloadSpeed: template.reloadSpeed[1],
        fireRate: fireRate,
        is_auto: template.isAuto[1],
        hand: template.hand[1],
        ammoCapacity: template.capacity[1],
        speed: template.speed[1],
        totalD: template.totalD[1],
        aa: template.antiArmor[1],
        strengthBoost: template.strengthBoost[1],
        crit: template.crit[1],
        sneak: template.sneak[1],
        cripple: template.cripple[1],
        exp: template.exp[1],
        bonus: bonusMult,
        crippleChance: 50,
        creature: creatures,
        strPoints: template.strPoints[1],
        powerAttack: template.powerAttack[1],
        bash: template.bash[1],
        type: template.type[1],
        ammoType: {name: template.ammoType.name, type: template.ammoType.type, codeName: template.ammoType.codeName},
        level: template.level,
        defaultName: template.name,
        chargeTime: template.chargeTime[1],
        maxChargeTime: template.chargeTime[1],
        iconName: template.iconName[template.type[1]],
        tags: template.tags,
        mods: mods,
        legendary: legs,
        damages: sortedDamages,
        critDamages: critDamages,
        legendaryHealthUpdated: false,
    };

    // Assign previous legs to not reset them if a weapon does not have legendary
    for (let i = 0; i < currentLegendaryIds.length; i++) {
        if (legs[i][0] === "") {
            const current = currentLegendaryIds[i];
            if (current[0] !== "") {
                modParser.applyLegendaryModToWSpec(current[0], wSpec, i, 100, false, true);
                legs[i] = [current[0], current[1], current[2]];
            }
        }
    }
    return wSpec;
}

export function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        defReloadTime: 0,
        reloadSpeed: 1,
        fireRate: 20,
        is_auto: 1,
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
        maxChargeTime: 0,
        cripple: 0,
        crippleChance: 50,
        bash: 0,
        strPoints: 0,
        powerAttack: 0,
        exp: 0,
        creature: [],
        level: 1,
        ammoType: {name: "", type: "", codeName: ""},
        defaultName: "Weapon",
        imageName: "Weapon",
        weaponId: "",
        type: "All",
        tags: [],
        mods: [],
        legendary: getDefaultLegs(),
        damages: [],
        critDamages: [],
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
            case '004f6aab':
            case '00606b71':
            case '004f6aae':
            case '004f6aab':
            case '004f6aa7':
                bonusMult -= 50;
                leg[1] = 50;
                leg[2] = "BDB";
                break;
            case '004f6aa0':
                bonusMult -= 95;
                leg[1] = 95;
                leg[2] = "BDB";
                break;
            case '0072a8c1':
            case '006069f2':
                bonusMult -= 24;
                leg[1] = 24;
                leg[2] = "BDB";
                break;
            case '00606b73':
            case '005299f5':
            case '004f6d76':
            case '00606c8d':
            case '0052414e':
                bonusMult -= 25;
                leg[1] = 25;
                leg[2] = "BDB";
                break;
            default:
                break;
        }
    }
    return bonusMult;
}