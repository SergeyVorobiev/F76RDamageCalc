import StuffBoostsCollector from '../../boostStuff/StuffBoostsCollector';
import { makeDamageItemCopy, buildBleedDamage } from '../../helpers/mods/DamageSetter';
import AccuracyAdjuster from '../../helpers/AccuracyAdjuster';
import { getLegendary } from '../../helpers/LegendaryProvider';
import CustomConditions from '../../helpers/CustomConditions';
import { DamageTypes } from '../../helpers/Strings';


export function assembleFireRate(wType, wTags, isAuto, speed, triggerDelay, autoDelay, attackDelay) {
    let result = 0;
    let speedX = speed * 10;
    function isLauncher() {
        for (let i = 0; i < wTags.length; i++) {
            const tag = wTags[i];
            if (tag.includes("Launcher")) {
                return true;
            }
        }
        return false;
    }
    if (wType === "Pistol" || wType === "Rifle") {
        if (isAuto) {
            result = speedX / autoDelay;
        } else {
            result = speedX / triggerDelay;
        }
    } else if (wType === "Heavy") {
        if (isAuto) {
            if (isLauncher()) {
                result = speedX / triggerDelay;
            } else {
                if (attackDelay > 1) {
                    result = speedX / (attackDelay / 20);
                } else {
                    result = speedX / autoDelay;
                }
            }
        } else {
            result = speedX / triggerDelay;
        }
    } else if (wType === "Shotgun" || wType === "Bow") {
        result = speedX / triggerDelay;
    } else if (wType === "Melee" || wType === "Unarmed" || wType === "Thrown") {
        if (isAuto) {
            result = speedX / (attackDelay / 20);
        } else {
            result = speedX / attackDelay;
        }
    } else { // All
        if (isAuto) {
            result = speedX / autoDelay;
        } else {
            result = speedX / triggerDelay;
        }

    }
    if (result.toString() === "Infinity") {
        result = 1;
        console.error("Weapon Fire Rate is Infinite");
    }
    if (result === 0) {
        result = 1;
        console.error("Weapon Fire Rate is 0");
    }
    return result;
}

export default class WeaponSpecsAssembler {
    
    constructor(wSpec, perks, extraDamageSettings, additionalDamages, stuffBoost, player, playerStats) {
        this.wSpec = wSpec;
        this.perks = perks;
        this.extraDamageSettings = extraDamageSettings;
        this.additionalDamages = additionalDamages;
        this.stuffBoost = stuffBoost;
        this.playerStats = playerStats;
        this.player = player;
        this.ownerHealth = player.health.value;
    }

    // Except crit damages. See getCritDamages()
    getDamages() {
        let result = [];
        for (let i = 0; i < this.wSpec.damages.length; i++) {
            let damage = this.wSpec.damages[i];
            if (damage.isCrit) {
                continue;
            }
            this.convertConditions(damage);
            damage = makeDamageItemCopy(damage);
            if (damage.time === 0 && damage.interval === 0) {
                damage.damage *= this.wSpec.attackDamage;
            }
            damage.defDamage = damage.damage;
            const kindType = DamageTypes.convertTypeKind(damage.kind);
            damage.iKind = kindType[0];
            damage.iType = kindType[1];
            result.push(damage);
        }
        result = result.concat(this.getDamageFromStuff());

        // Reindex
        for (let i = 0; i < result.length; i++) {
            result[i].index = i;
        }
        this.setFinalAccuracy(result);
        return result;
    }

    getCritBoost() {
        let crit = this.perks.better_criticals.displayed_value + 100 + this.wSpec.crit + StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Crit");
        return crit / 100.0;
    }

    getCritDamages() {
        let result = [];
        for (let i = 0; i < this.wSpec.damages.length; i++) {
            let damage = this.wSpec.damages[i];
            if (!damage.isCrit) {
                continue;
            }
            this.convertConditions(damage);
            damage = makeDamageItemCopy(damage);
            damage.defDamage = damage.damage;
            const kindType = DamageTypes.convertTypeKind(damage.kind);
            damage.iKind = kindType[0];
            damage.iType = kindType[1];
            result.push(damage);
        }
        return result;
    }

    collectTags() {
        let tags = [...this.wSpec.tags];
        if (this.wSpec.ammoType.codeName !== "") {
            tags.push(this.wSpec.ammoType.codeName);
        }
        return tags;
    }

