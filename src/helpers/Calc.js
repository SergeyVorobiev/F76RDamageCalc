import WeaponFactory from '../damage/weapon/WeaponFactory';
import CreaturesProduction from '../creature/CreaturesProduction';
import DamageEmulator from '../damage/DamageEmulator';
import { buildCreature } from '../entities/ECreatures';
import Creature from '../creature/Creature';
import Global from './Global';


export function calcDamage(weaponFactory, creaturesInfo) {
    return new DamageEmulator(weaponFactory.build(WeaponFactory.DEFAULT), creaturesInfo).emulate();
}

function buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, crit) {
    weapon.setEnableCrit(crit);
    for (let i = 0; i < xValues.length; i++) {
        const xValue = xValues[i];
        const armor = [xValue, xValue, xValue, xValue, xValue, xValue];
        const creature = CreaturesProduction.produceByArmor(creaturesInfo, armor);
        creature.reduceArmor(weapon.getAntiArmor());
        creature.takeDamage(weapon.getMaxHit());
        yValues.push(creature.getLastTotalDamageWithAccuracy() * shotsPerSecond);
    }
}

function buildTimeDamageForGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, accuracy, crit) {
    weapon.setEnableCrit(crit);
    for (let i = 0; i < xValues.length; i++) {
        const xValue = xValues[i];
        const armor = [xValue, xValue, xValue, xValue, xValue, xValue];
        const creature = CreaturesProduction.produceByArmor(creaturesInfo, armor);
        creature.reduceArmor(weapon.getAntiArmor());
        creature.takeDamage(weapon.getMaxHit());
        yValues[i] += creature.calcAverageTimeDamage(weapon.getMaxHit(), crit, accuracy, shotsPerSecond);
    }
}

function getXValuesResistance(creaturesInfo, staticResistance, resistanceByAntiArmor, pointsSize, addResPoints) {
    let xValues = [];
    const r = (creaturesInfo.immuneToRadiation) ? 0 : creaturesInfo.r;
    const p = (creaturesInfo.immuneToPoison) ? 0 : creaturesInfo.p;

    // Max resistance with armor penetration
    let maxRes = staticResistance;
    const creatureRes = [creaturesInfo.b, creaturesInfo.e, creaturesInfo.f, p, creaturesInfo.c, r];
    if (maxRes < 1) {
        maxRes = Math.max(...creatureRes);
        if (maxRes > 0 && resistanceByAntiArmor) {
            const creature = CreaturesProduction.produceByArmor(creaturesInfo, [maxRes, maxRes, maxRes, maxRes, maxRes, maxRes]);
            const cArmor = creature.reduceArmor(weapon.getAntiArmor()).getArmor();
            maxRes = Math.max(...cArmor);
        }
    }
    let points = pointsSize;
    if (points < 1) {
        points = Global.graphPoints;
    }
    if (maxRes < 0) {
        maxRes = 0;
    }
    if (maxRes < points) {
        points = maxRes;
    }
    const coef = (points === 0) ? 0 : maxRes / points;
    for (let i = 0; i <= points; i++) {
        xValues.push(Math.ceil(coef * i));
    }
    if (addResPoints) {
        for (let i = 0; i < creatureRes.length; i++) {
            const res = creatureRes[i];
            xValues.push(res);
        }
        xValues = [...new Set(xValues)]; // Get rid of duplicates
        xValues.sort((a, b) => a - b);
    }
    return xValues;
}

function getXValuesLevels(creaturesInfo) {
    const xValues = [];
    if (!creaturesInfo) {
        return xValues;
    }
    const maxLevel = buildCreature(creaturesInfo.name, "Max", "").level;
    let step = 2;
    if (maxLevel < 51) {
        step = 1;
    }
    let nextLevel = 1;
    while(true) {
        if (nextLevel >= maxLevel) {
            nextLevel = maxLevel;
            xValues.push(nextLevel);
            break;
        }
        xValues.push(nextLevel);
        nextLevel += step;
    }
    return xValues;
}

