import creatureItems from '../resources/creature_health_res.json';


const creatureNames = [];

for (const creatureName in creatureItems[0]) {
    creatureNames.push(creatureName);
}

const creatureLevels = [];

for (let i = 1; i <= 150; i++) {
    creatureLevels.push(i);
}

creatureNames.sort();

export default class CreatureDataProvider {

    static getCreatureData(creatureName) {
        return creatureItems[0][creatureName];
    }

    static getCreatureParametersByName(creatureName, level) {
        const creatureData = CreatureDataProvider.getCreatureData(creatureName);
        return CreatureDataProvider.getCreatureParametersByData(creatureData, level);
    }

    static getCreatureParametersByData(creatureData, level) {
        const result = {};
        for (const name in creatureData) {
            const values = creatureData[name];
            const lastItem = values.length - 1;
            for (let i = 0; i <= lastItem; i++) {
                const sample = values[i];
                const sampleLevel = sample.x;
                const sampleValue = sample.y;
                if (i === 0 && level <= sampleLevel) { // Return min possible value
                    result[name] = sampleValue;
                    break;
                } else if (level === sampleLevel) { // Exact level
                    result[name] = sampleValue;
                    break;
                } else if (i !== 0) { // Value could lie somewhere between
                    const prevSampleLevel = values[i - 1].x;
                    if (level > prevSampleLevel && level < sampleLevel) {
                        const prevSampleValue = values[i - 1].y;
                        result[name] = CreatureDataProvider.calculateExactValue(prevSampleLevel, sampleLevel, level, prevSampleValue, sampleValue);
                        break;
                    }
                }
                if (i === lastItem) { // Return max possible value
                    result[name] = sampleValue;
                    break;
                }
            }
        }
        return result;
    }

    static calculateExactValue(prevLevel, nextLevel, curLevel, prevValue, nextValue) {
        const valueGap = nextValue - prevValue;
        const levelsAmount = nextLevel - prevLevel;
        const valuePerLevel = valueGap / levelsAmount;
        const shift = curLevel - prevLevel;
        return prevValue + valuePerLevel * shift;
    }

    static getCreatureNames() {
        return creatureNames;
    }

    static getCreatureLevels() {
        return creatureLevels;
    }

    static getMaxLevel(name) {
        const creatureData = CreatureDataProvider.getCreatureData(name);
        if (!creatureData) {
            return 1;
        }
        const result = [];
        for (const name in creatureData) {
            const values = creatureData[name];
            result.push(values[values.length -1].x);
        }
        const max = Math.max(...result);
        if (max < 1) {
            max = 1;
        }
        return max;
    }

    static getLevelsList(name) {
        const maxLevel = CreatureDataProvider.getMaxLevel(name);
        const result = [];
        for (let i = 1; i <= maxLevel; i++) {
            result.push(i);
        }
        return result;
    }

    static capitalizeCreatureName(creatureName) {
        let name = creatureName.charAt(0).toUpperCase() + creatureName.slice(1);
        return name.replaceAll("_", " ");
    }

    static getStyle(rType) {
        switch(rType) {
            case "physical":
                return ["💥 Physical", "small p-1 bg-ballistic", "grey"];
            case "energy":
                return ["⚡ Energy", "small p-1 bg-energy", "purple"];
            case "fire":
                return ["🔥 Fire", "small p-1 bg-fire", "red"];
            case "cold":
                return ["❄️ Cold", "small p-1 bg-cold", "#40aac2"];
            case "poison":
                return ["☣️ Poison", "small p-1 bg-poison", "green"];
            case "radiation":
                return ["☢️ Radiation", "small p-1 bg-rad", "#ccc976"];
            case "health":
                return ["❤️ Health", "small p-1 bg-health", "#cc7681"]
            default:
                return ["", ""];
        }
    }
}