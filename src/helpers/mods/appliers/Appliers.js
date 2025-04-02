import { DamageBonusMult } from './DamageBonusMult';
import { Ammo } from './Ammo';
import { IsAutomatic } from './IsAutomatic';
import { Speed } from './Speed';
import { APCost } from './APCost';
import { Weight } from './Weight';
import { AttackDelay } from './AttackDelay';
import { CriticalDamageMult } from './CriticalDamageMult';
import { AmmoCapacity } from './AmmoCapacity';
import { ReloadSpeed } from './ReloadSpeed';
import { OverrideProjectile } from './OverrideProjectile';
import { HasRepeatableSingleFire } from './HasRepeatableSingleFire';
import { ActorValues } from './ActorValues';
import { Keywords } from './Keywords';
import { CritEffect } from './CritEffect';
import { AttackDamage } from './AttackDamage';
import { DamageTypeValues } from './DamageTypeValues';
import { WeightReduction } from './WeightReduction';
import { Enchantments } from './Enchantments';
import { NumProjectiles } from './NumProjectiles';
import { ConIronSight } from './ConIronSight';
import { SightedTransition } from './SightedTransition';
import { MaxConDegree } from './MaxConDegree';
import { MinConDegree } from './MinConDegree';
import { RecoilMaxDegree } from './RecoilMaxDegree';
import { RecoilMinDegree } from './RecoilMinDegree';
import { FullPowerTime } from './FullPowerTime';
import { MinPower } from './MinPower';
import { FullPower } from './FullPower';


export default class Appliers {
    
    constructor(alt) {
        
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
        this.appliers.set("Enchantments", new Enchantments());
        this.appliers.set("NumProjectiles", new NumProjectiles());
        this.appliers.set("ConIronSight", new ConIronSight());
        this.appliers.set("SightedTransition", new SightedTransition());
        this.appliers.set("MaxConDegree", new MaxConDegree());
        this.appliers.set("MinConDegree", new MinConDegree());
        this.appliers.set("RecoilMaxDegree", new RecoilMaxDegree());
        this.appliers.set("RecoilMinDegree", new RecoilMinDegree());
        this.appliers.set("FullPowerTime", new FullPowerTime());
        this.appliers.set("MinPower", new MinPower());
        this.appliers.set("FullPower", new FullPower());
        this.appliers.forEach((value, key, map) => {
            value.setAlt(alt);
        });
    }
}