import { Apply } from './Apply';
import DamageExtractor from '../DamageExtractor';
import { getCurveValueFromDamageItem, getDamageValue, buildDamageItem, getDamageTypeFromCellName } from '../DamageSetter';
import DamageSetter from '../DamageSetter';
import { Assignment } from "../DamageExtractor";
import { removeDamage } from '../../../entities/EWeaponSpecs';
import { getLegendary } from '../../LegendaryProvider';
import { setLegendaryEffect } from '../DamageSetter';


export class Enchantments extends Apply {

    constructor() {
        super();
        this.damageExtractor = new DamageExtractor(false);
        this.damageSetter = new DamageSetter(false);
    }

    setAlt(alt) {
        this.alt = alt;
        this.damageExtractor.setAlt(alt);
        this.damageSetter = new DamageSetter(alt);
    }

    apply(template, mod, apply, modsId) {
        const field = template.enchantments;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                const leg = getLegendary(modsId);
                if (leg) {
                    setLegendaryEffect(value, modsId);
                }
                field[1] = [value];
            } else {
                field[1] = [...field[0]];
            }
        } else if (mod.op === "MullAdd" || mod.op === "Add") {
            if (apply) {
                const leg = getLegendary(modsId);
                if (leg) {
                    setLegendaryEffect(value, modsId);
                }
                field[1].push(value);
            } else {
                // Possibly useless cause now any changes lead to full recalculation.
                // Avoid removing default one if it is previously was overridden by 'set'
                if (field[1].toString() === field[0].toString()) {
                    return;
                }
                const index = field[1].indexOf(value);
                if (index > -1) {
                    field[1].splice(index, 1);
                }
            }
        }
    }

    isChangingDefaultDamage() {
        return true;
    }

    getDamageValueMod(effect, modId, health) {
        let value = getCurveValueFromDamageItem(effect, this.alt);
        if (value === 0) {
            value = (effect.value) ? effect.value : 0;
            if (value === 0) {
                value = effect.magnitude;
            }
        }
        if (value === 0) {
            console.log("Effect damage for legendary is 0");
        }
        return this.adjustValueByHealth(modId, value, health);
    }

    // Returns maxValue (update relates to health update)
    updateDamageValue(wSpec, starIndex, apply, depend, update, currentValue, maxValue) {

        // We do not want to update values which do not depend on health
        // because they can be adjusted by user and updating just reset them to default.
        if (!depend && update) {
            return maxValue;
        }
        if (currentValue > maxValue) {
            maxValue = currentValue;
        }
        wSpec.legendary[starIndex][1] = (apply) ? maxValue : 0;
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        let result = [];
        const ench = mod.val1.split(" / ")[0];
        this.damageExtractor.extractEnch("Legendary Mod", "Weapon", result, ench, wSpec.weaponId, ench, false, 0, 0, []);
        let maxDamage = 0;
        if (Object.keys(result).length > 1) {
            console.warn("Enchantment contains more than one property.");
        }

        // Only max value will be applied
        for (const property in result) {
            const effects = result[property];
            if (effects.length > 1) {
                console.warn("Enchantment contains more than one effect.");
            }
            for (let i = 0; i < effects.length; i++) {
                const effect = effects[i];
                if (effect.assignment === Assignment.BDB) {
                    if (effect.conditions.length === 0) {
                        const [damageValue, depend] = this.getDamageValueMod(effect.damageData, modId, health);
                        maxDamage = this.updateDamageValue(wSpec, starIndex, apply, depend, update, damageValue, maxDamage);
                    } else if (!update) {
                        if (apply) {
                            let [damageValue, depend] = this.getDamageValueMod(effect.damageData, modId, health);

                            // Some values from STAT_DAMAGE_ALL and others can be 0-100 som from BonusMult 0-1
                            if (effect.id === '006337c2') {
                                damageValue /= 100;
                            }
                            if (effect.id === "007a7426") {
                                damageValue *= 100;
                            }
                            const bonusObject = this.damageSetter.getBonusObject("BDB", damageValue, effect.id, effect.conditions, effect.damageData.chance);
                            wSpec.damageBonusCond.push(bonusObject);
                        } else {
                            const result = [];
                            for (let i = 0; i < wSpec.damageBonusCond.length; i++) {
                                const bonus = wSpec.damageBonusCond[i];
                                if (bonus.parent !== effect.id) {
                                    result.push(bonus);
                                }
                            }
                            wSpec.damageBonusCond = result;
                        }
                    }
                } else if (effect.assignment === Assignment.SPEED_MULT && !update) {
                    let [damageValue, depend] = this.getDamageValueMod(effect.damageData, modId, health);
                    super.mullAddToProperty(wSpec, "speed", damageValue, apply);
                    if (wSpec.speed < 0.1) {
                        wSpec.speed = 0.1;
                    }
                } else if (effect.assignment === Assignment.DAMAGE && !update) {
                    if (apply) {
                        const dData = effect.damageData;
                        let typeData = null;
                        if (dData.kind === DamageExtractor.EXPLOSIVE) {
                            if (!dData.typeName || dData.typeName === "" || dData.typeName === "dtPhysical") {
                                typeData = getDamageTypeFromCellName("projExp");
                            } else {
                                typeData = getDamageTypeFromCellName(dData.typeName);
                            }
                        } else if (dData.kind === DamageExtractor.BLOOD) {
                            typeData = getDamageTypeFromCellName('bleed');
                        } else {
                            typeData = getDamageTypeFromCellName(dData.typeName);
                        }
                        let [damageValue, depend] = this.getDamageValueMod(dData, modId, health);
                        const newDamageItem = buildDamageItem(false, wSpec.weaponId, effect.id, typeData[0], typeData[1], typeData[2], damageValue, dData.time, dData.interval, dData.area, dData.chance, 100, false, dData.bonuses, dData.repeat, wSpec.damages.length, true, false, effect.conditions);
                        wSpec.damages.push(newDamageItem);
                    } else {
                        removeDamage(wSpec, effect.id);
                    }
                } else {
                    console.error("Can't determine damage for Enchantment: " + modId);
                }
            }
        }
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        return apply;
    }

    adjustValueByHealth(modId, value, health) {
        switch(modId) {
            case '00606b73': // Juggernaut's
                if (health > 95) {
                    health = 95;
                }
                health -= 5;
                return [parseInt(24 / 90 * health + 1), true];
            case '004f6aa0': // Bloodied
                return [100 - health, true];
            default:
                return [value, false];
        }
    }
}