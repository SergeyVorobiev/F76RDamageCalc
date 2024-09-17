import { Apply } from './Apply';


export class Weight extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.weight, value, mod.op, apply);
    }
}