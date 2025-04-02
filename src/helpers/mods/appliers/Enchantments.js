import { Apply } from './Apply';
import DamageExtractor from '../DamageExtractor';
import { getCurveValueFromDamageItem } from '../DamageSetter';


export class Enchantments extends Apply {

    constructor() {
        super();
        this.damageExtractor = new DamageExtractor(false);
    }

    setAlt(alt) {
        this.alt = alt;
        this.damageExtractor.setAlt(alt);
    }

    apply(template, mod, apply) {
        const field = template.adEffects;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                field[1] = [value];
            } else {
                field[1] = [...field[0]];
            }
        } else if (mod.op === "MullAdd" || mod.op === "Add") {
            if (apply) {
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

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        let result = [];
        const ench = mod.val1.split(" / ")[0];
        this.damageExtractor.extractEnch(ench, result, "Legendary", false, "");
        for (const property in result) {
            const effects = result[property];
            for (let i = 0; i < effects.length; i++) {
                const effect = effects[i];
                if (effect.type_name === 'STAT_DmgAll' || effect.type_name === "STAT_DmgMelee") {
                    let value = getCurveValueFromDamageItem(effect, this.alt);
                    if (value === 0) {
                        value = effect.magnitude;
                        if (value === 0) {
                            throw new Error("Effect damage for legendary is 0");
                        }
                    }
                    const [newValue, depend] = this.adjustValueByHealth(modId, value, health);

                    // We do not want to update values which do not depend on health
                    // because they can be adjusted by user and updating just reset them to default.
                    if (!depend && update) {
                        continue;
                    }

                    wSpec.legendary[starIndex][1] = (apply) ? newValue : 0;
                    wSpec.legendary[starIndex][2] = (apply) ? "BDB" : "";
                } else {
                    // throw new Error("Not known effect type for legendary: " + effect.type_name);
                }
            }
        }
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