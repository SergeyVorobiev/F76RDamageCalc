import { Apply } from './Apply';
import getAmmo from '../../Ammo';


export class Ammo extends Apply {

    apply(template, mod, apply) {
        super.checkOp(mod, template.id, "Set");
        if (apply) {
            template.ammoId[1] = mod.val1.split(" / ")[0];
        } else {
            template.ammoId[1] = template.ammoId[0];
        }
        const ammoData = getAmmo().get(template.ammoId[1]);
        template.ammoType = {name: ammoData.full, type: ammoData.ammo_type, codeName: ammoData.name};
    }

    isChangingDefaultDamage() {
        return true;
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Expected we do not have legendary which changes ammo type
        throw new Error("Legendary changes ammo type");
    }
}