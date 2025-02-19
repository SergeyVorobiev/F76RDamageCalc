export default class LegsId {
    static QUAD = '00692275';
    static ARISTOCRAT = '00606b71';
    static ANTI_ARMOR = '005281b4';
    static TWO_SHOT = '004f6d76';
    static EXECUTIONER = '004f6aa1';
    static BLOODIED = '004f6aa0';
    static STEADY = '00606c8d';
    static MELEE_RAPID = '001a7bda';
    static HITMAN = '0052414e';
    static RANGED_RAPID = '0052414f';
    static VITAL = '0052414b';
    static EXPLOSIVE = '004f5771';
    static CRIPPLING = '004ed02c';
    static SWIFT = '00524150';
    static STRENGTH = '005299fc';
    static names = LegsId.getNames();

    static getNames() {
        const names = new Map();
        names.set(LegsId.QUAD, "Quad");
        names.set(LegsId.ARISTOCRAT, "Aristocrat");
        names.set(LegsId.ANTI_ARMOR, "Anti Armor");
        names.set(LegsId.TWO_SHOT, "Two Shot");
        names.set(LegsId.EXECUTIONER, "Executioner");
        names.set(LegsId.BLOODIED, "Bloodied");
        names.set(LegsId.STEADY, "Steady");
        names.set(LegsId.MELEE_RAPID, "Melee Rapid");
        names.set(LegsId.HITMAN, "Hitman");
        names.set(LegsId.RANGED_RAPID, "Ranged Rapid");
        names.set(LegsId.VITAL, "Vital");
        names.set(LegsId.EXPLOSIVE, "Explosive");
        names.set(LegsId.CRIPPLING, "Crippling");
        names.set(LegsId.SWIFT, "Swift");
        names.set(LegsId.STRENGTH, "Strength");
        return names;
    }

    static getName(id) {
        return LegsId.names.get(id);
    }

    static getLeg1() {
        const leg = {};
        leg[LegsId.QUAD] = true;
        leg[LegsId.ARISTOCRAT] = true;
        leg[LegsId.ANTI_ARMOR] = true;
        leg[LegsId.TWO_SHOT] = true;
        leg[LegsId.EXECUTIONER] = true;
        leg[LegsId.BLOODIED] = true;
        return leg;
    }

    static getLeg2() {
        const leg = {};
        leg[LegsId.STEADY] = true;
        leg[LegsId.MELEE_RAPID] = true;
        leg[LegsId.HITMAN] = true;
        leg[LegsId.RANGED_RAPID] = true;
        leg[LegsId.VITAL] = true;
        leg[LegsId.EXPLOSIVE] = true;
        leg[LegsId.CRIPPLING] = true;
        return leg;
    }

    static getLeg3() {
        const leg = {};
        leg[LegsId.SWIFT] = true;
        leg[LegsId.STRENGTH] = true;
        return leg;
    }
}

