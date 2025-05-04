import { Apply } from './Apply';


export class IsAutomatic extends Apply {

    apply(template, mod, apply, modsId) {
        super.checkOp(mod, template.id, "Set");
        if (apply) {
            template.isAuto[1] = parseInt(mod.val1);
        } else {
            template.isAuto[1] = template.isAuto[0];
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        console.error("Legendary changes auto fire");
        return false;
    }
}