import { convertStuffBoost } from "../entities/EStuffBoost";
import {getAverageTimeMillis } from "../entities/ECreatures";


export function getHotPercentage(creatures) {
    const time = getAverageTimeMillis(creatures);
    let percent = 0;
    if (time <= 30000) {
        percent = 100;
    } else {
        percent = (3000000 / time).toFixed(0);
    }
    return percent;
}

export function buildItem(id, name, player, playerStats, creatures, boostDamage, wSpec, extraDamage, additionalDamages, resultDamage, stuffBoost) {
    const stuff = convertStuffBoost(stuffBoost);
    const wSpecCopy = JSON.parse(JSON.stringify(wSpec));
    wSpecCopy.weaponName = name;
    return {
        id: id,
        name: name,
        averageTime: getAverageTimeMillis(creatures),
        player: JSON.parse(JSON.stringify(player)),
        playerStats: JSON.parse(JSON.stringify(playerStats)),
        boostDamage: JSON.parse(JSON.stringify(boostDamage)),
        wSpec: wSpecCopy,
        extraDamage: JSON.parse(JSON.stringify(extraDamage)),
        additionalDamages: JSON.parse(JSON.stringify(additionalDamages)),
        creatures: JSON.parse(JSON.stringify(creatures)),
        resultDamage: JSON.parse(JSON.stringify(resultDamage)),
        stuff: JSON.parse(JSON.stringify(stuff)),
    }
};