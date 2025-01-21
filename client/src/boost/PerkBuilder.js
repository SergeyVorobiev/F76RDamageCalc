import { defaultBoosts } from '../entities/EBoosts';
import { calculateSpecial } from './BoostHelpers';


export default class PerkBuilder {

    static build(buildName, setBoostDamage, player, setPlayer) {
        let boosts = defaultBoosts();
        if (buildName !== "Reset") {
            PerkBuilder.setupGeneral(boosts, player);
        }
        switch(buildName) {
            case "Heavy":
                PerkBuilder.setupCard(boosts.stabilized, 3);
                PerkBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkBuilder.setupCard(boosts.lock_and_load, 3);
                break;
            case "Heavy Explosive":
                PerkBuilder.setupCard(boosts.stabilized, 3);
                PerkBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkBuilder.setupCard(boosts.lock_and_load, 3);
                PerkBuilder.setupCard(boosts.demolition_expert, 5);
                break;
            case "Heavy FullHouse":
                PerkBuilder.setupCard(boosts.stabilized, 3);
                PerkBuilder.setupCard(boosts.heavy_gunner, 11);
                PerkBuilder.setupCard(boosts.lock_and_load, 3);
                PerkBuilder.setupCard(boosts.demolition_expert, 5);
                PerkBuilder.setupCard(boosts.adrenaline, 5, 6);
                PerkBuilder.setupCard(boosts.tenderizer, 3);
                PerkBuilder.setupCard(boosts.toft, 4);
                break;
            case "Shotgun":
                PerkBuilder.setupCard(boosts.shotgunner, 11);
                PerkBuilder.setupCard(boosts.scattershot, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Rifle":
                PerkBuilder.setupCard(boosts.commando, 11);
                PerkBuilder.setupCard(boosts.ground_pounder, 3);
                PerkBuilder.setupCard(boosts.tank_killer, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Rifle":
                PerkBuilder.setupCard(boosts.rifleman, 11);
                PerkBuilder.setupCard(boosts.tank_killer, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Automatic Pistol":
                PerkBuilder.setupCard(boosts.guerrilla, 11);
                PerkBuilder.setupCard(boosts.tank_killer, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Non-Automatic Pistol":
                PerkBuilder.setupCard(boosts.gunslinger, 11);
                PerkBuilder.setupCard(boosts.tank_killer, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Bow":
                PerkBuilder.setupCard(boosts.archer, 11);
                PerkBuilder.setupCard(boosts.bow_before_me, 3);
                PerkBuilder.setupCard(boosts.better_criticals, 3);
                break;
            case "Melee One-Handed":
                PerkBuilder.setupCard(boosts.incisor, 3);
                PerkBuilder.setupCard(boosts.martial_artist, 3);
                PerkBuilder.setupCard(boosts.gladiator, 11);
                PerkBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Melee Two-Handed":
                PerkBuilder.setupCard(boosts.incisor, 3);
                PerkBuilder.setupCard(boosts.martial_artist, 3);
                PerkBuilder.setupCard(boosts.slugger, 11);
                PerkBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            case "Unarmed":
                PerkBuilder.setupCard(boosts.incisor, 3);
                PerkBuilder.setupCard(boosts.iron_fist, 3);
                PerkBuilder.setupCard(boosts.party_girl_boy, 2);
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
        PerkBuilder.setupCard(boosts.bloody_mess, 3);
        PerkBuilder.setupCard(boosts.class_freak, 3);
        PerkBuilder.setupCard(boosts.strange_in_numbers, 1);
        PerkBuilder.setupCard(boosts.nerd_rage, 3);
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

    static buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag, shotgunTag, main, temp, leg, drink, team, lowHp, pa, explosive, crit, sneak, night, useSerums, player, bodyTags, creatureTags) {
        let boosts = defaultBoosts();
        if (main) {
            PerkBuilder.setupCard(boosts.bloody_mess, 3);
            if (bodyTags.includes("glowing")) {
                PerkBuilder.setupCard(boosts.glow_sight, 3);
            }
        }
        if (silencerTag && sneak && night && main) {
            PerkBuilder.setupCard(boosts.mister_sandman, 2);
        }
        if (useSerums && main) {
            PerkBuilder.setupCard(boosts.class_freak, 3);
        }
        if (team && main) {
            PerkBuilder.setupCard(boosts.strange_in_numbers, 1);
        }
        if (crit && main) {
            PerkBuilder.setupCard(boosts.better_criticals, 3);
        }
        if (lowHp && main) {
            PerkBuilder.setupCard(boosts.nerd_rage, 3);
            player.health.value = 20;
        }
        if (energyTag && wType !== "Heavy" && main) {
            PerkBuilder.setupCard(boosts.science, 6);
        }
        if (fusionTag && main) {
            PerkBuilder.setupCard(boosts.power_user, 3);
        }
        if (temp) {
            PerkBuilder.setupCard(boosts.adrenaline, 5, 6);
            PerkBuilder.setupCard(boosts.tenderizer, 3);
        }
        if (leg) {
            if (sneak) {
                PerkBuilder.setupCard(boosts.follow_through, 4);
            } else {
                PerkBuilder.setupCard(boosts.toft, 4);
            }
        }
        if (sneak && main) {
            if (wType === "Melee" || wType === "Unarmed") {
                PerkBuilder.setupCard(boosts.ninja, 3);
            } else {
                PerkBuilder.setupCard(boosts.covert_operative, 3);
            }
        }
        if (explosive && main) { // Works with rockets / grenades?
            PerkBuilder.setupCard(boosts.demolition_expert, 5);
        }
        if (main) {
            switch(wType) {
                case "Heavy":
                    if (pa) {
                        PerkBuilder.setupCard(boosts.stabilized, 3); // Works with rockets / grenades?
                    }
                    PerkBuilder.setupCard(boosts.lock_and_load, 3); // Works with rockets / grenades?
                    if (!explosiveTag) { // Are rockets / grenades weapons boosted by heavy cards?
                        PerkBuilder.setupCard(boosts.heavy_gunner, 11);
                    }
                    if (shotgunTag) {
                        PerkBuilder.setupCard(boosts.lock_and_load, 2);
                        PerkBuilder.setupCard(boosts.heavy_gunner, 9);
                        PerkBuilder.setupCard(boosts.shotgunner, 8);
                    }
                    break;
                case "Shotgun":
                    PerkBuilder.setupCard(boosts.shotgunner, 11);
                    PerkBuilder.setupCard(boosts.scattershot, 3);
                    break;
                case "Rifle":
                    PerkBuilder.setupCard(boosts.tank_killer, 3);
                    if (automatic) {
                        PerkBuilder.setupCard(boosts.commando, 11);
                        PerkBuilder.setupCard(boosts.ground_pounder, 3);

                    } else {
                        PerkBuilder.setupCard(boosts.rifleman, 11);
                    }
                    break;
                case "Pistol":
                    PerkBuilder.setupCard(boosts.tank_killer, 3);
                    if (automatic) {
                        PerkBuilder.setupCard(boosts.guerrilla, 11);
                    } else {
                        PerkBuilder.setupCard(boosts.gunslinger, 11);
                    }
                    break;
                case "Bow":
                    PerkBuilder.setupCard(boosts.archer, 11);
                    PerkBuilder.setupCard(boosts.bow_before_me, 3);
                    break;
                case "Melee":
                    PerkBuilder.setupCard(boosts.incisor, 3);
                    if (!automatic) {
                        PerkBuilder.setupCard(boosts.martial_artist, 3);
                    }
                    if (drink) {
                        PerkBuilder.setupCard(boosts.party_girl_boy, 2);
                    }
                    if (oneHandedTag) {
                        PerkBuilder.setupCard(boosts.gladiator, 11);
                    } else if (twoHandedTag) {
                        PerkBuilder.setupCard(boosts.slugger, 11);
                    }
                    break;
                case "Unarmed":
                    PerkBuilder.setupCard(boosts.incisor, 3);
                    PerkBuilder.setupCard(boosts.iron_fist, 3);
                    if (drink) {
                        PerkBuilder.setupCard(boosts.party_girl_boy, 2);
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
            PerkBuilder.setupCard(boosts.adrenaline, adr, 6);
            calculateSpecial(boosts);
        }
        if (main && boosts.special.perception < 15 && creatureTags.includes("bug")) {
            let extra = 15 - boosts.special.perception;
            if (extra > 3) {
                extra = 3;
            }
            PerkBuilder.setupCard(boosts.exterminator, extra);
            calculateSpecial(boosts);
        }
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.team = team;
        player.alcoholEffects = (boosts.party_girl_boy.displayed_value) > 0 ? boosts.party_girl_boy.displayed_value : 1;
        return boosts;
    }
}