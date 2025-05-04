import { Apply } from './Apply';


export class Speed extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.speed, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "speed", value, apply);
        return apply;
    }
}