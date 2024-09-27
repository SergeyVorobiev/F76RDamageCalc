import getMods from '../helpers/Mods';
import { collectAllDamages } from '../helpers/mods/DamageSetter';

export function defaultWeaponDamageSpecs() {
    return {

        ballistic: {
            symbol: "B",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0,
            used_mod_damage: 0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },

        energy: {
            symbol: "E",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0.0,
            used_mod_damage: 0.0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },

        fire: {
            symbol: "F",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0.0,
            used_mod_damage: 0.0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },

        poison: {
            symbol: "P",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0.0,
            used_mod_damage: 0.0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },

        cold: {
            symbol: "C",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0.0,
            used_mod_damage: 0.0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },

        rad: {
            symbol: "R",
            damage: 0.0,
            used_damage: 0.0,
            use_damage: true,
            mod_damage: 0.0,
            used_mod_damage: 0.0,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: true,
            used_time_damage: 0.0,
        },
    };
}

// Id, value, type (BDB, TDB...)
export function getDefaultLegs(legIds=null) {
    if (legIds) {
        return [[legIds[0], 0, ""], [legIds[1], 0, ""], [legIds[2], 0, ""], [legIds[3], 0, ""], [legIds[4], 0, ""]];
    }
    return [["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""]];

}

export function convertTemplateToSpecs(template) {
    let fireRate = (template.isAuto[1]) ? template.autoRate[1] : (10 / template.manualRate[1]);
    fireRate = parseFloat(fireRate.toFixed(3));
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

    // As damage bonus multiplier can be adjusted by legendary it will be calculated separately, so we need to remove
    // this value from bonus multiplier
    let bonusMult = template.bonusMult[1] * 100;

    bonusMult = replaceAdjustableLegs(legs, bonusMult);
    let creatures = [];
    for (let i = 0; i < template.creature.length; i++) {
        const creature = template.creature[i];
        creatures.push({"name": creature.name, "value": creature.value})
    }
    const damages = collectAllDamages(template);
    return {
        shot_size: template.shotSize[1],
        reload_time: template.reloadTime[1],
        reload_speed: template.reloadSpeed[1],
        fire_rate: fireRate,
        anim_action: template.manualRate[1],
        is_auto: template.isAuto[1],
        hand: template.hand[1],
        ammo_capacity: template.capacity[1],
        aa: template.antiArmor[1],
        strength_boost: template.strengthBoost[1],
        crit: template.crit[1],
        sneak: template.sneak[1],
        cripple: template.cripple[1],
        exp: template.exp[1],
        bonus: bonusMult,
        creature: creatures,
        bash: template.bash[1],
        type: template.type[1],
        level: template.level,
        accuracy: template.accuracy[1],
        defaultName: template.name,
        iconName: template.iconName[template.type[1]],
        tags: template.tags,
        mods: mods,
        legendary: legs,
        damages: damages,
    };
}

export function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        reload_time: 0,
        reload_speed: 1,
        fire_rate: 1,
        anim_action: 0,
        is_auto: 1,
        hand: 1,
        ammo_capacity: 1,
        aa: 0,
        strength_boost: 0,
        bonus: 0,
        crit: 0,
        sneak: 0,
        cripple: 0,
        bash: 0,
        exp: 0,
        creature: [],
        accuracy: 100,
        level: 1,
        defaultName: "Weapon",
        imageName: "Weapon",
        type: "All",
        tags: [],
        mods: [],
        legendary: getDefaultLegs(),
        damages: [],
    };
}

function replaceAdjustableLegs(legs, bonusMult) {
    for (let i = 0; i < legs.length; i++) {
        const leg = legs[i];
        switch (leg[0]) {
            case '004f6aab':
                bonusMult -= 50;
                leg[1] = 50;
                leg[2] = "BDB";
                break;
            default:
                break;
        }
    }
    return bonusMult;
}