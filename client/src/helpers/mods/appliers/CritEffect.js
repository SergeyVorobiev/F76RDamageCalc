import { Apply } from './Apply';


export class CritEffect extends Apply {

    apply(template, mod, apply) {
        const field = template.crSpellId;
        const value = mod.val1.split(" / ")[0];
        if (mod.op === "Set") {
            if (apply) {
                field[1] = [value];
            } else {
                field[1] = [...field[0]];
            }
        } else if (mod.op === "Add" || mod.op === "MullAdd") {
            if (apply) {
                field[1].push(value);
            } else {

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

        // Expected we do not have legendary which changes crit effect
        throw new Error("Legendary changes crit effect");
    }
}