export default class Strings {
    static Melee = "Melee";
    static Unarmed = "Unarmed";

    static getFireRate(wType=null) {
        return (wType && (wType === Strings.Melee || wType === Strings.Unarmed)) ? "Hit Rate" : "Fire Rate";
    }
}