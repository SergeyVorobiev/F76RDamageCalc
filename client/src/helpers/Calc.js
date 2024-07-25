import { intersects } from "./Array";
import { creatureTypes } from "../creature/CreatureTypes";


// TODO: Convert to creature and weapon classes this file: creature.takeDamage(weapon.shoot());
export function calcDamage(damage, boost, legendary, wSpec, creatures, extraDamage, additionalDamage, stuffBoost, playerStats) {
    const strength = calcStrength(playerStats, stuffBoost, wSpec);
    const bdBoost = getBDBoost(boost, legendary, additionalDamage, wSpec, stuffBoost, strength);
    const sneak = calcSneak(damage, boost, legendary, additionalDamage, wSpec, stuffBoost);
    const crit = calcCrit(damage, boost, additionalDamage, wSpec, stuffBoost);
    const tdBoost = getTDBoost(boost, additionalDamage);
    const [exp, expT, bExp, eExp] = getExplosives(damage, boost, legendary, bdBoost, tdBoost, wSpec);
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
    const armors = aa_cards(boost, wSpec, stuffBoost, legendary, wSpec.aa, wSpec.type);

    const ammoCapacity = calcAmmo(wSpec, boost, legendary, stuffBoost);
    const reloadTime = calcReload(additionalDamage, boost, wSpec, stuffBoost);
    const fireRate = calcFireRate(wSpec, boost, legendary);
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
        resultArmor: new Map(),
        shotSize: shots,
        reloadTime: reloadTime,
        fireRate: fireRate,
        ammoCapacity: ammoCapacity,
        accuracy: wSpec.accuracy,
        strength: strength,
        weaponName: '', // Obsolete
    };
    calcLives(result, damage, extraDamage, boost, legendary, creatures, additionalDamage, bdBoost, tdBoost, wSpec, stuffBoost);
    return result;
}

function calcStrength(playerStats, stuffBoost, wSpec) {
    let strength = playerStats.strength.value;
    strength += collectStuffBoost(stuffBoost.weapon, wSpec, "Strength")
    if (strength < 1) {
        strength = 1
    }
    return strength;
}

// Is it additive or multiplicative? Multiplicative is used
function calcReload(additionalDamage, boost, wSpec, stuffBoost) {
    const swift = ((additionalDamage.swift.is_used) ? (additionalDamage.swift.value / 100.0) : 0.0) * wSpec.reload_time;
    let reloadTime = wSpec.reload_time - swift;
    if (wSpec.type === "Heavy") {
        reloadTime *= (1 - boost.lock_and_load.displayed_value / 100.0);
    } else if (wSpec.type === "Melee") {
        reloadTime *= (1 - boost.martial_artist.displayed_value / 100.0);
    } else if (wSpec.type === "Shotgun") {
        reloadTime *= (1 - boost.scattershot.displayed_value / 100.0);
    } else if (wSpec.type === "Rifle" && wSpec.is_auto) {
        reloadTime *= (1 - boost.ground_pounder.displayed_value / 100.0);
    }
    let mult = 1;
    collectStuffBoost(stuffBoost.weapon, wSpec, "Reload", (value) => mult *= (1 - value / 100.0));
    return reloadTime * mult;
}

function calcFireRate(wSpec, boost, legendary) {
    let fireRate = 0;
    if (wSpec.is_auto) {
        fireRate = wSpec.fire_rate * ((legendary.rapid.is_used) ? (1 + legendary.rapid.value / 100.0) : 1.0);
    } else {
        let attackSpeed = wSpec.anim_action * ((legendary.rapid.is_used) ? (1 - legendary.rapid.value / 100.0) : 1.0);
        if (wSpec.type === "Melee") {
            attackSpeed *= (1 - boost.martial_artist.displayed_value / 100.0);
        }
        fireRate = 10 / attackSpeed;
    }
    return fireRate;
}

function calcAmmo(wSpec, boost, legendary, stuffBoost) {
    let ammo = wSpec.ammo_capacity * ((legendary.quad.is_used) ? (1 + legendary.quad.value / 100.0) : 1.0);
    ammo += (wSpec.ammo_capacity * (collectStuffBoost(stuffBoost.weapon, wSpec, "Ammo") / 100.0));
    if (boost.power_user.is_used) {
        const mult = boost.power_user.displayed_value / 100.0 - 1;
        if (wSpec.tags.split(",").includes("FusionCore")) {
            ammo += (wSpec.ammo_capacity * mult);
        }
    }
    return parseInt(ammo);
}

