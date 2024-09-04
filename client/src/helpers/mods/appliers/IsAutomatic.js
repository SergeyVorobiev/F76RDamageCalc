import { Apply } from './Apply';


export class IsAutomatic extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "Set");
        if (apply) {
            template.isAuto[1] = parseInt(mod.val1);
        } else {
            template.isAuto[1] = template.isAuto[0];
        }
    }
}