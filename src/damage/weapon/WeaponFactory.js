import Weapon from './Weapon';
import WeaponSpecsAssembler from './WeaponSpecsAssembler';


export default class WeaponFactory {

    DEFAULT = 0;
    NO_CRIT = 1;
    constructor(wSpec, perks, extraDamage, additionalDamages, stuffBoost, playerStats, ownerHealth) {
        this.wSpec = wSpec;
        this.perks = perks;
        this.extraDamage = extraDamage;
        this.additionalDamages = additionalDamages;
        this.stuffBoost = stuffBoost;
        this.playerStats = playerStats;
        this.ownerHealth = ownerHealth;
    }

    build(type) {
        switch(type) {
            case 0:
                return new Weapon(new WeaponSpecsAssembler(this.wSpec, this.perks, this.extraDamage, this.additionalDamages,
                    this.stuffBoost, this.playerStats, this.ownerHealth));
            case 1:
                const extraDamage = { ...this.extraDamage };
                extraDamage.useCrit = false;
                return new Weapon(new WeaponSpecsAssembler(this.wSpec, this.perks, extraDamage, this.additionalDamages,
                    this.stuffBoost, this.playerStats, this.ownerHealth));
            default:
                return new Weapon(new WeaponSpecsAssembler(this.wSpec, this.perks, this.extraDamage, this.additionalDamages,
                    this.stuffBoost, this.playerStats, this.ownerHealth));
        }
    }
}