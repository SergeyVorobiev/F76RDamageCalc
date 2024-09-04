import { Apply } from './Apply';


export class Ammo extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "Set");
        if (apply) {
            template.ammoId[1] = mod.val1.split(" / ")[0]
        } else {
            template.ammoId[1] = template.ammoId[0];
        }
    }
}