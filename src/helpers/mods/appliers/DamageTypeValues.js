import { Apply } from './Apply';
import { Assignment } from '../DamageExtractor';
import DamageExtractor from '../DamageExtractor';
import { buildDamageItem, getDamageTypeFromCellName } from '../DamageSetter';
import { removeDamage } from '../../../entities/EWeaponSpecs';


export class DamageTypeValues extends Apply {

    getBaseDamage(template, dType, op) {
        if (template.damageData.Base.length === 0) {
            return null;
        }
        let baseDamage = template.damageData.Base[0].damageData;

        if (template.damageData.Base.length > 1) {
            const result = [];
            for (let i = 0; i < template.damageData.Base.length; i++) {
                const tDamage = template.damageData.Base[i];
                if (dType === tDamage.damageData.typeName) {
                    result.push(tDamage);
                }
            }
            if (result.length > 1) {
                console.warn("DamageTypeValues has more than one base damage: " + template.id);
            } else if (result.length === 0) {
                if (op === "MullAdd") {
                    console.warn("DamageTypeValues has no appropriate base damage: " + template.id);
                }
            } else {
                baseDamage = result[0].damageData;
            }
        }
        return baseDamage;
    }

    apply(template, mod, apply, parentId, attackDamageMod) {
        const dType = mod.val1.split(" / ")[1];
        if (mod.op === "MullAdd") {
            const baseDamage = this.getBaseDamage(template, dType, mod.op);
            if (!baseDamage) {
                console.warn("DamageTypeValues has no base damage: " + template.id);
                return;
            }
            let baseValue = baseDamage.curveBase;
            let altValue = baseDamage.curveAlt;
            let value = baseDamage.value;
            let magnitude = baseDamage.magnitude;
            let curveCurrent = baseDamage.curveCurrent;
            if (baseValue === 0 && altValue === 0 && value === 0 && magnitude === 0) {
                console.warn("Weapon: " + template.id + " Mod: " + mod.id + " Can't setup damage type value, base damage value is 0");
                return;
            }
            baseValue = this.adjustDamage(baseValue, mod, attackDamageMod);
            altValue = this.adjustDamage(altValue, mod, attackDamageMod);
            value = this.adjustDamage(value, mod, attackDamageMod);
            magnitude = this.adjustDamage(magnitude, mod, attackDamageMod);
            if (baseDamage.typeName === dType && baseDamage.time === 0) { // The same damage let's merge see (Alien Blaster fusion mod)
                baseDamage.curveBase += baseValue;
                baseDamage.curveAlt += altValue;
                baseDamage.value += value;
                baseDamage.magnitude += magnitude;
                baseDamage.curveCurrent += curveCurrent;
            } else {
                this.addDamage(template, mod, parentId, baseValue, altValue, value, magnitude);
            }
        } else if (mod.op === "Add") {
            let baseValue = mod.curv;
            let altValue = mod.curvAlt;
            let value = mod.val2;
            let valueToAdd = super.getCurveOrVal2(mod);
            const baseDamage = this.getBaseDamage(template, dType, mod.op);
            if (baseDamage.typeName === dType && baseDamage.time === 0) { // The same damage let's merge see (Night Light)
                if (baseDamage.curveBase > 0) {
                    baseDamage.curveBase += valueToAdd;
                }
                if (baseDamage.curveAlt > 0) {
                    baseDamage.curveAlt += valueToAdd;
                }
                if (baseDamage.value > 0) {
                    baseDamage.value += valueToAdd;
                }
            } else {
                this.addDamage(template, mod, parentId, baseValue, altValue, value, 0);
            }
        } else if (mod.op === "Set") {
            let baseValue = mod.curv;
            let altValue = mod.curvAlt;
            let value = mod.val2;
            if (baseValue === 0 && altValue === 0 && value === 0) {
                // Outdated mods can have 0 values actually to no changing anything
                // console.warn("Weapon: " + template.id + " Mod: " + mod.id + " Can't setup damage type value, base damage value is 0");
                return;
            }
            /*
            if (attackDamageMod) {
                baseValue = this.applyModToValue(attackDamageMod, baseValue);
                altValue = this.applyModToValue(attackDamageMod, altValue);
                value = this.applyModToValue(attackDamageMod, value);
            }*/
            this.addDamage(template, mod, parentId, baseValue, altValue, value, 0);
        }
    }

    addDamage(template, mod, parentId, baseValue, altValue, value, magnitude) {
        let modDamages = template.damageData["Mod"];
        if (!modDamages) {
            modDamages = [];
            template.damageData["Mod"] = modDamages;
        }
        const damageObject = DamageExtractor.getDamageNodeByValue("Mod Spell", "Weapon", parentId, mod.id, template.id, Assignment.DAMAGE, baseValue, altValue, value, magnitude, mod.val1.split(" / ")[1]);
        modDamages.push(damageObject);
    }

    adjustDamage(damageValue, mod, attackDamageMod) {
        let value = super.getCurveOrVal2(mod);
        damageValue *= value;
        if (attackDamageMod) {
            damageValue = this.applyModToValue(attackDamageMod, damageValue);
        }
        return damageValue;
    }

    getCurve(baseDamage) {
        if (this.alt && baseDamage.curve_alt_max !== 0) {
            return baseDamage.curve_alt_max;
        }
        return baseDamage.curve_base_max;
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        if (apply && modId === '004f5776') { // Irradiated
            let damageValue = 0;
            for (let i = 0; i < wSpec.damages.length; i++) {
                const damage = wSpec.damages[i];
                if (damage.isUsed && damage.time === 0 && !damage.isCrit && damage.conditions.length === 0) {
                    damageValue += damage.damage;
                }
            }
            if (damageValue > 0) {
                damageValue *= 1.1;
                const typeData = getDamageTypeFromCellName("dtRadiationExposure");
                const newDamageItem = buildDamageItem(false, wSpec.weaponId, modId, typeData[0], typeData[1], typeData[2], damageValue, 0, 0, 0, 100, 100, false, null, 1, wSpec.damages.length);
                wSpec.damages.push(newDamageItem);
            }
            return true;
        } else {
            removeDamage(wSpec, modId);
            return false;
        }
        console.error("Legendary changes damage type values");
    }
}