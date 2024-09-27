import { Apply } from './Apply';


export class DamageTypeValues extends Apply {

    apply(template, mod, apply) {
        let value = super.getCurvValue(mod);
        if (value === 0) {
            value = parseFloat(mod.val2);
        }
        let from = null;
        switch (mod.val1) {
            case '00060a81 / dtEnergy':
                from = template.ebDamage[0] === 0 ? template.bbDamage : template.ebDamage;
                this.setDamage(template.ebDamage, from, value, mod.op, apply);
                break;
            case '00060a82 / dtFire':
                from = template.fbDamage[0] === 0 ? template.bbDamage : template.fbDamage;
                this.setDamage(template.fbDamage, from, value, mod.op, apply);
                break;
            case '00060a84 / dtPoison':
                from = template.pbDamage[0] === 0 ? template.bbDamage : template.pbDamage;
                this.setDamage(template.pbDamage, from, value, mod.op, apply);
                break;
            case '00060a83 / dtCryo':
                from = template.cbDamage[0] === 0 ? template.bbDamage : template.cbDamage;
                this.setDamage(template.cbDamage, from, value, mod.op, apply);
                break;
            case '00060a85 / dtRadiationExposure':
                from = template.rbDamage[0] === 0 ? template.bbDamage : template.rbDamage;
                this.setDamage(template.rbDamage, from, value, mod.op, apply);
                break;
            default:
                throw new Error("New damage type values: " + mod.val1);
        }
    }

    setDamage(to, from, value, op, apply) {
        if (op === 'MullAdd') {
            super.mullAddFromTo(from, to, value, apply);
        } else if (op === 'Set') {
            super.set(to, value, apply);
        } else if (op === 'Add') {
            super.add(to, value, apply);
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {

    }
}