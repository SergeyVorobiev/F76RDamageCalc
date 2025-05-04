import { Apply } from './Apply';


// It works with combination of DamageTypeValues and also can be applied separately if DamageTypeValues is not found
export class AttackDamage extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.attackDamage, value, mod.op, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return wSpec.legendary[starIndex][2];
        }
        if (!this.isLegendaryAppropriate(wSpec, starIndex, apply)) {
            return false;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "attackDamage", value, apply);
        if (wSpec.attackDamage < 0.1) {
            wSpec.attackDamage = 0.1;
        }
        return apply;
    }
}