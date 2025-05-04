import { Apply } from './Apply';


export class CriticalDamageMult extends Apply {

    apply(template, mod, apply, modsId) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod) * 100.0;
        if (apply) {
            template.crit[1] += value;
        } else {
            template.crit[1] -= value;
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