// TODO: Convert to creature and weapon classes this file: creature.takeDamage(weapon.shoot());
export function calcDamage(damage, boost, legendary, wSpec, creatures, extraDamage, additionalDamage) {
    const bdBoost = getBDBoost(boost, legendary, additionalDamage, wSpec);
    const sneak = calcSneak(damage, boost, legendary, additionalDamage);
    const crit = calcCrit(damage, boost, additionalDamage);

    const tdBoost = getTDBoost(boost, additionalDamage);
    const [exp, expT, bExp, eExp] = getExplosives(damage, boost, legendary, bdBoost, tdBoost);
    const bExpCrit = crit[0] * exp;
    const eExpCrit = crit[1] * exp;
    const bSneak = (extraDamage.useSneak) ? sneak[0] : 0.0;
    const eSneak = (extraDamage.useSneak) ? sneak[1] : 0.0;
    const fSneak = (extraDamage.useSneak) ? sneak[2] : 0.0;
    const pSneak = (extraDamage.useSneak) ? sneak[3] : 0.0;
    const cSneak = (extraDamage.useSneak) ? sneak[4] : 0.0;
    const rSneak = (extraDamage.useSneak) ? sneak[5] : 0.0;
    const bDamage = (damage.ballistic.used_damage * bdBoost[0] + damage.ballistic.used_mod_damage + bSneak) * tdBoost;
    const eDamage = (damage.energy.used_damage * bdBoost[1] + damage.energy.used_mod_damage + eSneak) * tdBoost;
    const fDamage = (damage.fire.used_damage * bdBoost[2] + damage.fire.used_mod_damage + fSneak) * tdBoost;
    const pDamage = (damage.poison.used_damage * bdBoost[3] + damage.poison.used_mod_damage + pSneak) * tdBoost;
    const cDamage = (damage.cold.used_damage * bdBoost[4] + damage.cold.used_mod_damage + cSneak) * tdBoost;
    const rDamage = (damage.rad.used_damage * bdBoost[5] + damage.rad.used_mod_damage + rSneak) * tdBoost;
    let shots = wSpec.shot_size;

    if (legendary.two_shot.is_used) {
        shots *= 2;
    }
    const tDamage = bDamage / shots + eDamage / shots + fDamage / shots + pDamage / shots + cDamage / shots + rDamage / shots + bExp + eExp;
    const displayedCrit = tDamage + crit[0] / shots + crit[1] / shots + crit[2] / shots + crit[3] / shots + crit[4] / shots + crit[5] / shots + bExpCrit + eExpCrit;
    const displayedSneak = sneak.reduce((a, b) => a + b);
    const armors = aa_cards(boost, legendary, wSpec.aa);
    const fireRate = wSpec.fire_rate * ((legendary.rapid.is_used) ? (1 + legendary.rapid.value / 100.0) : 1.0);
    const ammoCapacity = wSpec.ammo_capacity * ((legendary.quad.is_used) ? (1 + legendary.quad.value / 100.0) : 1.0);
    const result = {
        bDamage: bDamage,
        eDamage: eDamage,
        fDamage: fDamage,
        pDamage: pDamage,
        cDamage: cDamage,
        rDamage: rDamage,
        tDamage: tDamage,
        displayedCrit: displayedCrit,
        bSneak: sneak[0],
        eSneak: sneak[1],
        fSneak: sneak[2],
        pSneak: sneak[3],
        cSneak: sneak[4],
        rSneak: sneak[5],
        displayedSneak: displayedSneak,
        bCrit: crit[0],
        eCrit: crit[1],
        fCrit: crit[2],
        pCrit: crit[3],
        cCrit: crit[4],
        rCrit: crit[5],
        bExpDamage: bExp,
        eExpDamage: eExp,
        bExpCrit: bExpCrit,
        eExpCrit: eExpCrit,
        explosive: expT * 100.0,
        bAA: armors[0] / 100.0,
        eAA: armors[1] / 100.0,
        fAA: armors[2] / 100.0,
        pAA: armors[3] / 100.0,
        cAA: armors[4] / 100.0,
        rAA: armors[5] / 100.0,
        shotSize: shots,
        reloadTime: wSpec.reload_time,
        fireRate: fireRate,
        ammoCapacity: ammoCapacity,
        weaponName: '', // Obsolete
    };
    calcLives(result, damage, extraDamage, boost, legendary, creatures, additionalDamage, bdBoost, tdBoost);
    return result;
}