    getStrengthBoost() {
        return this.wSpec.strengthBoost * this.getStrength();
    }

    getStrength() {
        let strength = this.wSpec.strPoints + this.playerStats.strength.value;
        strength += StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Strength");
        if (strength < 0) {
            strength = 0;
        }
        return strength;
    }

    getOwnerHealth() {
        return this.ownerHealth;
    }

    getLegendaryIds() {
        const result = [];
        for (let i = 0; i < this.wSpec.legendary.length; i++) {
            const leg = this.wSpec.legendary[i];
            result.push(leg[0]);
        }
        return result;
    }

    // Static bonuses like aiming, night can be applied directly to static bonus value
    collectStaticConditionalBDB() {
        let result = 0;
        for (let i = 0; i < this.wSpec.damageBonusCond.length; i++) {
            const bonusObject = this.wSpec.damageBonusCond[i];
            this.convertConditions(bonusObject);
            if (bonusObject.type === "BDB") {
                if (bonusObject.fConditions.length === 0) {
                    if (bonusObject.damage < 10) {
                        console.warn("Found a bdb seems to be normalized: " + bonusObject.damage);
                    }
                    result += bonusObject.damage;
                } else { // Considers for now all unconditional are static and all conditional are dynamic
                    // console.warn("Found conditional static damage bonus");
                }
            }
        }
        return result;
    }

    convertConditions(obj) {
        if (obj.fConditions) { // Already converted
            return;
        }
        obj.fConditions = [];
        for (let i = 0; i < obj.conditions.length; i++) {
            const condition = obj.conditions[i];
            const [fCondition, data] = CustomConditions.convertCondition(condition);
            if (fCondition) {
                obj.fConditions.push([fCondition, data]);
            }
        }
    }
    // Dynamic bonuses depend on creature state in a particular moment (poisoned)
    collectDynamicConditionalBDB() {

        const result = [];
        for (let i = 0; i < this.wSpec.damageBonusCond.length; i++) {
            const bonusObject = this.wSpec.damageBonusCond[i];
            this.convertConditions(bonusObject);
            if (bonusObject.type === "BDB") {
                if (bonusObject.fConditions.length === 0) {
                    continue; // If we removed all conditions then static bdb collector already grabbed it
                } else if (bonusObject.fConditions.length === 1) {
                    if (bonusObject.damage > 5) {
                        console.warn("Found a bdb seems not to be normalized: " + bonusObject.damage);
                    }
                    result.push(bonusObject);
                } else {
                    console.error("Base damage bonus does not support more than one condition");
                }
            }
        }
        return result;
    }

    getPinPointerChance() {
        for (let i = 0; i < this.wSpec.legendary.length; i++) {
            const leg = this.wSpec.legendary[i];
            const id = leg[0];
            if (id === '007aca07') { // Pin-Pointer
                return (leg[1]) ? [leg[1], 0.5] : [0, 0];
            }
        }
        return [0, 0];
    }

    collectBDBFromLegendary() {
        let result = 0;
        for (let i = 0; i < this.wSpec.legendary.length; i++) {
            const leg = this.wSpec.legendary[i];
            const id = leg[0];
            const value = (leg[1]) ? leg[1] : 0;
            if (id === '007acbf4' && !this.player.team) { // Fencer
                //
            } else if (id === '007aca07') { // Pin-Pointer
                //
            } else {
                result += value;
            }
        }
        return result;
    }

    getExplosiveBonus() {
        return (this.wSpec.exp + this.wSpec.exp * this.perks.demolition_expert.displayed_value / 100.0) / 100.0;
    }

    getCreatureDamageBonuses() {
        let result = new Map();

        // User
        if (this.additionalDamages.damageToCreature.is_used) {
            result.set("any", {name: "any", value: this.additionalDamages.damageToCreature.value});
        }

        // Perks
        if (this.perks.glow_sight.displayed_value > 0) {
            result.set("glowing", {name: "glowing", value: this.perks.glow_sight.displayed_value});
        }

        // Weapon Effects
        for (let i = 0; i < this.wSpec.creature.length; i++) {
            const creature = this.wSpec.creature[i];
            const name = creature.name.toLowerCase();
            const item = result.get(name);
            if (item) {
                item.value += creature.value;
            } else {
                result.set(name, {name: name, value: creature.value});
            }
        }

        // Consumables
        function collector(item) {
            let types = [];
            if (item.name) {
                types = item.name.split(",");
            } else {
                types = item.type.split(",");
            }
            for (let i = 0; i < types.length; i++) {
                const type = types[i];
                const exist = result.get(type);
                if (exist) {
                    exist.value += item.value;
                } else {
                    result.set(type, {name: type, value: item.value});
                }
            }
        }
        StuffBoostsCollector.collectAllItems(this.stuffBoost.creature, "BDB", collector);
        return result;
    }

