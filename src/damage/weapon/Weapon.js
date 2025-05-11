import Strings from '../../helpers/Strings';
import { DamageTypes } from '../../helpers/Strings';


export default class Weapon {

    constructor(weaponSpecsAssembler) {
        this.damages = weaponSpecsAssembler.getDamages();
        this.name = weaponSpecsAssembler.getWeaponName();
        this.defaultName = weaponSpecsAssembler.getDefaultWeaponName();
        this.critDamages = weaponSpecsAssembler.getCritDamages();
        this.shotSize = weaponSpecsAssembler.getShotSize();
        this.reloadTime = weaponSpecsAssembler.getReloadTime();
        this.fireRate = weaponSpecsAssembler.getFireRate();
        this.ammoCapacity = weaponSpecsAssembler.getAmmoCapacity();
        this.antiArmor = weaponSpecsAssembler.getAntiArmor();
        this.strengthBoost = weaponSpecsAssembler.getStrengthBoost();
        this.strength = weaponSpecsAssembler.getStrength();
        this.ownerHealth = weaponSpecsAssembler.getOwnerHealth();
        const bonusData = weaponSpecsAssembler.getBaseDamageMult();
        this.bonusMult = bonusData[0];
        this.bonusMultString = bonusData[1];
        this.critBoost = weaponSpecsAssembler.getCritBoost();
        this.isAuto = weaponSpecsAssembler.getIsAuto();
        this.explosiveBonus = weaponSpecsAssembler.getExplosiveBonus();
        this.explosiveDamageTypeBonus = weaponSpecsAssembler.getExplosivePhysicalBonus();
        this.weaponType = weaponSpecsAssembler.getWeaponType();
        this.headShotFrequency = weaponSpecsAssembler.getHeadShotFrequency();
        this.critShotFrequency = weaponSpecsAssembler.getCritShotFrequency();
        this.sneakShotFrequency = weaponSpecsAssembler.getSneakShotFrequency();
        this.creatureDamageBonuses = weaponSpecsAssembler.getCreatureDamageBonuses();
        this.dynamicBaseDamageBonuses = weaponSpecsAssembler.collectDynamicConditionalBDB();
        this.outgoingMult = weaponSpecsAssembler.getOutgoingBonus();
        this.cripple = weaponSpecsAssembler.getCripple();
        this.bash = weaponSpecsAssembler.getBash();
        this.generalAccuracy = weaponSpecsAssembler.getGeneralAccuracy();
        this.powerAttack = weaponSpecsAssembler.getPowerAttack();
        this.chargeTime = weaponSpecsAssembler.getChargeTime();
        this.chargePenalty = weaponSpecsAssembler.getChargePenalty();
        this.startAttackDelay = weaponSpecsAssembler.getStartAttackDelay();
        this.sneak = weaponSpecsAssembler.getSneak();
        this.totalDamageBonus = weaponSpecsAssembler.getTotalDamageBonus();
        this.legendaryIds = weaponSpecsAssembler.getLegendaryIds();
        this.pinPointerChance = weaponSpecsAssembler.getPinPointerChance();
        this.additionalTotalBonus = 1;
        this.enableExecutioner = true;
        this.isRange = (this.weaponType !== "Melee" && this.weaponType !== "Unarmed");
        this.reset();
    }

    reset() {
        const dynamicBDB =  this.buildConditionalBDB(this.dynamicBaseDamageBonuses);
        this.buildDamageConditions();
        this.resultDamage = {idle: false, bulletCount: this.shotSize, expDTypeBonus: this.explosiveDamageTypeBonus, tempBDB: 0, creatureDamageBonuses: this.creatureDamageBonuses, headShot: false, critShot: false, sneakShot: false, weaponType: this.weaponType,
            attackDelay: this.startAttackDelay, deltaTime: 0, powerAttack: 0, bash: this.bash, cripple: 0, bonusMult: this.bonusMult,
            expBonus: this.explosiveBonus, sneak: this.sneak, isRange: this.isRange, totalDamageBonus: this.totalDamageBonus.value, critBoost: this.critBoost,
            tenderizer: this.totalDamageBonus.tenderizer, outgoingMult: this.outgoingMult, additionalTotalBonus: this.additionalTotalBonus, executionerBonus: this.getExecutionerBonus(), damages: [],
            critDamages: [], dynamicBDB: dynamicBDB };
        this.reloadsCount = 0;
        this.reloadTimeCounting = true;
        this.allowStartAttackDelay = true;
        this.alwaysMaxHit = false;
        this.hitCount = 0;
        this.preparedToHit = false;
        this.firstHit = true;
        this.magazine = this.ammoCapacity;
        this.enableCrit = true;
        this.enableHeadShot = true;
    }

    getExecutionerBonus() {
        if (this.enableExecutioner) {
            return this.totalDamageBonus.executioner;
        } else {
            return 1;
        }
    }

    setEnableExecutioner(flag) {
        this.enableExecutioner = flag;
        this.resultDamage.executionerBonus = this.getExecutionerBonus();
    }