// DEPRECATED!!!
function setWeaponSettings(weapon) {

    // 1 Hit per second which later will be multiplied by actual fire rate to get correct DPS
    weapon.setFireRate(10);
    weapon.setChargeTime(0);
    weapon.setAlwaysMaxHit(true);

    // We multiply result by headShot frequency later, to calc correct dps
    weapon.setEnableHeadShot(false);

    // In case we have only 1 ammo to not count reloading
    weapon.setReloadTimeCounting(false);
    weapon.setStartAttackDelay(false);
}

function buildDamages(xValues, weapon, creaturesInfo, shotsPerSecond, accuracy) {
    const headShotPercent = weapon.getHeadShotFrequency() / 100.0;
    const normalShotPercent = 1 - headShotPercent;
    const headShotMult = creaturesInfo.headShot;
    const critFreq = weapon.getCritShotFrequency();
    const normalShotCount = (critFreq > 0) ? critFreq - 1 : 1;
    const critShotCount = (critFreq > 0) ? 1 : 0;
    const shotSum = normalShotCount + critShotCount;
    accuracy = accuracy / 100.0;

    let yValues = [];
    let yValuesNoCrit = [];

    buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, true);
    buildGraphValues(xValues, yValuesNoCrit, creaturesInfo, weapon, shotsPerSecond, false);
    for (let i = 0; i < yValues.length; i++) {
        const yVal = yValues[i];
        const yValNoCrit = yValuesNoCrit[i];
        let result = (yVal * critShotCount + yValNoCrit * normalShotCount) / shotSum;
        result = result * headShotMult * headShotPercent + result * normalShotPercent;
        result = result * accuracy;
        yValues[i] = result;
    }

    // Time Damage (Crit excluded)
    buildTimeDamageForGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, accuracy, false);

    // Time Damage (Only Crit, it does not relate to multiplier it's in case if we have special crit time damage)
    buildTimeDamageForGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, accuracy / critFreq, true);
    return yValues;
}

function smooth(yValues) {
    let value = yValues[yValues.length - 1];
    for (let i = yValues.length - 2; i > -1; i--) {
        let curValue = yValues[i];
        if (curValue < value) {
            yValues[i] = value;
        }
        value = yValues[i];
    }
}

function emulateYValues(xValues, dummy, weapon, accuracy, creatureName, isResistance) {
    const yValues = [];
    const creatures = {creature: dummy};
    accuracy /= 100;
    weapon.reset();

    // The only possible way to calculate actual damage is to emulate it,
    // There is no way to combine and precalculate every possible conditional bonuses by just using formulas
    // To not overload the system 1000 steps should be enough, health is not overridden intentionally as an
    // importance of some effects directly depend on current creature's health (like instigating)
    for (let i = 0; i < xValues.length; i++) {
        const res = xValues[i];
        if (isResistance) {
            dummy.b = res;
            dummy.e = res;
            dummy.f = res;
            dummy.p = res;
            dummy.c = res;
            dummy.r = res;
        } else {
            const cr = buildCreature(creatureName, res, "");
            dummy.b = cr.b
            dummy.e = cr.e
            dummy.f = cr.f
            dummy.p = cr.p
            dummy.c = cr.c
            dummy.r = cr.r
        }
        let result = new DamageEmulator(weapon, creatures).emulate(1000);
        yValues.push(parseFloat(dummy.dps) * accuracy);
        weapon.reset();
    }
    return yValues;
}

