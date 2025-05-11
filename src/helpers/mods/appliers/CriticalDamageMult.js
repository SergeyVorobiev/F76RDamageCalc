import { Apply } from './Apply';


export class CriticalDamageMult extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        if (mod.op === "Add") {
            template.crMult[1] += value;
        } else if (mod.op === "MullAdd") {
            template.crMult[1] += template.crMult[0] * value;
        } else {
            template.crMult[1] = value;
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        super.checkOp(mod, "Legendary", "Add");
        const value = super.getValue(mod) * 100;
        super.addToProperty(wSpec, "crit", value, apply);
        return apply;
    }
}