import { Apply } from './Apply';


export class WeightReduction extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "Add");
        const value = super.getValue(mod);
        super.mullAdd(template.weight, value, apply);
    }
}