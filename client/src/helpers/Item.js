function getAverageTime(creatures) {
    return ((parseFloat(creatures.sbq.lifeTime) + parseFloat(creatures.earle.lifeTime) + parseFloat(creatures.titan.lifeTime)) / 3.0).toFixed(0);
}

export function buildItem(id, name, creatures, damage, legendary, boostDamage, wSpec, extraDamage, additionalDamages, resultDamage) {
    return {
        id: id,
        name: name,
        averageTime: getAverageTime(creatures),
        damage: JSON.parse(JSON.stringify(damage)),
        legendary: JSON.parse(JSON.stringify(legendary)),
        boostDamage: JSON.parse(JSON.stringify(boostDamage)),
        wSpec: JSON.parse(JSON.stringify(wSpec)),
        extraDamage: JSON.parse(JSON.stringify(extraDamage)),
        additionalDamages: JSON.parse(JSON.stringify(additionalDamages)),
        creatures: JSON.parse(JSON.stringify(creatures)),
        resultDamage: JSON.parse(JSON.stringify(resultDamage)),
    }
};