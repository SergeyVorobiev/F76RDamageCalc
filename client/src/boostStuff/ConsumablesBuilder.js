import magazines from '../resources/boostStuff/magazines/magazines.json';
import bobbleHeads from '../resources/boostStuff/bobbleHeads/bobbleHeads.json';
import food from '../resources/boostStuff/food/food.json';
import drink from '../resources/boostStuff/drink/drink.json';
import psycho from '../resources/boostStuff/psycho/psycho.json';
import serum from '../resources/boostStuff/serums/serum.json';
import others from '../resources/boostStuff/others/others.json';
import { prepareItems, loadBoosts } from '../entities/EStuffBoost';
import { getMagazine, getBobbleHead, getFood, getDrink, getPsycho, getSerum, getOther } from '../helpers/BoostStuffProvider';


export default class ConsumablesBuilder {

    static addItems(wType, player, magazines, bobbleHeads, chemicals, food, drink, serums, others) {
        const consumables = [];
        ConsumablesBuilder.addOtherItems(wType, consumables);
        ConsumablesBuilder.addPsycho(wType, consumables);
        return ConsumablesBuilder.buildFromList(consumables, player);
    }

    static getImagePathById(cId) {
        //const lastIndex = cId.lastIndexOf("_");
        const type = cId.substring(cId.lastIndexOf("_") + 1);
        let jsonItems = null;
        let getter = null;
        switch(type) {
            case 'magazine':
                jsonItems = magazines;
                getter = getMagazine;
                break;
            case 'bobble':
                jsonItems = bobbleHeads;
                getter = getBobbleHead;
                break;
            case 'food':
                jsonItems = food;
                getter = getFood;
                break;
            case 'drink':
                jsonItems = drink;
                getter = getDrink;
                break;
            case 'psycho':
                jsonItems = psycho;
                getter = getPsycho;
                break;
            case 'serum':
                jsonItems = serum;
                getter = getSerum;
                break;
             case 'other':
                jsonItems = others
                getter = getOther;
                break;
             default:
                return "";
        }
        for (let i = 0; i < jsonItems.length; i++) {
            const item = jsonItems[i];
            if (item.id === cId) {
                return getter(item.imName);
            }
        }
        return "";
    }