function getExplosives(damage, boost, legendary, bdBoost, tdBoost, wSpec, additionalBoost=0.0) {
    const bBoost = bdBoost[0] + additionalBoost;
    const eBoost = bdBoost[1] + additionalBoost;
    const exp = ((legendary.explosive.is_used) ? legendary.explosive.value : wSpec.exp) / 100.0;
    const expT = exp + exp * boost.demolition_expert.displayed_value / 100.0;
    let bDamage = damage.ballistic.used_damage * bBoost + damage.ballistic.used_mod_damage;
    let eDamage = damage.energy.used_damage * eBoost + damage.energy.used_mod_damage;
    const tenderizer = (boost.tenderizer.displayed_value > 0) ? (1 + boost.tenderizer.displayed_value / 100.0) : 1.0;

    // does TOFT / Executioner work with explosive?
    const bExp = bDamage * tdBoost * expT * tenderizer;
    const eExp = eDamage * tdBoost * expT * tenderizer;

    return [exp, expT, bExp, eExp];
}

export function calcLives(resultDamage, damage, extraDamage, boost, legendary, creatures, additionalDamage, bdBoost, tdBoost, wSpec, stuffBoost) {
    const cs = [creatures.sbq, creatures.earle, creatures.titan, creatures.creature];

    let headMults = [1.0, 1.0, 1.0, 1.0];
    if (extraDamage.useHead) {
        const sbqHead = (creatures.sbq.headShot - 1) / extraDamage.headFreq + 1;
        const earleHead = (creatures.earle.headShot - 1) / extraDamage.headFreq + 1;
        const titanHead = (creatures.titan.headShot - 1) / extraDamage.headFreq + 1;
        const creatureHead = (creatures.creature.headShot - 1) / extraDamage.headFreq + 1;
        headMults = [sbqHead, earleHead, titanHead, creatureHead];
    }
    const executionerMult = 1 + legendary.executioner.value / 100.0;
    let accuracy = wSpec.accuracy / 100.0;
    if (accuracy < 0.1) {
        accuracy = 0.1
    }
    for (let c = 0; c < cs.length; c++) {
        let aa = [resultDamage.bAA, resultDamage.eAA, resultDamage.fAA, resultDamage.pAA, resultDamage.cAA, resultDamage.rAA];
        let expAA = [resultDamage.bAA, resultDamage.eAA];
        let creature = cs[c];
        if (boost.exterminator.is_used && creatureTypes.insect.has(creature.name)) {
            for (let i = 0; i < aa.length; i++) {
                aa[i] = 1 - ((1 - aa[i]) * (1 - boost.exterminator.displayed_value / 100.0));
            }
            expAA = [aa[0], aa[1]];
        }
        resultDamage.resultArmor.set(creature.name, [creature.b * (1 - aa[0]), creature.e * (1 - aa[1]), creature.f * (1 - aa[2]), creature.p * (1 - aa[3]), creature.c * (1 - aa[4]), creature.r * (1 - aa[5])]);
        let armors = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
        let expArmors = [creature.b, creature.e];
        let creatureDamage = buildCreatureDamage(boost, additionalDamage, wSpec, stuffBoost, creature);
        const damages = [resultDamage.bDamage + creatureDamage * damage.ballistic.used_damage,
                         resultDamage.eDamage + creatureDamage * damage.energy.used_damage,
                         resultDamage.fDamage + creatureDamage * damage.fire.used_damage,
                         resultDamage.pDamage + creatureDamage * damage.poison.used_damage,
                         resultDamage.cDamage + creatureDamage * damage.cold.used_damage,
                         resultDamage.rDamage + creatureDamage * damage.rad.used_damage];
        const [exp, expT, bExp, eExp] = getExplosives(damage, boost, legendary, bdBoost, tdBoost, wSpec, creatureDamage);
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
                    ammo *= (1 / accuracy)
                    ammo = parseInt(ammo)
                    if (magazine === 0) {
                        magazine = 1;
                    }
                    reloads = parseInt(ammo / magazine);
                    totalReload = reloads * reloadTime;
                    lifeTime = ammo * fireTime + totalReload;
                    break;
                } else {
                    ammo = parseInt(creature.h / shotDamage);
                    ammo *= (1 / accuracy)
                    ammo = parseInt(ammo)
                    if (magazine === 0) {
                        magazine = 1;
                    }
                    reloads = parseInt(ammo / magazine);
                    totalReload = reloads * reloadTime;
                    lifeTime = ammo * fireTime + totalReload;
                    break;
                }
            }
            health -= shotDamage * accuracy;
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

