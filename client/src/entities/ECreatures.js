import { millisToTime } from '../helpers/Time';
import CreatureDataProvider from '../creature/CreatureDataProvider';


export function getAverageTimeMillis(creatures) {
    const sum = parseInt(creatures.creature1.lifeTime) + parseInt(creatures.creature2.lifeTime)
     + parseInt(creatures.creature3.lifeTime) + parseInt(creatures.creature4.lifeTime);
    if (sum === 0) {
        return 0;
    }
    const result = parseInt(sum / 4.0);
    return (result) ? result : Infinity;
}

export function getAverageTime(creatures) {
    return millisToTime(getAverageTimeMillis(creatures));
}

export function getCreatureTime(creature) {
    return millisToTime(creature.lifeTime);
}

/*
sbq: {
    gameId: "003e2720", // ? 00043c6f, 003e2720, 00043c75
    radImmunePerk: "000a2775",
    reductionSpell: "004869f8",
    reductionPerk: "00470daa",
    race: "00019d95",
    bodyData: "00017dd5",
},

earle: {
    gameId: "0059e02f", // ?
    radImmunePerk: "000a2775",
    reductionPerk: "0057a663",
    race: "00547992",
    bodyData: "0055aec9",
},

titan: {
    gameId: "00661ebf", // ?
    radImmunePerk: "000a2775",
    reductionPerk: "0067d4be",
    reductionSpell: "0066dbcd",
    race: "00656cd6",
    bodyData: "00656cd4",
}
*/

export function getDummy(creature) {
    const dummy = buildCreature(creature.name, creature.level, creature.fieldName);
    dummy.h = 1000000000000;
    dummy.curBody = creature.curBody;
    dummy.headShot = creature.headShot;
    dummy.bodyShot = creature.bodyShot;
    dummy.averageShot = creature.averageShot;
    dummy.damageReduction = creature.damageReduction;
    dummy.damageReductionOnlyNotBleeding = creature.damageReductionOnlyNotBleeding;
    return dummy;
}

function buildDefCreature(name, fieldName) {
    return {
        name: name,
        fieldName: fieldName,
        capName: "",
        b: 1.0,
        e: 1.0,
        f: 1.0,
        p: 1.0,
        c: 1.0,
        r: 1.0,
        h: 100,
        damageReduction: 0.0,
        damageReductionOnlyNotBleeding: false,
        headShot: 1,
        bodyShot: 1,
        averageShot: 1,
        curBody: "",
        defBody: "", // "normal", "scorched", "glowing"
        bodyParts: {},
        tags: [],
        level: 1,
        immuneToPoison: false,
        immuneToRadiation: false,

        damageToCreature: 0,
        totalDamage: 0.0,
        normalDamage: 0.0,
        headShotDamage: 0.0,
        headExpShotDamage: 0.0,
        critNormalDamage: 0.0,
        critHeadNormalDamage: 0.0,
        explosiveDamage: 0.0,
        critExplosiveDamage: 0.0,
        critExplosiveHeadDamage: 0.0,
        averageHit: 0.0,
        maxHit: 0.0,
        sneak: 0,
        crit: 0,
        dps: 0.0,
        ammo: Infinity,
        reloads: 0.0,
        reloadsTime: 0.0,
        lifeTime: Infinity,
    };
}

export function getCreatureByName(creatures, name) {
    for(const fieldName in creatures) {
        const creature = creatures[fieldName];
        if (creature.name === name) {
            return creature;
        }
    }
    return null;
}

export function defaultCreatures() {
    return {
        creature1: buildCreature("scorchbeastqueen", "Max", "creature1"),
        creature2: buildCreature("wendigocolossus", "Max", "creature2"),
        creature3: buildCreature("ultraciteabomination", "Max", "creature3"),
        creature4: buildCreature("stormboss", "Max", "creature4"),
    };
}

export function defaultCreaturesAlt() {
    return {
        creature1: buildCreature("scorchbeastqueen(alt)", "Max", "creature1"),
        creature2: buildCreature("wendigocolossus(alt)", "Max", "creature2"),
        creature3: buildCreature("ultraciteabomination(alt)", "Max", "creature3"),
        creature4: buildCreature("stormboss", "Max", "creature4"),
    };
}

export function buildCreatureNames(creatures) {
    return {
        creature1: [creatures.creature1.name, creatures.creature1.level, creatures.creature1.tags, creatures.creature1.curBody],
        creature2: [creatures.creature2.name, creatures.creature2.level, creatures.creature2.tags, creatures.creature2.curBody],
        creature3: [creatures.creature3.name, creatures.creature3.level, creatures.creature3.tags, creatures.creature3.curBody],
        creature4: [creatures.creature4.name, creatures.creature4.level, creatures.creature4.tags, creatures.creature4.curBody],
    }
}

export function buildCreature(name, level, fieldName) {
    const creature = buildDefCreature(name, fieldName);
    if (level === 'Max') {
        level = CreatureDataProvider.getMaxLevel(name);
    } else {
        level = parseInt(level);
    }
    const result = CreatureDataProvider.getCreatureParametersByName(name, level);
    creature.name = name;
    creature.capName = CreatureDataProvider.capitalizeCreatureName(name);
    if (creature.name.includes("scorch")) {
        creature.defBody = "scorched";
    } else if (creature.name.includes("glow")) {
        creature.defBody = "glowing";
    } else {
        creature.defBody = "normal";
    }
    creature.curBody = creature.defBody;
    creature.level = level;
    creature.tags = result.tags;
    creature.headShot = result.headMult;
    creature.bodyShot = result.normalMult;
    creature.averageShot = parseFloat(result.averageMult.toFixed(2));
    creature.damageReduction = result.reduction;
    creature.immuneToPoison = result.immuneToPoison;
    creature.immuneToRadiation = result.immuneToRad;
    creature.damageReductions = result.reductions;
    creature.damageReductionOnlyNotBleeding = result.reductionOnlyNotBleeding;
    creature.bodyParts = result.body;
    creature.bodyParts.average = {name: 'Average', damage_mult: creature.averageShot};
    if (result.physical) {
        creature.b = result.physical;
        creature.e = result.energy;
        creature.f = result.fire;
        creature.p = result.poison;
        creature.c = result.cold;
        creature.r = result.radiation;
        creature.h = result.health;
    }
    return creature;
}