    getWeaponType() {
        return this.wSpec.type;
    }

    getHeadShotFrequency() {
        if (this.extraDamageSettings.useHead) {
            return this.extraDamageSettings.headFreq;
        }
        return 0;
    }

    getCritShotFrequency() {
        if (this.extraDamageSettings.useCrit) {
            return this.extraDamageSettings.critFreq;
        }
        return 0;
    }

    getSneakShotFrequency() {
        if (this.extraDamageSettings.useSneak) {
            return 1;
        }
        return 0;
    }

    // returns all possible total damages but tenderizer and executioner separately {value: result, tenderizer: tenderizer, executioner: exec}
    getTotalDamageBonus() {
        let tenderizer = this.perks.tenderizer.displayed_value > 0 ? (1 + this.perks.tenderizer.displayed_value / 100.0) : 1;
        let result = 1.0;
        result *= this.perks.toft.displayed_value > 0 ? (1 + this.perks.toft.displayed_value / 100.0) : 1.0;

        // Seems that follow through works as TOFT only in sneak mode (except melee and unarmed)
        if (this.wSpec.type !== "Melee" && this.wSpec.type !== "Unarmed") {
            result *= this.perks.follow_through.displayed_value > 0 ? (1 + this.perks.follow_through.displayed_value / 100.0) : 1.0;
        }
        result *= (this.additionalDamages.tdb.is_used) ? (1 + this.additionalDamages.tdb.value / 100.0) : 1.0;
        let exec = 1 + this.wSpec.totalD / 100.0;
        return {value: result, tenderizer: tenderizer, executioner: exec};
    }

    getChargeTime() {
        return this.wSpec.chargeTime;
    }

    getIsAuto() {
        return this.wSpec.isAuto === 1;
    }

    // Assume charging is linear
    getChargePenalty() {
        if (this.wSpec.maxChargeTime === 0) {
            return 1;
        }
        let percentage = this.wSpec.chargeTime / this.wSpec.maxChargeTime;
        percentage = (percentage > 1) ? 1 : percentage;
        let minPower = this.wSpec.minPowerMult;
        let maxPower = this.wSpec.maxPowerMult;
        let powerLength = maxPower - minPower; // Assume non negative
        return minPower + percentage * powerLength;
    }

    getStartAttackDelay() {
        return this.wSpec.startAttackDelay;
    }

    getCripple() {
        return {value: this.wSpec.cripple / 100.0, chance: this.wSpec.crippleChance};
    }

    getPowerAttack() {
        return {value: this.wSpec.powerAttack / 100.0, chance: this.wSpec.powerAttackChance};
    }

    getBash() {
        return this.wSpec.bash / 100.0;
    }

    getWeaponName() {
        return this.wSpec.weaponName;
    }

    getDefaultWeaponName() {
        return this.wSpec.defaultName;
    }

    getSneak() {
        const oper = (this.wSpec.type === "Melee" || this.wSpec.type === "Unarmed") ? 0 : this.perks.covert_operative.displayed_value
        let sneak = (oper > 0) ? (oper - 1.0) : 1.0;
        let sandman = this.perks.mister_sandman.displayed_value / 100.0;
        sandman = (this.wSpec.tags.includes("HasSilencer")) ? sandman : 0;

        const ninja = (this.wSpec.type === "Melee" || this.wSpec.type === "Unarmed") ? this.perks.ninja.displayed_value / 100.0 : 0.0;
        const weaponSneak = this.wSpec.sneak / 100.0;
        const stuffSneak = (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Sneak") / 100.0);
        return sneak + sandman + ninja + weaponSneak + stuffSneak;
    }

    // This bonus increase physical explosive damage (bobble head explosive), not an explosive part from total damage (Legendary explosive)
    getExplosivePhysicalBonus() {
        return StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "EXP") / 100.0;
    }

