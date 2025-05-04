import { Apply } from './Apply';

// Trigger Delay (For range weapon), in a template 'Attack Delay' means Melee weapon attack delay
export class AttackDelay extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.triggerDelay, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Expected we do not have legendary which changes attack delay
        console.error("Legendary changes trigger delay");
        return false;
    }
}