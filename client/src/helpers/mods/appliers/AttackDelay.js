import { Apply } from './Apply';


export class AttackDelay extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.manualRate, value, mod.op, apply);
    }
}