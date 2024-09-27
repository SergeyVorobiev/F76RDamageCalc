import { Apply } from './Apply';


export class AmmoCapacity extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.capacity, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "ammo_capacity", value, apply);

        // Protect if a user change the number
        wSpec.ammo_capacity = parseInt(wSpec.ammo_capacity);
        if (wSpec.ammo_capacity < 1) {
            wSpec.ammo_capacity = 1;
        }
    }
}