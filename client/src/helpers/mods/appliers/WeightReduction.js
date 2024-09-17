import { Apply } from './Apply';


export class WeightReduction extends Apply {

    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Add");
        const value = super.getValue(mod);
        super.mullAdd(template.weight, value, apply);
    }
}