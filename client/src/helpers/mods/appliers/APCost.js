import { Apply } from './Apply';


export class APCost extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.ap, value, mod.op, apply);
    }
}