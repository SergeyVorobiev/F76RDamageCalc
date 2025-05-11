import { convertStuffBoost } from "../entities/EStuffBoost";
import {getAverageTimeMillis } from "../entities/ECreatures";
import Global from './Global';


export function getHotPercentage(creatures) {
    const time = getAverageTimeMillis(creatures);
    return timeToPercent(time);
}

export function timeToPercent(time) {
    let percent = 0;
    if (time <= Global.hotMinTime) {
        percent = 100;
    } else {
        percent = (Global.hotMaxTime / time).toFixed(0);
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