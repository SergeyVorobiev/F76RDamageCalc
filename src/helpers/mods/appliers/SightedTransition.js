import { Apply } from './Apply';


export class SightedTransition extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.sightedTransition, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        return false;
    }
}