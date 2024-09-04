import { Apply } from './Apply';


export class CriticalDamageMult extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "Add");
        const value = super.getValue(mod) * 100.0;
        if (apply) {
            template.crit[1] += value;
        } else {
            template.crit[1] -= value;
        }
    }
}