import { numberToString } from "../helpers/StringHelpers";
import { DamageTypes } from "../helpers/Strings";


export default class Creature {

    constructor(creatureInfo) {
        this.creatureInfo = creatureInfo;
        this.physical = creatureInfo.b;
        this.energy = creatureInfo.e;
        this.fire = creatureInfo.f;
        this.poison = creatureInfo.p;
        this.cryo = creatureInfo.c;
        this.name = creatureInfo.name;
        this.tags = creatureInfo.tags;
        this.tags = [];
        for (let i = 0; i < creatureInfo.tags.length; i++) {
            this.tags.push(creatureInfo.tags[i].toLowerCase());
        }
        this.body = creatureInfo.curBody;
        this.radiation = creatureInfo.r;
        this.health = creatureInfo.h;
        this.damageReduction = creatureInfo.damageReduction;
        this.damageReductionOnlyNotBleeding = creatureInfo.damageReductionOnlyNotBleeding;
        this.headMult = creatureInfo.headShot;
        this.bodyMult = creatureInfo.bodyShot;
        this.immuneToRadiation = creatureInfo.immuneToRadiation;
        this.immuneToPoison = creatureInfo.immuneToPoison;
        this.expResistance = true;
        this.reported = false;
        this.maxHit = 0;
        this.hits = 0;
        this.sumDamages = 0;
        this.lifeTime = 0;
        this.dTime = 0;
        this.timeDamages = new Map();
        this.lastTotalDamage = 0;
        this.lastTotalDamageWithAccuracy = 0; // For trial max shot
        this.lastTotalDamageNoTime = 0;
        this.lastTotalDamageTime = 0;
        this.lastDamageNoTime = 0;
        this.lastExpDamageNoTime = 0;
        this.minNormalShot = 0;
        this.maxNormalShot = 0;
        this.minHeadShot = 0;
        this.maxHeadShot = 0;
        this.minHeadExpShot = 0;
        this.maxHeadExpShot = 0;
        this.minNormalCritShot = 0;
        this.maxNormalCritShot = 0;
        this.minNormalHeadCritShot = 0;
        this.maxNormalHeadCritShot = 0;
        this.minExpShot = 0;
        this.maxExpShot = 0;
        this.minExpCritShot = 0;
        this.maxExpCritShot = 0;
        this.minExpCritHeadShot = 0;
        this.maxExpCritHeadShot = 0;
        this.bulletCount = 1;
        this.minTotalDamage = 0;
        this.maxTotalDamage = 0;
        this.maxTimeEffects = 0;
        this.tdCounter = 0;
        this.sneakPercent = 0;
        this.critPercent = 0;
        
        this.bleeding = false; // For current hit
        this.poisoning = false; // For current hit
        this.burning = false; // For current hit
        this.bashing = false; // For current hit
        this.freezing = false; // For current hit
        this.crippling = false; // For current hit

        this.isBleed = false;
        this.isPoisoned = false;
        this.isFrozen = false;
        this.isSneak = false;
        this.isExp = false;
        this.isBashed = false;
        this.isBurned = false;
        this.isCrippled = false;
        this.sumTimeDamage = 0;
        this.sumTimeDamagePerHit = 0;
        this.timeDamagesPerSecondPerHit = 0;

        this.currentHit = null;
        this.currentConditionalBDB = 0;
        this.currentDamageInfo = null;
    }

    getName() {
        return this.name;
    }

    getArmor() {
        return [this.physical, this.energy, this.fire, this.poison, this.cryo, this.radiation];
    }

    resetEffectStates() {
        this.bleeding = false;
        this.poisoning = false;
        this.burning = false;
        this.bashing = false;
        this.freezing = false;
        this.crippling = false;
    }
    