export function graphDamage(creaturesInfo, weaponFactory, type, resistanceByAntiArmor=false, addResPoints=false, accuracy=100, pointsSize=0, staticResistance=0) {
    const weapon = weaponFactory.build(WeaponFactory.DEFAULT, creaturesInfo);

    // Will be calculated separately
    weapon.setEnableExecutioner(false);

    let xValues = null;
    let isResistance = true;
    if (type === "Resistance") {
        xValues = getXValuesResistance(creaturesInfo, staticResistance, resistanceByAntiArmor, pointsSize, addResPoints);
    } else {
        isResistance = false;
        xValues = getXValuesLevels(creaturesInfo);
    }
    const dummy = JSON.parse(JSON.stringify(creaturesInfo));
    const yValues = emulateYValues(xValues, dummy, weapon, accuracy, creaturesInfo.name, isResistance);

    // The problem is that 1000 steps could be not enough to kill a creature, executioner starts to work only below 40% we have to do calculations one more time and merge the result
    if (checkLegendary(weapon, "004f6aa1")) {
        weapon.setAdditionalTotalDamageBonus(50);
        const yValuesBoosted = emulateYValues(xValues, dummy, weapon, accuracy, creaturesInfo.name, isResistance);
        weapon.setAdditionalTotalDamageBonus(0);
        for (let i = 0; i < yValues.length; i++) {
            const baseDamage = yValues[i];
            const boostedDamage = yValuesBoosted[i];
            const health = creaturesInfo.h;
            yValues[i] = health / (0.6 * health / baseDamage + 0.4 * health / boostedDamage);
        }
    }
    smooth(yValues);
    return {
        xValues: xValues,
        yValues: yValues,
    };
    /*
    let result = 0;
    corrector = parseFloat(dummy.dps) / (1 - parseFloat(dummy.damageReduction)) / weapon.getRealShotsPerSecond();
    //console.log("DPS corrector: " + corrector);
    //console.log("DPS FireRate " + weapon.getRealShotsPerSecond());
    //const realDamage = Creature.reverseDamage(corrector, 1, creaturesInfo.damageReduction, 1)
    console.log("DPS Real Damage " + corrector);
    const convertBack = Creature.finalDamageFormula(corrector, 157) * (1 - parseFloat(creaturesInfo.damageReduction)) * weapon.getRealShotsPerSecond();
    console.log("DPS Converted back " + convertBack);

    dummy.h = 1000000000;
    dummy.b = xValues[xValues.length - 1];
    result = new DamageEmulator(weaponFactory.build(WeaponFactory.DEFAULT), {creature: dummy}).emulate();
    corrector = parseFloat(dummy.dps);
    //console.log("DPS Zero Max Actual: " + corrector);


    const shotsPerSecond = weapon.getRealShotsPerSecond();
    setWeaponSettings(weapon);


    const yValues = buildDamages(xValues, weapon, creaturesInfo, shotsPerSecond, accuracy);
    const maxCorrector = Creature.finalDamageFormula(80, xValues[xValues.length - 1]);
    //console.log("DPS Zero Max: " + maxCorrector);

    // In Case if we have some conditional legendary mods
    calculateConditionalLegendary(xValues, yValues, weapon, creaturesInfo, shotsPerSecond, accuracy);

    correct(yValues, corrector);
    return {
        xValues: xValues,
        yValues: yValues,
    }*/
}

// DEPRECATED!!!
function correct(yValues, corrector) {
    if (corrector === 0 || true) {
        return;
    }
    const pointsSize = yValues.length;
    console.log("DPS Real: " + corrector);
    console.log("DPS Calc: " + yValues[pointsSize - 1]);
    const maxGap = corrector - yValues[pointsSize - 1];
    if (Math.abs(maxGap) < 1) {
        return;
    }
    const maxCoef = null;
    for (let i = 0; i < pointsSize; i++) {
        const curPoint = i + 1;
        const coef = curPoint / pointsSize * maxGap;
        yValues[i] += coef;
    }
}

function checkLegendary(weapon, id) {
    const legendary = weapon.getLegendaryIds();
    for (let i = 0; i < legendary.length; i++) {
        const leg = legendary[i];
        if (leg === id) {
            return true;
        }
    }
    return false;
}

// DEPRECATED!!!
// HARDCODE! If conditions / values of legendary will be changed in the future we have to change them here manually
function calculateConditionalLegendary(xValues, yValues, weapon, creaturesInfo, shotsPerSecond, accuracy) {
    const legendary = weapon.getLegendaryIds();
    for (let i = 0; i < legendary.length; i++) {
        const leg = legendary[i];
        switch(leg) {
            case "004f6aa5":
                calculateFirstBlood(xValues, yValues, weapon, creaturesInfo, shotsPerSecond, accuracy);
                break;
            default:
                break;
        }
    }
}


