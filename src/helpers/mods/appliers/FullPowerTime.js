import { Apply } from './Apply';


export class FullPowerTime extends Apply {
    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.chargePowerTime, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        // Legendary?
    }
}