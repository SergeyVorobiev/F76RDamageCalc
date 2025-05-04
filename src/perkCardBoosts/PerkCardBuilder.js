import { defaultBoosts } from '../entities/EBoosts';
import { calculateSpecial } from './BoostHelpers';


export default class PerkCardBuilder {

    static build(buildName, setBoostDamage, player, setPlayer) {
        let boosts = defaultBoosts();
        if (buildName !== "Reset") {
            PerkCardBuilder.setupGeneral(boosts, player);
        }
        switch(buildName) {
            case "Heavy":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                break;
            case "Heavy Explosive":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                PerkCardBuilder.setupCard(boosts.demolition_expert, 5);
                break;
            case "Heavy FullHouse":
                PerkCardBuilder.setupCard(boosts.stabilized, 3);
                PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkCardBuilder.setupCard(boosts.lock_and_load, 3);
                PerkCardBuilder.setupCard(boosts.demolition_expert, 5);
                PerkCardBuilder.setupCard(boosts.adrenaline, 5, 6);
                PerkCardBuilder.setupCard(boosts.tenderizer, 3);
                PerkCardBuilder.setupCard(boosts.toft, 4);
                break;
            case "Shotgun":
                PerkCardBuilder.setupCard(boosts.shotgunner, 11);
                PerkCardBuilder.setupCard(boosts.scattershot, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Rifle":
                PerkCardBuilder.setupCard(boosts.commando, 11);
                PerkCardBuilder.setupCard(boosts.ground_pounder, 3);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Rifle":
                PerkCardBuilder.setupCard(boosts.rifleman, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Pistol":
                PerkCardBuilder.setupCard(boosts.guerrilla, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Pistol":
                PerkCardBuilder.setupCard(boosts.gunslinger, 11);
                PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Bow":
                PerkCardBuilder.setupCard(boosts.archer, 11);
                PerkCardBuilder.setupCard(boosts.bow_before_me, 3);
                PerkCardBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Melee One-Handed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.gladiator, 11);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Melee Two-Handed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.slugger, 11);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Unarmed":
                PerkCardBuilder.setupCard(boosts.incisor, 3);
                PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                PerkCardBuilder.setupCard(boosts.iron_fist, 3);
                PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            default:
                break;
        }
        calculateSpecial(boosts);
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.alcoholEffects = (boosts.party_girl_boy.displayed_value) > 0 ? boosts.party_girl_boy.displayed_value : 1;
        setPlayer({...player});
        setBoostDamage(boosts);
    }

    static setupGeneral(boosts, player) {
        PerkCardBuilder.setupCard(boosts.bloody_mess, 3);
        PerkCardBuilder.setupCard(boosts.class_freak, 3);
        PerkCardBuilder.setupCard(boosts.strange_in_numbers, 1);
        PerkCardBuilder.setupCard(boosts.nerd_rage, 3);
        boosts.nerd_rage.displayed_value = (player.health.value <= 20.0) ? boosts.nerd_rage.value : 0.0;
    }

    static setupCard(card, rank, x=1) {
        if (rank === 0) {
            x = 1;
        }
        card.rank = rank;
        card.x = x;
        card.value = card.rank_values[card.rank - 1] * x;
        card.is_used = (rank !== 0);
        card.displayed_value = card.value;
    }

    static getImageNamesForPickedCards(boosts) {
        const result = [];
        for (const name in boosts) {
            const perk = boosts[name];
            if (perk.is_used) {
                result.push(perk.im_name);
            }
        }
        return result;
    }

    static setupIfAccessible(boosts, fieldName, rank, accessibleItems, x=1) {
        if (accessibleItems[fieldName]) {
            PerkCardBuilder.setupCard(boosts[fieldName], rank, x);
        }
    }

    static buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag,
                            shotgunTag, main, temp, leg, drink, team, lowHp, pa, explosive, crit, sneak, night, useSerums,
                            player, bodyTags, creatureTags, accessiblePerks) {
        let boosts = defaultBoosts();
        if (main) {
            PerkCardBuilder.setupIfAccessible(boosts, "bloody_mess", 3, accessiblePerks.main);
            if (bodyTags.includes("glowing")) {
                PerkCardBuilder.setupIfAccessible(boosts, "glow_sight", 3, accessiblePerks.main);
            }
        }
        if (silencerTag && sneak && night && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "mister_sandman", 2, accessiblePerks.main);
        }
        if (useSerums && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "class_freak", 3, accessiblePerks.main);
        }
        if (team && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "strange_in_numbers", 1, accessiblePerks.main);
        }
        if (crit && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "better_criticals", 3, accessiblePerks.main);
        }
        if (lowHp && main) {
            player.health.value = 20;
            PerkCardBuilder.setupIfAccessible(boosts, "nerd_rage", 3, accessiblePerks.main);
        }
        if (energyTag && wType !== "Heavy" && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "science", 6, accessiblePerks.main);
        }
        if (fusionTag && main) {
            PerkCardBuilder.setupIfAccessible(boosts, "power_user", 3, accessiblePerks.main);
        }
        if (temp) {
            PerkCardBuilder.setupIfAccessible(boosts, "adrenaline", 5, accessiblePerks.temp, 6);
            PerkCardBuilder.setupIfAccessible(boosts, "tenderizer", 3, accessiblePerks.temp);
        }
        if (leg) {
            if (sneak && wType !== "Melee" && wType !== "Unarmed") {
                PerkCardBuilder.setupIfAccessible(boosts, "follow_through", 4, accessiblePerks.leg);
            } else {
                PerkCardBuilder.setupIfAccessible(boosts, "toft", 4, accessiblePerks.leg);
            }
        }
        if (sneak && main) {
            if (wType === "Melee" || wType === "Unarmed") {
                PerkCardBuilder.setupIfAccessible(boosts, "ninja", 3, accessiblePerks.main);
            } else {
                PerkCardBuilder.setupIfAccessible(boosts, "covert_operative", 3, accessiblePerks.main);
            }
        }
        if (explosive && main) { // Works with rockets / grenades?
            PerkCardBuilder.setupIfAccessible(boosts, "demolition_expert", 5, accessiblePerks.main);
        }
        if (main) {
            switch(wType) {
                case "Heavy":
                    if (pa) {
                        PerkCardBuilder.setupIfAccessible(boosts, "stabilized", 3, accessiblePerks.main); // Works with rockets / grenades?
                    }
                    PerkCardBuilder.setupIfAccessible(boosts, "lock_and_load", 3, accessiblePerks.main); // Works with rockets / grenades?
                    if (!explosiveTag) { // Are rockets / grenades weapons boosted by heavy cards?
                        PerkCardBuilder.setupIfAccessible(boosts, "heavy_gunner", 11, accessiblePerks.main);
                    }
                    if (shotgunTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "lock_and_load", 2, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "heavy_gunner", 9, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "shotgunner", 8, accessiblePerks.main);
                    }
                    break;
                case "Shotgun":
                    PerkCardBuilder.setupIfAccessible(boosts, "shotgunner", 11, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "scattershot", 3, accessiblePerks.main);
                    break;
                case "Rifle":
                    PerkCardBuilder.setupIfAccessible(boosts, "tank_killer", 3, accessiblePerks.main);
                    if (automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "commando", 11, accessiblePerks.main);
                        PerkCardBuilder.setupIfAccessible(boosts, "ground_pounder", 3, accessiblePerks.main);
                    } else {
                        PerkCardBuilder.setupIfAccessible(boosts, "rifleman", 11, accessiblePerks.main);
                    }
                    break;
                case "Pistol":
                    PerkCardBuilder.setupIfAccessible(boosts, "tank_killer", 3, accessiblePerks.main);
                    if (automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "guerrilla", 11, accessiblePerks.main);
                    } else {
                        PerkCardBuilder.setupIfAccessible(boosts, "gunslinger", 11, accessiblePerks.main);
                    }
                    break;
                case "Bow":
                    PerkCardBuilder.setupIfAccessible(boosts, "archer", 11, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "bow_before_me", 3, accessiblePerks.main);
                    break;
                case "Melee":
                    PerkCardBuilder.setupIfAccessible(boosts, "incisor", 3, accessiblePerks.main);
                    if (!automatic) {
                        PerkCardBuilder.setupIfAccessible(boosts, "martial_artist", 3, accessiblePerks.main);
                    }
                    if (drink) {
                        PerkCardBuilder.setupIfAccessible(boosts, "party_girl_boy", 2, accessiblePerks.main);
                    }
                    if (oneHandedTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "gladiator", 11, accessiblePerks.main);
                    } else if (twoHandedTag) {
                        PerkCardBuilder.setupIfAccessible(boosts, "slugger", 11, accessiblePerks.main);
                    }
                    break;
                case "Unarmed":
                    PerkCardBuilder.setupIfAccessible(boosts, "incisor", 3, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "martial_artist", 3, accessiblePerks.main);
                    PerkCardBuilder.setupIfAccessible(boosts, "iron_fist", 3, accessiblePerks.main);
                    if (drink) {
                        PerkCardBuilder.setupIfAccessible(boosts, "party_girl_boy", 2, accessiblePerks.main);
                    }
                    break;
                default:
                    break;
            }
        }
        calculateSpecial(boosts);
        if (temp && boosts.special.agility > 15) {
            const extra = boosts.special.agility - 15;
            let adr = 5 - extra;
            if (adr < 0) {
                adr = 0;
            }
            if (adr > 0) {
                PerkCardBuilder.setupIfAccessible(boosts, "adrenaline", adr, accessiblePerks.temp, 6);
            }
            calculateSpecial(boosts);
        }
        if (main && boosts.special.perception < 15 && creatureTags.includes("bug")) {
            let extra = 15 - boosts.special.perception;
            if (extra > 3) {
                extra = 3;
            }
            if (extra > 0) {
                PerkCardBuilder.setupIfAccessible(boosts, "exterminator", extra, accessiblePerks.main);
            }
            calculateSpecial(boosts);
        }
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.team = team;
        player.alcoholEffects = (boosts.party_girl_boy.displayed_value) > 0 ? boosts.party_girl_boy.displayed_value : 1;
        return boosts;
    }
}