    buildDamageConditions() {
        for (let i = 0; i < this.damages.length; i++) {
            const damage = this.damages[i];
            for (let j = 0; j < damage.fConditions.length; j++) {
                const condition = damage.fConditions[j][0];
                switch(condition) {
                    case 'reload':
                        damage.reloadOnly = true;
                        break;
                    case 'bash':
                        damage.bashOnly = true;
                        break;
                }
            }
        }
    }

    buildConditionalBDB(dynamicBonuses) {
        const obj = {
            "burned": 0,
            "bash": 0,
            "reload": [0, 0], // Value / Chance
            "poisoned": 0,
            "firstBlood": 0,
            "furious": [0, 0, 0], // Increase value, max value, current value
            "pounder": [0, 0, 0], // Increase value, max value, current value
        }
        for (let i = 0; i < dynamicBonuses.length; i++) {
            const bonus = dynamicBonuses[i];
            if (bonus.type === "BDB") {
                const name = bonus.fConditions[0][0];
                if (name === "firstBlood") {
                    obj.firstBlood += bonus.damage;
                } else if (name === "furious") {
                    const data = bonus.fConditions[0][1];
                    obj.furious = [...data["all"]];
                    if (!obj.furious) {
                        throw new Error("Furious does not contain any data");
                    }
                } else if (name === "reload") {
                    obj.reload = [bonus.damage, bonus.chance];
                } else if (name === "bash") {
                    obj.bash += bonus.damage;
                } else if (name === "pounder") {
                    const data = bonus.fConditions[0][1];
                    if (this.isAuto) {
                        obj.pounder = [...data["auto"]];
                    } else {
                        obj.pounder = [...data["nonAuto"]];
                    }
                } else if (name === "burned") {
                    obj.burned += bonus.damage;
                } else if (name === "poisoned") {
                    obj.poisoned += bonus.damage;
                }
            }
        }
        return obj;
    }

    getRealShotsPerSecond() {

        // Actual shot per second + we need to care about reloading time
        let fireRate = this.getFireRate() / 10.0;
        fireRate = 1 / fireRate + this.getChargeTime();
        fireRate = 1 / fireRate;
        let ammoCapacity = this.getAmmoCapacity();
        if (ammoCapacity === 0) { // Melee
            ammoCapacity = 1;
        }
        const startDelayTime = this.getStartAttackDelay();
        const delayTime = (this.getIsAuto()) ? startDelayTime : (startDelayTime * ammoCapacity);
        const totalTime = ammoCapacity / fireRate + this.getReloadTime() + delayTime;
        const shotTime = totalTime / ammoCapacity;
        return 1 / shotTime;
    }

    // It will be multiplied with other total bonuses, value will be divided by 100 + 1
    // For fifty percent damage bonus use 50
    setAdditionalTotalDamageBonus(bonus) {
        this.additionalTotalBonus = 1 + (bonus / 100);
        this.resultDamage.additionalTotalBonus = this.additionalTotalBonus;
    }

    setEnableCrit(flag) {
        this.enableCrit = flag;
    }

    setEnableHeadShot(flag) {
        this.enableHeadShot = flag;
    }

    getName() {
        return this.name;
    }

    getIsAuto() {
        return this.isAuto;
    }

    getLegendaryIds() {
        return this.legendaryIds;
    }

    getDefaultName() {
        return this.defaultName;
    }

    getType() {
        return this.weaponType;
    }

