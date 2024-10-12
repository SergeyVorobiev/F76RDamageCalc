export default class Weapon {

    constructor(weaponSpecsAssembler) {
        this.damages = weaponSpecsAssembler.getDamages();
        this.critDamages = weaponSpecsAssembler.getCritDamages();
        this.shotSize = weaponSpecsAssembler.getShotSize();
        this.reloadTime = weaponSpecsAssembler.getReloadTime();
        this.fireRate = weaponSpecsAssembler.getFireRate();
        this.ammoCapacity = weaponSpecsAssembler.getAmmoCapacity();
        this.antiArmor = weaponSpecsAssembler.getAntiArmor();
        this.strengthBoost = weaponSpecsAssembler.getStrengthBoost();
        this.strength = weaponSpecsAssembler.getStrength();
        this.bonusMult = weaponSpecsAssembler.getBaseDamageMult();
        this.critBoost = weaponSpecsAssembler.getCritBoost();
        this.explosiveBonus = weaponSpecsAssembler.getExplosiveBonus();
        this.explosiveDamageTypeBonus = weaponSpecsAssembler.getExplosivePhysicalBonus();
        this.weaponType = weaponSpecsAssembler.getWeaponType();
        this.headShotFrequency = weaponSpecsAssembler.getHeadShotFrequency();
        this.critShotFrequency = weaponSpecsAssembler.getCritShotFrequency();
        this.sneakShotFrequency = weaponSpecsAssembler.getSneakShotFrequency();
        this.creatureDamageBonuses = weaponSpecsAssembler.getCreatureDamageBonuses();
        this.firstBloodBonus = weaponSpecsAssembler.getFirstBloodBonus();
        this.lastShotBonus = weaponSpecsAssembler.getLastShotBonus();
        this.cripple = weaponSpecsAssembler.getCripple();
        this.bash = weaponSpecsAssembler.getBash();
        this.powerAttack = weaponSpecsAssembler.getPowerAttack();
        this.chargeTime = weaponSpecsAssembler.getChargeTime();
        this.chargePenalty = weaponSpecsAssembler.getChargePenalty();
        this.sneak = weaponSpecsAssembler.getSneak();
        this.totalDamageBonus = weaponSpecsAssembler.getTotalDamageBonus();
        this.magazine = this.ammoCapacity;
        this.resultDamage = {bulletCount: this.shotSize, expDTypeBonus: this.explosiveDamageTypeBonus, lastShotBonus: 0, firstBloodBonus: this.firstBloodBonus, creatureDamageBonuses: this.creatureDamageBonuses, headShot: false, critShot: false, sneakShot: false, weaponType: this.weaponType,
            deltaTime: 0, powerAttack: this.powerAttack, bash: this.bash, cripple: 0, bonusMult: this.bonusMult,
            expBonus: this.explosiveBonus, sneak: this.sneak, totalDamageBonus: this.totalDamageBonus.value, critBoost: this.critBoost,
            tenderizer: this.totalDamageBonus.tenderizer, executionerBonus: this.totalDamageBonus.executioner, damages: [],
            critDamages: this.critDamages};
        this.reloadsCount = 0;
        this.reloadTimeCounting = true;
        this.alwaysMaxHit = false;
        this.reloadsTotalTime = 0;
        this.hitCount = 0;
        this.hit();
    }

    setLastShotBonus(value) {
        this.lastShotBonus = value;
    }

    setFirstBloodBonus(value) {
        this.firstBloodBonus = value;
        this.resultDamage.firstBloodBonus = value;
    }

    getChargeTime() {
        return this.chargeTime;
    }

    setChargeTime(value) {
        this.chargeTime = value;
    }

    getDamages() {
        return this.damages;
    }

    getCreatureBonus() {
        return this.creatureDamageBonuses;
    }

    getExplosiveDamageTypeBonus() {
        return this.explosiveDamageTypeBonus;
    }

    getBonusMult() {
        return this.bonusMult;
    }

    getTotalBonus() {
        return this.totalDamageBonus;
    }

    setFireRate(fireRate) {
        this.fireRate = fireRate;
    }

    setAlwaysMaxHit(flag) {
        this.alwaysMaxHit = flag;
    }

    disableReloadTimeCounting() {
        this.reloadTimeCounting = false;
    }

    getMaxHit() {
        return this.hit();
    }

    getShotSize() {
        return this.shotSize;
    }

    getStrength() {
        return this.strength;
    }

    getStrengthBonus() {
        return this.strengthBoost;
    }

    getCritBonus() {
        return parseInt(this.critBoost * 100.0);
    }

    getSneakBonus() {
        return parseInt(this.sneak * 100.0);
    }

    getExplosiveBonus() {
        return this.explosiveBonus * 100.0;
    }

    getFireRate() {
        return this.fireRate;
    }

    getAmmoCapacity() {
        return this.ammoCapacity;
    }

    getReloadTime() {
        return this.reloadTime;
    }

    getAntiArmor() {
        return this.antiArmor;
    }

    // Just to display total value as in pip boy (no time)
    getDisplayedDamage() {
        let result = 0;
        let hitCount = (this.shotSize === 0) ? 1 : this.shotSize;
        for (let i = 0; i < this.damages.length; i++) {
            const damage = this.damages[i];
            if (!damage.isUsed || damage.time > 0) {
                continue;
            }
            let curDamage = damage.damage * this.bonusMult[damage.type];
            let expDamage = 0;
            if (damage.type === 'dtPhysical' && damage.kind === 'physical') {
                expDamage = curDamage * this.explosiveBonus;
            }
            curDamage /= hitCount;
            curDamage += expDamage;
            result += curDamage;
        }
        return result;
    }

    getReloadsCount() {
        return this.reloadsCount;
    }

    getReloadsTime() {
        return this.reloadsTotalTime;
    }

    isSneak() {
        return this.sneakShotFrequency !== 0;
    }

    isCrit() {
        return this.critShotFrequency !== 0;
    }

    // Result array is reused every hit, editing is prohibited as it contains ref data
    hit() {
        this.resultDamage.damages.length = 0;
        let dTime = 10 / this.fireRate;

        // Charge
        dTime += this.chargeTime;

        // Reload
        if (this.magazine === 0) {
            this.magazine = this.ammoCapacity;
            this.reloadsCount += 1;
            this.reloadsTotalTime += this.reloadTime;
            if (this.reloadTimeCounting) {
                dTime += this.reloadTime;
            }
        }

        // Last shot
        if (this.magazine === 1 && this.chanceTriggered(25)) {
            this.resultDamage.lastShotBonus = this.lastShotBonus;
        } else {
            this.resultDamage.lastShotBonus = 0;
        }
        this.magazine -= 1;
        this.hitCount += 1;
        this.resultDamage.deltaTime = dTime;

        // Head shot
        if (this.headShotFrequency === 0) {
            this.resultDamage.headShot = false;
        } else {
            this.resultDamage.headShot = this.hitIfFrequency(this.headShotFrequency);
        }

        // Crit shot
        if (this.critShotFrequency === 0) {
            this.resultDamage.critShot = false;
        } else {
            this.resultDamage.critShot = this.hitIfFrequency(this.critShotFrequency);
        }

        // Sneak
        if (this.sneakShotFrequency === 0) {
            this.resultDamage.sneakShot = false;
        } else {
            this.resultDamage.sneakShot = this.hitIfFrequency(this.sneakShotFrequency);
        }

        // Cripple
        if (this.chanceTriggered(this.cripple.chance) || this.resultDamage.headShot) {
            this.resultDamage.cripple = this.cripple.value;
        } else {
            this.resultDamage.cripple = 0;
        }

        // Damages
        for (let i = 0; i < this.damages.length; i++) {
            const damage = this.damages[i];
            if (damage.damage > 0 && damage.isUsed && this.chanceTriggered(damage.accuracy) && this.chanceTriggered(damage.chance)) {
                damage.damage = damage.defDamage * this.chargePenalty;
                this.resultDamage.damages.push(damage);
            }
        }
        return this.resultDamage;
    }

    hitIfFrequency(frequency) {
        if (this.alwaysMaxHit) {
            return true;
        }
        return this.hitCount % frequency === 0;
    }
    // between 0 - 100
    chanceTriggered(chance) {
        if (this.alwaysMaxHit) {
            return true;
        }
        return Math.random() < (chance / 100.0);
    }
}