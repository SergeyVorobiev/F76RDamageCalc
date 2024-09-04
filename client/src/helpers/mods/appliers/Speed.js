import { Apply } from './Apply';


export class Speed extends Apply {

    constructor() {
        super();
    }

    apply(template, weaponId, mod, apply) {
        const value = super.getValue(mod);

        // TODO: Need to test the diff
        if (mod.op === "Add" || mod.op === "MullAdd") {
            super.mullAdd(template.autoRate, value, apply);
        } else if (mod.op === "Set") {
            super.mullSet(template.autoRate, value, apply);
        }
    }
}