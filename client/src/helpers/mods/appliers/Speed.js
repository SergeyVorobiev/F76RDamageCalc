import { Apply } from './Apply';


export class Speed extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.speed, value, mod.op, apply);
        template.autoRate[1] = template.defRate * template.speed[1];
    }
}