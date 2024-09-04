import { Apply } from './Apply';


export class AttackDamage extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.bbDamage, value, mod.op, apply);
    }
}