    static getMagazineItems(wType, wName, tags, crit, team, scoped) {
        const result = [];
        const combination = [];

        if (wName === "Alien Blaster") {
            combination.push("invasion_of_the_zetans_magazine");
        } else if (wName === "Cryolator") {
            combination.push("when_apes_go_bananas_magazine");
        } else if (wName === "Tomahawk") {
            combination.push("down_home_cooking_magazine");
        }

        // TODO: Do unarmed really will work here?
        if (wType === "Melee" || wType === "Unarmed") {
            combination.push("blood_on_the_harp_magazine");
            if (crit) {
                combination.push("corsair_queen_magazine");
            }
        } else {
            if (scoped) {
                combination.push("the_starlet_sniper_magazine");
            } else {
                combination.push("take_aim_army_style_magazine");
            }
        }
        if (tags.includes("Knives") || wType === "Unarmed") {
            combination.push("camouflage_special_magazine");
        }
        if (team) {
            combination.push("nuke_the_man_magazine");
        }
        if (tags.includes("Plasma")) {
            combination.push("tomorrow_technology_magazine");
        }
        if (wType === "Heavy") {
            combination.push("giant_super_weapons_magazine");
        }
        if (crit) {
            if (tags.includes("Laser")) {
                combination.push("acceptable_overkill_magazine");
            }
            if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
                combination.push("little_guns_for_little_ladies_magazine");
            }
            if (tags.includes("Plasma")) {
                combination.push("plasma_the_weapon_of_tomorrow_magazine");
            }
            if (tags.includes("Energy")) {
                combination.push("us_army_goes_to_space_magazine");
            }
            if (wType === "Heavy") {
                combination.push("future_of_warfare_magazine");
            }
            combination.push("rockobot_takes_the_nation_by_storm_magazine");
        }
        combination.push("demon_slaves_demon_sands_magazine");
        combination.push("wendigo_magazine");
        result.push(combination);
        return result;
    }

    static getOtherItems(hasPhysicalDamage) {
        const result = [];
        const combination = [];
        if (hasPhysicalDamage) {
            combination.push("syringer_other");
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getBobbleHeadItems(wType, tags) {
        const result = [];
        const combination = [];

        if (wType === "Heavy") {
            combination.push("big_guns_bobble");
        } else if (wType === "Unarmed") {
            combination.push("unarmed_bobble");
            combination.push("strength_bobble");
        } else if (wType === "Melee") {
            combination.push("melee_bobble");
            combination.push("strength_bobble");
        }
        if (tags.includes("Energy")) {
            combination.push("energy_bobble");
        }
        if (tags.includes("Explosive")) {
            combination.push("explosive_bobble");
        }
        if (tags.includes("FusionCore")) {
            combination.push("repair_bobble");
        }
        if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
            combination.push("small_guns_bobble");
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getDrinkItems(wType, tags, crit) {
        const result = [];
        const combination = [];
        if (wType === "Melee" || wType === "Unarmed") {
            combination.push("whiskey_drink");
        }
        if (crit) {
            combination.push("sweetmutfruit_drink");
        }
        if (tags.includes("Ballistic")) {
            combination.push("ballistic_bock_drink");
        }
        if (tags.includes("Energy")) {
            combination.push("high_voltage_hefe_drink");
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getFoodItems(wType, crit) {
        const result = [];
        const combination = [];
        if (wType === "Melee" || wType === "Unarmed") {
            combination.push("tasty_mutant_hound_stew_food");
            combination.push("deathclaw_wellington_food")
        } else if (crit) {
            combination.push("blight_soup_food");
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getSerumItems(wType, crit, lowHP, team, food) {
        const result = [];
        const combination1 = [];
        const combination2 = [];
        result.push(combination1);
        ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination1);
        if ((wType === "Melee" || wType === "Unarmed") && food) {
            result.push(combination2);
            ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination2);
            ConsumablesBuilder.getSerumItemsAdditional(true, combination1);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination2);
        }
        if (crit && food) {
            const combination3 = [];
            const combination4 = [];
            const combination5 = [];
            result.push(combination3);
            ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination3);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination3);
            if (wType === "Melee" || wType === "Unarmed") {
                result.push(combination4);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination4);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination4);

                // no eagle
                result.push(combination5);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination5, true);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination5);
            }
        }
        return result;
    }

    static getSerumItemsBase(wType, crit, lowHP, team, combination, noEagle=false) {
        if (lowHP) {
            combination.push("adrenal_reaction_serum");
        }
        if (wType === "Melee") {
            combination.push("twisted_muscles_serum");
        }
        if (wType === "Unarmed") {
            combination.push("twisted_muscles_serum");
            combination.push("talons_serum");
        }
        if (wType !== "Melee" && wType !== "Unarmed") {
            combination.push("speed_demon_serum");
        }

        // For the calculator it does not matter to have this mutation for crit, but technically it's important for (Luck)
        if (team && (wType === "Melee" || wType === "Unarmed" || crit)) {
            combination.push("herd_mentality_serum");
        }
        if (crit && !noEagle) {
            combination.push("eagle_eyes_serum");
        }
    }

    static getSerumItemsAdditional(isCarnivore, combination) {
        if (isCarnivore) {
            combination.push("carnivore_serum");
        } else {
            combination.push("herbivore_serum");
        }
    }

    // Nuclear Don's blend is not included (As it is very rare and surpasses any others anyway).
    // Super Chem MK1 in not included (Fury is used instead as it gives the same effect with Psychobuff)
    static getChemicalItems(wType, crit, sneak) {
        const result = [];
        const combination = [];
        result.push(combination);
        combination.push("psychobuff_psycho");
        if (wType === "Melee" || wType === "Unarmed") {
            combination.push("fury_psycho");
        }
        if (crit) {
            combination.push("overdrive_psycho");
        }
        if (sneak) {
            combination.push("calmex_psycho");
        }
        return result;
    }

    static prepare(consumables=null) {
        prepareItems(magazines, consumables);
        prepareItems(bobbleHeads, consumables);
        prepareItems(food, consumables);
        prepareItems(drink, consumables);
        prepareItems(psycho, consumables);
        prepareItems(serum, consumables);
        prepareItems(others, consumables);
    }

    static getEmptyConsumableBoosts() {
        return {
            creature: new Map(),
            weapon: new Map(),
        };
    }

    static getFood() {
        return food;
    }

    static getDrink() {
        return drink;
    }

    static getPsycho() {
        return psycho;
    }

    static getSerum() {
        return serum;
    }

    static getOthers() {
        return others;
    }

    static getMagazines() {
        return magazines;
    }

    static getBobbleHeads() {
        return bobbleHeads;
    }

    static buildFromList(consumablesList, player) {
        const consumables = new Set(consumablesList);
        const foodPref = {carnivore: consumables.has("carnivore_serum"), herbivore: consumables.has("herbivore_serum")};
        ConsumablesBuilder.prepare(consumables);
        const consumableBoosts = loadBoosts(magazines, bobbleHeads, food, drink, psycho, serum, others, foodPref, player);
        return [foodPref, consumableBoosts];
    }
}