    // To speed up the process we reduce armors in advance as they are basically static (except for some cases like TOFT
    // where we ignore it anyway)
    reduceArmor(antiArmor) {
        let b = (1 - antiArmor.b / 100.0);
        let e = (1 - antiArmor.e / 100.0);
        let f = (1 - antiArmor.f / 100.0);
        let p = (1 - antiArmor.p / 100.0);
        let c = (1 - antiArmor.c / 100.0);
        let r = (1 - antiArmor.r / 100.0);
        if (this.tags.includes("bug") || this.tags.includes("mirelurk")) {
            let i = 1 - antiArmor.insect / 100.0;
            b *= i;
            e *= i;
            f *= i;
            p *= i;
            c *= i;
            r *= i;
        }
        this.physical *= b;
        this.physical = (this.physical < 0) ? 0 : this.physical;
        this.energy *= e;
        this.energy = (this.energy < 0) ? 0 : this.energy;
        this.fire *= f;
        this.fire = (this.fire < 0) ? 0 : this.fire;
        this.poison *= p;
        this.poison = (this.poison < 0) ? 0 : this.poison;
        this.cryo *= c;
        this.cryo = (this.cryo < 0) ? 0 : this.cryo;
        this.radiation *= r;
        this.radiation = (this.radiation < 0) ? 0 : this.radiation;
        return this;
    }