function getExplosives(damage, boost, legendary, bdBoost, tdBoost, additionalBoost=0.0) {
    const bBoost = bdBoost[0] + additionalBoost;
    const eBoost = bdBoost[1] + additionalBoost;
    const exp = ((legendary.explosive.is_used) ? legendary.explosive.value : boost.explosive.displayed_value) / 100.0;
    const expT = exp + exp * boost.demolition_expert.displayed_value / 100.0;
    let bDamage = damage.ballistic.used_damage * bBoost + damage.ballistic.used_mod_damage;
    let eDamage = damage.energy.used_damage * eBoost + damage.energy.used_mod_damage;
    const tenderizer = (boost.tenderizer.displayed_value > 0) ? (1 + boost.tenderizer.displayed_value / 100.0) : 1.0;

    // does TOFT / Executioner work with explosive?
    const bExp = bDamage * tdBoost * expT * tenderizer;
    const eExp = eDamage * tdBoost * expT * tenderizer;

    return [exp, expT, bExp, eExp];
}

export function calcLives(resultDamage, damage, extraDamage, boost, legendary, creatures, additionalDamage, bdBoost, tdBoost) {
    const aa = [resultDamage.bAA, resultDamage.eAA, resultDamage.fAA, resultDamage.pAA, resultDamage.cAA, resultDamage.rAA];
    const expAA = [resultDamage.bAA, resultDamage.eAA];
    const cs = [creatures.sbq, creatures.earle, creatures.titan, creatures.creature];

    let headMults = [1.0, 1.0, 1.0, 1.0];
    if (extraDamage.useHead) {
        const sbqHead = (creatures.sbq.headShot - 1) / extraDamage.headFreq + 1;
        const earleHead = (creatures.earle.headShot - 1) / extraDamage.headFreq + 1;
        const titanHead = (creatures.titan.headShot - 1) / extraDamage.headFreq + 1;
        const creatureHead = (creatures.creature.headShot - 1) / extraDamage.headFreq + 1;
        headMults = [sbqHead, earleHead, titanHead, creatureHead];
    }
    let damageToCreature = (additionalDamage.damageToCreature.is_used) ? (additionalDamage.damageToCreature.value / 100.0) : 0.0;
    damageToCreature += (boost.glow_sight.displayed_value / 100.0);
    const executionerMult = 1 + legendary.executioner.value / 100.0;

    for (let c = 0; c < cs.length; c++) {
        let creature = cs[c];
        let creatureDamage = (creature.damageToCreature) ? damageToCreature : 0.0;
        const damages = [resultDamage.bDamage + creatureDamage * damage.ballistic.used_damage,
                         resultDamage.eDamage + creatureDamage * damage.energy.used_damage,
                         resultDamage.fDamage + creatureDamage * damage.fire.used_damage,
                         resultDamage.pDamage + creatureDamage * damage.poison.used_damage,
                         resultDamage.cDamage + creatureDamage * damage.cold.used_damage,
                         resultDamage.rDamage + creatureDamage * damage.rad.used_damage];
        const [exp, expT, bExp, eExp] = getExplosives(damage, boost, legendary, bdBoost, tdBoost, creatureDamage);
        const expDamages = [bExp, eExp];
        const critDamages = getCritDamages(damages, resultDamage, extraDamage);
        const critExpDamages = getCritExpDamages(expDamages, resultDamage, extraDamage);

        // Executioner part
        const execDamages = [(resultDamage.bDamage + creatureDamage * damage.ballistic.used_damage) * executionerMult,
                            (resultDamage.eDamage + creatureDamage * damage.energy.used_damage) * executionerMult,
                            (resultDamage.fDamage + creatureDamage * damage.fire.used_damage) * executionerMult,
                            (resultDamage.pDamage + creatureDamage * damage.poison.used_damage) * executionerMult,
                            (resultDamage.cDamage + creatureDamage * damage.cold.used_damage) * executionerMult,
                            (resultDamage.rDamage + creatureDamage * damage.rad.used_damage) * executionerMult];
        const execExp = [bExp * executionerMult, eExp * executionerMult];
        const execCrit = getCritDamages(execDamages, resultDamage, extraDamage);
        const execCritExp = getCritExpDamages(execExp, resultDamage, extraDamage);

        let armors = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
        let expArmors = [creature.b, creature.e];
        let health = creature.h;
        let health04 = creature.h * 0.4;
        let fireTime = 10 / resultDamage.fireRate;
        let shotsSec = resultDamage.fireRate / 10;
        let lifeTime = 0.0;
        let i = 0;
        let ammo = 0;
        let magazine = resultDamage.ammoCapacity;
        let curMagazine = 0;
        let reloadTime = resultDamage.reloadTime;
        let red = 1 - creature.damageReduction;
        let reloads = 0;
        let totalReload = 0;
        let [shotDamage, normalDamage, expDamage] = [0, 0, 0];
        let [critShotDamage, critNormalDamage, critExpDamage] = [0, 0, 0];
        let critMeter = 0;
        const shotSize = (legendary.two_shot.is_used) ? parseInt((resultDamage.shotSize / 2).toFixed(0)) : resultDamage.shotSize;
        const simLimit = 5000;
        while (health > 0) {
            i += 1;
            ammo += 1;
            critMeter += 1;
            if (curMagazine === magazine) {
                lifeTime += reloadTime;
                totalReload += reloadTime;
                reloads += 1;
                curMagazine = 0;
            }
            curMagazine += 1;

            if (health <= health04 && legendary.executioner.is_used) {
                [shotDamage, normalDamage, expDamage] = buildDamage(execDamages, armors, aa, execExp, expArmors, expAA, headMults[c], red, shotSize);
                [critShotDamage, critNormalDamage, critExpDamage] = buildDamage(execCrit, armors, aa, execCritExp, expArmors, expAA, headMults[c], red, shotSize);
            } else {
                [shotDamage, normalDamage, expDamage] = buildDamage(damages, armors, aa, expDamages, expArmors, expAA, headMults[c], red, shotSize);
                [critShotDamage, critNormalDamage, critExpDamage] = buildDamage(critDamages, armors, aa, critExpDamages, expArmors, expAA, headMults[c], red, shotSize);
            }

            if (legendary.two_shot.is_used) {
                shotDamage = normalDamage + expDamage * 2;
                critShotDamage = normalDamage / 2.0 + critNormalDamage / 2.0 + expDamage + critExpDamage;
            }

            if (critMeter === extraDamage.critFreq) {
                critMeter = 0;
                shotDamage = critShotDamage;
            }

            // Near the same result, we replace simulation by formulas if a number of iterations exceeds limit.
            if (i > simLimit) {
                if (legendary.executioner.is_used) {
                    [shotDamage, normalDamage, expDamage] = buildDamage(execDamages, armors, aa, execExp, expArmors, expAA, headMults[c], red, shotSize);
                    [critShotDamage, critNormalDamage, critExpDamage] = buildDamage(execCrit, armors, aa, execCritExp, expArmors, expAA, headMults[c], red, shotSize);
                    let execDamage = mergeDamageCrit(shotDamage, critShotDamage, extraDamage.critFreq);

                    [shotDamage, normalDamage, expDamage] = buildDamage(damages, armors, aa, expDamages, expArmors, expAA, headMults[c], red, shotSize);
                    [critShotDamage, critNormalDamage, critExpDamage] = buildDamage(critDamages, armors, aa, critExpDamages, expArmors, expAA, headMults[c], red, shotSize);
                    shotDamage = mergeDamageCrit(shotDamage, critShotDamage, extraDamage.critFreq);
                    if (legendary.two_shot.is_used) {
                        shotDamage = normalDamage + expDamage * 2;
                        critShotDamage = normalDamage / 2.0 + critNormalDamage / 2.0 + expDamage + critExpDamage;
                    }

                    ammo = parseInt(creature.h * 0.6 / shotDamage) + parseInt(creature.h * 0.4 / execDamage);
                    reloads = parseInt(ammo / magazine);
                    totalReload = reloads * reloadTime;
                    lifeTime = ammo * fireTime + totalReload;
                    break;
                }
                ammo = parseInt(creature.h / shotDamage);
                reloads = parseInt(ammo / magazine);
                totalReload = reloads * reloadTime;
                lifeTime = ammo * fireTime + totalReload;
                break;
            }
            health -= shotDamage;
            lifeTime += fireTime;
        }
        creature.lifeTime = ((lifeTime - fireTime) * 1000).toFixed(0);
        creature.ammo = ammo;
        creature.reloadsTime = totalReload;
        creature.reloads = reloads;
        creature.shotDamage = shotDamage;
        creature.normalDamage = normalDamage;
        creature.critNormalDamage = critNormalDamage;
        creature.critExplosiveDamage = critExpDamage;
        creature.explosiveDamage = expDamage;
        creature.dps = shotDamage * shotsSec;
    }
}