function buildCreatureDamage(boost, additionalDamage, wSpec, stuffBoost, creature) {
    let damageToCreature = (additionalDamage.damageToCreature.is_used) ? (additionalDamage.damageToCreature.value / 100.0) : 0.0;
    if (wSpec.cd > 0) {
        if (wSpec.creatureType === "Any") {
            damageToCreature += wSpec.cd / 100.0;
        } else if (wSpec.creatureType === "Scorched" && creature.name === "Scorchbeast Queen") {
            damageToCreature += wSpec.cd / 100.0;
        } else if (wSpec.creatureType === "Wendigo" && creature.name === "Earle") {
            damageToCreature += wSpec.cd / 100.0;
        } else if (wSpec.creatureType === "Abomination" && creature.name === "Ultracite Titan") {
            damageToCreature += wSpec.cd / 100.0;
        } else {

            // User intentionally made a creature 'scorched'
            if (wSpec.creatureType === "Scorched" && creature.body === "scorched") {
                damageToCreature += wSpec.cd / 100.0;
            } else { // Ok may be a creature is 'scorched'
                const creaturesForWeapon = creatureTypes[wSpec.creatureType.toLowerCase()];
                if (creaturesForWeapon) {
                    if (creaturesForWeapon.has(creature.name)) {
                        damageToCreature += wSpec.cd / 100.0;
                    }
                }
            }
        }
    }

    // Glowing
    if (boost.glow_sight.is_used) {
        if (creatureTypes["glowing"].has(creature.name) || creature.body === "glowing") {
            damageToCreature += boost.glow_sight.displayed_value / 100.0;
        }
    }

    stuffBoost.creature.forEach((value, key) => {

        // It is considered to be always unique
        const item = value[0];
        if (item.property === "BDB") {
            let itemNames = [];
            if (item.name) {
                itemNames = item.name.split(",");
            }

            // bosses and then a creature.
            if (creature.name === "Scorchbeast Queen") {
                if (item.type === "scorched" && (!item.name || (item.name && itemNames.includes("scorchbeastqueen")))) {
                    damageToCreature += item.value / 100.0;
                }
            } else if (creature.name === "Earle") {
                if (item.type === "cryptid" && (!item.name || (item.name && itemNames.includes("wendigocolossus")))) {
                    damageToCreature += item.value / 100.0;
                }
            } else if (creature.name === "Ultracite Titan") {
                if (item.type === "cryptid" && (!item.name || (item.name && itemNames.includes("ultraciteabomination")))) {
                    damageToCreature += item.value / 100.0;
                }
            } else {
                if (item.name) {
                    if (itemNames.includes(creature.name)) {
                        damageToCreature += item.value / 100.0;
                    }
                } else if (item.type === "scorched" && creature.body === "scorched") {
                    damageToCreature += item.value / 100.0;
                } else {
                    const creatures = creatureTypes[item.type];
                    if (creatures && creatures.has(creature.name)) {
                        damageToCreature += item.value / 100.0;
                    }
                }
            }
        }
    });
    return damageToCreature;
}

