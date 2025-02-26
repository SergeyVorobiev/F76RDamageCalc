import LegsId from './LegsId';


export default class LegendaryCalcBuilder {

    static pushIfAccessible(legs, id, accessibleList) {
        if (accessibleList[id]) {
            legs.push(id);
        }
    }
    static getLegendary1(isRange, lowHP, accessibleList, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.ANTI_ARMOR, accessibleList);
        LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.EXECUTIONER, accessibleList);
        if (isRange) {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.QUAD, accessibleList);
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.TWO_SHOT, accessibleList);
        }
        if (lowHP) {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.BLOODIED, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.ARISTOCRAT, accessibleList);
        }
        return legs;
    }

    static initLegs(legs) {
        if (!legs) {
            legs = [];
        } else {
            legs.length = 0;
        }
        return legs;
    }

    static getLegendary2(isRange, explosive, scoped, accessibleList, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.VITAL, accessibleList);
        LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.CRIPPLING, accessibleList);
        if (isRange) {
            if (scoped) {
                LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.HITMAN, accessibleList);
            }
            if (!explosive) {
                LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.EXPLOSIVE, accessibleList);
            }
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.RANGED_RAPID, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.STEADY, accessibleList);
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.MELEE_RAPID, accessibleList);
        }
        return legs;
    }

    static getLegendary3(isRange, accessibleList, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        if (isRange) {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.SWIFT, accessibleList);
        } else {
            LegendaryCalcBuilder.pushIfAccessible(legs, LegsId.STRENGTH, accessibleList);
        }
        return legs;
    }
}