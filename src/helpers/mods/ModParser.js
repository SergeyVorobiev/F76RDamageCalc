import Appliers from './appliers/Appliers';
import getMods from '../Mods';


export class ModParser {

    constructor(alt) {
        this.appliers = new Appliers(alt).appliers;
        this.skip_legendary = ["0040bd7c", "004f577d", "004f5776", "004f5778", "004ed02f", "004e89af", "00529a02"];
        this.alt = alt;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    // mutatingDamage is used when default damages like (ammo, projectile) must be overridden
    // this types of modes must be applied separately to correctly multiply buffs.
    applyOrRevoke(modData, template, apply, mutatingDamage=false) {
        for (let i = 0; i < modData.modifiers.length; i++) {
            const mod = modData.modifiers[i];
            const applier = this.appliers.get(mod.prop);
            if (applier) {
                const changeDefault = applier.isChangingDefaultDamage();
                if ((mutatingDamage && changeDefault) || (!mutatingDamage && !changeDefault)) {
                    applier.apply(template, mod, apply);
                }
            }
        }
    }

    static applySpecific(template, modData, modEffects) {
        for (let i = 0; i < modData.modifiers.length; i++) {
            const mod = modData.modifiers[i];
            const applier = modEffects.get(mod.prop);
            if (applier) {
                applier.apply(template, mod, true);
            }
        }
    }

    // Update means that it can be applied to legendary which reset their value according to health
    // Effects which add and remove their static values can not be updated (otherwise they will stack values up every time)
    applyLegendaryModToWSpec(modId, wSpec, starIndex, health, update, apply) {
        if (this.skip_legendary.includes(modId)) {
            return;
        }
        const modData = getMods().get(modId);
        if (modData) {
            for (let i = 0; i < modData.modifiers.length; i++) {
                const mod = modData.modifiers[i];
                const applier = this.appliers.get(mod.prop);
                if (applier) {
                    applier.applyLegendary(wSpec, mod, modId, starIndex, health, update, apply);
                }
            }
        }
    }
}