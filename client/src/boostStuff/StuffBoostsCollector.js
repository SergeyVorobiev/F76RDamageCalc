import { intersects } from "../helpers/Array";


export default class StuffBoostsCollector {

    static collectAllItems(stuffBoosts, property, collector) {
        stuffBoosts.forEach((value, key) => {
            const maxItem = StuffBoostsCollector.getMaxItem(value);
            if (maxItem.property === property) {
                collector(maxItem);
            }
        });
    }

    static weaponNameOrTypeSatisfied(weaponName, weaponType, maxItem) {
        if (maxItem.name) {
            return maxItem.name.split(",").includes(weaponName);
        } else if (maxItem.type) {
            let types = maxItem.type.split(",");
            if (types.length === 0) {
                return true;
            }
            const lastType = types[0];
            let satisfyNameOrType;
            if (lastType === "!") { // Not include
                types = types.slice(1);
                satisfyNameOrType = true;
            } else {
                satisfyNameOrType = false;
            }
            if (types.includes(weaponType)) {
                satisfyNameOrType = !satisfyNameOrType;
            }
            return satisfyNameOrType;
        }
        return true;
    }

    static collect(weaponName, weaponType, weaponTags, stuffBoosts, property, customStacker=null) {
        let result = 0.0;
        stuffBoosts.forEach((value, key) => {
            const maxItem = StuffBoostsCollector.getMaxItem(value);
            const satisfyNameOrType = StuffBoostsCollector.weaponNameOrTypeSatisfied(weaponName, weaponType, maxItem);
            let additional = [];
            if (maxItem.tag) {
                additional = maxItem.tag.split(",");
            }
            let satisfyTags = (additional.length > 0) ? intersects(additional, weaponTags) : true;
            if (maxItem.property === property && satisfyTags && satisfyNameOrType) {
                if (customStacker) {
                    customStacker(maxItem.value);
                } else {
                    result += maxItem.value;
                }
            }
        });
        return result;
    }

    static getMaxItem(items) {
        if (items.length === 1) {
            return items[0];
        }
        let max = null;
        let maxItem = null;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (max === null || item.value > max) {
                maxItem = item;
                max = item.value;
            }
        }
        return maxItem;
    }
}