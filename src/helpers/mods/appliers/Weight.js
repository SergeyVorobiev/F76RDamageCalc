import { Apply } from './Apply';


export class Weight extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.weight, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Currently there is no reason to change weight
        return false;
    }
}