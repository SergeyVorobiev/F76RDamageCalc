import WeaponFactory from '../damage/weapon/WeaponFactory';
import CreaturesProduction from '../creature/CreaturesProduction';
import DamageEmulator from '../damage/DamageEmulator';
import Global from './Global';


export function calcDamage(weaponFactory, creaturesInfo) {
    return new DamageEmulator(weaponFactory.build(WeaponFactory.DEFAULT), creaturesInfo).emulate();
}

function buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond, crit=true) {
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

export function graphDamage(creaturesInfo, weaponFactory, resistanceByAntiArmor=false, addResPoints=false, accuracy=100, pointsSize=0, staticResistance=0) {
    const weapon = weaponFactory.build(WeaponFactory.DEFAULT, creaturesInfo);
    weapon.setAlwaysMaxHit(true);

    // We multiply result by headShot frequency later, to calc correct dps
    weapon.setEnableHeadShot(false);
    const headShotPercent = weapon.getHeadShotFrequency() / 100.0;
    const normalShotPercent = 1 - headShotPercent;
    const headShotMult = creaturesInfo.headShot;
    const critFreq = weapon.getCritShotFrequency()
    const normalShotCount = (critFreq > 0) ? critFreq - 1 : 1;
    const critShotCount = (critFreq > 0) ? 1 : 0;
    const shotSum = normalShotCount + critShotCount;
    accuracy = accuracy / 100.0;

    // In case we have only 1 ammo to not count reloading
    weapon.disableReloadTimeCounting();

    // Actual shot per second + we need to care about reloading time
    let fireRate = weapon.getFireRate() / 10.0;
    fireRate = 1 / fireRate + weapon.getChargeTime();
    fireRate = 1 / fireRate;
    let ammoCapacity = weapon.getAmmoCapacity();
    if (ammoCapacity === 0) { // Melee
        ammoCapacity = 1;
    }
    const startDelayTime = weapon.getStartAttackDelay();
    const delayTime = (weapon.getIsAuto()) ? startDelayTime : (startDelayTime * ammoCapacity);
    const totalTime = ammoCapacity / fireRate + weapon.getReloadTime() + delayTime;
    const shotTime = totalTime / ammoCapacity;
    const shotsPerSecond = 1 / shotTime;

    // 1 Hit per second which later will be multiplied by actual fire rate to get correct DPS
    weapon.setFireRate(10);
    weapon.setChargeTime(0);
    weapon.setFirstBloodBonus(0);
    weapon.setLastShotBonus(0);
    let yValues = [];
    let yValuesNoCrit = [];
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
    buildGraphValues(xValues, yValues, creaturesInfo, weapon, shotsPerSecond);
    buildGraphValues(xValues, yValuesNoCrit, creaturesInfo, weapon, shotsPerSecond, false);
    for (let i = 0; i < yValues.length; i++) {
        const yVal = yValues[i];
        const yValNoCrit = yValuesNoCrit[i];
        let result = (yVal * critShotCount + yValNoCrit * normalShotCount) / shotSum;
        result = result * headShotMult * headShotPercent + result * normalShotPercent;
        result = result * accuracy;
        yValues[i] = result;
    }

    return {
        xValues: xValues,
        yValues: yValues,
    }
}


