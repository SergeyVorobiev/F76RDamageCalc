import { checkLegendaryAppropriate } from '../../LegendaryProvider';

// Applying basically contains of two parts - 'apply' method, which is intended to change template data that a user could see
// chosen mod immediately and 'applyLegendary' method which changes wSpec object, the reason is that a user can reselect
// legendary mod after applying a weapon
export class Apply {

    constructor() {
        this.alt = false;
    }

    checkOp(mod, weaponId, expected) {
        if (mod.op !== expected) {
            throw new Error("Mult must have '" + expected + "' op, but not '" + mod.op + "', " +
            "WeaponId: " + weaponId + " Prop: " + mod.prop);
        }
    }

    setAlt(alt) {
        this.alt = alt;
    }

    getCurvValue(mod) {
        let val1 = 0;
        let val2 = 0;
        if (mod.curv && mod.curv !== '') {
            val1 = parseFloat(mod.curv);
        }
        if (mod.curvAlt && mod.curvAlt !== '') {
            val2 = parseFloat(mod.curvAlt);
        }
        if (this.alt && val2 !== 0) {
            return val2;
        }
        return val1;
    }

    getValue(mod) {
        const val1 = this.getCurvValue(mod);
        const val2 = parseFloat(mod.val1);
        const val3 = parseFloat(mod.val2);
        if (val1 !== 0) {
            return val1;
        } else if (val2 !== 0) {
            return val2;
        } else {
            return val3;
        }
    }

    getCurveOrVal2(mod) {
        const val1 = this.getCurvValue(mod);
        const val2 = parseFloat(mod.val2);
        if (val1 !== 0) {
            return val1;
        }
        return val2;
    }

    mullAddFromTo(from, to, value, apply, allowNegative=false) {
        if (apply) {
            to[1] += (from[0] * value);
        } else {
            to[1] -= (from[0] * value);
        }
        if (to[1] < 0 && !allowNegative) {
            to[1] = 0;
        }
    }

    mullAdd(field, value, apply, allowNegative=false) {
        this.mullAddFromTo(field, field, value, apply, allowNegative);
    }

    add(field, value, apply, allowNegative=false, index=1) {
        if (apply) {
            field[index] += value;
        } else {
            field[index] -= value;
        }
        if (field[index] < 0 && !allowNegative) {
            field[index] = 0;
        }
    }

    addToProperty(obj, property, value, apply, allowNegative=false) {
        if (apply) {
            obj[property] += value;
        } else {
            obj[property] -= value;
        }
        if (obj[property] < 0 && !allowNegative) {
            obj[property] = 0;
        }
    }

    mullAddToProperty(obj, property, value, apply) {
        if (apply) {
            obj[property] += (obj[property] * value);
        } else {
            obj[property] /= (value + 1);
        }
    }

    setToProperty(obj, property, value) {
        obj[property] = value;
    }

    set(field, value, apply, allowNegative=false) {
        if (apply) {
            field[1] = value;
            if (field[1] < 0 && !allowNegative) {
                field[1] = 0;
            }
        } else {
            field[1] = field[0];
        }
    }

    mullSet(field, value, apply, allowNegative=false) {
        if (apply) {
            field[1] = field[0] * value;
            if (field[1] < 0 && !allowNegative) {
                field[1] = 0;
            }
        } else {
            field[1] = field[0];
        }
    }

    // Appropriate for current type of weapon
    isLegendaryAppropriate(wSpec, starIndex, apply) {

        // User can apply legendary then change the type then change legendary, we have to say that legendary is appropriate so as it was applied before
        if (!apply && wSpec.legendary[starIndex][2]) {
            return true;
        }

        // Nothing to reset as it was not applied
        if (!apply && !wSpec.legendary[starIndex][2]) {
            return false;
        }
        let type = wSpec.type;

        // Warning!!! Can mask real type ("Heavy")
        if (wSpec.tags.includes("Shotgun")) {
            if (type !== "Shotgun") {
                console.warn("By applying legendary, 'Shotgun' weapon type masks another weapon type: " + type + " for a weapon: " + wSpec.weaponId);
            }
            type = "Shotgun";

        }
        return checkLegendaryAppropriate(wSpec.legendary[starIndex][0], wSpec.weaponId, type);
    }

    addSetMullAdd(field, value, op, apply, allowNegative=false) {
        if (op === 'Add') {
            this.add(field, value, apply, allowNegative);
        } else if (op === 'MullAdd') {
            this.mullAdd(field, value, apply, allowNegative);
        } else if (op === 'Set') {
            this.set(field, value, apply, allowNegative);
        }
    }

    applyModToValue(mod, value) {
        const modValue = this.getValue(mod);
        if (mod.op === 'Add') {
            return value + modValue;
        } else if (mod.op === 'MullAdd') {
            return value + value * modValue;
        } else {
            return modValue;
        }
    }

    isChangingDefaultDamage() {
        return false;
    }
}