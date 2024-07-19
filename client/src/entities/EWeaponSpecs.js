export function convertTemplate(template) {
    return {
        ballistic: {
            symbol: "B",
            damage: template.bbDamage[1],
            used_damage: template.bbDamage[1],
            use_damage: true,
            mod_damage: template.bmDamage[1],
            used_mod_damage: template.bmDamage[1],
            use_mod_damage: true,
            time_damage: template.btDamage[1],
            used_time_damage: template.btDamage[1],
            use_time_damage: true,
        },

        energy: {
            symbol: "E",
            damage: template.ebDamage[1],
            used_damage: template.ebDamage[1],
            use_damage: true,
            mod_damage: template.emDamage[1],
            used_mod_damage: template.emDamage[1],
            use_mod_damage: true,
            time_damage: template.etDamage[1],
            used_time_damage: template.etDamage[1],
            use_time_damage: true,
        },

        fire: {
            symbol: "F",
            damage: template.fbDamage[1],
            used_damage: template.fbDamage[1],
            use_damage: true,
            mod_damage: template.fmDamage[1],
            used_mod_damage: template.fmDamage[1],
            use_mod_damage: true,
            time_damage: template.ftDamage[1],
            used_time_damage: template.ftDamage[1],
            use_time_damage: true,
        },

        poison: {
            symbol: "P",
            damage: template.pbDamage[1],
            used_damage: template.pbDamage[1],
            use_damage: true,
            mod_damage: template.pmDamage[1],
            used_mod_damage: template.pmDamage[1],
            use_mod_damage: true,
            time_damage: template.ptDamage[1],
            used_time_damage: template.ptDamage[1],
            use_time_damage: true,
        },

        cold: {
            symbol: "C",
            damage: template.cbDamage[1],
            used_damage: template.cbDamage[1],
            use_damage: true,
            mod_damage: template.cmDamage[1],
            used_mod_damage: template.cmDamage[1],
            use_mod_damage: true,
            time_damage: template.ctDamage[1],
            used_time_damage: template.ctDamage[1],
            use_time_damage: true,
        },

       rad: {
            symbol: "R",
            damage: template.rbDamage[1],
            used_damage: template.rbDamage[1],
            use_damage: true,
            mod_damage: template.rmDamage[1],
            used_mod_damage: template.rmDamage[1],
            use_mod_damage: true,
            time_damage: template.rtDamage[1],
            used_time_damage: template.rtDamage[1],
            use_time_damage: true,
        },
    };
}

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

export function convertTemplateToSpecs(template) {
    let fireRate = (template.isAuto[1]) ? template.autoRate[1] : (10 / template.manualRate[1]);
    fireRate = parseFloat(fireRate.toFixed(3));
    let mods = [];
    for (let i = 0; i < template.mods.length; i++) {
        let categoryMods = template.mods[i].categoryMods;
        let categoryName = template.mods[i].categoryName;
        for (let j = 0; j < categoryMods.length; j++) {
            let mod = categoryMods[j];
            if (mod.isUsed) {
                mods.push({group: categoryName, id: mod.id, name: mod.name});
                break;
            }
        }
    }
    return {
        shot_size: template.shotSize[1],
        reload_time: template.reloadTime[1],
        fire_rate: fireRate,
        anim_action: template.manualRate[1],
        is_auto: template.isAuto[1],
        hand: template.hand[1],
        ammo_capacity: template.ammo[1],
        aa: template.antiArmor[1],
        strength_boost: template.strengthBoost[1],
        crit: template.crit[1],
        sneak: template.sneak[1],
        bleed: template.bleed[1],
        exp: template.exp[1],
        cd: template.cd[1],
        creatureType: template.creatureType[1],
        bash: template.bash[1],
        type: template.type,
        level: template.level,
        accuracy: template.accuracy[1],
        defaultName: template.name,
        tags: template.tags,
        mods: mods,
    };
}

export function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        reload_time: 0,
        fire_rate: 1,
        anim_action: 0,
        is_auto: 1,
        hand: 1,
        ammo_capacity: 1,
        aa: 0,
        strength_boost: 0,
        crit: 0,
        sneak: 0,
        bleed: 0,
        bash: 0,
        exp: 0,
        cd: 0,
        creatureType: "Any",
        accuracy: 100,
        level: 1,
        defaultName: "Weapon",
        type: "All",
        tags: "",
        mods: [],
    };
}