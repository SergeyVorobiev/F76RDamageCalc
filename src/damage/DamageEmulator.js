import CreaturesProduction from '../creature/CreaturesProduction';


export default class DamageEmulator {
    constructor(weapon, creatureInfos) {
        this.weapon = weapon;
        this.creatureInfos = creatureInfos;
        this.debug = false;
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
    emulate(steps=10000, timeLimit=null) {
        let startTime = 0;
        if (this.debug) {
            startTime = Date.now();
        }
        const creatures = CreaturesProduction.produce(this.creatureInfos, this.weapon.getAntiArmor());
        let step = 0;
        for (; step < steps; step++) {
            let deadCount = 0;
            const hit = this.weapon.hit();
            for (let i = 0; i < creatures.length; i++) {
                const creature = creatures[i];
                if (creature.takeDamage(hit)) {
                    creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTotalTime(), this.weapon.getRealShotsPerSecond());
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
                creature.formDeadReport(this.weapon.getReloadsCount(), this.weapon.getReloadsTotalTime(), this.weapon.getRealShotsPerSecond());
            }
            resultArmor.set(creature.getName(), creature.getArmor());
        }
        if (this.debug) {
            console.log("Emulation time: " + (Date.now() - startTime));
        }
        return  {
            weaponName: this.weapon.getName(),
            weaponType: this.weapon.getType(),
            defaultWeaponName: this.weapon.getDefaultName(),
            damageDetails: this.weapon.getDamages().concat(this.weapon.getCritDamages()),
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
            accuracy: this.weapon.getGeneralAccuracy(),
            ammoCapacity: this.weapon.getAmmoCapacity(),
            strength: this.weapon.getStrength(),
            health: this.weapon.getOwnerHealth(),
            resultArmor: resultArmor,
        };
    }
}