import { Apply } from './Apply';


export class CriticalDamageMult extends Apply {

    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod) * 100.0;
        if (apply) {
            template.crit[1] += value;
        } else {
            template.crit[1] -= value;
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

    }
}