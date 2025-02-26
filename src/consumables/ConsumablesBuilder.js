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

    static getImagePathById(cId) {
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

    static getMagazineItems(wType, wName, tags, crit, team, scoped, creatureTags, accessibleMagazines) {
        const result = [];
        const combination = [];

        // Creatures
        if (creatureTags.includes("mirelurk")) {
            ConsumablesBuilder.addIfAccessible("attack_of_the_fishmen_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("ghoul")) {
            ConsumablesBuilder.addIfAccessible("curse_of_the_burned_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("supermutant")) {
            ConsumablesBuilder.addIfAccessible("rise_of_the_mutants_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("animal")) {
            ConsumablesBuilder.addIfAccessible("home_in_the_hills_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("scorched")) {
            ConsumablesBuilder.addIfAccessible("demon_slaves_demon_sands_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("robot")) {
            ConsumablesBuilder.addIfAccessible("the_future_of_hunting_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("yaoguai")) {
            ConsumablesBuilder.addIfAccessible("bear_proofing_your_campsite_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("liberator")) {
            ConsumablesBuilder.addIfAccessible("guide_to_hunting_commies_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("wendigo")) {
            ConsumablesBuilder.addIfAccessible("wendigo_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("mothman")) {
            ConsumablesBuilder.addIfAccessible("mothman_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("graftonmonster")) {
            ConsumablesBuilder.addIfAccessible("grafton_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("snallygaster")) {
            ConsumablesBuilder.addIfAccessible("snallygaster_magazine", accessibleMagazines, combination);
        }
        if (creatureTags.includes("flatwoodsmonster")) {
            ConsumablesBuilder.addIfAccessible("flatwoods_alien_magazine", accessibleMagazines, combination);
        }

        if (wName === "Alien Blaster") {
            ConsumablesBuilder.addIfAccessible("invasion_of_the_zetans_magazine", accessibleMagazines, combination);
        } else if (wName === "Cryolator") {
            ConsumablesBuilder.addIfAccessible("when_apes_go_bananas_magazine", accessibleMagazines, combination);
        }

        // TODO: Does unarmed really work here?
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("blood_on_the_harp_magazine", accessibleMagazines, combination);
            if (crit) {
                ConsumablesBuilder.addIfAccessible("corsair_queen_magazine", accessibleMagazines, combination);
            }
        } else {
            if (scoped) {
                ConsumablesBuilder.addIfAccessible("the_starlet_sniper_magazine", accessibleMagazines, combination);
            } else {
                ConsumablesBuilder.addIfAccessible("take_aim_army_style_magazine", accessibleMagazines, combination);
            }
        }
        if (tags.includes("Knives") || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("camouflage_special_magazine", accessibleMagazines, combination);
        }
        if (team) {
            ConsumablesBuilder.addIfAccessible("nuke_the_man_magazine", accessibleMagazines, combination);
        }
        if (tags.includes("Plasma")) {
            ConsumablesBuilder.addIfAccessible("tomorrow_technology_magazine", accessibleMagazines, combination);
        }
        if (wType === "Heavy") {
            ConsumablesBuilder.addIfAccessible("giant_super_weapons_magazine", accessibleMagazines, combination);
        }
        if (crit) {
            if (tags.includes("Laser")) {
                ConsumablesBuilder.addIfAccessible("acceptable_overkill_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
                ConsumablesBuilder.addIfAccessible("little_guns_for_little_ladies_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Plasma")) {
                ConsumablesBuilder.addIfAccessible("plasma_the_weapon_of_tomorrow_magazine", accessibleMagazines, combination);
            }
            if (tags.includes("Energy")) {
                ConsumablesBuilder.addIfAccessible("us_army_goes_to_space_magazine", accessibleMagazines, combination);
            }
            if (wType === "Heavy") {
                ConsumablesBuilder.addIfAccessible("future_of_warfare_magazine", accessibleMagazines, combination);
            }
            ConsumablesBuilder.addIfAccessible("rockobot_takes_the_nation_by_storm_magazine", accessibleMagazines, combination);
        }
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

    static getBobbleHeadItems(wType, tags, accessibleBobbleHeads) {
        const result = [];
        const combination = [];
        if (wType === "Heavy") {
            ConsumablesBuilder.addIfAccessible("big_guns_bobble", accessibleBobbleHeads, combination);
        } else if (wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("unarmed_bobble", accessibleBobbleHeads, combination);
            ConsumablesBuilder.addIfAccessible("strength_bobble", accessibleBobbleHeads, combination);
        } else if (wType === "Melee") { // Does Unarmed work here?
            ConsumablesBuilder.addIfAccessible("melee_bobble", accessibleBobbleHeads, combination);
            ConsumablesBuilder.addIfAccessible("strength_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Energy")) {
            ConsumablesBuilder.addIfAccessible("energy_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Explosive")) {
            ConsumablesBuilder.addIfAccessible("explosive_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("FusionCore")) {
            ConsumablesBuilder.addIfAccessible("repair_bobble", accessibleBobbleHeads, combination);
        }
        if (tags.includes("Ballistic") && wType !== "Heavy" && wType !== "Bow") {
            ConsumablesBuilder.addIfAccessible("small_guns_bobble", accessibleBobbleHeads, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getDrinkItems(wType, tags, crit, creatureTags, accessibleDrink) {
        const result = [];
        const combination = [];
        if (creatureTags.includes("animal")) {
            ConsumablesBuilder.addIfAccessible("hoppy_hunter_ipa_drink", accessibleDrink, combination);
        }
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("whiskey_drink", accessibleDrink, combination);
            if (wType === "Melee") {
                ConsumablesBuilder.addIfAccessible("gulpershine_vintage_drink", accessibleDrink, combination);
            } else {
                ConsumablesBuilder.addIfAccessible("sugar_free_nukashine_drink", accessibleDrink, combination);
            }
        }
        if (crit) {
            ConsumablesBuilder.addIfAccessible("sweetmutfruit_drink", accessibleDrink, combination);
        }
        if (tags.includes("Ballistic")) {
            ConsumablesBuilder.addIfAccessible("ballistic_bock_drink", accessibleDrink, combination);
        }
        if (tags.includes("Energy")) {
            ConsumablesBuilder.addIfAccessible("high_voltage_hefe_drink", accessibleDrink, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getFoodItems(wType, crit, accessibleFood) {
        const result = [];
        const combination = [];
        ConsumablesBuilder.addIfAccessible("spiked_venison_tato_stew_food", accessibleFood, combination);
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("tasty_mutant_hound_stew_food", accessibleFood, combination);
            ConsumablesBuilder.addIfAccessible("deathclaw_wellington_food", accessibleFood, combination);
        } else if (crit) {
            ConsumablesBuilder.addIfAccessible("blight_soup_food", accessibleFood, combination);
        }
        if (combination.length > 0) {
            result.push(combination);
        }
        return result;
    }

    static getSerumItems(wType, crit, lowHP, team, food, accessibleSerums) {
        const result = [];
        const combination1 = [];
        const combination2 = [];
        result.push(combination1);
        ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination1, accessibleSerums);
        if ((wType === "Melee" || wType === "Unarmed") && food) {
            result.push(combination2);
            ConsumablesBuilder.getSerumItemsBase(wType, false, lowHP, team, combination2, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(true, combination1, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination2, accessibleSerums);
        }
        if (crit && food) {
            const combination3 = [];
            const combination4 = [];
            const combination5 = [];
            result.push(combination3);
            ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination3, accessibleSerums);
            ConsumablesBuilder.getSerumItemsAdditional(false, combination3, accessibleSerums);
            if (wType === "Melee" || wType === "Unarmed") {
                result.push(combination4);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination4, accessibleSerums);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination4, accessibleSerums);

                // no eagle
                result.push(combination5);
                ConsumablesBuilder.getSerumItemsBase(wType, true, lowHP, team, combination5, accessibleSerums, true);
                ConsumablesBuilder.getSerumItemsAdditional(true, combination5, accessibleSerums);
            }
        }
        return result;
    }

    static getSerumItemsBase(wType, crit, lowHP, team, combination, accessibleSerums, noEagle=false) {
        if (lowHP) {
            ConsumablesBuilder.addIfAccessible("adrenal_reaction_serum", accessibleSerums, combination);
        }
        if (wType === "Melee") {
            ConsumablesBuilder.addIfAccessible("twisted_muscles_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("empath_serum", accessibleSerums, combination);
        }
        if (wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("twisted_muscles_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("talons_serum", accessibleSerums, combination);
            ConsumablesBuilder.addIfAccessible("empath_serum", accessibleSerums, combination);
        }
        if (wType !== "Melee" && wType !== "Unarmed") {
            ConsumablesBuilder.addIfAccessible("speed_demon_serum", accessibleSerums, combination);
        }

        // For the calculator it does not matter to have this mutation for crit, but technically it's important for (Luck)
        if (team && (wType === "Melee" || wType === "Unarmed" || crit)) {
            ConsumablesBuilder.addIfAccessible("herd_mentality_serum", accessibleSerums, combination);
        }
        if (crit && !noEagle) {
            ConsumablesBuilder.addIfAccessible("eagle_eyes_serum", accessibleSerums, combination);
        }
    }

    static getSerumItemsAdditional(isCarnivore, combination, accessibleSerums) {
        if (isCarnivore) {
            ConsumablesBuilder.addIfAccessible("carnivore_serum", accessibleSerums, combination);
        } else {
            ConsumablesBuilder.addIfAccessible("herbivore_serum", accessibleSerums, combination);
        }
    }

    static addIfAccessible(itemName, accessibleItems, collection) {
        const array = accessibleItems[itemName];
        if (array && array[0]) {
            collection.push(itemName);
        }
    }

    static isAccessible(itemName, accessibleItems) {
        const array = accessibleItems[itemName];
        return (array && array[0]);
    }

    // Nuclear Don's blend is not included (As it is very rare and surpasses any others anyway).
    // Super Chem MK1 in not included (Fury is used instead as it gives the same effect with Psychobuff)
    static getChemicalItems(wType, crit, sneak, accessibleChemo) {
        const result = [];
        const combination = [];
        result.push(combination);
        if (ConsumablesBuilder.isAccessible("nuclear_don_blend_psycho", accessibleChemo)) {
            ConsumablesBuilder.addIfAccessible("nuclear_don_blend_psycho", accessibleChemo, combination);
        } else {
            ConsumablesBuilder.addIfAccessible("psychobuff_psycho", accessibleChemo, combination);
        }
        if (wType === "Melee" || wType === "Unarmed") {
            ConsumablesBuilder.addIfAccessible("fury_psycho", accessibleChemo, combination);
        }
        if (crit || !ConsumablesBuilder.isAccessible("psychobuff_psycho", accessibleChemo)) {
            ConsumablesBuilder.addIfAccessible("overdrive_psycho", accessibleChemo, combination);
        }
        if (sneak) {
            ConsumablesBuilder.addIfAccessible("calmex_psycho", accessibleChemo, combination);
        }
        return result;
    }

    static prepare(consumableObjs, consumableNames=null) {
        prepareItems(consumableObjs["Magazines"], consumableNames);
        prepareItems(consumableObjs["BobbleHeads"], consumableNames);
        prepareItems(consumableObjs["Food"], consumableNames);
        prepareItems(consumableObjs["Drink"], consumableNames);
        prepareItems(consumableObjs["Psycho"], consumableNames);
        prepareItems(consumableObjs["Serum"], consumableNames);
        prepareItems(consumableObjs["Others"], consumableNames);
    }

    static getEmptyConsumableBoosts() {
        return {
            creature: new Map(),
            weapon: new Map(),
        };
    }

    static getFood() {
        return JSON.parse(JSON.stringify(food));
    }

    static getDrink() {
        return JSON.parse(JSON.stringify(drink));
    }

    static getPsycho() {
        return JSON.parse(JSON.stringify(psycho));
    }

    static getSerum() {
        return JSON.parse(JSON.stringify(serum));
    }

    static getOthers() {
        return JSON.parse(JSON.stringify(others));
    }

    static getMagazines() {
        return JSON.parse(JSON.stringify(magazines));
    }

    static getBobbleHeads() {
        return JSON.parse(JSON.stringify(bobbleHeads));
    }

    static buildFromList(consumablesList, player) {
        const consumablesSet = new Set(consumablesList);
        const foodPref = {carnivore: consumablesSet.has("carnivore_serum"), herbivore: consumablesSet.has("herbivore_serum")};
        const consumables = {};
        consumables["Magazines"] = ConsumablesBuilder.getMagazines();
        consumables["BobbleHeads"] = ConsumablesBuilder.getBobbleHeads();
        consumables["Food"] = ConsumablesBuilder.getFood();
        consumables["Drink"] = ConsumablesBuilder.getDrink();
        consumables["Psycho"] = ConsumablesBuilder.getPsycho();
        consumables["Serum"] = ConsumablesBuilder.getSerum();
        consumables["Others"] = ConsumablesBuilder.getOthers();
        ConsumablesBuilder.prepare(consumables, consumablesSet);
        const consumableBoosts = loadBoosts(consumables["Magazines"], consumables["BobbleHeads"],consumables["Food"],
        consumables["Drink"], consumables["Psycho"], consumables["Serum"], consumables["Others"], foodPref, player);
        return [foodPref, consumableBoosts, consumables];
    }

    static setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers) {
        setMagazines(consumables["Magazines"]);
        setBobbleHeads(consumables["BobbleHeads"]);
        setFood(consumables["Food"]);
        setDrink(consumables["Drink"]);
        setPsycho(consumables["Psycho"]);
        setSerum(consumables["Serum"]);
        setOthers(consumables["Others"]);
    }
}