import { Apply } from './Apply';


export class NumProjectiles extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.shotSize, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        const value = super.getValue(mod);
        super.checkOp(mod, "Legendary", "Add");
        super.addToProperty(wSpec, "shot_size", value, apply);

        // Protect projectile if a user change the value
        if (wSpec.shot_size === 0) {
            wSpec.shot_size = 1;
        }
        return apply;
    }
}