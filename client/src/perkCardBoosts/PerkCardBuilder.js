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

    static buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag, shotgunTag, main, temp, leg, drink, team, lowHp, pa, explosive, crit, sneak, night, useSerums, player, bodyTags, creatureTags) {
        let boosts = defaultBoosts();
        if (main) {
            PerkCardBuilder.setupCard(boosts.bloody_mess, 3);
            if (bodyTags.includes("glowing")) {
                PerkCardBuilder.setupCard(boosts.glow_sight, 3);
            }
        }
        if (silencerTag && sneak && night && main) {
            PerkCardBuilder.setupCard(boosts.mister_sandman, 2);
        }
        if (useSerums && main) {
            PerkCardBuilder.setupCard(boosts.class_freak, 3);
        }
        if (team && main) {
            PerkCardBuilder.setupCard(boosts.strange_in_numbers, 1);
        }
        if (crit && main) {
            PerkCardBuilder.setupCard(boosts.better_criticals, 3);
        }
        if (lowHp && main) {
            PerkCardBuilder.setupCard(boosts.nerd_rage, 3);
            player.health.value = 20;
        }
        if (energyTag && wType !== "Heavy" && main) {
            PerkCardBuilder.setupCard(boosts.science, 6);
        }
        if (fusionTag && main) {
            PerkCardBuilder.setupCard(boosts.power_user, 3);
        }
        if (temp) {
            PerkCardBuilder.setupCard(boosts.adrenaline, 5, 6);
            PerkCardBuilder.setupCard(boosts.tenderizer, 3);
        }
        if (leg) {
            if (sneak) {
                PerkCardBuilder.setupCard(boosts.follow_through, 4);
            } else {
                PerkCardBuilder.setupCard(boosts.toft, 4);
            }
        }
        if (sneak && main) {
            if (wType === "Melee" || wType === "Unarmed") {
                PerkCardBuilder.setupCard(boosts.ninja, 3);
            } else {
                PerkCardBuilder.setupCard(boosts.covert_operative, 3);
            }
        }
        if (explosive && main) { // Works with rockets / grenades?
            PerkCardBuilder.setupCard(boosts.demolition_expert, 5);
        }
        if (main) {
            switch(wType) {
                case "Heavy":
                    if (pa) {
                        PerkCardBuilder.setupCard(boosts.stabilized, 3); // Works with rockets / grenades?
                    }
                    PerkCardBuilder.setupCard(boosts.lock_and_load, 3); // Works with rockets / grenades?
                    if (!explosiveTag) { // Are rockets / grenades weapons boosted by heavy cards?
                        PerkCardBuilder.setupCard(boosts.heavy_gunner, 11);
                    }
                    if (shotgunTag) {
                        PerkCardBuilder.setupCard(boosts.lock_and_load, 2);
                        PerkCardBuilder.setupCard(boosts.heavy_gunner, 9);
                        PerkCardBuilder.setupCard(boosts.shotgunner, 8);
                    }
                    break;
                case "Shotgun":
                    PerkCardBuilder.setupCard(boosts.shotgunner, 11);
                    PerkCardBuilder.setupCard(boosts.scattershot, 3);
                    break;
                case "Rifle":
                    PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                    if (automatic) {
                        PerkCardBuilder.setupCard(boosts.commando, 11);
                        PerkCardBuilder.setupCard(boosts.ground_pounder, 3);

                    } else {
                        PerkCardBuilder.setupCard(boosts.rifleman, 11);
                    }
                    break;
                case "Pistol":
                    PerkCardBuilder.setupCard(boosts.tank_killer, 3);
                    if (automatic) {
                        PerkCardBuilder.setupCard(boosts.guerrilla, 11);
                    } else {
                        PerkCardBuilder.setupCard(boosts.gunslinger, 11);
                    }
                    break;
                case "Bow":
                    PerkCardBuilder.setupCard(boosts.archer, 11);
                    PerkCardBuilder.setupCard(boosts.bow_before_me, 3);
                    break;
                case "Melee":
                    PerkCardBuilder.setupCard(boosts.incisor, 3);
                    if (!automatic) {
                        PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                    }
                    if (drink) {
                        PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
                    }
                    if (oneHandedTag) {
                        PerkCardBuilder.setupCard(boosts.gladiator, 11);
                    } else if (twoHandedTag) {
                        PerkCardBuilder.setupCard(boosts.slugger, 11);
                    }
                    break;
                case "Unarmed":
                    PerkCardBuilder.setupCard(boosts.incisor, 3);
                    PerkCardBuilder.setupCard(boosts.martial_artist, 3);
                    PerkCardBuilder.setupCard(boosts.iron_fist, 3);
                    if (drink) {
                        PerkCardBuilder.setupCard(boosts.party_girl_boy, 2);
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
            PerkCardBuilder.setupCard(boosts.adrenaline, adr, 6);
            calculateSpecial(boosts);
        }
        if (main && boosts.special.perception < 15 && creatureTags.includes("bug")) {
            let extra = 15 - boosts.special.perception;
            if (extra > 3) {
                extra = 3;
            }
            PerkCardBuilder.setupCard(boosts.exterminator, extra);
            calculateSpecial(boosts);
        }
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
        player.team = team;
        player.alcoholEffects = (boosts.party_girl_boy.displayed_value) > 0 ? boosts.party_girl_boy.displayed_value : 1;
        return boosts;
    }
}