function buildDamage(damages, armors, aa, expDamages, expArmors, expAA, headMult, red, shotSize) {
    let result = [];
    let expResult = [];
    for (let i = 0; i < damages.length; i++) {
        result.push(causeSDamage(armors[i], damages[i], aa[i]) * headMult);
    }
    for (let i = 0; i < expDamages.length; i++) {
        expResult.push(causeSDamage(expArmors[i], expDamages[i], expAA[i]) * shotSize)
    }
    let normalDamage = result.reduce((a, b) => a + b);
    let expDamage = expResult.reduce((a, b) => a + b);
    normalDamage = normalDamage * red;
    expDamage = expDamage * red;
    normalDamage = (normalDamage < 1.0) ? 1.0 : normalDamage;

    // Should we increase explosive to 1 if it is less than 1?
    expDamage = (expDamage < 1.0 && expDamage > 0.0) ? 1.0 : expDamage;
    const shotDamage = normalDamage + expDamage;
    return [shotDamage, normalDamage, expDamage];
}

function getTDBoost(boost, additionalDamage) {
    let result = 1.0;
    result = boost.tenderizer.displayed_value > 0 ? (1 + boost.tenderizer.displayed_value / 100.0) : result;
    result *= boost.toft.displayed_value > 0 ? (1 + boost.toft.displayed_value / 100.0) : 1.0;
    result *= (additionalDamage.tdb.is_used && additionalDamage.tdb.value > 0) ? ( 1 + additionalDamage.tdb.value / 100.0) : 1.0;
    return result;
}

