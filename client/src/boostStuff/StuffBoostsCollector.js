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

    static collect(weaponName, weaponType, weaponTags, stuffBoosts, property, customStacker=null) {
        let result = 0.0;
        stuffBoosts.forEach((value, key) => {
            const maxItem = StuffBoostsCollector.getMaxItem(value);
            let satisfyNameOrType = true;
            if (maxItem.name) {
                satisfyNameOrType = maxItem.name.split(",").includes(weaponName);
            } else if (maxItem.type) {
                satisfyNameOrType = maxItem.type.split(",").includes(weaponType);
            }
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