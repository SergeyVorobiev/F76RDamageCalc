import { Apply } from './Apply';


export class NumProjectiles extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.shotSize, value, mod.op, apply);
    }
}