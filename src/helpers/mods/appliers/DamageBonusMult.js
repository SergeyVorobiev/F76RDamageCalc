import { Apply } from './Apply';
import { getLegendary } from '../../LegendaryProvider';


export class DamageBonusMult extends Apply {

    apply(template, mod, apply, modsId) {
        const mult = super.getValue(mod);
        const leg = getLegendary(modsId);
        if (leg) {
            template.legBonusMult[modsId] = leg.value / 100; // Different mods gives different range 0-1, 0-100 to not mess with it just take hardcore default value
        } else {
            super.addSetMullAdd(template.bonusMult, mult, mod.op, apply, true);
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        super.checkOp(mod, "Legendary", "Add");
        const value = super.getValue(mod);
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }

        // Expected that every particular legendary has only one damage bonus multiplier
        wSpec.legendary[starIndex][1] = (apply) ? value * 100 : 0;
        return apply;
    }
}