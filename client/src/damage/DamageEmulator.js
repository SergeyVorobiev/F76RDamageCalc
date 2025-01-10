import CreaturesProduction from '../creature/CreaturesProduction';


export default class DamageEmulator {
    constructor(weapon, creatureInfos) {
        this.weapon = weapon;
        this.creatureInfos = creatureInfos;
    }

    needToStopByTime(timeLimit, creatures) {
        if (!timeLimit) {
            return false;
        }
        const name = timeLimit[0];
        const time = timeLimit[1];
        if (name === "average") {
            let totalTime = 0;
            for (let i = 0; i < creatures.length; i++) {
                const creature = creatures[i];
                totalTime += creature.totalTime();
            }
            totalTime = Math.floor(totalTime / 4);
            return totalTime > time;
        }
        for (let i = 0; i < creatures.length; i++) {
            const creature = creatures[i];
            if (creature.name === name) {
                return (creature.totalTime() > time);
            }
        }
        return false;
    }

    // timeLimit = ["Average", time], ["creaturename", time]
    emulate(steps=35000, timeLimit=null) {
        const creatures = CreaturesProduction.produce(this.creatureInfos, this.weapon.getAntiArmor());
        let step = 0;
        for (; step < steps; step++) {
            let deadCount = 0;
            const hit = this.weapon.hit();
            for (let i = 0; i < creatures.length; i++) {
                const creature = creatures[i];
                if (creature.takeDamage(hit)) {
                    creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
                    deadCount += 1;
                }
            }
            if (deadCount === creatures.length || this.needToStopByTime(timeLimit, creatures)) {
                break;
            }
        }

        // Check death and form a report
        const resultArmor = new Map();
        for (let i = 0; i < creatures.length; i++) {
            const creature = creatures[i];
            if (!creature.isDead()) {
                creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTime());
            }
            resultArmor.set(creature.getName(), creature.getArmor());
        }

        return  {
            weaponName: this.weapon.getName(),
            defaultWeaponName: this.weapon.getDefaultName(),
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