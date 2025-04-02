import { Apply } from './Apply';


export class MinPower extends Apply {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.minPowerMult, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Legendary?
    }
}