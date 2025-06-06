import { Apply } from './Apply';


export class OverrideProjectile extends Apply {

    apply(template, mod, apply, modsId) {
        const field = template.projId;
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
        if (modId === '00425e28') { // Shotgun explosive 3% legacy
            if (update) {
                return wSpec.legendary[starIndex][2];
            }
            if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
                return false;
            }
            super.addToProperty(wSpec, "exp", 3, apply);
            return apply;
        }
        console.error("Legendary changes projectile");
        return false;
    }
}