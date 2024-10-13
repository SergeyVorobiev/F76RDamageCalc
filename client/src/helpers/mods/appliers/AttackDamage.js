import { Apply } from './Apply';


export class AttackDamage extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.bbDamage, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

        // Expected we do not have legendary which changes attack damage
        throw new Error("Legendary changes attack damage");
    }
}