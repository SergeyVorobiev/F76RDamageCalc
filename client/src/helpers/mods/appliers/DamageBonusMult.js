import { Apply } from './Apply';


export class DamageBonusMult extends Apply {

    apply(template, mod, apply) {
        const operation = apply ? 1 : -1;
        const mult = super.getValue(mod);
        if (mod.op === "Add") {
            template.bmDamage[1] += (template.bbDamage[0] * mult * operation);
            template.emDamage[1] += (template.ebDamage[0] * mult * operation);
            template.fmDamage[1] += (template.fbDamage[0] * mult * operation);
            template.pmDamage[1] += (template.pbDamage[0] * mult * operation);
            template.cmDamage[1] += (template.cbDamage[0] * mult * operation);
            template.rmDamage[1] += (template.rbDamage[0] * mult * operation);
            template.projExp[1] += (template.projExp[0] * mult * operation);
        } else if (mod.op === "MullAdd") {
            template.bbDamage[1] += (template.bbDamage[0] * mult * operation);
            template.ebDamage[1] += (template.ebDamage[0] * mult * operation);
            template.fbDamage[1] += (template.fbDamage[0] * mult * operation);
            template.pbDamage[1] += (template.pbDamage[0] * mult * operation);
            template.cbDamage[1] += (template.cbDamage[0] * mult * operation);
            template.rbDamage[1] += (template.rbDamage[0] * mult * operation);
            template.projExp[1] += (template.projExp[0] * mult * operation);
        }
    }
}