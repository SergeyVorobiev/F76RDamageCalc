import { Apply } from './Apply';


export class Enchantments extends Apply {

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
}