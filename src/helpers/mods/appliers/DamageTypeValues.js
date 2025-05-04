import { Apply } from './Apply';
import { Assignment } from '../DamageExtractor';
import DamageExtractor from '../DamageExtractor';
import { buildDamageItem, getDamageTypeFromCellName } from '../DamageSetter';
import { removeDamage } from '../../../entities/EWeaponSpecs';


export class DamageTypeValues extends Apply {

    apply(template, mod, apply, parentId, attackDamageMod) {
        if (mod.op === "MullAdd") {
            const baseDamage = template.damageData.Base[0].damageData;
            let baseValue = baseDamage.curveBase;
            let altValue = baseDamage.curveAlt;
            let value = baseDamage.value;

            if (baseValue === 0 && altValue === 0 && value === 0) {
                console.warn("Weapon: " + template.id + " Mod: " + mod.id + " Can't setup damage type value, base damage value is 0");
                return;
            }
            baseValue = this.adjustDamage(baseValue, mod, attackDamageMod);
            altValue = this.adjustDamage(altValue, mod, attackDamageMod);
            value = this.adjustDamage(value, mod, attackDamageMod);
            this.addDamage(template, mod, parentId, baseValue, altValue, value);

        } else if (mod.op === "Set" || mod.op === "Add") {
            let baseValue = mod.curv;
            let altValue = mod.curvAlt;
            let value = mod.val2;
            if (baseValue === 0 && altValue === 0 && value === 0) {
                // Outdated mods can have 0 values actually to no changing anything
                // console.warn("Weapon: " + template.id + " Mod: " + mod.id + " Can't setup damage type value, base damage value is 0");
                return;
            }
            if (attackDamageMod) {
                baseValue = this.applyModToValue(attackDamageMod, baseValue);
                altValue = this.applyModToValue(attackDamageMod, altValue);
                value = this.applyModToValue(attackDamageMod, value);
            }
            this.addDamage(template, mod, parentId, baseValue, altValue, value);
        }
    }

    addDamage(template, mod, parentId, baseValue, altValue, value) {
        let modDamages = template.damageData["Mod"];
        if (!modDamages) {
            modDamages = [];
            template.damageData["Mod"] = modDamages;
        }
        const damageObject = DamageExtractor.getDamageNodeByValue("Mod Spell", "Weapon", parentId, mod.id, template.id, Assignment.DAMAGE, baseValue, altValue, value, mod.val1.split(" / ")[1]);
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
                const newDamageItem = buildDamageItem(wSpec.weaponId, modId, typeData[0], typeData[1], typeData[2], damageValue, 0, 0, 0, 100, 100, false, null, 1, wSpec.damages.length);
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