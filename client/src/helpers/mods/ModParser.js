import { DamageBonusMult } from './appliers/DamageBonusMult';
import { Ammo } from './appliers/Ammo';
import { IsAutomatic } from './appliers/IsAutomatic';
import { Speed } from './appliers/Speed';
import { APCost } from './appliers/APCost';
import { Weight } from './appliers/Weight';
import { AttackDelay } from './appliers/AttackDelay';
import { CriticalDamageMult } from './appliers/CriticalDamageMult';
import { AmmoCapacity } from './appliers/AmmoCapacity';
import { ReloadSpeed } from './appliers/ReloadSpeed';
import { OverrideProjectile } from './appliers/OverrideProjectile';
import { HasRepeatableSingleFire } from './appliers/HasRepeatableSingleFire';
import { ActorValues } from './appliers/ActorValues';
import { Keywords } from './appliers/Keywords';
import { CritEffect } from './appliers/CritEffect';
import { AttackDamage } from './appliers/AttackDamage'
import { DamageTypeValues } from './appliers/DamageTypeValues'
import { WeightReduction } from './appliers/WeightReduction'


export class ModParser {

    constructor() {

        // TODO: Has to be generated and set automatically via names instead of manual setting
        this.appliers = new Map();
        this.appliers.set("DamageBonusMult", new DamageBonusMult());
        this.appliers.set("Ammo", new Ammo());
        this.appliers.set("IsAutomatic", new IsAutomatic());
        this.appliers.set("Speed", new Speed());
        this.appliers.set("APCost", new APCost());
        this.appliers.set("Weight", new Weight());
        this.appliers.set("AttackDelay", new AttackDelay());
        this.appliers.set("CriticalDamageMult", new CriticalDamageMult());
        this.appliers.set("AmmoCapacity", new AmmoCapacity());
        this.appliers.set("ReloadSpeed", new ReloadSpeed());
        this.appliers.set("OverrideProjectile", new OverrideProjectile());
        this.appliers.set("HasRepeatableSingleFire", new HasRepeatableSingleFire());
        this.appliers.set("ActorValues", new ActorValues());
        this.appliers.set("Keywords", new Keywords());
        this.appliers.set("CritEffect", new CritEffect());
        this.appliers.set("AttackDamage", new AttackDamage());
        this.appliers.set("DamageTypeValues", new DamageTypeValues());
        this.appliers.set("WeightReduction", new WeightReduction());
    }

    applyOrRevoke(modData, template, apply) {
        for (let i = 0; i < modData.modifiers.length; i++) {
            const mod = modData.modifiers[i];
            const applier = this.appliers.get(mod.prop);
            if (applier) {
                applier.apply(template, template.id, mod, apply)
            }
        }
    }
}