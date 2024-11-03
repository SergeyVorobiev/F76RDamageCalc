// TODO: Finish implementation
export class PerkBuilder {

    static build(buildName) {
        switch(name) {
            case "Heavy":
                return addText(heavy, maxHeight, space, customName);
            case "Shotgun":
                return addText(shotgun, maxHeight, space, customName);
            case "Rifle":
                return addText(rifle, maxHeight, space, customName);
            case "Pistol":
                return addText(gun, maxHeight, space, customName);
            case "Bow":
                return addText(bow, maxHeight, space, customName);
            case "Melee":
                return addText(melee, maxHeight, space, customName);
            case "Unarmed":
                return addText(unarmed, maxHeight, space, customName);
            case "Thrown":
                return addText(thrown, maxHeight, space, customName);
            default:
                return customName;
        }
    }