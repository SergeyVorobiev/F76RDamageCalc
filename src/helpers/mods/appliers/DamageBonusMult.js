import { Apply } from './Apply';


export class DamageBonusMult extends Apply {

    apply(template, mod, apply) {
        const mult = super.getValue(mod);
        super.addSetMullAdd(template.bonusMult, mult, mod.op, apply, true);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        super.checkOp(mod, "legendary", "Add");
        const value = super.getValue(mod);
        if (update) {
            return false;
        }

        // Expected that every particular legendary has only one damage bonus multiplier
        wSpec.legendary[starIndex][1] = (apply) ? value * 100 : 0;
        wSpec.legendary[starIndex][2] = (apply) ? "BDB" : "";
    }
}