    getHeadShotFrequency() {
        return this.headShotFrequency;
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

    getCritDamages() {
        return this.critDamages;
    }

    getCreatureBonus() {
        return this.creatureDamageBonuses;
    }

    getExplosiveDamageTypeBonus() {
        return this.explosiveDamageTypeBonus;
    }

    getBonusMult() {
        return this.bonusMultString;
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

    setReloadTimeCounting(flag) {
        this.reloadTimeCounting = flag;
    }

    setStartAttackDelay(flag) {
        this.allowStartAttackDelay = flag;
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

    getOwnerHealth() {
        return this.ownerHealth;
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
            const bonus = (damage.bonuses.isBonusMult) ? this.bonusMult.get(damage.iType) : 1;
            let curDamage = damage.damage * bonus;
            let expDamage = 0;
            if (damage.iType === DamageTypes.dtPhysical && damage.iKind === DamageTypes.physical) {
                expDamage = curDamage * this.explosiveBonus;
            }
            curDamage /= hitCount;
            curDamage += expDamage;
            result += curDamage;
        }
        return result;
    }

    isRanged() {
        return !(this.weaponType === Strings.Melee || this.weaponType === Strings.Unarmed);
    }

    getReloadsCount() {
        return this.reloadsCount;
    }

    getReloadsTotalTime() {
        return this.reloadsCount * this.reloadTime;
    }

    isSneak() {
        return this.sneakShotFrequency !== 0;
    }

    getCritShotFrequency() {
        return this.critShotFrequency;
    }

    isCrit() {
        return this.critShotFrequency !== 0 && this.enableCrit;
    }

    getStartAttackDelay() {
        return this.startAttackDelay;
    }

    // Result array is reused every hit, editing is prohibited as it contains ref data
    hit() {
        this.resultDamage.damages.length = 0;
        this.resultDamage.tempBDB = 0;
        this.resultDamage.critDamages.length = 0;
        this.resultDamage.idle = false;
        if (!this.preparedToHit) { // We have to prepare to hit
            let reloaded = false;
            let startTimeDelay = 0;

            // Reload
            if (this.magazine === 0) {
                this.magazine = this.ammoCapacity;
                if (this.isRange) {
                    this.reloadsCount += 1;
                }
                if (this.reloadTimeCounting) {
                    reloaded = true;
                    startTimeDelay += this.reloadTime;
                }
            }

            // Charge
            startTimeDelay += this.chargeTime;

            // Start Attack Delay
            if (this.allowStartAttackDelay) {
                if (!this.isAuto) {
                    startTimeDelay += this.startAttackDelay;
                } else if (reloaded || this.firstHit) {
                    startTimeDelay += this.startAttackDelay;
                }
            }
            if (this.firstHit) {
                this.firstHit = false;
            }
            if (startTimeDelay > 0) { // If it is nothing to prepare then just perform hit else return deltaTime and hit next time
                this.preparedToHit = true;
                this.resultDamage.deltaTime = startTimeDelay;
                this.resultDamage.idle = true; // Empty damage is also possible with only crit damages with a frequency less than one, so we inform a creature that this specific empty result is idle.
                return this.resultDamage; // We return empty damage with deltaTime because possible time damages can still hit a creature
            }
        }

        // Reset hit preparation as we are going to hit now
        this.preparedToHit = false;

        this.magazine -= 1;
        this.hitCount += 1;
        this.resultDamage.deltaTime = 10 / this.fireRate;

        // Last shot
        if (this.magazine === 0 && this.isRange) {
            const reloadData = this.resultDamage.dynamicBDB.reload;
            if (reloadData[0] > 0 && this.chanceTriggered(reloadData[1])) {
                this.resultDamage.tempBDB += reloadData[0];
            }
        }
        // Pin-Pointer Chance
        if (this.pinPointerChance[0] > 0) {
            if (this.chanceTriggered(this.pinPointerChance[0])) {
                this.resultDamage.tempBDB += this.pinPointerChance[1];
            }
        }

        // Head shot
        if (this.headShotFrequency === 0 || !this.enableHeadShot) {
            this.resultDamage.headShot = false;
        } else {
            this.resultDamage.headShot = this.chanceTriggered(this.headShotFrequency);
        }

        // Crit shot
        if (this.critShotFrequency === 0 || !this.enableCrit) {
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
        if (this.chanceTriggered(this.cripple.chance)) {
            this.resultDamage.cripple = this.cripple.value;
        } else {
            this.resultDamage.cripple = 0;
        }

        // Power Attack
        if (this.chanceTriggered(this.powerAttack.chance)) {
            this.resultDamage.powerAttack = this.powerAttack.value;
        } else {
            this.resultDamage.powerAttack = 0;
        }

        // Damages
        for (let i = 0; i < this.damages.length; i++) {
            const damage = this.damages[i];
            if (damage.damage > 0 && damage.isUsed && this.chanceTriggered(damage.finalAccuracy) && this.chanceTriggered(this.generalAccuracy) && this.chanceTriggered(damage.chance)) {

                // Conditions
                if (damage.reloadOnly && this.magazine !== 0 && this.isRange) {
                    continue;
                }
                damage.damage = damage.defDamage * this.chargePenalty;
                this.resultDamage.damages.push(damage);
            }
        }

        // Consecutive hits (considers that only non time non crit damage is hit)
        const damageExists = this.checkNonTimeNonCritDamageExists();
        const furious = this.resultDamage.dynamicBDB.furious;
        const pounder = this.resultDamage.dynamicBDB.pounder;
        this.increaseConsecutive(furious, damageExists);
        this.increaseConsecutive(pounder, damageExists);
        this.resultDamage.tempBDB += (furious[2] / 100);
        this.resultDamage.tempBDB += (pounder[2] / 100);

        // Crit Damages
        for (let i = 0; i < this.critDamages.length; i++) {
            const damage = this.critDamages[i];
            if (this.resultDamage.critShot && damage.damage > 0 && damage.isUsed && this.chanceTriggered(damage.finalAccuracy) && this.chanceTriggered(this.generalAccuracy) && this.chanceTriggered(damage.chance)) {

                // Conditions
                if (damage.reloadOnly && this.magazine !== 0 && this.isRange) {
                    continue;
                }
                this.resultDamage.critDamages.push(damage);
            }
        }
        return this.resultDamage;
    }

    getGeneralAccuracy() {
        return this.generalAccuracy;
    }

    increaseConsecutive(consecutive, damageExists) {
        if (!damageExists) {
            consecutive[2] = 0;
        } else {
            consecutive[2] += consecutive[0];
            if (consecutive[2] > consecutive[1]) {
                consecutive[2] = consecutive[1];
            }
        }
    }

    checkNonTimeNonCritDamageExists() {
        for (let i = 0; i < this.resultDamage.damages.length; i++) {
            const damage = this.resultDamage.damages[i];
            if (damage.time === 0 && damage.interval === 0) {
                return true;
            }
        }
        return false;
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