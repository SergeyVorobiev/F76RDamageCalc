import LegsId from './LegsId';


export default class LegendaryCalcBuilder {

    static getLegendary1(isRange, lowHP, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        legs.push(LegsId.ANTI_ARMOR);
        legs.push(LegsId.EXECUTIONER);
        if (isRange) {
            legs.push(LegsId.QUAD);
            legs.push(LegsId.TWO_SHOT);
        }
        if (lowHP) {
            legs.push(LegsId.BLOODIED);
        } else {
            legs.push(LegsId.ARISTOCRAT);
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

    static getLegendary2(isRange, explosive, scoped, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        legs.push(LegsId.VITAL);
        legs.push(LegsId.CRIPPLING);
        if (isRange) {
            if (scoped) {
                legs.push(LegsId.HITMAN);
            }
            if (!explosive) {
                legs.push(LegsId.EXPLOSIVE);
            }
            legs.push(LegsId.RANGED_RAPID);
        } else {
            legs.push(LegsId.STEADY);
            legs.push(LegsId.MELEE_RAPID);
        }
        return legs;
    }

    static getLegendary3(isRange, legs=null) {
        legs = LegendaryCalcBuilder.initLegs(legs);
        if (isRange) {
            legs.push(LegsId.SWIFT);
        } else {
            legs.push(LegsId.STRENGTH);
        }
        return legs;
    }
}