function calcSneak(damage, boost, legendary, additionalDamage) {
    let sneak = (boost.covert_operative.displayed_value > 0) ? (boost.covert_operative.displayed_value - 1.0) : 1.0;
    const sandman = boost.mister_sandman.displayed_value / 100.0;
    const ninja = boost.ninja.displayed_value / 100.0;
    const follow = boost.follow_through.displayed_value / 100.0;
    const add = (additionalDamage.sneak.is_used) ? additionalDamage.sneak.value / 100.0 : 0.0;
    const total = sandman + ninja + follow + add;
    const bSneak = damage.ballistic.used_damage * sneak + damage.ballistic.used_damage * total;
    const eSneak = damage.energy.used_damage * sneak + damage.energy.used_damage * total;
    const fSneak = damage.fire.used_damage * sneak + damage.fire.used_damage * total;
    const pSneak = damage.poison.used_damage * sneak + damage.poison.used_damage * total;
    const cSneak = damage.cold.used_damage * sneak + damage.cold.used_damage * total;
    const rSneak = damage.rad.used_damage * sneak + damage.rad.used_damage * total;
    return [bSneak, eSneak, fSneak, pSneak, cSneak, rSneak];
}

export function millisToTime(value) {
    const t = [3600000, 60000, 1000];
    let time = [];
    for (let i = 0; i < t.length; i++) {
        let r = value % t[i];
        let q = (value - r) / t[i];
        time.push(q);
        value = r;
    }
    let strTime = "";
    strTime += (time[0] < 10) ? ("0" + time[0] + ":") : time[0] + ":";
    strTime += (time[1] < 10) ? ("0" + time[1] + ":") : time[1] + ":";
    strTime += (time[2] < 10) ? ("0" + time[2] + ":") : time[2] + ":";
    if (value < 10) {
        strTime += ( "00" + value);
    } else if (value < 100) {
        strTime += ("0" + value);
    } else {
        strTime += value;
    }
    return strTime;
}

