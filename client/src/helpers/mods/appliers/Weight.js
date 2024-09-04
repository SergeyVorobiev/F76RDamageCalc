import { Apply } from './Apply';


export class Weight extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "MullAdd");
        const value = super.getValue(mod);
        super.addSetMullAdd(template.weight, value, mod.op, apply);
    }
}