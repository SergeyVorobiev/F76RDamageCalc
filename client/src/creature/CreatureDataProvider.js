import creatureItems from '../resources/creature_health_res.json';
import RaceDataProvider from '../race/RaceDataProvider';


const creatureNames = [];

for (const creatureName in creatureItems[0]) {
    creatureNames.push(creatureName);
}

const creatureLevels = [];
const creatureLevelsWithMax = ["Max"];

for (let i = 1; i <= 150; i++) {
    creatureLevels.push(i);
    creatureLevelsWithMax.push(i);
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
        const creatureDataCurve = creatureData['curve'];
        for (const name in creatureDataCurve) {
            const values = creatureDataCurve[name];
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
        result["immuneToRad"] = creatureData.immune_to_rad;
        result["immuneToPoison"] = creatureData.immune_to_poison;
        result["reduction"] = creatureData.reduction;
        result["reductions"] = [...creatureData.reductions];
        result["tags"] = [...creatureData.tags];
        result["reductionOnlyNotBleeding"] = creatureData.reduction_only_not_bleeding;
        const race = RaceDataProvider.getRaceById(creatureData.race_id);
        result['body'] = {...race.bodyData.body};
        result['headMult'] = CreatureDataProvider.getMaxBodyMultiplier(result['body']);
        result['normalMult'] = 1;
        result['averageMult'] = CreatureDataProvider.getAverageBodyMultiplier(result['body']);
        return result;
    }

    static getMaxBodyMultiplier(body) {
        let maxMult = 0;
        for (const name in body) {
            const part = body[name];
            const mult = part.damage_mult;
            if (maxMult < mult) {
                maxMult = mult;
            }
        }
        return maxMult;
    }

    static getAverageBodyMultiplier(body) {
        let multSum = 0;
        let count = 0
        for (const name in body) {
            const part = body[name];
            multSum += part.damage_mult;
            count += 1;
        }
        return (count === 0) ? 0 : multSum / count;
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

    static getCreatureLevels(withMax=false) {
        return (withMax) ? creatureLevelsWithMax : creatureLevels;
    }

    static getMaxLevel(name) {
        let creatureData = CreatureDataProvider.getCreatureData(name);
        if (!creatureData) {
            return 1;
        }
        creatureData = creatureData['curve'];
        const result = [];
        for (const name in creatureData) {
            const values = creatureData[name];
            result.push(values[values.length -1].x);
        }
        let max = Math.max(...result);
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