function calcCrit(damage, boost, additionalDamage) {
    let crit = (boost.better_criticals.displayed_value + 100) / 100.0;
    crit += (additionalDamage.crit.is_used) ? (additionalDamage.crit.value / 100.0) : 0.0;
    const bCrit = damage.ballistic.used_damage * crit;
    const eCrit = damage.energy.used_damage * crit;
    const fCrit = damage.fire.used_damage * crit;
    const pCrit = damage.poison.used_damage * crit;
    const cCrit = damage.cold.used_damage * crit;
    const rCrit = damage.rad.used_damage * crit;
    return [bCrit, eCrit, fCrit, pCrit, cCrit, rCrit];
}

function causeSDamage(armor, dValue, aa=0.0) {
    let rArmor = armor * (1 - aa);
    if (rArmor === 0) {
        rArmor = 1;
    }
    let coef = (0.15 * dValue / rArmor) ** 0.365;
    coef = (coef > 0.99) ? 0.99 : coef;
    coef = (coef < 0.01) ? 0.01 : coef;
    return  coef * dValue;
}

function getCritDamages(damages, resultDamage, extraDamage) {
    return [damages[0] + ((extraDamage.useCrit) ? resultDamage.bCrit : 0.0),
            damages[1] + ((extraDamage.useCrit) ? resultDamage.eCrit : 0.0),
            damages[2] + ((extraDamage.useCrit) ? resultDamage.fCrit : 0.0),
            damages[3] + ((extraDamage.useCrit) ? resultDamage.pCrit : 0.0),
            damages[4] + ((extraDamage.useCrit) ? resultDamage.cCrit : 0.0),
            damages[5] + ((extraDamage.useCrit) ? resultDamage.rCrit : 0.0),];
}

function getCritExpDamages(damages, resultDamage, extraDamage) {
    return [damages[0] + ((extraDamage.useCrit) ? resultDamage.bExpCrit : 0.0),
            damages[1] + ((extraDamage.useCrit) ? resultDamage.eExpCrit : 0.0)];
}

// armors = [b, e, f, p, c, r]
export function graphDamage(armors, resultDamage, extraDamage, reduction, headMult) {
    const damages = [resultDamage.bDamage, resultDamage.eDamage, resultDamage.fDamage, resultDamage.pDamage, resultDamage.cDamage, resultDamage.rDamage,]
    const expDamages = [resultDamage.bExpDamage, resultDamage.eExpDamage];
    const critDamages = getCritDamages(damages, resultDamage, extraDamage);
    const expCritDamages = getCritExpDamages(expDamages, resultDamage, extraDamage);
    const aa = [resultDamage.bAA, resultDamage.eAA, resultDamage.fAA, resultDamage.pAA, resultDamage.cAA, resultDamage.rAA];
    const expArmors = [armors[0], armors[1]];
    const expAA = [resultDamage.bAA, resultDamage.eAA];
    const headShot = (extraDamage.useHead) ? ((headMult - 1) / extraDamage.headFreq + 1) : 1.0;
    let red = 1 - reduction;
    const [shotDamage, normalDamage, expDamage] = buildDamage(damages, armors, aa, expDamages, expArmors, expAA, headShot, red, resultDamage.shotSize);
    const [critShotDamage, critNormalDamage, critExpDamage] = buildDamage(critDamages, armors, aa, expCritDamages, expArmors, expAA, headShot, red, resultDamage.shotSize);
    return mergeDamageCrit(shotDamage, critShotDamage, extraDamage.critFreq);
}

