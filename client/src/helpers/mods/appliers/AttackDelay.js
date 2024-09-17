import { Apply } from './Apply';


export class AttackDelay extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.manualRate, value, mod.op, apply);
    }
}