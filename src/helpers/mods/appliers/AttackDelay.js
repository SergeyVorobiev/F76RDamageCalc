import { Apply } from './Apply';


export class AttackDelay extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.manualRate, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Expected we do not have legendary which changes attack delay
        throw new Error("Legendary changes attack delay");
    }
}