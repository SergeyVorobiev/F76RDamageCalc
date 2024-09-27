import Appliers from './appliers/Appliers';
import getMods from '../Mods';


export class ModParser {

    constructor() {
        this.appliers = new Appliers().appliers;
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

    // Update means that it can be applied to legendary which reset their value according to health
    // Effects which add and remove their static values can not be updated (otherwise they will stack values every time)
    applyLegendaryModToWSpec(modId, wSpec, starIndex, health, update, apply) {
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