    getBaseDamageMult() {
        let result = 100 + this.getBonusMultFromPerks() + this.getStrengthBoost() + this.wSpec.bonus + this.collectBDBFromLegendary() + this.collectStaticConditionalBDB();

        result += StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BDB");
        let bResult = result + ((this.additionalDamages.ballisticBDB.is_used) ? (this.additionalDamages.ballisticBDB.value) : 0.0);
        let eResult = result + ((this.additionalDamages.energyBDB.is_used) ? (this.additionalDamages.energyBDB.value) : 0.0);
        let fResult = result + ((this.additionalDamages.fireBDB.is_used) ? (this.additionalDamages.fireBDB.value) : 0.0);
        let pResult = result + ((this.additionalDamages.poisonBDB.is_used) ? (this.additionalDamages.poisonBDB.value) : 0.0);
        let cResult = result + ((this.additionalDamages.coldBDB.is_used) ? (this.additionalDamages.coldBDB.value) : 0.0);
        let rResult = result + ((this.additionalDamages.radBDB.is_used) ? (this.additionalDamages.radBDB.value) : 0.0);
        bResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BBDB"));
        eResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "EBDB"));
        fResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "FBDB"));
        pResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "PBDB"));
        cResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "CBDB"));
        rResult += (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "RBDB"));
        const map = new Map();
        map.set(DamageTypes.dtPhysical,  bResult / 100.0);
        map.set(DamageTypes.dtEnergy, eResult/ 100.0);
        map.set(DamageTypes.dtFire, fResult / 100.0);
        map.set(DamageTypes.dtPoison, pResult / 100.0);
        map.set(DamageTypes.dtCryo, cResult / 100.0);
        map.set(DamageTypes.dtRadiation, rResult / 100.0);
        return [map, {dtPhysical: bResult / 100.0, dtEnergy: eResult / 100.0, dtFire: fResult / 100.0, dtPoison: pResult / 100.0, dtCryo: cResult / 100.0, dtRadiationExposure: rResult / 100.0}];
    }

    getDamageFromStuff() {
        const damages = [];
        function stacker(value) {
            const values = value.split(" - ");
            const damageValue = parseFloat(values[0]);
            const time = parseFloat(values[1].slice(0, values[1].length - 1));
            const damage = buildBleedDamage(damageValue, time);
            damage.defDamage = damageValue;
            const kindType = DamageTypes.convertTypeKind(damage.kind);
            damage.iKind = kindType[0];
            damage.iType = kindType[1];
            damages.push(damage);
        }
        StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Bleed", stacker);
        return damages;
    }

    getBonusMultFromPerks() {
        let result = 0.0;
        result += this.perks.nerd_rage.displayed_value
        result += this.perks.bloody_mess.displayed_value;
        result += this.perks.adrenaline.displayed_value;
        result += this.perks.gun_fu.displayed_value;
        if (this.perks.gladiator.displayed_value > 0 && this.wSpec.type === "Melee" && this.wSpec.hand === 1) {
            result += this.perks.gladiator.displayed_value;
        }
        if (this.perks.heavy_gunner.displayed_value > 0 && this.wSpec.type === "Heavy" && !this.wSpec.tags.includes("Explosive")) {
            result += this.perks.heavy_gunner.displayed_value;
        }
        if (this.perks.shotgunner.displayed_value > 0 && (this.wSpec.type === "Shotgun" || this.wSpec.tags.includes("Shotgun"))) {
            result += this.perks.shotgunner.displayed_value;
        }
        if (this.perks.slugger.displayed_value > 0 && this.wSpec.type === "Melee" && this.wSpec.hand === 2) {
            result += this.perks.slugger.displayed_value;
        }
        if (this.perks.iron_fist.displayed_value > 0 && this.wSpec.type === "Unarmed") {
            result += this.perks.iron_fist.displayed_value;
        }
        if (this.perks.archer.displayed_value > 0 && this.wSpec.type === "Bow") {
            result += this.perks.archer.displayed_value;
        }
        if (this.perks.commando.displayed_value > 0 && this.wSpec.type === "Rifle" && this.wSpec.isAuto === 1) {
            result += this.perks.commando.displayed_value;
        }
        if (this.perks.rifleman.displayed_value > 0 && this.wSpec.type === "Rifle" && this.wSpec.isAuto === 0) {
            result += this.perks.rifleman.displayed_value;
        }
        if (this.perks.guerrilla.displayed_value > 0 && this.wSpec.type === "Pistol" && this.wSpec.isAuto === 1) {
            result += this.perks.guerrilla.displayed_value;
        }
        if (this.perks.gunslinger.displayed_value > 0 && this.wSpec.type === "Pistol" && this.wSpec.isAuto === 0) {
            result += this.perks.gunslinger.displayed_value;
        }
        if (this.perks.science.displayed_value > 0 && this.wSpec.type !== "Heavy" && this.wSpec.tags.includes("Energy")) {
            result += this.perks.science.displayed_value;
        }
        return result;
    }

    getAntiArmor() {
        let aa = 1 - this.wSpec.aa / 100.0;
        let incisor = 1.0;
        let weaponType = this.wSpec.type;
        if (weaponType === "All" || weaponType === "Melee" || weaponType === "Unarmed") {
            incisor = 1 - this.perks.incisor.displayed_value / 100.0;
        }
        let bow_before_me = 1.0;
        if (weaponType === "All" || weaponType === "Bow") {
            bow_before_me = 1 - this.perks.bow_before_me.displayed_value / 100.0;
        }
        let tank_killer = 1.0;
        if (weaponType === "All" || weaponType === "Pistol" || weaponType === "Rifle") {
            tank_killer = 1 - this.perks.tank_killer.displayed_value / 100.0;
        }
        let stabilized = 1.0;
        if (weaponType === "All" || weaponType === "Heavy") {
            stabilized = 1 - this.perks.stabilized.displayed_value / 100.0;
        }
        let bMult = 1;
        StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "BAA", (value) => bMult *= (1 - value / 100.0));
        const result1 = (100 * (1 - bMult * incisor * bow_before_me * tank_killer * stabilized * aa));
        const result2 = (100 * (1 - incisor * bow_before_me * tank_killer * stabilized * aa));
        const resultAll = {b: result1, e: result2, f: result2, p: result2, c: result2, r: result2, insect: this.perks.exterminator.displayed_value};
        return resultAll;
    }

    getAmmoCapacity() {
        let ammoCapacity = this.wSpec.ammoCapacity;
        let tags = this.collectTags(this.wSpec);
        ammoCapacity += (ammoCapacity * (StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, tags, this.stuffBoost.weapon, "Ammo") / 100.0));
        if (this.perks.power_user.is_used) {
            const mult = this.perks.power_user.displayed_value / 100.0 - 1;
            if (this.wSpec.ammoType.codeName === "FusionCore" || tags.includes("FusionCore")) {
                ammoCapacity += (this.wSpec.ammoCapacity * mult);
            }
        }
        return parseInt(ammoCapacity);
    }

    getShotSize() {
        return this.wSpec.shot_size;
    }

    getFireRate() {
        let weaponSpeed = this.wSpec.speed;
        if (this.wSpec.typeNumber <= 6) {
            weaponSpeed += (this.perks.martial_artist.displayed_value / 100.0);
        }
        return assembleFireRate(this.wSpec.type, this.wSpec.tags, this.wSpec.isAuto, this.wSpec.speed,
                                this.wSpec.triggerDelay, this.wSpec.autoDelay, this.wSpec.attackDelay);
    }

    getReloadTime() {
        let reloadSpeed = this.wSpec.reloadSpeed;
        if (this.wSpec.type === "Heavy") {
            reloadSpeed += (this.perks.lock_and_load.displayed_value / 100.0);
        } else if (this.wSpec.type === "Shotgun") {
            reloadSpeed += (this.perks.scattershot.displayed_value / 100.0);
        } else if (this.wSpec.type === "Rifle" && this.wSpec.isAuto) {
            reloadSpeed += (this.perks.ground_pounder.displayed_value / 100.0);
        }
        reloadSpeed += StuffBoostsCollector.collect(this.wSpec.defaultName, this.wSpec.type, this.wSpec.tags, this.stuffBoost.weapon, "Reload") / 100.0;
        return this.wSpec.defReloadTime / reloadSpeed;
    }

    // Accuracy set by a user for a weapon
    getGeneralAccuracy() {
        return this.wSpec.accuracy;
    }

    // TODO: Intended to adjust accuracy by consumables and perks (accuracy from legendary and mods is adjusted in wSPec or by user)
    setFinalAccuracy(damages) {
        const consumables = null; // StuffBoostCollector.collect()
        AccuracyAdjuster.adjustByLegendary(damages, this.wSpec.legendary);
        AccuracyAdjuster.adjustByPerks(damages, this.perks);
        AccuracyAdjuster.adjustByConsumables(damages, consumables);
    }
}