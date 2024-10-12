import Weapon from './Weapon';
import WeaponSpecsAssembler from './WeaponSpecsAssembler';


export default class WeaponFactory {

    DEFAULT = 0;

    constructor(wSpec, perks, extraDamage, additionalDamages, stuffBoost, playerStats) {
        this.wSpec = wSpec;
        this.perks = perks;
        this.extraDamage = extraDamage;
        this.additionalDamages = additionalDamages;
        this.stuffBoost = stuffBoost;
        this.playerStats = playerStats;
    }

    build(type) {
        switch(type) {
            case type:
            default:
                return new Weapon(new WeaponSpecsAssembler(this.wSpec, this.perks, this.extraDamage, this.additionalDamages,
                    this.stuffBoost, this.playerStats));
        }
    }
}