import { Apply } from './Apply';


export class ReloadSpeed extends Apply {

    apply(template, mod, apply, modsId) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.reloadSpeed, value, mod.op, apply);
        template.reloadTime[1] = template.reloadTime[0] / template.reloadSpeed[1];
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
        super.mullAddToProperty(wSpec, "reloadSpeed", value, apply);
        return apply;
    }
}