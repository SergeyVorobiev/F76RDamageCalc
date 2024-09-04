import { Apply } from './Apply';


export class AmmoCapacity extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.capacity, value, mod.op, apply);
    }
}