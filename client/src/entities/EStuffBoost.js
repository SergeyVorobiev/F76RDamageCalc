import { functions } from '../boostStuff/BoostFunctions';

export const defaultStuffBoost = {
    creatureTypes: new Map(), // map must contain a type of creature as a key - 'SuperMutant' and a value is [15, BDB] - means 15% BDB
    weaponTypes: new Map(), // map must contain a type of creature as a key - 'All / Melee' and a value is [20, TDB] - means 20% TDB
    weaponNames: new Map(), // map must contain a name of weapon as a key - 'AlienBluster' and a value is [25, BDB] - means 25% BDB
    creatureNames: new Map(),
    weaponStats: new Map(),
};

export function convertStuffBoost(stuffBoost) {
    const result = new Set(); // Guarantee uniqueness
    collectBoosts(result, stuffBoost.creatureTypes);
    collectBoosts(result, stuffBoost.weaponTypes);
    collectBoosts(result, stuffBoost.weaponNames);
    collectBoosts(result, stuffBoost.creatureNames);
    collectBoosts(result, stuffBoost.weaponStats);
    return Array.from(result);
}

function collectBoosts(result, boosts) {
    boosts.forEach((value, key) => {
        const end = key.lastIndexOf("_");
        key = key.slice(0, key.lastIndexOf("_"));
        result.add(key);
    });
}

export function prepareItems(items, loadedStuff=null) {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        item.index = i;
        if (loadedStuff && loadedStuff.has(item.id)) {
            item.used = true;
        } else {
            item.used = false;
        }
    }
}

export function applyBoost(foodPref, item, stuffBoost, player, anyway) {
    let result = false;
    for (let i = 0; i < item.boosts.length; i++) {
        let boost = item.boosts[i];
        const funcUsed = boost.func && boost.func.length > 0;
        if (anyway || funcUsed) {
            const id = item.id + "_" + i;
            result = true;
            if (funcUsed) {
                if (item.type === "Meet" || item.type === "Plant") {
                    boost.value = functions[boost.func](player, foodPref, item.type);
                } else {
                    boost.value = functions[boost.func](player);
                }
            }
            if (boost.categoryType === "CreatureType") {
                stuffBoost.creatureTypes.set(id, boost);
            } else if (boost.categoryType === "CreatureName") {
                stuffBoost.creatureNames.set(id, boost);
            } else if (boost.categoryType === "WeaponType") {
                stuffBoost.weaponTypes.set(id, boost);
            } else if (boost.categoryType === "WeaponName") {
                stuffBoost.weaponNames.set(id, boost);
            } else if (boost.categoryType === "WeaponStat") {
                stuffBoost.weaponStats.set(id, boost);
            }
        }
    }
    return result;
}

export function loadBoosts(magazines, bobbles, food, drink, psycho, serums, foodPref, player) {
    const stuffBoost = {
        creatureTypes: new Map(),
        weaponTypes: new Map(),
        weaponNames: new Map(),
        creatureNames: new Map(),
        weaponStats: new Map(),
    }
    applyAllStuff(foodPref, magazines, stuffBoost, player);
    applyAllStuff(foodPref, bobbles, stuffBoost, player);
    applyAllStuff(foodPref, food, stuffBoost, player);
    applyAllStuff(foodPref, drink, stuffBoost, player);
    applyAllStuff(foodPref, psycho, stuffBoost, player);
    applyAllStuff(foodPref, serums, stuffBoost, player);
    return stuffBoost;
}

function applyAllStuff(foodPref, items, stuffBoost, player) {
    for (let i = 0; i < items.length; i++) {
        applyStuff(foodPref, items[i], stuffBoost, player);
    }
}

export function applyStuff(foodPref, item, stuffBoost, player) {
    if (item.used) {
        applyBoost(foodPref, item, stuffBoost, player, true);
    } else {
        for (let i = 0; i < item.boosts.length; i++) {
            let boost = item.boosts[i];
            const id = item.id + "_" + i;
            if (boost.categoryType === "CreatureType") {
                stuffBoost.creatureTypes.delete(id);
            } else if (boost.categoryType === "CreatureName") {
                stuffBoost.creatureNames.delete(id);
            } else if (boost.categoryType === "WeaponType") {
                stuffBoost.weaponTypes.delete(id);
            } else if (boost.categoryType === "WeaponName") {
                stuffBoost.weaponNames.delete(id);
            } else if (boost.categoryType === "WeaponStat") {
                stuffBoost.weaponStats.delete(id);
            }
        }
    }
}
