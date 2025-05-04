import Appliers from './appliers/Appliers';
import getMods from '../Mods';
import { resetAdjustableLegendary } from '../../entities/EWeaponSpecs';


export class ModParser {

    constructor(alt) {
        this.appliers = new Appliers(alt).appliers;
        this.skip_legendary = [];
        this.alt = alt;

        // Sort mods before applying in order - set, add, mullAdd
        // Base value does not change even if set is applied, so order of 'add' and 'mullAdd' is not important
        this.sort = true;

        // Mods with the same properties and operations will be overridden if they have different id
        this.override = true;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    modComparator(mod1, mod2) {
        if (mod1.op === "Set") {
            return -1;
        } else if (mod2.op === "Set") {
            return 1;
        } else if (mod1.op === "Add") {
            return -1;
        }
        return 1;
    }

    overrideMods(modifiers) {
        const hashMods = new Map();
        for (let i = 0; i < modifiers.length; i++) {
            const mod = modifiers[i];
            const key = mod.op + mod.prop;
            const existed = hashMods.get(key);
            if (!existed) {
                hashMods.set(key, [mod]);
            } else {
                const filtered = [];
                for (let j = 0; j < existed.length; j++) {
                    const eMod = existed[j];
                    if (eMod.id === mod.id) { // ok, all with different ids will be eliminated (meaning new one added later will override them)
                        filtered.push(eMod);
                    }
                }
                filtered.push(mod);
                hashMods.set(key, filtered);
            }
        }
        modifiers = [];
        hashMods.forEach((value, key, map) => {
            for (let i = 0; i < value.length; i++) {
                modifiers.push(value[i]);
            }
        });
        return modifiers;
    }

    // mutatingDamage is used when default damages like (ammo, projectile) must be overridden
    // this types of modes must be applied separately to correctly multiply buffs.
    applyOrRevoke(modData, template, apply, mutatingDamage=false) {
        let modifiers = modData.modifiers;
        if (this.override) {
            modifiers = this.overrideMods(modifiers);
        }
        if (this.sort) {
            modifiers = modData.modifiers.toSorted(this.modComparator);
        }
        for (let i = 0; i < modifiers.length; i++) {
            const mod = modifiers[i];
            const applier = this.appliers.get(mod.prop);
            if (applier) {
                const changeDefault = applier.isChangingDefaultDamage();
                if ((mutatingDamage && changeDefault) || (!mutatingDamage && !changeDefault)) {
                    if (mod.prop === "AttackDamage") {
                        const damageType = this.getModWithPropAndId(modifiers, "DamageTypeValues", mod.id);
                        if (!damageType) { // We will apply attack damage coefficient only for those who does not have DamageTypeValues, see DamageSetter.setDamages
                            applier.apply(template, mod, apply, modData.id);
                        }
                    } else if (mod.prop === "DamageTypeValues") {
                        const modAttack = this.getModWithPropAndId(modifiers, "AttackDamage", mod.id);
                        applier.apply(template, mod, apply, modData.id, modAttack);
                        // console.warn("DamageTypeValues " + " " + template.name + " " + template.id + " " + template.type[1] + " " + modData.name);
                    } else {
                        applier.apply(template, mod, apply, modData.id);
                    }
                }
            }
        }
    }
    getModWithPropAndId(modifiers, prop, id) {
        for (let i = 0; i < modifiers.length; i++) {
            const mod = modifiers[i];
            if (mod.prop === prop && mod.id === id) {
                return mod;
            }
        }
        return null;
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
        let appliedOnce = false;
        if (modData) {
            for (let i = 0; i < modData.modifiers.length; i++) {
                const mod = modData.modifiers[i];
                const applier = this.appliers.get(mod.prop);
                if (applier) {
                    const isApplied = applier.applyLegendary(wSpec, mod, modId, starIndex, health, update, apply);
                    if (isApplied) {
                        appliedOnce = true;
                    }
                }
            }
        }
        wSpec.legendary[starIndex][2] = appliedOnce;
        if (!apply) { // Have to reset specific cells of human adjustable legendary
            resetAdjustableLegendary(wSpec, starIndex, false);
        }
    }
}