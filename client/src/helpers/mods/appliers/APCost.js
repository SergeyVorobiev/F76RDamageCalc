import { Apply } from './Apply';


export class APCost extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "MullAdd");
        const value = super.getValue(mod);
        if (apply) {
            template.ap[1] += (template.ap[0] * value);
        } else {
            template.ap[1] -= (template.ap[0] * value);
        }
    }
}