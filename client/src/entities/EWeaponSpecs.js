export function defaultWeaponDamageSpecs() {
    return {

        ballistic: {
            symbol: "B",
            damage: 43.0,
            used_damage: 43.0,
            use_damage: true,
            mod_damage: 16.125,
            used_mod_damage: 16.125,
            use_mod_damage: true,
            time_damage: 0.0,
            use_time_damage: false,
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
            use_time_damage: false,
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
            use_time_damage: false,
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
            use_time_damage: false,
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
            use_time_damage: false,
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
            use_time_damage: false,
            used_time_damage: 0.0,
        },
    };
}

export function defaultWeaponSpecs() {
    return {
        shot_size: 1,
        reload_time: 4,
        fire_rate: 91,
        ammo_capacity: 250,
        aa: 0,
        strength_boost: 0,
    };
}