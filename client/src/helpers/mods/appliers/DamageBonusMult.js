import { Apply } from './Apply';


export class DamageBonusMult extends Apply {

    apply(template, mod, apply) {
        const mult = super.getValue(mod);
        super.addSetMullAdd(template.bonusMult, mult, mod.op, apply, true);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

    }
}