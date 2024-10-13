import { Apply } from './Apply';


export class Speed extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.speed, value, mod.op, apply);
        template.autoRate[1] = template.defRate * template.speed[1];
        template.manualRate[1] = template.manualRate[1] / template.speed[1];
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        super.checkOp(mod, "Legendary", "MullAdd");
        const value = super.getValue(mod);
        super.mullAddToProperty(wSpec, "speed", value, apply);
    }
}