function buildDamage(damages, armors, aa, expDamages, expArmors, expAA, headMult, red, shotSize) {
    let result = [];
    let expResult = [];
    for (let i = 0; i < damages.length; i++) {
        result.push(causeSDamage(armors[i], damages[i], aa[i]));
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
    const shotDamage = normalDamage * headMult + expDamage;
    return [shotDamage, normalDamage, expDamage];
}

function getTDBoost(boost, additionalDamage) {
    let result = 1.0;
    result = boost.tenderizer.displayed_value > 0 ? (1 + boost.tenderizer.displayed_value / 100.0) : result;
    result *= boost.toft.displayed_value > 0 ? (1 + boost.toft.displayed_value / 100.0) : 1.0;
    result *= (additionalDamage.tdb.is_used && additionalDamage.tdb.value > 0) ? ( 1 + additionalDamage.tdb.value / 100.0) : 1.0;
    return result;
}

function calcSneak(damage, boost, legendary, additionalDamage, wSpec, stuffBoost) {
    let sneak = (boost.covert_operative.displayed_value > 0) ? (boost.covert_operative.displayed_value - 1.0) : 1.0;
    const sandman = boost.mister_sandman.displayed_value / 100.0;
    const ninja = (wSpec.type === "Melee") ? boost.ninja.displayed_value / 100.0 : 0.0;
    const follow = boost.follow_through.displayed_value / 100.0;
    const add = (additionalDamage.sneak.is_used) ? additionalDamage.sneak.value / 100.0 : 0.0;
    const weaponSneak = wSpec.sneak / 100.0;
    const stuffSneak = (collectStuffBoost(stuffBoost.weapon, wSpec, "Sneak") / 100.0);
    const total = sandman + ninja + follow + add + weaponSneak + stuffSneak;
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

function calcCrit(damage, boost, additionalDamage, wSpec, stuffBoost) {
    let crit = (boost.better_criticals.displayed_value + 100 + wSpec.crit) / 100.0;
    crit += ((additionalDamage.crit.is_used) ? (additionalDamage.crit.value / 100.0) : 0.0);
    crit += (collectStuffBoost(stuffBoost.weapon, wSpec, "Crit") / 100.0);
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

function getMaxItem(items) {
    if (items.length === 1) {
        return items[0];
    }
    let max = null;
    let maxItem = null;
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (max === null || item.value > max) {
            maxItem = item;
            max = item.value;
        }
    }
    return maxItem;
}

function collectStuffBoost(stuffBoosts, wSpec, property, listener) {
    let result = 0.0;
    stuffBoosts.forEach((value, key) => {
        const maxItem = getMaxItem(value);
        let satisfyNameOrType = true;
        if (maxItem.name) {
            satisfyNameOrType = maxItem.name.split(",").includes(wSpec.defaultName);
        } else if (maxItem.type) {
            satisfyNameOrType = maxItem.type.split(",").includes(wSpec.type);
        }
        let additional = [];
        if (maxItem.tag) {
            additional = maxItem.tag.split(",");
        }
        const tags = wSpec.tags.split(",");
        let satisfyTags = (additional.length > 0) ? intersects(additional, tags) : true;
        if (maxItem.property === property && satisfyTags && satisfyNameOrType) {
            if (listener) {
                listener(maxItem.value);
            } else {
                result += maxItem.value;
            }
        }
    });
    return result;
}

function getDamageFromWeaponCards(boost, wSpec) {
    let result = 0.0;
    if (boost.gladiator.displayed_value > 0 && wSpec.type === "Melee" && wSpec.hand === 1) {
        result += boost.gladiator.displayed_value;
    }
    if (boost.heavy_gunner.displayed_value > 0 && wSpec.type === "Heavy") {
        result += boost.heavy_gunner.displayed_value;
    }
    if (boost.shotgunner.displayed_value > 0 && wSpec.type === "Shotgun") {
        result += boost.shotgunner.displayed_value;
    }
    if (boost.slugger.displayed_value > 0 && wSpec.type === "Melee" && wSpec.hand === 2) {
        result += boost.slugger.displayed_value;
    }
    if (boost.iron_fist.displayed_value > 0 && wSpec.type === "Unarmed") {
        result += boost.iron_fist.displayed_value;
    }
    if (boost.archer.displayed_value > 0 && wSpec.type === "Bow") {
        result += boost.archer.displayed_value;
    }
    if (boost.commando.displayed_value > 0 && wSpec.type === "Rifle" && wSpec.is_auto === 1) {
        result += boost.commando.displayed_value;
    }
    if (boost.rifleman.displayed_value > 0 && wSpec.type === "Rifle" && wSpec.is_auto === 0) {
        result += boost.rifleman.displayed_value;
    }
    if (boost.guerrilla.displayed_value > 0 && wSpec.type === "Pistol" && wSpec.is_auto === 1) {
        result += boost.guerrilla.displayed_value;
    }
    if (boost.gunslinger.displayed_value > 0 && wSpec.type === "Pistol" && wSpec.is_auto === 0) {
        result += boost.gunslinger.displayed_value;
    }
    return result;
}

function getBDBoost(boost, legendary, additionalDamage, wSpec, stuffBoost, strength) {
    let result = getDamageFromWeaponCards(boost, wSpec) + boost.nerd_rage.displayed_value;
    result += collectStuffBoost(stuffBoost.weapon, wSpec, "BDB");
    result += boost.bloody_mess.displayed_value;
    result += boost.adrenaline.displayed_value;
    result += boost.gun_fu.displayed_value;
    result += (legendary.junkie.is_used) ? legendary.junkie.value : 0.0;
    result += (legendary.aristocrat.is_used) ? legendary.aristocrat.value : 0.0;
    result += (legendary.bloodied.is_used) ? legendary.bloodied.value : 0.0;
    result += (legendary.berserker.is_used) ? legendary.berserker.value : 0.0;
    result += (legendary.two_shot.is_used) ? legendary.two_shot.value : 0.0;
    result += (legendary.mutant.is_used) ? legendary.mutant.value : 0.0;
    result += (legendary.hitman.is_used) ? legendary.hitman.value : 0.0;
    result += (additionalDamage.bdb.is_used) ? additionalDamage.bdb.value : 0.0;
    const strengthBoost = wSpec.strength_boost / 100.0;
    const melee = strength * strengthBoost;
    result = 1 + result / 100.0 + melee;
    let bResult = (additionalDamage.ballisticBDB.is_used) ? (additionalDamage.ballisticBDB.value / 100.0) : 0.0;
    let eResult = (additionalDamage.energyBDB.is_used) ? (additionalDamage.energyBDB.value / 100.0) : 0.0;
    let fResult = (additionalDamage.fireBDB.is_used) ? (additionalDamage.fireBDB.value / 100.0) : 0.0;
    let pResult = (additionalDamage.poisonBDB.is_used) ? (additionalDamage.poisonBDB.value / 100.0) : 0.0;
    let cResult = (additionalDamage.coldBDB.is_used) ? (additionalDamage.coldBDB.value / 100.0) : 0.0;
    let rResult = (additionalDamage.radBDB.is_used) ? (additionalDamage.radBDB.value / 100.0) : 0.0;
    bResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "BBDB") / 100.0);
    eResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "EBDB") / 100.0);
    fResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "FBDB") / 100.0);
    pResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "PBDB") / 100.0);
    cResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "CBDB") / 100.0);
    rResult += (collectStuffBoost(stuffBoost.weapon, wSpec, "RBDB") / 100.0);
    let science = boost.science.displayed_value / 100.0;
    if (wSpec.type === "Heavy") {
        science = 0.0;
    }
    return [result + bResult, result + science + eResult, result + fResult, result + pResult, result + cResult, result + rResult];
}

