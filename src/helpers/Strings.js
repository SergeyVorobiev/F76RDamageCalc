export default class Strings {
    static Melee = "Melee";
    static Unarmed = "Unarmed";

    static getFireRate(wType=null) {
        return (wType && (wType === Strings.Melee || wType === Strings.Unarmed)) ? "Hit Rate" : "Fire Rate";
    }
}

export class DamageTypes {

    static physical = 0;
    static dtPhysical = 1;

    static bleed = 2;
    static dtPhysical = 3;

    static explosive = 4;
    static dtPhysical = 5;

    static energy = 6;
    static dtEnergy = 7;

    static fire = 8;
    static dtFire = 9;

    static cryo = 10;
    static dtCryo = 11;

    static poison = 12;
    static dtPoison = 13;

    static radiation = 14;
    static dtRadiation = 15;

    // Returns [kind, type]
    static convertTypeKind(kind) {
        switch(kind) {
            case "physical":
                return [DamageTypes.physical, DamageTypes.dtPhysical];
            case "bleed":
                return [DamageTypes.bleed, DamageTypes.dtPhysical];
            case "explosive":
                return [DamageTypes.explosive, DamageTypes.dtPhysical];
            case "energy":
                return [DamageTypes.energy, DamageTypes.dtEnergy];
            case "fire":
                return [DamageTypes.fire, DamageTypes.dtFire];
            case "cryo":
                return [DamageTypes.cryo, DamageTypes.dtCryo];
            case "poison":
                return [DamageTypes.poison, DamageTypes.dtPoison];
            case "radiation":
                return [DamageTypes.radiation, DamageTypes.dtRadiation];
            default:
                throw new Error("Wrong type");
        }

    }

}