    // DEPRECATED!!! To build charts (probe hit) isCrit = onlyCrit, !isCrit = onlyNotCrit
    calcAverageTimeDamage(hit, isCrit, accuracy, shotsPerSec) {
        if (isCrit) {
            for (let i = 0; i < hit.critDamages.length; i++) {
                this.gatherTimeDamage(hit, hit.critDamages[i]);
            }
        } else {
            for (let i = 0; i < hit.damages.length; i++) {
                this.gatherTimeDamage(hit, hit.damages[i]);
            }
        }
        let totalDamage = 0;
        this.timeDamages.forEach((items, key, map) => {
            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                let ratio = item.time * shotsPerSec * item.accuracy / 100 * item.chance / 100 * accuracy;
                ratio = (ratio > 1) ? 1 : ratio;
                let damagePerSec = this.calculateFinalDamage(item.value, item.iType, false, false, 1);
                totalDamage += damagePerSec * ratio;
            }
        }, this);
        this.timeDamages.clear();
        return totalDamage;
    }
    
    isNoTimeDamagesPresented(hit) {
        for (let i = 0; i < hit.damages.length; i++) {
            const damage = hit.damages[i];
            if (damage.time === 0) {
                return true;
            }
        }
        for (let i = 0; i < hit.critDamages.length; i++) {
            const damage = hit.critDamages[i];
            if (damage.time === 0) {
                return true;
            }
        }
        return false;
    }
    
    takeDamage(hit) {

        // Dead
        if (this.health <= 0) {
            return true;
        }
        if (!hit) { // No information
            return false;
        }
        this.currentHit = hit;
        this.bulletCount = hit.bulletCount;
        this.lastTotalDamage = 0;
        this.lastTotalDamageWithAccuracy = 0;
        this.lastTotalDamageNoTime = 0;
        this.lastTotalDamageTime = 0;
        this.lastDamageNoTime = 0;
        this.lastExpDamageNoTime = 0;
        this.dTime = hit.deltaTime;
        if (!hit.idle) {
            this.hits += 1;
        }
        this.resetEffectStates();
        
        // Look for any damages including time damages if some type of attack is presented
        this.bleeding = this.getCreatureHasDamage(hit.damages, hit.critDamages, DamageTypes.bleed);
        this.poisoning = this.getCreatureHasDamage(hit.damages, hit.critDamages, DamageTypes.poison) && !this.creatureInfo.immuneToPoison;
        this.freezing = this.getCreatureHasDamage(hit.damages, hit.critDamages, DamageTypes.cryo);
        this.burning = this.getCreatureHasDamage(hit.damages, hit.critDamages, DamageTypes.fire);
        const exp = this.getCreatureHasDamage(hit.damages, hit.critDamages, DamageTypes.explosive);
        const isNoTimeDamages = this.isNoTimeDamagesPresented(hit);
        this.bashing = (isNoTimeDamages && (hit.bash > 0 || hit.powerAttack > 0));
        this.crippling = (isNoTimeDamages && hit.cripple > 0);
        if (exp) {
            this.isExp = exp;
        }
        if (this.bleeding) {
            this.isBleed = this.bleeding;
        }
        if (this.poisoning) {
            this.isPoisoned = this.poisoning;
        }
        if (this.burning) {
            this.isBurned = this.burning;
        }
        if (this.freezing) {
            this.isFrozen = this.freezing;
        }
        if (this.crippling) {
            this.isCrippled = this.crippling;
        }
        if (this.bashing) {
            this.isBashed = this.bashing;
        }

        // Run through damages to cause damage
        // Precook conditionals
        this.currentConditionalBDB = this.getConditionalBDB(hit) + hit.tempBDB;
        this.applyNoTimeDamages(hit, hit.damages);

        if (hit.critShot) {

            // TODO: Should we apply boosts to crit damages? How does this work?
            this.applyNoTimeDamages(hit, hit.critDamages);
        }

        // So no need to add deltaTime as the death is instant after shot
        if (!this.isDead()) {
            const dT = this.applyTimeDamages(hit, hit.damages, hit.critDamages);
            this.lifeTime += dT;
        }
        this.recordDamage(hit);

        return this.isDead();
    }

    getCreatureHasDamage(damages, critDamages, iKind) {
        for (let i = 0; i < damages.length; i++) {
            const damageInfo = damages[i];
            if (damageInfo.iKind === iKind) {
                return true;
            }
        }
        for (let i = 0; i < critDamages.length; i++) {
            const damageInfo = critDamages[i];
            if (damageInfo.iKind === iKind) {
                return true;
            }
        }
        let result = false;
        this.timeDamages.forEach((items, key, map) => {
            if (!result) {
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.iKind === iKind) {
                        result = true;
                        break;
                    }
                }
            }
        }, this);
        return result;
    }

    applyNoTimeDamages(hit, damages) {
        for (let i = 0; i < damages.length; i++) {
            if (this.health <= 0) {
                break;
            }
            const damageInfo = damages[i];
            if (damageInfo.time === 0) {
                this.causeNonTimeDamages(hit, damageInfo);
            }
        }
    }

    // Return delta time of actual life time of a creature (if it is not dead then this.dTime will be returned)
    applyTimeDamages(hit, damages, critDamages) {
        for (let i = 0; i < damages.length; i++) {
            this.gatherTimeDamage(hit, damages[i]);
        }
        for (let i = 0; i < critDamages.length; i++) {
            this.gatherTimeDamage(hit, critDamages[i]);
        }
        return this.causeTimeDamages();
    }

    recordDamage(hit) {
        if (this.minTotalDamage === 0 || this.lastTotalDamage < this.minTotalDamage) {
            this.minTotalDamage = (this.lastTotalDamage === 0) ? this.minTotalDamage : this.lastTotalDamage;
        }
        if (this.maxTotalDamage < this.lastTotalDamage) {
            this.maxTotalDamage = this.lastTotalDamage;
        }
        if (!hit.critShot && !hit.headShot) {
            if (this.minNormalShot === 0 || this.lastDamageNoTime < this.minNormalShot) {
                this.minNormalShot = (this.lastDamageNoTime === 0) ? this.minNormalShot : this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalShot) {
                this.maxNormalShot = this.lastDamageNoTime;
            }
            if (this.minExpShot === 0 || this.lastExpDamageNoTime < this.minExpShot) {
                this.minExpShot = (this.lastExpDamageNoTime === 0) ? this.minExpShot : this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpShot) {
                this.maxExpShot = this.lastExpDamageNoTime;
            }
        } else if (!hit.critShot && hit.headShot) {
            if (this.minHeadShot === 0 || this.lastDamageNoTime < this.minHeadShot) {
                this.minHeadShot = (this.lastDamageNoTime === 0) ? this.minHeadShot : this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxHeadShot) {
                this.maxHeadShot = this.lastDamageNoTime;
            }
            if (this.minHeadExpShot === 0 || this.lastExpDamageNoTime < this.minHeadExpShot) {
                this.minHeadExpShot = (this.lastExpDamageNoTime === 0) ? this.minHeadExpShot : this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxHeadExpShot) {
                this.maxHeadExpShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && !hit.headShot) {
            if (this.minNormalCritShot === 0 || this.lastDamageNoTime < this.minNormalCritShot) {
                this.minNormalCritShot = (this.lastDamageNoTime === 0) ? this.minNormalCritShot : this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalCritShot) {
                this.maxNormalCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritShot === 0 || this.lastExpDamageNoTime < this.minExpCritShot) {
                this.minExpCritShot = (this.lastExpDamageNoTime === 0) ? this.minExpCritShot : this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritShot) {
                this.maxExpCritShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && hit.headShot) {
            if (this.minNormalHeadCritShot === 0 || this.lastDamageNoTime < this.minNormalHeadCritShot) {
                this.minNormalHeadCritShot = (this.lastDamageNoTime === 0) ? this.minNormalHeadCritShot : this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalHeadCritShot) {
                this.maxNormalHeadCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritHeadShot === 0 || this.lastExpDamageNoTime < this.minExpCritHeadShot) {
                this.minExpCritHeadShot = (this.lastExpDamageNoTime === 0) ? this.minExpCritHeadShot : this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritHeadShot) {
                this.maxExpCritHeadShot = this.lastExpDamageNoTime;
            }
        }
    }

    damageSatisfiedConditions(damageInfo) {
        if (damageInfo.bashOnly) {
            return this.bashing;
        }
        return true;
    }

    // TODO: What the bonuses will work here? cripple, bash, power, total, crit, sneak?
    gatherTimeDamage(hit, damageInfo) {
        if (damageInfo.time <= 0 || !this.damageSatisfiedConditions(damageInfo)) {
            return;
        }
        const value = damageInfo.damage;

        // TODO: The way of stacking is unknown (may be there is no stacking at all)
        if (damageInfo.stack) {
            const existedDamages = this.timeDamages.get(damageInfo.index);
            if (existedDamages) {
                if (existedDamages.length < 10) {
                    existedDamages.push(this.buildTimeDamageItem(damageInfo, value));
                }
            } else {
                this.timeDamages.set(damageInfo.index, [this.buildTimeDamageItem(damageInfo, value)]);
            }
        } else {
            this.timeDamages.set(damageInfo.index, [this.buildTimeDamageItem(damageInfo, value)]);
        }
    }

    buildTimeDamageItem(damageInfo, value) {
        return {bonuses: damageInfo.bonuses, chance: damageInfo.chance, accuracy: damageInfo.finalAccuracy, iKind: damageInfo.iKind, iType: damageInfo.iType, time: damageInfo.time, value: value, index: damageInfo.index}
    }

    timeDamagesHandler(items, key, map) {

        // There could be many items if time damages stack.
        for (let i = 0; i < items.length; i++) {
            let dTime = this.dTime;
            const item = items[i];
            if (item.time < dTime) {
                dTime = item.time;
                item.time = 0;
            } else {
                item.time -= dTime;
            }
            let damage = item.value; // Damage per second
            let bonus = this.getBDB(this.currentHit, item.iType, item.iKind);
            let totalBonus = this.getTotalBonus(this.currentHit);
            if (!item.bonuses.isBonusMult) {
                bonus = 1;
                totalBonus = 1;
            }
            damage = damage * bonus * totalBonus;
            if (item.bonuses.isBonusCrit) {
                damage += this.getCrit(this.currentHit, item.value);
            }
            if (item.bonuses.isBonusSneak) {
                damage += this.getSneak(this.currentHit, item.value, totalBonus);
            }
            this.tdCounter += 1;
            let damagePerSec = this.calculateFinalDamage(damage, item.iType, false, false, 1);
            this.timeDamagesPerSecondPerHit += damagePerSec;
            let finalDamage = this.causeFinalDamage(damage, item.iType, false, false, dTime);
            this.sumTimeDamagePerHit += finalDamage;
        }
    }

    deleteTimeDamages(items, key, map) {
        map.set(key, items.filter(item => item.time > 0));
    }

    getMaxTimeEffects() {
        return this.maxTimeEffects;
    }

    // Return delta time of actual life time of a creature (if it is not dead then this.dTime will be returned)
    causeTimeDamages() {
        this.tdCounter = 0;
        this.timeDamagesPerSecondPerHit = 0;
        this.sumTimeDamagePerHit = 0;
        let creatureHealth = this.health;
        this.timeDamages.forEach(this.timeDamagesHandler, this);
        this.timeDamages.forEach(this.deleteTimeDamages);
        if (this.maxTimeEffects < this.tdCounter) {
            this.maxTimeEffects = this.tdCounter;
        }
        if (this.isDead()) {
            this.sumTimeDamage += creatureHealth;
            return creatureHealth / this.timeDamagesPerSecondPerHit;
        } else {
            this.sumTimeDamage += this.sumTimeDamagePerHit;
            return this.dTime;
        }
    }

    getConditionalBDB(hit) {
        let result = 0;
        const dynamicBonuses = hit.dynamicBDB;
        if (this.health === this.creatureInfo.h) {
            result += dynamicBonuses.firstBlood;
        }
        if (this.bashing) {
            result += dynamicBonuses.bash;
        }
        if (this.burning) {
            result += dynamicBonuses.burned;
        }
        if (this.poisoning) {
            result += dynamicBonuses.poisoned;
        }
        return result;
    }

    getBDB(hit, iType, iKind) {
        let bonus = hit.bonusMult.get(iType) + this.currentConditionalBDB;
        bonus += this.getCreatureBonusMultiplier(hit.creatureDamageBonuses);
        bonus += hit.cripple;
        bonus += hit.powerAttack;
        bonus += hit.bash;
        if (iKind === DamageTypes.explosive) {
            bonus += hit.expDTypeBonus;
        }
        return bonus;
    }

    getCrit(hit, baseDamage) {
        let crit = 0;
        if (hit.critShot) {
            this.critPercent = hit.critBoost;
            crit = baseDamage * hit.critBoost;
        }
        return crit;
    }

    getSneak(hit, baseDamage, totalBonus) {
        let sneak = 0;
        if (hit.sneakShot) {
            if (hit.sneak) {
                this.isSneak = true;
            }
            this.sneakPercent = hit.sneak;
            sneak = baseDamage * hit.sneak * totalBonus;
        }
        return sneak;
    }

    getCritExp(hit, expValue, crit) {
        let critExp = 0;
        if (expValue > 0) {
            critExp = crit * hit.expBonus;
        }
        return critExp;
    }

    causeNonTimeDamages(hit, damageInfo) {
        if (!this.damageSatisfiedConditions(damageInfo)) {
            return;
        }
        const baseDamage = damageInfo.damage;
        let bonus = this.getBDB(hit, damageInfo.iType, damageInfo.iKind);
        let totalBonus = this.getTotalBonus(hit);
        let expBonus = hit.expBonus;
        let tenderizer = hit.tenderizer;
        if (!damageInfo.bonuses.isBonusMult) {
            bonus = 1;
            totalBonus = 1;
            expBonus = 0;
            tenderizer = 1;
        }
        let value = baseDamage * bonus * totalBonus;
        let crit = this.getCrit(hit, baseDamage);
        let sneak = this.getSneak(hit, baseDamage, totalBonus);

        let expValue = this.getExplosiveDamage(value, hit.isRange, damageInfo.iType, damageInfo.iKind, expBonus);
        let critExp = this.getCritExp(hit, expValue, crit);

        crit = (damageInfo.bonuses.isBonusCrit) ? crit : 0;
        critExp = (damageInfo.bonuses.isBonusCrit) ? critExp : 0;
        sneak = (damageInfo.bonuses.isBonusSneak) ? sneak : 0;
        value += sneak;
        value += crit;

        expValue *= tenderizer;
        expValue += critExp;
        let finalDamage = this.causeFinalDamage(value, damageInfo.iType, hit.headShot, false, 1);
        this.memoDamage(finalDamage, false, false, damageInfo.chance, damageInfo.finalAccuracy);

        // Explosives add for each bullet (no headshot)
        const nonCritExp = expValue - critExp;
        if (expValue > 0) {
            for (let i = 0; i < this.bulletCount; i++) {
                if (i === 0) { // Seems that crit exp must be added only for one bullet?
                    finalDamage = this.causeFinalDamage(expValue, damageInfo.iType, false, true, 1);
                } else {
                    finalDamage = this.causeFinalDamage(nonCritExp, damageInfo.iType, false, true, 1);
                }
                this.memoDamage(finalDamage, false, true, damageInfo.chance, damageInfo.finalAccuracy);
            }
        }
    }


    memoDamage(finalDamage, timeDamage, expDamage, chance, accuracy) {
        chance = chance / 100.0;
        accuracy = accuracy / 100.0;
        this.lastTotalDamage += finalDamage;
        this.lastTotalDamageWithAccuracy += finalDamage * chance * accuracy;
        if (!timeDamage) {
            this.lastTotalDamageNoTime += finalDamage;
        } else {
            this.lastTotalDamageTime += finalDamage;
        }
        if (!timeDamage && !expDamage) {
            this.lastDamageNoTime += finalDamage;
        } else if (!timeDamage && expDamage) {
            this.lastExpDamageNoTime += finalDamage;
        }
    }

    getArmorValue(type) {
        switch(type) {
            case DamageTypes.dtPhysical:
                return this.physical;
            case DamageTypes.dtEnergy:
                return this.energy;
            case DamageTypes.dtFire:
                return this.fire;
            case DamageTypes.dtPoison:
                return this.poison;
            case DamageTypes.dtCryo:
                return this.cryo;
            case DamageTypes.dtRadiation:
                return this.radiation;
            default:
                return 0;
        }
    }

    // Only range, no-time, no bleed, physical
    // Bonus which is multiplied from physical damage
    getExplosiveDamage(value, isRange, iType, iKind, expBonus) {
        if (iKind === DamageTypes.bleed) {
            return 0;
        }
        if (isRange) {
            if (iType === DamageTypes.dtPhysical && iKind === DamageTypes.physical) {
                return value * expBonus;
            }
        }
        return 0;
    }

    getTotalBonus(hit) {
        let totalBonus = hit.totalDamageBonus * hit.tenderizer * hit.additionalTotalBonus;
        totalBonus *= ((this.health / this.creatureInfo.h) < 0.4) ? hit.executionerBonus : 1.0;
        return totalBonus;
    }

    getCreatureBonusMultiplier(creatureDamageBonuses) {
        let result = 0;
        if (this.creatureInfo.isDummy) {
            return 0;
        }
        for (let [, damageBonus] of creatureDamageBonuses) {
            const bonusName = damageBonus.name;
            const bonusMult = damageBonus.value;
            if (this.tags.includes(bonusName) || this.body === bonusName || this.name === bonusName) {
                result += (bonusMult / 100.0);
            }
        }
        return result;
    }

    getLastTotalDamage() {
        return this.lastTotalDamage;
    }

    getLastTotalDamageWithAccuracy() {
        return this.lastTotalDamageWithAccuracy;
    }

    getGetLastTotalDamageNoTime() {
        return this.lastTotalDamageNoTime;
    }

    getLastTotalDamageTime() {
        return this.lastTotalDamageTime;
    }

    // This method considers value for time damage per second
    // non-time damage -> time=1
    causeFinalDamage(value, iType, isHead, explosive, time) {
        const finalDamage = this.calculateFinalDamage(value, iType, isHead, explosive, time);
        this.health -= finalDamage;

        // It is useful if you need to check average hit to determine the best weapon especially if a creature live time is 0
        this.sumDamages += finalDamage;
        if (finalDamage > this.maxHit) {
            this.maxHit = finalDamage;
        }
        return finalDamage;
    }

    calculateFinalDamage(value, iType, isHead, explosive, time) {
        let finalDamage;
        let damageReduction = 1 - this.damageReduction;

        // No reduction if bleeding (storm boss)
        if (this.bleeding && this.damageReductionOnlyNotBleeding) {
            damageReduction = 1;
        }
        if (explosive && !this.expResistance) {
            finalDamage = value * damageReduction;
        } else {
            finalDamage = this.finalDamage(value, iType) * damageReduction;
        }
        if (isHead) {
            finalDamage *= this.headMult;
        } else {
            finalDamage *= this.bodyMult;
        }
        finalDamage *= time;
        return finalDamage;
    }

    getAverageHit() {
        if (this.hits === 0) {
            return 0;
        }
        return this.sumDamages / this.hits;
    }

    finalDamage(value, iType) {
        if (iType === DamageTypes.dtRadiation && this.immuneToRadiation) {
            return 0;
        } else if (iType === DamageTypes.dtPoison && this.immuneToPoison) {
            return 0;
        }
        const armor = this.getArmorValue(iType);
        return Creature.finalDamageFormula(value, armor);
    }

    static finalDamageFormula(damage, armor) {
        if (armor === Infinity) {
            return 0;
        } else if (armor === 0) {
            return damage;
        }
        let k = (0.15 * damage / armor) ** 0.365;
        if (k > 0.99) {
            k = 0.99;
        } else if (k < 0.01) {
            k = 0.01;
        }
        return  k * damage;
    }

    static reverseDamage(damage, armor, reduction, headShot) {
        const e1 = 1000 / 365;
        const e2 = 365 / 1365;
        const coef = 100 / 15;
        damage = damage / parseFloat(headShot);
        damage = damage / (1 - parseFloat(reduction));
        return Math.pow(Math.pow(damage, e1) * coef * armor, e2);
    }

    isDead() {
        return this.health <= 0;
    }

    totalTime() {
        return parseInt(this.lifeTime * 1000);
    }

    formDamageString(minDamage, maxDamage, bulletCount, roundNumber) {
        if (minDamage === maxDamage) {
            return numberToString(minDamage / bulletCount, roundNumber) + " x " + bulletCount;
        }
        return "(↓" + numberToString(minDamage / bulletCount, roundNumber) + " - ↑" + numberToString(maxDamage / bulletCount, roundNumber) + ") x " + bulletCount;
    }

    formDeadReport(reloads, reloadsTime, shotsPerSec) {
        if (!this.reported) {
            this.reported = true;
            this.creatureInfo.averageHit = this.getAverageHit();
            this.creatureInfo.maxHit = this.maxHit;
            this.creatureInfo.sneak = (this.sneakPercent > 0) ? numberToString(this.sneakPercent * 100.0, 1) + "%" : "";
            this.creatureInfo.crit = (this.critPercent > 0) ? numberToString(this.critPercent * 100.0, 1) + "%" : "";
            this.creatureInfo.totalDamage = "↓" + numberToString(this.minTotalDamage, 1) + " - ↑" + numberToString(this.maxTotalDamage, 1);
            this.creatureInfo.normalDamage = this.formDamageString(this.minNormalShot, this.maxNormalShot, this.bulletCount, 1);
            this.creatureInfo.headShotDamage = this.formDamageString(this.minHeadShot, this.maxHeadShot, this.bulletCount, 1);
            this.creatureInfo.headExpShotDamage = this.formDamageString(this.minHeadExpShot, this.maxHeadExpShot, this.bulletCount, 1);
            this.creatureInfo.critNormalDamage = this.formDamageString(this.minNormalCritShot, this.maxNormalCritShot, this.bulletCount, 1);
            this.creatureInfo.critHeadNormalDamage = this.formDamageString(this.minNormalHeadCritShot, this.maxNormalHeadCritShot, this.bulletCount, 1);
            this.creatureInfo.explosiveDamage = this.formDamageString(this.minExpShot, this.maxExpShot, this.bulletCount, 1);
            this.creatureInfo.critExplosiveDamage = this.formDamageString(this.minExpCritShot, this.maxExpCritShot, this.bulletCount, 1);
            this.creatureInfo.critExplosiveHeadDamage = this.formDamageString(this.minExpCritHeadShot, this.maxExpCritHeadShot, this.bulletCount, 1);
            this.creatureInfo.isCrit = this.minNormalCritShot > 0 || this.minNormalHeadCritShot > 0;
            this.creatureInfo.isHead = this.minHeadShot > 0 || this.minHeadExpShot > 0 || this.minNormalHeadCritShot > 0 || this.minExpCritHeadShot > 0;
            this.creatureInfo.isExp = this.minHeadExpShot > 0 || this.minExpShot > 0 || this.minExpCritShot > 0 || this.minExpCritHeadShot > 0 || this.isExp;
            this.creatureInfo.isSneak = this.isSneak;
            this.creatureInfo.isBleed = this.isBleed;
            this.creatureInfo.isPoisoned = this.isPoisoned;
            this.creatureInfo.isBurned = this.isBurned;
            this.creatureInfo.isFrozen = this.isFrozen;
            this.creatureInfo.isCrippled = this.isCrippled;
            this.creatureInfo.isBashed = this.isBashed;
            if (this.isDead()) {
                this.creatureInfo.ammo = this.hits;
                this.creatureInfo.reloads = reloads;
                this.creatureInfo.reloadsTime = reloadsTime;
                this.creatureInfo.lifeTime = this.totalTime();
            } else { // Damage is to small, just emulate
                const damagedHealth = this.creatureInfo.h - this.health;
                if (damagedHealth === 0) {
                    this.creatureInfo.ammo = Infinity;
                    this.creatureInfo.reloads = Infinity;
                    this.creatureInfo.reloadsTime = Infinity;
                    this.creatureInfo.lifeTime = Infinity;
                    this.sumTimeDamage = 0;
                } else {
                    const ratio = this.creatureInfo.h / damagedHealth;
                    this.creatureInfo.reloads = parseInt(reloads * ratio) + 1;
                    this.creatureInfo.reloadsTime = parseInt(reloadsTime * ratio);
                    this.creatureInfo.ammo = parseInt(this.hits * ratio);
                    this.creatureInfo.lifeTime = parseInt((this.lifeTime * ratio) * 1000);
                    this.sumTimeDamage *= ratio;
                }
            }
            let timeDamage = 0;
            if (this.creatureInfo.lifeTime > 0) {
                timeDamage = this.sumTimeDamage / this.creatureInfo.lifeTime * 1000;
                if (timeDamage === 0) {
                    this.creatureInfo.averageTimeDamage = 0;
                } else {;
                    this.creatureInfo.averageTimeDamage = "~" + (+timeDamage.toFixed(4)).toString() + " / sec.";
                }
            } else {
                this.creatureInfo.averageTimeDamage = 0;
            }
            const maxDamage = this.maxTotalDamage * shotsPerSec + timeDamage;
            this.creatureInfo.dps = this.creatureInfo.h / this.creatureInfo.lifeTime * 1000;
            if (this.creatureInfo.lifeTime === 0 || this.creatureInfo.dps > maxDamage) {
                this.creatureInfo.dps = maxDamage;
            }
            this.creatureInfo.dps = (+this.creatureInfo.dps.toFixed(3)).toString();
        }
    }
}