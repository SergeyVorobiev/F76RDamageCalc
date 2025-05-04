import { Apply } from './Apply';


export class WeightReduction extends Apply {

    apply(template, mod, apply, modsId) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod);
        super.mullAdd(template.weight, value, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Currently there is no reason to change weight
        return false;
    }
}