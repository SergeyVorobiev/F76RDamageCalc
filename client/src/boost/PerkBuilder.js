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
                PerkBuilder.setupCard(boosts.slugger, 3);
                PerkBuilder.setupCard(boosts.party_girl_boy, 2);
                break;
            default:
                break;
        }
        calculateSpecial(boosts);
        player.strange = boosts.strange_in_numbers.displayed_value;
        player.freak = boosts.class_freak.displayed_value;
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
        card.rank = rank;
        card.x = x;
        card.value = card.rank_values[card.rank - 1] * x;
        card.is_used = true;
        card.displayed_value = card.value;
    }
}