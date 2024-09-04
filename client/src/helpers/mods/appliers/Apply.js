export class Apply {

    checkOp(mod, weaponId, expected) {
        if (mod.op !== expected) {
            throw new Error("Mult must have '" + expected + "' op, but not '" + mod.op + "', " +
            "WeaponId: " + weaponId + " Prop: " + mod.prop);
        }
    }

    getCurvValue(mod) {
        if (!mod.curv || mod.curv === '') {
            return 0;
        } else {
            const val1 = parseFloat(mod.curv);
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

    mullAddFromTo(from, to, value, apply) {
        if (apply) {
            to[1] += (from[0] * value);
        } else {
            to[1] -= (from[0] * value);
        }
    }

    mullAdd(field, value, apply) {
        this.mullAddFromTo(field, field, value, apply)
    }

    add(field, value, apply) {
        if (apply) {
            field[1] += value;
        } else {
            field[1] -= value;
        }
    }

    set(field, value, apply) {
        if (apply) {
            field[1] = value;
        } else {
            field[1] = field[0];
        }
    }

    mullSet(field, value, apply) {
        if (apply) {
            field[1] = field[0] * value;
        } else {
            field[1] = field[0];
        }
    }

    addSetMullAdd(field, value, op, apply) {
        if (op === 'Add') {
            this.add(field, value, apply);
        } else if (op === 'MullAdd') {
            this.mullAdd(field, value, apply);
        } else if (op === 'Set') {
            this.set(field, value, apply);
        }
    }
}