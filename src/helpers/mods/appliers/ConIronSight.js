import { Apply } from './Apply';


export class ConIronSight extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.conIronSight, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

    }
}