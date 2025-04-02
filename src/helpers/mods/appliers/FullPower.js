import { Apply } from './Apply';


export class FullPower extends Apply {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.maxPowerMult, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Legendary?
    }
}