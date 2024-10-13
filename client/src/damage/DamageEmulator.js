export default class DamageEmulator {
    constructor(weapon, creatures) {
        this.weapon = weapon;
        this.creatures = creatures;
    }

    emulate(steps=35000) {
        let step = 0;
        for (; step < steps; step++) {
            let deadCount = 0;
            const hit = this.weapon.hit();
            for (let i = 0; i < this.creatures.length; i++) {
                const creature = this.creatures[i];
                if (creature.takeDamage(hit)) {
                    creature.formDeadReport(0, this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
                    deadCount += 1;
                }
            }
            if (deadCount === this.creatures.length) {
                break;
            }
        }

        // Check death and form a report
        const resultArmor = new Map();
        for (let i = 0; i < this.creatures.length; i++) {
            const creature = this.creatures[i];
            if (!creature.isDead()) {
                creature.formDeadReport(0, this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
            }
            resultArmor.set(creature.getName(), creature.getArmor());
        }

        return  {
            damageDetails: this.weapon.getDamages(),
            expDTypeBonus: this.weapon.getExplosiveDamageTypeBonus(),
            bonusMult: this.weapon.getBonusMult(),
            totalBonus: this.weapon.getTotalBonus(),
            tDamage: this.weapon.getDisplayedDamage(),
            antiArmor: this.weapon.getAntiArmor(),
            displayedCrit: this.weapon.getCritBonus(),
            displayedSneak: this.weapon.getSneakBonus(),
            isCrit: this.weapon.isCrit(),
            isSneak: this.weapon.isSneak(),
            creatureBonus: this.weapon.getCreatureBonus(),
            strengthBonus: this.weapon.getStrengthBonus(),
            explosive: this.weapon.getExplosiveBonus(),
            shotSize: this.weapon.getShotSize(),
            reloadTime: this.weapon.getReloadTime(),
            fireRate: this.weapon.getFireRate(),
            ammoCapacity: this.weapon.getAmmoCapacity(),
            strength: this.weapon.getStrength(),
            resultArmor: resultArmor,
        };
    }
}