function mergeDamageCrit(damage, critDamage, frequency) {
    return (damage * (frequency - 1) + critDamage) / frequency;
}

function getBDBoost(boost, legendary, additionalDamage, wSpec) {
    let result = boost.wcdamager + boost.adrenalreactionr + boost.rager;
    result += boost.bloody_mess.displayed_value;
    result += boost.adrenaline.displayed_value;
    result += boost.gun_foo.displayed_value;
    result += (legendary.junkie.is_used) ? legendary.junkie.value : 0.0;
    result += (legendary.aristocrat.is_used) ? legendary.aristocrat.value : 0.0;
    result += (legendary.bloodied.is_used) ? legendary.bloodied.value : 0.0;
    result += (legendary.berserker.is_used) ? legendary.berserker.value : 0.0;
    result += (legendary.two_shot.is_used) ? legendary.two_shot.value : 0.0;
    result += (legendary.mutant.is_used) ? legendary.mutant.value : 0.0;
    result += (legendary.hitman.is_used) ? legendary.hitman.value : 0.0;
    result += (additionalDamage.bdb.is_used) ? additionalDamage.bdb.value : 0.0;
    const strengthBoost = wSpec.strength_boost / 100.0;
    const melee = (additionalDamage.strength.is_used) ? (additionalDamage.strength.value * strengthBoost) : 0.0;
    result = 1 + result / 100.0 + melee;
    const bResult = (additionalDamage.ballisticBDB.is_used) ? (additionalDamage.ballisticBDB.value / 100.0) : 0.0;
    const eResult = (additionalDamage.energyBDB.is_used) ? (additionalDamage.energyBDB.value / 100.0) : 0.0;
    const fResult = (additionalDamage.fireBDB.is_used) ? (additionalDamage.fireBDB.value / 100.0) : 0.0;
    const pResult = (additionalDamage.poisonBDB.is_used) ? (additionalDamage.poisonBDB.value / 100.0) : 0.0;
    const cResult = (additionalDamage.coldBDB.is_used) ? (additionalDamage.coldBDB.value / 100.0) : 0.0;
    const rResult = (additionalDamage.radBDB.is_used) ? (additionalDamage.radBDB.value / 100.0) : 0.0;
    let science = boost.science.displayed_value / 100.0;
    return [result + bResult, result + science + eResult, result + fResult, result + pResult, result + cResult, result + rResult];
}

// Applies all possible Anti Armor effects
export function aa_cards(boostDamage, legendary=null, weaponAA=0.0) {
    let aa = 1.0
    if (legendary != null) {
        aa = 1 - ((legendary.antiarmor.is_used) ? legendary.antiarmor.value / 100.0 : 0.0);
    }
    aa -= (weaponAA / 100.0);
    aa = (aa < 0) ? 0 : aa;
    const syringer = 1 - boostDamage.syringer.displayed_value / 100.0;
    const incisor = 1 - boostDamage.incisor.displayed_value / 100.0;
    const bow_before_me = 1 - boostDamage.bow_before_me.displayed_value / 100.0;
    const exterminator = 1 - boostDamage.exterminator.displayed_value / 100.0;
    const tank_killer = 1 - boostDamage.tank_killer.displayed_value / 100.0;
    const stabilized = 1 - boostDamage.stabilized.displayed_value / 100.0;
    const result1 = (100 * (1 - syringer * incisor * bow_before_me * exterminator * tank_killer * stabilized * aa));
    const result2 = (100 * (1 - incisor * bow_before_me * exterminator * tank_killer * stabilized * aa));
    const resultAll = [result1, result2, result2, result2, result2, result2];
    return resultAll;
}


