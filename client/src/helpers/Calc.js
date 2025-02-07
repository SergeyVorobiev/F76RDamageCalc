import WeaponFactory from '../damage/weapon/WeaponFactory';
import CreaturesProduction from '../creature/CreaturesProduction';
import DamageEmulator from '../damage/DamageEmulator';
import Global from './Global';


export function calcDamage(weaponFactory, creaturesInfo) {
    return new DamageEmulator(weaponFactory.build(WeaponFactory.DEFAULT), creaturesInfo).emulate();
}

export function graphDamage(creaturesInfo, weaponFactory) {
    const weapon = weaponFactory.build(WeaponFactory.DEFAULT, creaturesInfo);
    weapon.setAlwaysMaxHit(true);

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
    const totalTime = ammoCapacity / fireRate + weapon.getReloadTime();
    const shotTime = totalTime / ammoCapacity;
    const shotsPerSecond = 1 / shotTime;

    // 1 Hit per second which later will be multiplied by actual fire rate to get correct DPS
    weapon.setFireRate(10);
    weapon.setChargeTime(0);
    weapon.setFirstBloodBonus(0);
    weapon.setLastShotBonus(0);
    let yValues = [];
    let xValues = [];
    const r = (creaturesInfo.immuneToRadiation) ? 0 : creaturesInfo.r;
    const p = (creaturesInfo.immuneToPoison) ? 0 : creaturesInfo.p;

    // Max resistance with armor penetration
    let maxRes = Math.max(...[creaturesInfo.b, creaturesInfo.e, creaturesInfo.f, p, creaturesInfo.c, r]);
    if (maxRes > 0) {
        const creature = CreaturesProduction.produceByArmor(creaturesInfo, [maxRes, maxRes, maxRes, maxRes, maxRes, maxRes]);
        const cArmor = creature.reduceArmor(weapon.getAntiArmor()).getArmor();
        maxRes = Math.max(...cArmor);
    }

    let points = Global.graphPoints;
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
    for (let i = 0; i < xValues.length; i++) {
        const xValue = xValues[i];
        const armor = [xValue, xValue, xValue, xValue, xValue, xValue];
        const creature = CreaturesProduction.produceByArmor(creaturesInfo, armor);
        creature.reduceArmor(weapon.getAntiArmor());
        creature.takeDamage(weapon.getMaxHit());
        yValues.push(creature.getLastTotalDamage() * shotsPerSecond);
    }

    return {
        xValues: xValues,
        yValues: yValues,
    }
}


