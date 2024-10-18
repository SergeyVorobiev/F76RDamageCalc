import { determineType, determineBody } from './CreatureTypes';


export default class Creature {

    constructor(creatureInfo) {
        this.creatureInfo = creatureInfo;
        this.physical = creatureInfo.b;
        this.energy = creatureInfo.e;
        this.fire = creatureInfo.f;
        this.poison = creatureInfo.p;
        this.cryo = creatureInfo.c;
        this.name = creatureInfo.name;
        this.radiation = creatureInfo.r;
        this.health = creatureInfo.h;
        this.damageReduction = creatureInfo.damageReduction;
        this.headMult = creatureInfo.headShot;
        this.body = creatureInfo.body;
        this.type = creatureInfo.type;
        if (this.type === "" || creatureInfo.rank === "creature") {
            this.type = determineType(creatureInfo.name);
            if (creatureInfo.rank === "creature") {
                creatureInfo.type = this.type;
            }

        }
        if (this.body === "" || creatureInfo.rank === "creature") {
            this.body = determineBody(creatureInfo.name);
            if (creatureInfo.rank === "creature") {

                // use user set
                if (creatureInfo.userBody !== "normal") {
                    this.body = creatureInfo.userBody;
                }
                creatureInfo.body = this.body;
            }
        }
        this.expResistance = true;
        this.reported = false;
        this.hits = 0;
        this.lifeTime = 0;
        this.lastShotTime = 0;
        this.timeDamages = new Map();
        this.lastTotalDamage = 0;
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
    }

    getName() {
        return this.name;
    }

    getArmor() {
        return [this.physical, this.energy, this.fire, this.poison, this.cryo, this.radiation];
    }

    // To speed up the process we reduce armors in advance as they are basically static (except some cases like of TOFT
    // where we ignore it anyway)
    reduceArmor(antiArmor) {
        let b = (1 - antiArmor.b / 100.0);
        let e = (1 - antiArmor.e / 100.0);
        let f = (1 - antiArmor.f / 100.0);
        let p = (1 - antiArmor.p / 100.0);
        let c = (1 - antiArmor.c / 100.0);
        let r = (1 - antiArmor.r / 100.0);
        if (this.type === "insect") {
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
    }

    takeDamage(hit) {

        // Dead
        if (this.health <= 0) {
            return true;
        }
        this.bulletCount = hit.bulletCount;
        this.lastTotalDamage = 0;
        this.lastDamageNoTime = 0;
        this.lastExpDamageNoTime = 0;
        this.hits += 1;
        this.lifeTime += hit.deltaTime;
        this.lastShotTime = hit.deltaTime;

        // Run through damages to cause damage
        this.applyDamages(hit, hit.damages);
        if (hit.critShot) {
            this.applyCritDamages(hit, hit.critDamages);
        }
        return this.isDead();
    }

    // TODO: Should we apply boosts to crit damages? How does this work?
    applyCritDamages(hit, damages) {
        this.applyDamages(hit, damages);
    }

    applyDamages(hit, damages) {
        for (let i = 0; i < damages.length; i++) {
            const damageInfo = damages[i];

            if (damageInfo.time === 0) {
                this.causeNonTimeDamages(hit, damageInfo);
            } else {
                this.gatherTimeDamages(hit, damageInfo);
                this.causeTimeDamages(damageInfo.type);
            }
            if (this.health <= 0) {
                break;
            }
        }
        this.recordDamage(hit);
    }

    recordDamage(hit) {
        if (this.minTotalDamage === 0 || this.lastTotalDamage < this.minTotalDamage) {
            this.minTotalDamage = this.lastTotalDamage;
        }
        if (this.maxTotalDamage < this.lastTotalDamage) {
            this.maxTotalDamage = this.lastTotalDamage;
        }
        if (!hit.critShot && !hit.headShot) {
            if (this.minNormalShot === 0 || this.lastDamageNoTime < this.minNormalShot) {
                this.minNormalShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalShot) {
                this.maxNormalShot = this.lastDamageNoTime;
            }
            if (this.minExpShot === 0 || this.lastExpDamageNoTime < this.minExpShot) {
                this.minExpShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpShot) {
                this.maxExpShot = this.lastExpDamageNoTime;
            }
        } else if (!hit.critShot && hit.headShot) {
            if (this.minHeadShot === 0 || this.lastDamageNoTime < this.minHeadShot) {
                this.minHeadShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxHeadShot) {
                this.maxHeadShot = this.lastDamageNoTime;
            }
            if (this.minHeadExpShot === 0 || this.lastExpDamageNoTime < this.minHeadExpShot) {
                this.minHeadExpShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxHeadExpShot) {
                this.maxHeadExpShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && !hit.headShot) {
            if (this.minNormalCritShot === 0 || this.lastDamageNoTime < this.minNormalCritShot) {
                this.minNormalCritShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalCritShot) {
                this.maxNormalCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritShot === 0 || this.lastExpDamageNoTime < this.minExpCritShot) {
                this.minExpCritShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritShot) {
                this.maxExpCritShot = this.lastExpDamageNoTime;
            }
        } else if (hit.critShot && hit.headShot) {
            if (this.minNormalHeadCritShot === 0 || this.lastDamageNoTime < this.minNormalHeadCritShot) {
                this.minNormalHeadCritShot = this.lastDamageNoTime;
            }
            if (this.lastDamageNoTime > this.maxNormalHeadCritShot) {
                this.maxNormalHeadCritShot = this.lastDamageNoTime;
            }
            if (this.minExpCritHeadShot === 0 || this.lastExpDamageNoTime < this.minExpCritHeadShot) {
                this.minExpCritHeadShot = this.lastExpDamageNoTime;
            }
            if (this.lastExpDamageNoTime > this.maxExpCritHeadShot) {
                this.maxExpCritHeadShot = this.lastExpDamageNoTime;
            }
        }
    }

    // TODO: What the bonuses will work here? cripple, bash, power, total, crit, sneak?
    gatherTimeDamages(hit, damageInfo) {
        const baseDamage = damageInfo.damage;
        let bonus = hit.bonusMult[damageInfo.type];
        bonus += this.getCreatureBonusMultiplier(hit.creatureDamageBonuses);
        const totalBonus = this.getTotalBonus(hit);
        let value = baseDamage * bonus * totalBonus;

        // TODO: The way of stacking is unknown (may be there is no stacking at all)
        if (damageInfo.stack) {
            const existedDamages = this.timeDamages.get(damageInfo.index);
            if (existedDamages) {
                existedDamages.push({damageType: damageInfo.type, time: damageInfo.time, value: value, index: damageInfo.index});
            } else {
                this.timeDamages.set(damageInfo.index, [{damageType: damageInfo.type, time: damageInfo.time, value: value, index: damageInfo.index}]);
            }
        } else {
            this.timeDamages.set(damageInfo.index, [{damageType: damageInfo.type, time: damageInfo.time, value: value, index: damageInfo.index}]);
        }
    }

    timeDamagesHandler(items, key, map) {
        let dTime = this.lastShotTime;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];

            // Protect
            if (dTime === 0) {
                item.time = 0;
            }
            else if (item.time < dTime) {
                dTime = item.time;
                item.time = 0;
            } else {
                item.time -= dTime;
            }
            const damage = item.value * dTime;
            this.causeFinalDamage(damage, item.damageType, false, false);
        }
        this.timeDamages.forEach(this.deleteTimeDamages);
    }

