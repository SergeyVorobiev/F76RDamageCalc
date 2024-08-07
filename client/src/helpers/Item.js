import { convertStuffBoost } from "../entities/EStuffBoost";


export function getAverageTime(creatures) {
    return ((parseFloat(creatures.sbq.lifeTime) + parseFloat(creatures.earle.lifeTime) + parseFloat(creatures.titan.lifeTime)) / 3.0).toFixed(0);
}

export function getHotPercentage(creatures) {
    const time = getAverageTime(creatures);
    let percent = 0;
    if (time < 40000) {
        percent = 100;
    } else {
        percent = (4000000 / time).toFixed(0);
    }
    return percent;
}

export function buildItem(id, name, player, playerStats, creatures, damage, legendary, boostDamage, wSpec, extraDamage, additionalDamages, resultDamage, stuffBoost) {
    const stuff = convertStuffBoost(stuffBoost);
    return {
        id: id,
        name: name,
        averageTime: getAverageTime(creatures),
        player: JSON.parse(JSON.stringify(player)),
        playerStats: JSON.parse(JSON.stringify(playerStats)),
        damage: JSON.parse(JSON.stringify(damage)),
        legendary: JSON.parse(JSON.stringify(legendary)),
        boostDamage: JSON.parse(JSON.stringify(boostDamage)),
        wSpec: JSON.parse(JSON.stringify(wSpec)),
        extraDamage: JSON.parse(JSON.stringify(extraDamage)),
        additionalDamages: JSON.parse(JSON.stringify(additionalDamages)),
        creatures: JSON.parse(JSON.stringify(creatures)),
        resultDamage: JSON.parse(JSON.stringify(resultDamage)),
        stuff: JSON.parse(JSON.stringify(stuff)),
    }
};