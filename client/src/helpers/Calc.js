import WeaponFactory from '../damage/weapon/WeaponFactory';
import CreaturesProduction from '../creature/CreaturesProduction';
import DamageEmulator from '../damage/DamageEmulator';


export function calcDamage(weaponFactory, creaturesInfo) {
    const weapon = weaponFactory.build(WeaponFactory.DEFAULT);
    const creatures = CreaturesProduction.produce(creaturesInfo, weapon.getAntiArmor());
    const emulator = new DamageEmulator(weapon, creatures);
    return emulator.emulate();
}

export function graphDamage(xValues, reduction, headShot, weaponFactory) {
    const weapon = weaponFactory.build(WeaponFactory.DEFAULT);
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
    for (let i = 0; i < xValues.length; i++) {
        const xValue = xValues[i];
        const armor = [xValue, xValue, xValue, xValue, xValue, xValue];
        const creature = CreaturesProduction.produceByArmor(armor, reduction, headShot);
        creature.reduceArmor(weapon.getAntiArmor());
        creature.takeDamage(weapon.getMaxHit());
        yValues.push(creature.getLastTotalDamage() * shotsPerSecond);
    }

    return {
        xValues: xValues,
        yValues: yValues,
    }
}