    deleteTimeDamages(items, key, map) {
        map.set(key, items.filter(item => item.time > 0));
    }

    causeTimeDamages(damageType) {
        this.timeDamages.forEach(this.timeDamagesHandler, this);
    }

    causeNonTimeDamages(hit, damageInfo) {
        const baseDamage = damageInfo.damage;
        let bonus = hit.bonusMult[damageInfo.type];
        bonus += this.getCreatureBonusMultiplier(hit.creatureDamageBonuses);
        bonus += hit.cripple;
        bonus += hit.powerAttack;
        bonus += hit.lastShotBonus;
        if (damageInfo.kind === "explosive") {
            bonus += hit.expDTypeBonus;
        }
        let crit = 0;
        if (hit.critShot) {
            crit = baseDamage * hit.critBoost;
        }
        if (damageInfo.type === "dtPhysical" && damageInfo.kind === "physical") {
            bonus += hit.bash;
        }
        if (this.health === this.creatureInfo.h) {
            bonus += hit.firstBloodBonus;
        }
        const totalBonus = this.getTotalBonus(hit);
        let sneak = 0;
        if (hit.sneakShot) {
            sneak = baseDamage * hit.sneak * totalBonus;
        }
        let value = baseDamage * bonus * totalBonus;
        let expValue = this.getExplosiveDamage(value, hit.weaponType, damageInfo.type, damageInfo.kind, hit.expBonus);
        let critExp = 0;
        if (expValue > 0) {
            critExp = crit * hit.expBonus;
        }
        value += sneak;
        value += crit;
        expValue *= hit.tenderizer;
        expValue += critExp;
        const timeDamage = damageInfo.time > 0;
        let finalDamage = this.causeFinalDamage(value, damageInfo.type, hit.headShot, false);
        this.addDamage(finalDamage, timeDamage, false);

        // Explosives add for each bullet (no headshot)
        const nonCritExp = expValue - critExp;
        for (let i = 0; i < this.bulletCount; i++) {
            if (i === 0) { // Seems that crit exp must be added only for one bullet?
                finalDamage = this.causeFinalDamage(expValue, damageInfo.type, false, true);
            } else {
                finalDamage = this.causeFinalDamage(nonCritExp, damageInfo.type, false, true);
            }
            this.addDamage(finalDamage, timeDamage, true);
        }
    }

    addDamage(finalDamage, timeDamage, expDamage) {
        this.lastTotalDamage += finalDamage;
        if (!timeDamage && !expDamage) {
            this.lastDamageNoTime += finalDamage;
        } else if (!timeDamage && expDamage) {
            this.lastExpDamageNoTime += finalDamage;
        }
    }

