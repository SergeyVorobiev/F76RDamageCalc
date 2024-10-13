import { functions } from '../boostStuff/BoostFunctions';

export const defaultStuffBoost = {
    creature: new Map(),
    weapon: new Map(),
};

export function convertStuffBoost(stuffBoost) {
    const result = new Set();
    collectBoosts(result, stuffBoost.creature);
    collectBoosts(result, stuffBoost.weapon);
    return Array.from(result);
}

function collectBoosts(result, boosts) {
    boosts.forEach((value, key) => {
        for (let i = 0; i < value.length; i++) {
            result.add(value[i].parentId);
        }
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
            let id = item.id + "_" + i;
            if (boost.id) {
                id = boost.id;
            }
            result = true;
            if (funcUsed) {
                if (item.type === "Meet" || item.type === "Plant") {
                    boost.value = functions[boost.func](player, boost.defValue, foodPref, item.type);
                } else if (boost.defValue) {
                    boost.value = functions[boost.func](player, boost.defValue);
                } else {
                    boost.value = functions[boost.func](player);
                }
            }
            boost.parentId = item.id;
            const stuff = stuffBoost[boost.category];
            const things = stuff.get(id);

            // Add things from the same category to apply the best (between Whiskey and Vodka the first will be applied)
            if (things) {
                things.push(boost);
                stuff.set(id, things);
            } else {
                stuff.set(id, [boost]);
            }
        }
    }
    return result;
}

export function loadBoosts(magazines, bobbles, food, drink, psycho, serums, others, foodPref, player) {
    const stuffBoost = {
        creature: new Map(),
        weapon: new Map(),
    }
    applyAllStuff(foodPref, magazines, stuffBoost, player);
    applyAllStuff(foodPref, bobbles, stuffBoost, player);
    applyAllStuff(foodPref, food, stuffBoost, player);
    applyAllStuff(foodPref, drink, stuffBoost, player);
    applyAllStuff(foodPref, psycho, stuffBoost, player);
    applyAllStuff(foodPref, serums, stuffBoost, player);
    applyAllStuff(foodPref, others, stuffBoost, player);
    return stuffBoost;
}

function applyAllStuff(foodPref, items, stuffBoost, player) {
    for (let i = 0; i < items.length; i++) {
        applyStuff(foodPref, items[i], stuffBoost, player);
    }
}

function deleteBoost(item, stuffBoost) {
    for (let i = 0; i < item.boosts.length; i++) {
        let boost = item.boosts[i];
        let id = item.id + "_" + i;
        if (boost.id) {
            id = boost.id;
        }
        let stuff = stuffBoost[boost.category].get(id);
        if (!stuff) {
            return;
        }
        const remainStuff = stuff.filter(b => b.parentId !== item.id);
        if (!remainStuff || remainStuff.length === 0) {
            stuffBoost[boost.category].delete(id);
        } else {
            stuffBoost[boost.category].set(id, remainStuff);
        }
    }
}

export function applyStuff(foodPref, item, stuffBoost, player) {
    if (item.used) {
        applyBoost(foodPref, item, stuffBoost, player, true);
    } else {
        deleteBoost(item, stuffBoost);
    }
}
