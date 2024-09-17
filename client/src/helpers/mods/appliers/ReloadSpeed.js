import { Apply } from './Apply';


export class ReloadSpeed extends Apply {

    apply(template, mod, apply) {
        const value = super.getValue(mod);
        super.addSetMullAdd(template.reloadSpeed, value, mod.op, apply);
        template.reloadTime[1] = template.reloadTime[0] / template.reloadSpeed[1];
    }
}