    getArmorValue(type) {
        switch(type) {
            case "dtPhysical":
                return this.physical;
            case "dtEnergy":
                return this.energy;
            case "dtFire":
                return this.fire;
            case "dtPoison":
                return this.poison;
            case "dtCryo":
                return this.cryo;
            case "dtRadiationExposure":
                return this.radiation;
            default:
                return 0;
        }
    }

    getExplosiveDamage(value, weaponType, damageType, damageKind, expBonus) {
        if (damageKind === 'bleed') {
            return 0;
        }
        if (weaponType !== "Melee" && weaponType !== "Unarmed" && weaponType !== "Thrown") {
            if ((damageType === 'dtPhysical' && damageKind === "physical") || damageType === 'dtEnergy') {
                return value * expBonus;
            }
        }
        return 0;
    }

    getTotalBonus(hit) {
        let totalBonus = hit.totalDamageBonus * hit.tenderizer;
        totalBonus *= (this.health / this.creatureInfo.h < 0.4) ? hit.executionerBonus : 1.0;
        return totalBonus;
    }

    getCreatureBonusMultiplier(creatureDamageBonuses) {
        let result = 0;
        for (let [, damageBonus] of creatureDamageBonuses) {
            if (damageBonus.name === "any") {  // All
                result += (damageBonus.value / 100.0);
            } else if (damageBonus.name === this.name) {
                result += (damageBonus.value / 100.0);
            } else if (damageBonus.name === this.body) { // Body type
                result += (damageBonus.value / 100.0);
            } else if (damageBonus.name === this.type) {
                result += (damageBonus.value / 100.0);
            }
        }
        return result;
    }

    getLastTotalDamage() {
        return this.lastTotalDamage;
    }

    causeFinalDamage(value, damageType, isHead, explosive) {
        let finalDamage;
        if (explosive && !this.expResistance) {
            finalDamage = value * (1 - this.damageReduction);
        } else {
            finalDamage = this.finalDamage(value, damageType) * (1 - this.damageReduction);
        }
        if (isHead) {
            finalDamage *= this.headMult;
        }
        this.health -= finalDamage;
        return finalDamage;
    }

    finalDamage(value, type) {
        const armor = this.getArmorValue(type);
        if (armor === Infinity) {
            return 0;
        } else if (armor === 0) {
            return value;
        }
        let k = (0.15 * value / armor) ** 0.365;
        if (k > 0.99) {
            k = 0.99;
        } else if (k < 0.01) {
            k = 0.01;
        }
        return  k * value;
    }

    isDead() {
        return this.health <= 0;
    }

    formDeadReport(dps, reloads, reloadsTime) {
        if (!this.reported) {
            this.reported = true;
            this.creatureInfo.totalDamage = "↓" + this.minTotalDamage.toFixed(1) + " - ↑" + this.maxTotalDamage.toFixed(1);
            this.creatureInfo.normalDamage = "(↓" + (this.minNormalShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.headShotDamage = "(↓" + (this.minHeadShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxHeadShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.headExpShotDamage = "(↓" + (this.minHeadExpShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxHeadExpShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critNormalDamage = "(↓" + (this.minNormalCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critHeadNormalDamage = "(↓" + (this.minNormalHeadCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxNormalHeadCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.explosiveDamage = "(↓" + (this.minExpShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critExplosiveDamage = "(↓" + (this.minExpCritShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpCritShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            this.creatureInfo.critExplosiveHeadDamage = "(↓" + (this.minExpCritHeadShot / this.bulletCount).toFixed(1) + " - ↑" + (this.maxExpCritHeadShot / this.bulletCount).toFixed(1) + ") x " + this.bulletCount;
            if (this.isDead()) {
                this.creatureInfo.ammo = this.hits;
                this.creatureInfo.reloads = reloads;
                this.creatureInfo.reloadsTime = reloadsTime;
                this.creatureInfo.lifeTime = parseInt((this.lifeTime - this.lastShotTime) * 1000);
            } else { // Damage is to small, just emulate
                const damagedHealth = this.creatureInfo.h - this.health;
                if (damagedHealth === 0) {
                    this.creatureInfo.ammo = Infinity;
                    this.creatureInfo.reloads = Infinity;
                    this.creatureInfo.reloadsTime = Infinity;
                    this.creatureInfo.lifeTime = Infinity;
                } else {
                    const ratio = this.health / damagedHealth;
                    this.creatureInfo.reloads = reloads + parseInt(reloads * ratio);
                    this.creatureInfo.reloadsTime = reloadsTime + parseInt(reloadsTime * ratio);
                    this.creatureInfo.ammo = this.hits + parseInt(this.hits * ratio);
                    this.creatureInfo.lifeTime = parseInt((this.lifeTime + this.lifeTime * ratio - this.lastShotTime) * 1000);
                }
            }
        }
    }
}