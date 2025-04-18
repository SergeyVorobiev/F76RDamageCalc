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
        if (!mod.curv || mod.curv === '') {
            return 0;
        } else {
            const val1 = parseFloat(mod.curv);
            const val1Alt = parseFloat(mod.curvAlt);
            if (this.alt && val1Alt && val1Alt !== 0) {
                return val1Alt;
            }
            if (!val1) {
                return 0;
            }
            return val1;
        }
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

    addSetMullAdd(field, value, op, apply, allowNegative=false) {
        if (op === 'Add') {
            this.add(field, value, apply, allowNegative);
        } else if (op === 'MullAdd') {
            this.mullAdd(field, value, apply, allowNegative);
        } else if (op === 'Set') {
            this.set(field, value, apply, allowNegative);
        }
    }

    isChangingDefaultDamage() {
        return false;
    }
}