// Applies all possible Anti Armor effects (for all creatures)
export function aa_cards(boostDamage, wSpec, stuffBoost, legendary, weaponAA=0.0, weaponType="All") {
    let aa = 1.0
    if (legendary != null) {
        aa = 1 - ((legendary.antiarmor.is_used) ? legendary.antiarmor.value / 100.0 : 0.0);
    }
    aa -= (weaponAA / 100.0);
    aa = (aa < 0) ? 0 : aa;
    let incisor = 1.0;
    if (weaponType === "All" || weaponType === "Melee" || weaponType === "Unarmed") {
        incisor = 1 - boostDamage.incisor.displayed_value / 100.0;
    }
    let bow_before_me = 1.0;
    if (weaponType === "All" || weaponType === "Bow") {
        bow_before_me = 1 - boostDamage.bow_before_me.displayed_value / 100.0;
    }
    let tank_killer = 1.0;
    if (weaponType === "All" || weaponType === "Pistol" || weaponType === "Rifle") {
        tank_killer = 1 - boostDamage.tank_killer.displayed_value / 100.0;
    }
    let stabilized = 1.0;
    if (weaponType === "All" || weaponType === "Heavy") {
        stabilized = 1 - boostDamage.stabilized.displayed_value / 100.0;
    }
    let bMult = 1;
    collectStuffBoost(stuffBoost.weapon, wSpec, "BAA", (value) => bMult *= (1 - value / 100.0));
    const result1 = (100 * (1 - bMult * incisor * bow_before_me * tank_killer * stabilized * aa));
    const result2 = (100 * (1 - incisor * bow_before_me * tank_killer * stabilized * aa));
    const resultAll = [result1, result2, result2, result2, result2, result2];
    return resultAll;
}


