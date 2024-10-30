import { millisToTime } from '../helpers/Time';


export function getAverageTimeMillis(creatures) {
    const result = parseInt(((parseFloat(creatures.sbq.lifeTime) + parseFloat(creatures.earle.lifeTime) + parseFloat(creatures.titan.lifeTime)) / 3.0));
    return (result) ? result : Infinity;
}

export function getAverageTime(creatures) {
    return millisToTime(getAverageTimeMillis(creatures));
}

export function getDummy() {
    return {
        rank: "dummy",
        name: "Dummy",
        b: 1.0,
        e: 1.0,
        f: 1.0,
        p: 1.0,
        c: 1.0,
        r: 1.0,
        h: 1000000000000,
        sneak: 0,
        crit: 0,
        damageReduction: 0.0,
        headShot: 2.0,
        totalDamage: 0.0,
        normalDamage: 0.0,
        headShotDamage: 0.0,
        headExpShotDamage: 0.0,
        critNormalDamage: 0.0,
        critHeadNormalDamage: 0.0,
        explosiveDamage: 0.0,
        critExplosiveDamage: 0.0,
        critExplosiveHeadDamage: 0.0,
        userBody: "",
        body: "", // "scorched", "glowing"
        type: "",
        dps: 0.0,
        ammo: 0.0,
        reloads: 0.0,
        reloadsTime: 0.0,
        lifeTime: Infinity,
        level: 1,
        damageToCreature: 0,
    };
}

export function defaultCreatures() {
    return {
        creature: {
            rank: "creature",
            name: "Creature",
            b: 1.0,
            e: 1.0,
            f: 1.0,
            p: 1.0,
            c: 1.0,
            r: 1.0,
            h: 100,
            sneak: 0,
            crit: 0,
            damageReduction: 0.0,
            headShot: 2.0,
            totalDamage: 0.0,
            normalDamage: 0.0,
            headShotDamage: 0.0,
            headExpShotDamage: 0.0,
            critNormalDamage: 0.0,
            critHeadNormalDamage: 0.0,
            explosiveDamage: 0.0,
            critExplosiveDamage: 0.0,
            critExplosiveHeadDamage: 0.0,
            userBody: "",
            body: "", // "scorched", "glowing"
            type: "",
            dps: 0.0,
            ammo: 0.0,
            reloads: 0.0,
            reloadsTime: 0.0,
            lifeTime: Infinity,
            level: 1,
            damageToCreature: 0,
        },

        sbq: {
            rank: "boss",
            name: "Scorchbeast Queen",
            b: 300.0,
            e: 300.0,
            f: 300.0,
            p: 300.0,
            c: 300.0,
            r: Infinity,
            h: 32767,
            sneak: 0,
            crit: 0,
            damageReduction: 0.7,
            userBody: "",
            body: "scorched",
            type: "scorchbeast",
            headShot: 1.5,
            totalDamage: 0.0,
            normalDamage: 0.0,
            headShotDamage: 0.0,
            headExpShotDamage: 0.0,
            critNormalDamage: 0.0,
            critHeadNormalDamage: 0.0,
            explosiveDamage: 0.0,
            critExplosiveDamage: 0.0,
            critExplosiveHeadDamage: 0.0,
            dps: 0.0,
            ammo: 0.0,
            reloads: 0.0,
            reloadsTime: 0.0,
            lifeTime: Infinity,
            level: "Max",
            damageToCreature: 0,
        },

        earle: {
            rank: "boss",
            name: "Earle",
            b: 400.0,
            e: 400.0,
            f: 400.0,
            p: 400.0,
            c: 400.0,
            r: Infinity,
            h: 30000,
            sneak: 0,
            crit: 0,
            damageReduction: 0.8,
            headShot: 2.0,
            totalDamage: 0.0,
            userBody: "",
            body: "normal",
            type: "cryptid",
            normalDamage: 0.0,
            headShotDamage: 0.0,
            headExpShotDamage: 0.0,
            critNormalDamage: 0.0,
            critHeadNormalDamage: 0.0,
            explosiveDamage: 0.0,
            critExplosiveDamage: 0.0,
            critExplosiveHeadDamage: 0.0,
            dps: 0.0,
            ammo: 0.0,
            reloads: 0.0,
            reloadsTime: 0.0,
            lifeTime: Infinity,
            level: "Max",
            damageToCreature: 0,
        },

        titan: {
            rank: "boss",
            name: "Ultracite Titan",
            b: 400.0,
            e: 400.0,
            f: 350.0,
            p: 400.0,
            c: 400.0,
            r: Infinity,
            h: 31000,
            sneak: 0,
            crit: 0,
            damageReduction: 0.7,
            headShot: 1.3,
            totalDamage: 0.0,
            normalDamage: 0.0,
            headShotDamage: 0.0,
            headExpShotDamage: 0.0,
            critNormalDamage: 0.0,
            critHeadNormalDamage: 0.0,
            explosiveDamage: 0.0,
            critExplosiveDamage: 0.0,
            critExplosiveHeadDamage: 0.0,
            userBody: "",
            body: "normal",
            dps: 0.0,
            ammo: 0.0,
            reloads: 0.0,
            reloadsTime: 0.0,
            lifeTime: Infinity,
            level: "Max",
            damageToCreature: 0,
        }
    };
}