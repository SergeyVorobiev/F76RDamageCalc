export function getDefaultCards() {
    return {"Main Boosts": true, "Temp Boosts": false, "Leg Boosts": false, "Team": true, "Low HP": true, "Power Armor": true, "Sneak": false, "Crit": false};
}

export function getDefaultMain() {
    return {"Strength": 25, "Head Shot": true, "Non-Automatic": false, "Scoped": false, "Night": false};
}

export function getDefaultStuff() {
    return {"Magazines": false, "Bobble Heads": false, "Chemicals": true, "Food": false, "Drink": false, "Serums": true, "Endangerol Syringer": false};
}

export function getDefaultLegendary() {
    return {"Legendary1": true, "Legendary2": true, "Legendary3": true, "Legendary4": true, "Legendary5": false};
}

export function getUsableFood() {
    return {
        "tasty_mutant_hound_stew_food": [true, "Tasty mutant hound stew"],
        "deathclaw_wellington_food": [true, "Deathclaw wellington"],
        "spiked_venison_tato_stew_food": [true, "Spiked venison & Tato stew"],
        "blight_soup_food": [true, "Blight soup"],
    }
}

export function getUsableMagazines() {
    return {
        "attack_of_the_fishmen_magazine" : [true, ""],
        "curse_of_the_burned_magazine" : [true, ""],
        "rise_of_the_mutants_magazine" : [true, ""],
        "home_in_the_hills_magazine" : [true, ""],
        "demon_slaves_demon_sands_magazine" : [true, ""],
        "the_future_of_hunting_magazine" : [true, ""],
        "bear_proofing_your_campsite_magazine" : [true, ""],
        "guide_to_hunting_commies_magazine" : [true, ""],
        "wendigo_magazine" : [true, ""],
        "mothman_magazine" : [true, ""],
        "grafton_magazine" : [true, ""],
        "snallygaster_magazine" : [true, ""],
        "flatwoods_alien_magazine" : [true, ""],
        "invasion_of_the_zetans_magazine" : [true, ""],
        "when_apes_go_bananas_magazine" : [true, ""],
        "blood_on_the_harp_magazine" : [true, ""],
        "corsair_queen_magazine" : [true, ""],
        "the_starlet_sniper_magazine" : [true, ""],
        "take_aim_army_style_magazine" : [true, ""],
        "camouflage_special_magazine" : [true, ""],
        "nuke_the_man_magazine" : [true, ""],
        "tomorrow_technology_magazine" : [true, ""],
        "giant_super_weapons_magazine" : [true, ""],
        "acceptable_overkill_magazine" : [true, ""],
        "little_guns_for_little_ladies_magazine" : [true, ""],
        "plasma_the_weapon_of_tomorrow_magazine" : [true, ""],
        "us_army_goes_to_space_magazine" : [true, ""],
        "future_of_warfare_magazine" : [true, ""],
        "rockobot_takes_the_nation_by_storm_magazine" : [true, ""],
    }
}

export function getUsableBobbleHeads() {
    return {
        "big_guns_bobble" : [true, ""],
        "unarmed_bobble" : [true, ""],
        "strength_bobble" : [true, ""],
        "melee_bobble" : [true, ""],
        "energy_bobble" : [true, ""],
        "explosive_bobble" : [true, ""],
        "repair_bobble" : [true, ""],
        "small_guns_bobble" : [true, ""],
    }
}

export function getUsableSerums() {
    return {
        "adrenal_reaction_serum" : [true, ""],
        "twisted_muscles_serum" : [true, ""],
        "empath_serum" : [true, ""],
        "talons_serum" : [true, ""],
        "speed_demon_serum" : [true, ""],
        "herd_mentality_serum" : [true, ""],
        "eagle_eyes_serum" : [true, ""],
        "carnivore_serum" : [true, ""],
        "herbivore_serum" : [true, ""],
    }
}

export function getUsableDrink() {
    return {
        "hoppy_hunter_ipa_drink": [true, "Hoppy hunter IPA"],
        "whiskey_drink": [true, "Whiskey"],
        "gulpershine_vintage_drink": [true, "Gulpershine vintage"],
        "sugar_free_nukashine_drink": [true, "Sugar-Free nukashine"],
        "sweetmutfruit_drink": [true, "Sweet mut fruit tea"],
        "ballistic_bock_drink": [true, "Ballistic bock"],
        "high_voltage_hefe_drink": [true, "High voltage hefe"],
    }
}

export function getUsableChemo() {
    return {
        "psychobuff_psycho": [true, "Psychobuff"],
        "nuclear_don_blend_psycho": [false, "Nuclear Don's blend"],
        "fury_psycho": [true, "Fury"],
        "overdrive_psycho": [true, "Overdrive"],
        "calmex_psycho": [true, "Calmex"],
    }
}

export function getMainPerks() {
    return {
        "bloody_mess": true,
        "glow_sight": true,
        "mister_sandman": true,
        "class_freak": true,
        "strange_in_numbers": true,
        "better_criticals": true,
        "nerd_rage": true,
        "science": true,
        "power_user": true,
        "ninja": true,
        "covert_operative": true,
        "demolition_expert": true,
        "stabilized": true,
        "heavy_gunner": true,
        "lock_and_load": true,
        "shotgunner": true,
        "scattershot": true,
        "tank_killer": true,
        "commando": true,
        "ground_pounder": true,
        "rifleman": true,
        "guerrilla": true,
        "gunslinger": true,
        "archer": true,
        "bow_before_me": true,
        "martial_artist": true,
        "party_girl_boy": true,
        "gladiator": true,
        "slugger": true,
        "incisor": true,
        "iron_fist": true,
        "exterminator": true,
    }
}

export function getTempPerks() {
    return {
        "adrenaline": true,
        "tenderizer": true,
    }
}

export function getLegPerks() {
    return {
        "follow_through": true,
        "toft": true,
    }
}