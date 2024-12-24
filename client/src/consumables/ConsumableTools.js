const objT = "ObjectType";
const chT = "ChemType";
const dT = "DrinkType";
const ingT = "IngredientType";
const meT = "MealType";
const boT = "BobbleheadType";
const plT = "PlantType";
const mT = "MagazineType";
const fT = "FoodType";
const itT = "ItemType";
const alT = "AlcoholType";

const dupl = "DUPLICATE000";

const cTypes = {
    "Chemical": [chT, true], // true / false - prefix / suffix
    "Drink": [dT, true],
    "Bobblehead": [boT, true],
    "Magazine": [mT, true],
    "Food": [fT, true],
    "Item": [itT, true],
    "Alcohol": [alT, false],
}

const tagPrefixes = [objT, ingT, meT, chT, dT, boT, plT, mT, fT, itT];
const tagEndings = [dupl, alT];


export default class ConsumableTools {

    static getItemType(item) {
        for (let i = 0; i < item.tags.length; i++) {
            const tag = item.tags[i];
            if (tag.startsWith(objT)) {
                return tag.slice(objT.length, tag.length);
            }
        }
        for (let i = 0; i < item.tags.length; i++) {
            const tag = item.tags[i];
            for (const name in cTypes) {
                const data = cTypes[name];
                const prefix = data[0];
                const isPrefix = data[1];
                if (isPrefix) {
                    if (tag.startsWith(prefix)) {
                        return name;
                    }
                } else {
                    if (tag.endsWith(prefix)) {
                        return name;
                    }
                }
            }
        }
        return "";
    }

    static removeTagPrefix(tag) {
        for (let i = 0; i < tagPrefixes.length; i++) {
            const tagPrefix = tagPrefixes[i];
            if (tag.startsWith(tagPrefix)) {
                return tag.slice(tagPrefix.length, tag.length);
            }
        }
        return tag;
    }

    static removeTagEndings(tag) {
        for (let i = 0; i < tagEndings.length; i++) {
            const tagEnding = tagEndings[i];
            if (tag.endsWith(tagEnding)) {
                return tag.slice(0, tag.length - tagEnding.length);
            }
        }
        return tag;
    }

    static removePrefixSuffix(tag) {
        return ConsumableTools.removeTagEndings(ConsumableTools.removeTagPrefix(tag));
    }

    static getItemColor(type) {
        switch(type) {
            case 'Bobblehead':
                return '#b6d9ff';
            case 'Chem':
                return '#f5cfff';
            case 'Magazine':
                return '#ffdb95';
            case 'Serum':
                return '#b4ffbf';
            case 'BloodPack':
                return '#ff3779';
            case 'Drink':
                return '#daf2ff';
            case 'Food':
                return '#ffebce';
            default:
                return '#f4f4f4';
        }
    }

    static getItemColorDark(type) {
        switch(type) {
            case 'Bobblehead':
                return '#7cbbff';
            case 'Chem':
                return '#be9ac8';
            case 'Magazine':
                return '#c4ab5f';
            case 'Serum':
                return '#6ab576';
            case 'BloodPack':
                return '#b58192';
            case 'Drink':
                return '#85a9bd';
            case 'Food':
                return '#c4ad8b';
            default:
                return '#9d9d9d';
        }
    }
}




