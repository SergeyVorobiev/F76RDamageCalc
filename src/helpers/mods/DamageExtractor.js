import { getEffect } from '../EffectProvider';
import { getTemplateCopyById } from '../TemplatesRegister';
import CustomConditions from '../CustomConditions';


export class Assignment {
    static DAMAGE = 0;
    static BDB = 1;
    static TDB = 2;
    static ARMOR = 3;
    static EXP_MULT = 4;
    static SPEED_MULT = 5;
}

export default class DamageExtractor {

    static NORMAL = 0;
    static EXPLOSIVE = 1;
    static BLOOD = 2;
    
    static damageTypes = {
        "electrical": {
            "id": "00060a80",
            "name": "dtElectrical",
            "full": "Electrical Damage"
        },
        "energy": {
            "id": "00060a81",
            "name": "dtEnergy",
            "full": "Energy Damage"
        },
        "radiation": {
            "id": "00060a85",
            "name": "dtRadiationExposure",
            "full": "Radiation Damage"
        },
        "fire": {
            "id": "00060a82",
            "name": "dtFire",
            "full": "Fire Damage"
        },
        "cryo": {
            "id": "00060a83",
            "name": "dtCryo",
            "full": "Cryo Damage"
        },
        "poison": {
            "id": "00060a84",
            "name": "dtPoison",
            "full": "Poison Damage"
        },
        "physical": {
            "id": "00060a87",
            "name": "dtPhysical",
            "full": "Physical Damage"
        },
        "pure": {
            "id": "00060a8d",
            "name": "dtPureDamage",
            "full": "Pure Damage"
        },
        "00060a80": {
            "id": "00060a80",
            "name": "dtElectrical",
            "full": "Electrical Damage"
        },
        "00060a81": {
            "id": "00060a81",
            "name": "dtEnergy",
            "full": "Energy Damage"
        },
        "00060a85": {
            "id": "00060a85",
            "name": "dtRadiationExposure",
            "full": "Radiation Damage"
        },
        "00060a82": {
            "id": "00060a82",
            "name": "dtFire",
            "full": "Fire Damage"
        },
        "00060a83": {
            "id": "00060a83",
            "name": "dtCryo",
            "full": "Cryo Damage"
        },
        "00060a84": {
            "id": "00060a84",
            "name": "dtPoison",
            "full": "Poison Damage"
        },
        "00060a87": {
            "id": "00060a87",
            "name": "dtPhysical",
            "full": "Physical Damage"
        },
        "00060a8d": {
            "id": "00060a8d",
            "name": "dtPureDamage",
            "full": "Pure Damage"
        },
        "dtElectrical": {
            "id": "00060a80",
            "name": "dtElectrical",
            "full": "Electrical Damage"
        },
        "dtEnergy": {
            "id": "00060a81",
            "name": "dtEnergy",
            "full": "Energy Damage"
        },
        "dtRadiationExposure": {
            "id": "00060a85",
            "name": "dtRadiationExposure",
            "full": "Radiation Damage"
        },
        "dtFire": {
            "id": "00060a82",
            "name": "dtFire",
            "full": "Fire Damage"
        },
        "dtCryo": {
            "id": "00060a83",
            "name": "dtCryo",
            "full": "Cryo Damage"
        },
        "dtPoison": {
            "id": "00060a84",
            "name": "dtPoison",
            "full": "Poison Damage"
        },
        "dtPhysical": {
            "id": "00060a87",
            "name": "dtPhysical",
            "full": "Physical Damage"
        },
        "dtPureDamage": {
            "id": "00060a8d",
            "name": "dtPureDamage",
            "full": "Pure Damage"
        },
    };

    // Based on resistance
    static resTypes = {
        '000002ea': DamageExtractor.damageTypes['radiation'],
        '000002eb': DamageExtractor.damageTypes['energy'],
        '000002e7': DamageExtractor.damageTypes['cryo'],
        '000002e4': DamageExtractor.damageTypes['poison'],
        '000002e5': DamageExtractor.damageTypes['fire'],
        '000002e6': DamageExtractor.damageTypes['electrical'],
        '000002e3': 'DamageResistance',
    };

    constructor(alt, extractPlacedObjects=true) {

        // Some of the weapon's projectiles contain weapons inside
        if (extractPlacedObjects) {
            this.tomahawk = getTemplateCopyById('000042f2');
            this.throwingKnife = getTemplateCopyById('003879a3');
            this.extractFromTemplate(this.tomahawk);
            this.extractFromTemplate(this.throwingKnife);
        }
        this.alt = alt;
    }

    setAlt(alt) {
        this.alt = alt;
    }

    extract(templates) {
        for (let i = 0; i < templates.length; i++) {
            this.extractFromTemplate(templates[i]);
            const template = templates[i];
        }
    }

    extractFromTemplate(template) {

        // Base Damage
        for (let i = 0; i < template.baseDamages.length; i++) {
            const baseDamage = template.baseDamages[i];
            const curveCurrent = DamageExtractor.getCurrentCurve(baseDamage.curveBase, baseDamage.curveAlt);
            const curve = {
                curve: curveCurrent,
                curveBase: baseDamage.curveBase,
                curveAlt: baseDamage.curveAlt,
            }
            const damageData = DamageExtractor.getDamageData(baseDamage.type, DamageExtractor.NORMAL, curve, baseDamage.value, 0, 0, 0, 0);
            this.addDamageNode("Base", "Weapon", template.damageData, template.id, template.id, template.id, Assignment.DAMAGE, false, false, damageData, []);
        }

        // Ammo
        const ammoId = template.ammoId[1];
        const weaponId = template.id;
        if (!weaponId) {
            throw new Error("Weapon has no id");
        }
        if (ammoId && ammoId !== '00000000' && ammoId !== '') {
            const ammoData = getEffect(ammoId);
            this.extractAmmo("Ammo", "Weapon", template.damageData, ammoId, weaponId, ammoData, []);
        }

        // Projectile (Overridden)
        const projIds = template.projId[1];
        for (let i = 0; i < projIds.length; i++) {
            const projId = projIds[i];
            if (projId !== '00000000' && projId !== '') {
                if (typeof projId !== typeof '') {
                    throw new Error("ProjId is not an Id");
                }
                const projData = getEffect(projId);
                this.extractProj("Overridden Projectile", "Weapon", template.damageData, projId, weaponId, projData, false, []);
            }
        }

        // Base Spell
        this.extractEnch("Base Spell", "Weapon", template.damageData, template.spellId, weaponId, template.spellId, false, 0, 0, [])

        // Base Crit
        const critIds = template.crSpellId[1];
        for (let i = 0; i < critIds.length; i++) {
            const critId = critIds[i];
            if (critId && critId !== '' && critId !== '00000000') {
                this.extractEnch("Crit Spell", "Weapon", template.damageData, critId, weaponId, critId, false, 0, 0, []);
            }
        }

        // Mod Enchantments
        const effectIds = template.enchantments[1];
        for (let i = 0; i < effectIds.length; i++) {
            const effectId = effectIds[i];
            if (effectId !== '00000000' && effectId !== '') {
                if (typeof effectId !== typeof '') {
                    throw new Error("EffectId is not an Id");
                }
                this.extractEnch("Mod Spell", "Weapon", template.damageData, effectId, weaponId, effectId, false, 0, 0, [])
            }
        }
    }

    extractAmmo(source, initiator, result, parentId, weaponId, ammo, conditions) {
        const ammoDamage = ammo.damage;
        const ammoId = ammo.id;
        if (ammoDamage > 0) {
            if (ammo.ammo_type !== 'Ballistic') {
                throw new Error("Ammo type is not 'Ballistic'");
            }
            const typeName = DamageExtractor.damageTypes.physical.name;
            this.addSimpleDamageNode(source, initiator, result, parentId, ammoId, weaponId, typeName, ammoDamage, conditions);
        }
        const projId = ammo.projectile;
        if (projId && projId !== '' && projId !== '00000000') {
            const projData = getEffect(projId);
            this.extractProj("Ammo Projectile", initiator, result, parentId, weaponId, projData, false, conditions);
        }
    }

    extractProj(source, initiator, result, parentId, weaponId, proj, destructible, conditions) {
        this.extractExp(source, initiator, result, parentId, weaponId, proj.destructible, true, conditions);
        this.extractExp(source, initiator, result, parentId, weaponId, proj.expl, destructible, conditions); // In case if some inner proj comes from destructible parent
    }

    extractExp(source, initiator, result, parentId, weaponId, exp, destructible, conditions) {
        if (!exp || exp === '' || exp === '00000000') {
            return;
        }
        if (typeof exp !== typeof {}) {
            exp = getEffect(exp);
        }
        const ench = exp.enchantment;
        if (ench && ench !== '' && ench !== '00000000') {
            this.extractEnch(source, initiator, result, parentId, weaponId, ench, destructible, 0, 0, conditions);
        }
        this.resolveAndExtractProj(source, initiator, result, parentId, weaponId, exp.projectile, destructible, conditions);
        this.extractObject(source, initiator, result, parentId, weaponId, exp.object, destructible, conditions);
        this.dDamage(source, initiator, result, parentId, weaponId, exp, destructible, conditions);
        const damageTypeName = DamageExtractor.damageTypes.physical.name;
        const damage = exp.damage;
        const expCurve = this.resolveCurve(exp.exp_curv);
        const damageData = this.buildNoTimeSimpleDamage(damage, damageTypeName, expCurve, DamageExtractor.EXPLOSIVE);
        this.addDamageNode(source, initiator, result, parentId, exp.id, weaponId, Assignment.DAMAGE, destructible, false, damageData, conditions);
        if (exp.damage_mult > 0) {
            const multData = this.buildNoTimeSimpleDamage(exp.damage_mult);
            this.addDamageNode(source, initiator, result, parentId, exp.id, weaponId, Assignment.EXP_MULT, false, false, multData, []);
        }
    }

    resolveAndExtractProj(source, initiator, result, parentId, weaponId, projId, destructible, conditions) {
        if (projId !== '' && projId !== '00000000') {
            if (typeof projId !== typeof '') {
                throw new Error("Proj id is not an id");
            }
            const projData = getEffect(projId);
            this.extractProj(source, initiator, result, parentId, weaponId, projData, destructible, conditions);
        }
    }

    // Source must include 'Crit' if we want the extracted damage to be crit.
    extractEnch(source, initiator, result, parentId, weaponId, ench, destructible, time, interval, conditions) {
        if (ench && typeof ench !== typeof '') {
            throw new Error("Enchantment is not an id");
        }
        if (ench === "" || ench === "00000000") {
            return;
        }

        let enchId = ench;

        // Custom enchantments
        switch(enchId) {
            case "00799381": // Electrician, cause 25 damages when reloading
                const multDataE = this.buildNoTimeSimpleDamage(25, "dtEnergy", null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, enchId, weaponId, Assignment.DAMAGE, false, false, multDataE, [[CustomConditions.names.reload[0]]]);
                return;
            case "00633683": // Heavy Hitter
                const multDataH = this.buildNoTimeSimpleDamage(150, "dtPhysical", null, DamageExtractor.EXPLOSIVE, 50, "no");
                this.addDamageNode(source, initiator, result, parentId, enchId, weaponId, Assignment.DAMAGE, false, false, multDataH, [[CustomConditions.names.bashing[0]]]);
                return;
            case "00793eff": // Iceman (Seems that it only adds 75 points to movement speed not damage
                return;
            case "004e89af": // Incendiary (Does not support hot swap of projectiles and crit
                return;
            case "00792936": // Polished
                const multData = this.buildNoTimeSimpleDamage(24, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, enchId, weaponId, Assignment.BDB, false, false, multData, []);
                return;
            case "007aca02": // Pin-Pointer (BDB will be treated as a chance in WeaponSpecsAssembler
                const multDataP = this.buildNoTimeSimpleDamage(33, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, enchId, weaponId, Assignment.BDB, false, false, multDataP, []);
                return;
        }

        ench = getEffect(ench);
        if (!ench) {
            throw new Error("Can't resolve enchantment: " + enchId + ", weapon: " + weaponId);
        }
        const bleed = ench.full.toLowerCase().includes("bleed") || ench.name.toLowerCase().includes("bleed");

        let perk = null;
        perk = ench.perk;
        this.extractPerk(source, initiator, result, parentId, weaponId, perk, destructible, conditions);

        let duration = ench.duration;
        if (duration && duration > 0) {
            throw new Error("Enchantment has duration");
        }
        let enchTime = ench.time;
        if (!enchTime) {
            enchTime = 0;
        }
        if (enchTime === 0) {
            enchTime = time;
        }
        this.extractEffects(source, initiator, result, enchId, parentId, weaponId, ench.mag_effects, bleed, destructible, enchTime, interval, conditions);
    }

    excludeEffects = [
        '003e9567', // From Accelerating
    ]

    extractEffects(source, initiator, result, effectsParentId, parentId, weaponId, effects, bleed, destructible, time, interval, conditions) {
        if (!effects) {
            return;
        }
        //let existedEffects = new Set();
        for (let e = 0; e < effects.length; e++) {
            const effect = effects[e];
            const copyConditions = [...conditions];
            copyConditions.push([...effect.conditions]);

            // Effect part
            let magnitude = effect.magnitude;
            let curv = effect.d_curv;
            let area = effect.area;
            let duration = effect.duration;
            let globMagnitude = effect.glob_magnitude;
            let globDuration = effect.glob_duration;
            let onlyPlayer = effect.only_player;
            if (onlyPlayer === "Yes") {
                onlyPlayer = true;
            } else {
                onlyPlayer = false;
            }

            // MEffect
            let mEffect = effect.m_effect;
            if (this.excludeEffects.includes(mEffect)) {
                continue;
            }
            mEffect = getEffect(mEffect);
            copyConditions.push([...mEffect.conditions] );
            //if (existedEffects.has(mEffect.id)) {
            //    continue;
            //}
            // Crit check
            const name = mEffect.name;
            const full = mEffect.full;
            let crit = false;
            if (name.toLowerCase().includes("crit") || full.toLowerCase().includes("crit")) {
                crit = true;
            }

            // Blood check
            let blood = bleed;
            if (name.toLowerCase().includes("bleed") || full.toLowerCase().includes("bleed")) {
                blood = true;
            }
            //existedEffects.add(mEffect.id);
            this.extractPerk(source, initiator, result, parentId, weaponId, mEffect.perk, destructible, copyConditions);
            this.extractExp(source, initiator, result, parentId, weaponId, mEffect.explosion, destructible, copyConditions);
            const proj = mEffect.projectile;
            if (proj !== '00000000') {
                throw new Error("Proj / Expl found in mag effects");
            }
            if (magnitude !== 0 || (curv !== '' && curv !== 0) || globMagnitude !== '') {
                if (globDuration && globDuration !== '' && globDuration !== '00000000') {
                    globDuration = globDuration.value;
                } else {
                    globDuration = 0
                }
                if (globDuration > 0) {
                    duration = globDuration;
                }
                if (duration > 0) {
                    time = duration;
                }
                if (globMagnitude && globMagnitude !== '' && globMagnitude !== '00000000') {
                    globMagnitude = globMagnitude.value;
                } else {
                    globMagnitude = 0;
                }
                if (globMagnitude > 0) { // Override magnitude by glob
                    magnitude = globMagnitude;
                }
                const r_curve = this.resolveCurve(curv);
                let dType = this.findEffectDamageType(mEffect, effectsParentId, weaponId);
                if (dType && !onlyPlayer) {
                    let assignment = Assignment.DAMAGE;
                    if (dType.id === '00097341') {
                        assignment = Assignment.ARMOR;
                    } else if (dType.id === '0018eee1' || dType.id === '00312d66') {
                        assignment = Assignment.BDB;
                    } else if (dType.id === '00000312') {
                        assignment = Assignment.SPEED_MULT;
                    }
                    if (crit && !source.includes("Crit")) {
                        source = "Crit " + source;
                    }
                    const kind = (blood) ? DamageExtractor.BLOOD : DamageExtractor.NORMAL;
                    const damageData = DamageExtractor.getDamageData(dType.name, kind, r_curve, 0, magnitude, time, interval, area);
                    this.addDamageNode(source, initiator, result, parentId, mEffect.id, weaponId, assignment, destructible, onlyPlayer, damageData, copyConditions)
                }
            }
        }
    }

    excludeActors = [
        "000002d5", // Action Points
        "0043a391", // Suppressor
        "000002e3", // Damage Resistance
        "000002c3", // Perception
        "000002da", // Movement Speed
        "0000035f", // Reflect melee damage
        "0000035c", // Power Armor Drain Battery
        "000002e1", // Rad Effect?
    ]

    findEffectDamageType(mEffect, enchId, weaponId) {
        if (mEffect['id'] === '00239552' || mEffect['id'] === '00239550') { // Radiation healing damage
            return null;
        }
        let result = mEffect['d_type']['id'];
        if (result) {
            return mEffect['d_type'];
        }
        let resId = mEffect['resist']['id'];
        let actor1 = mEffect['actor_value1']['id'];
        if (this.excludeActors.includes(actor1)) {
            return null;
        } else if (actor1 === '00097341') { // Armor Penetration
            return mEffect['actor_value1'];
        } else if (actor1 === '00000312') { // Weapon speed
            return mEffect['actor_value1'];
        } else if (actor1 === '0018eee1') { // STAT_DmgAll this is bonus mult
            return mEffect['actor_value1'];
        } else if (actor1 === '00312d66') { // STAT_DmgMelee this is bonus mult
            return mEffect['actor_value1'];
        } else if (actor1 === '000002d4') { // Health
            if (enchId === "0062afdd" || enchId === "00633852") { // Healer

            } else {
                console.warn("Actor: " + mEffect.actor_value1.name + " WId: " + weaponId + " AId: " + mEffect.actor_value1.id + " EId: " + enchId);
            }
        } else if (actor1 && actor1 !== "") {
            console.warn("Actor: " + mEffect.actor_value1.name + " WId: " + weaponId + " AId: " + mEffect.actor_value1.id + " EId: " + enchId);
        }
        let actor2 = mEffect['actor_value2']['name'];
        if (actor2) {
            throw new Error("Actor2 Exists");
        }
        if (resId) {
            return DamageExtractor.resTypes[resId];
        }
        return null;
    }

    extractObject(source, initiator, result, parentId, weaponId, obj, destructible, conditions) {
        if (typeof(obj) !== typeof("")) {
            if (obj.type === 'MSTT') {
                const value = obj.value;
                const spell = value.spell;
                if (spell && spell !== '' && spell !== '00000000') {
                    throw new Error("Spell in explosive object");
                }
                this.extractExp(source, initiator, result, parentId, weaponId, value.expl, destructible, conditions);
                const resolvedHazd = getEffect(value.hazd);
                if (resolvedHazd) {
                    this.extractEnch(source, initiator, result, parentId, weaponId, resolvedHazd['effect'].value, destructible, resolvedHazd['lifeTime'], resolvedHazd['interval'], conditions);
                }
                return;
            } else {
                obj = obj.value;
            }
        }
        if (!obj || obj === '' || obj === '00000000' || obj === '0017a580') {
            return;
        }
        let placedObj = false;
        let damageData = null;
        let wId = "";
        if (weaponId === obj) {
            return;
        } else if (obj === '000042f2') {
            placedObj = true;
            wId = obj;
            damageData = this.tomahawk.damageData;
        } else if (obj === '003879a3') {
            placedObj = true;
            wId = obj;
            damageData = this.throwingKnife.damageData;
        } else if (obj === "0003320a") { // NPC Bloatfly
            return;
        }
        if (placedObj) {
            for (const property in damageData) {
                const damages = damageData[property];
                for (let i = 0; i < damages.length; i++) {
                    const damage = damages[i];
                    this.addDamage(JSON.parse(JSON.stringify(damage)), result);
                }
            }
            return;
        }
        const resolved = getEffect(obj);

        if (!resolved) {
            throw new Error("Unknown id: " + obj);
        }
        const label = resolved.label;
        if (label === 'HAZD') {
            this.extractEnch(source, initiator, result, parentId, weaponId, resolved['effect'].value, destructible, resolved['lifeTime'], resolved['interval'], conditions);
        } else if (label === 'EXPL') {
            this.extractExp(source, initiator, result, parentId, weaponId, resolved, destructible, conditions);
        } else {
            throw new Error("Unknown object type");
        }
    }

    e_type_name = {256: "Ability", 512: "Function"}

    v_type_name = {1: "Float", 3: "List", 4: "Activate", 5: "Spell", 8: "Actor", 9: "Item"}

    //operation = {
    //    1: "SetValue", 2: "AddValue", 3: "MulValue", 5: "MulAddValue", 6: "Abs", 8: "AddItem",
    //    9: "AddActivate", 10: "SetSpell", 12: "AddValueToActor", 13: "MultiplyActorValueMultiply",
    //    14: "MulAddValueToActor", 16: "SetItem"
    //}

    // 3 - 'List' is not presented, 4 - 'Activate' is not presented, 9 - 'Item' is not presented
    // 5 - 'Spell' is solved, 8 - 'Actor' is solved.
    skipPerks = [
        "007b23d8", // Ammo Capacity (Mod has a unique field for that)
        "001f4166", // Target Damage Resistance
        "0077176b", // Last shot bonus Random percent perk 25%
        "001e6849", // Heavy Hitter perk, outgoing limb damage 0
        "004f6aa6", // Weapon Attack Damage (Executioner, Mod has a unique field for that)
        "000d3fcb", // Outgoing limb damage with (20% chance) and 10 magnitude, do we need it?
        "003de597", // Target Debuff Attack damage
        "005281bf", // Reduce Target's Damage output
        "00729bf9", // Spell duration
        "0079a3ca", // VATS Action Points
        "0079342c", // Loss condition
        "00793804", // Lickety-Split Special Effect (Weapon Attack Damage 0.8 is it useful?)
        "001ec1f9", // Weapon attack damage (Grinder, Bash for Range weapons) it seems a duplicate of SecondaryDamage mod operation.
        "007acb0c", // Conductor 4-star, nothing related to damage
        "006c3171", // VATS action points
        "0072f409", // Ammo capacity (resolved by another mod operation)
        "00606a1a", // Loss condition
        "00621c1f", // Head Hunter legendary ammo not spend under some conditions
        "006344f7", // Scavenger (loot materials)
        "007ac88f", // Stabilizer
    ]

    extractPerk(source, initiator, result, parentId, weaponId, perkId, destructible, conditions) {
        if (this.skipPerks.includes(perkId)) {
            return;
        }

        // Custom perks for simplicity we do not read effects and place hardcore values in advance
        let multData = null;
        switch(perkId) {
            case '006c3175': // Furious
                multData = this.buildNoTimeSimpleDamage(5, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, [[CustomConditions.names.furious[0]]]);
                return;
            case '007acb3f': // Pounder
                multData = this.buildNoTimeSimpleDamage(1, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, [[CustomConditions.names.pounder[0]]]);
                return;
            case '007acbf7': // Encircler's
                multData = this.buildNoTimeSimpleDamage(50, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, []);
                return;
            case '007acbf6': // Fencer
                multData = this.buildNoTimeSimpleDamage(50, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, []);
                return;
            case '007954d2': // Pyromaniac
                multData = this.buildNoTimeSimpleDamage(0.5, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, [[CustomConditions.names.burned[0]]]);
                return;
            case '0079552f': // Viper
                multData = this.buildNoTimeSimpleDamage(0.5, null, null, null, 100);
                this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, [[CustomConditions.names.poisoned[0]]]);
                return;
        }
        if (perkId && perkId !== '00000000' && perkId !== '') {
            const perk = getEffect(perkId);
            const copyConditions = [...conditions];
            copyConditions.push([...perk.conditions]);
            const effects = perk.effects;
            for (let i = 0; i < effects.length; i++) {
                const effect = effects[i];
                if (effect.v_type === 0 && effect.e_type === "Ability") {

                    copyConditions.push(effect.conditions);

                    this.extractEnch(source, initiator, result, parentId, weaponId, effect.spell, destructible, 0, 0, copyConditions);
                } else if (effect.v_type === 1 && effect.e_type === "Function") {
                    copyConditions.push(effect.conditions);
                    if (effect.entry === "WeaponDamageBonusMult" && effect.op === "AddVal") {
                        let chance = 100;
                        if (perkId === "006069ed") { // Last shot with chance 100
                            chance = 20;
                        }
                        const multData = this.buildNoTimeSimpleDamage(effect.value, null, null, null, chance);
                        this.addDamageNode(source, initiator, result, parentId, perkId, weaponId, Assignment.BDB, false, false, multData, copyConditions);
                    } else {
                        console.warn("Weapon: " + weaponId + " Perk: " + perkId + " Perk Name: " + perk.name + " Function: " + effect.entry + " is found. " + effect.entry + " Value: " + effect.value + " Operation: " + effect.op);
                    }
                } else if (effect.v_type === 3) {
                    throw new Error("Found v_type 3");
                } else if (effect.v_type === 4) {
                    throw new Error("Found v_type 4");
                } else if (effect.v_type === 5) {
                    copyConditions.push(effect.conditions);
                    this.extractEnch(source, initiator, result, parentId, weaponId, effect.value, destructible, 0, 0, copyConditions);
                } else if (effect.v_type === 8) { // Do we really need this 1% what is the purpose of it?
                    console.warn("Weapon: " + weaponId + " Perk: " + perkId + " Function: " + effect.entry + " is found.");
                    console.warn("Effect: " + effect.entry + " Value: " + effect.value + " Operation: " + effect.op);
                } else if (effect.v_type === 9) {
                    throw new Error("Found v_type 9");
                } else {
                    console.warn("Weapon: " + weaponId + " Perk: " + perkId + " Perk Name: " + perk.name + "VType: " + effect.v_type + " Function: " + effect.entry + " is found. " + effect.entry + " Value: " + effect.value + " Operation: " + effect.op);
                }
            }
        }
    }

    static getCurrentCurve(base, alt) {
        if (this.alt && alt > 0) {
            return alt;
        }
        return base;
    }
    
    static getDamageNodeByValue(source, initiator, parentId, id, weaponId, kind, baseValue, altValue, value, damageTypeName) {
        const curve = {
            curve: DamageExtractor.getCurrentCurve(baseValue, altValue),
            curveBase: baseValue,
            curveAlt: altValue,
        }
        const damageData = DamageExtractor.getDamageData(damageTypeName, kind, curve, value, 0, 0, 0, 0);
        return DamageExtractor.createDamageObject(source, initiator, parentId, id, weaponId, Assignment.DAMAGE, false, false, damageData, []);
    }

    // bonuses = null means they will be applied automatically for non-crit and not for crit, bonuses="no" - will not be applied
    // repeat=1 for the cases when damage can be applied several times at once (normally only once)
    static getDamageData(typeName, kind, curve, value, magnitude, time, interval, area, chance=100, bonuses=null, isCrit=false, repeat=1) {
        if (!curve) {
            curve = {curve: 0, curveBase: 0, curveAlt: 0}
        }
        return {
            typeName: typeName,
            curveCurrent: curve.curve,
            curveBase: curve.curveBase,
            curveAlt: curve.curveAlt,
            value: value,
            magnitude: magnitude,
            time: time,
            interval: interval,
            area: area,
            chance: chance,
            kind: kind, // blood, explosive, normal
            isCrit: isCrit,
            bonuses: bonuses,
            repeat: 1,
        }
    }

    buildNoTimeSimpleDamage(value, typeName, curve=null, kind=null, chance=100, bonuses=null) {
        if (!kind) {
            kind = DamageExtractor.NORMAL;
        }
        return DamageExtractor.getDamageData(typeName, kind, curve, value, 0, 0, 0, 0, chance, bonuses);
    }
    
    static createDamageObject(source, initiator, parentId, id, weaponId, assignment, destructible, onlyPlayer, damageData, conditions) {
        return {
            source: source, // Base, Ammo, Projectile, Overridden Projectile, Spell, Enchantment etc...
            initiator: initiator, // Mod, Boost, Serum, User Legendary etc.
            parentId: parentId, // id of a parent or ""
            id: id, // id of direct parent
            weaponId: weaponId,
            assignment: assignment, // Damage Bonus, Armor Penetration, Damage, etc.
            destructible: destructible,
            onlyPlayer: onlyPlayer,
            conditions: conditions,
            damageData: damageData,
        };
    }

    handleConditions(conditions) {
        const uniqueConditions = new Set();
        for (let i = 0; i < conditions.length; i++) {
            const curConditions = conditions[i];
            for (let j = 0; j < curConditions.length; j++) {
                uniqueConditions.add(curConditions[j]);
            }
        }
        const copyConditions = Array.from(uniqueConditions);
        conditions.length = 0; // Clear conditions
        return copyConditions;
    }

    addSimpleDamageNode(source, initiator, result, parentId, id, weaponId, damageType, damageValue, conditions) {
        const damageData = DamageExtractor.getDamageData(damageType, DamageExtractor.NORMAL, this.resolveCurve(null), damageValue, 0, 0, 0, 0, 100);
        this.addDamageNode(source, initiator, result, parentId, id, weaponId, Assignment.DAMAGE, false, false, damageData, conditions);
    }

    addDamage(damageObj, result) {
        const entries = result[damageObj.source];
        if (!entries) {
            result[damageObj.source] = [damageObj];
        } else {
            entries.push(damageObj);
        }
    }

    resolveCurve(curve) {
        let curCurve = 0;
        if (curve !== '' && curve !== '00000000') {
            if (typeof curve === typeof '') {
                throw new Error("Curve must be already evaluated: " + curve);
            } else {
                if (this.alt && curve.maxValueAlt !== 0) {
                    curCurve = curve.maxValueAlt;
                } else {
                    curCurve = curve.maxValue;
                }
                return {curve: curCurve, curveBase: curve.maxValue, curveAlt: curve.maxValueAlt}; // Consider it is a number.
            }
        } else {
            return {curve: 0, curveBase: 0, curveAlt: 0};
        }
    }

    dDamage(source, initiator, result, parentId, weaponId, explosive, destructible, conditions) {
        let value = explosive['d_value'];
        if (Math.abs(value) < 0.01) {
            value = 0;
        }
        let curve = explosive['d_curv'];
        if (value > 0 || (curve !== '' && curve !== '00000000')) {
            const rCurve = this.resolveCurve(curve);
            let dType = explosive.d_type;
            if (dType === '' || dType === '00000000') {
                dType = DamageExtractor.damageTypes.physical;
            }
            let typeName = dType.name;
            const damageData = this.buildNoTimeSimpleDamage(value, typeName, rCurve, DamageExtractor.EXPLOSIVE);
            this.addDamageNode(source, initiator, result, parentId, explosive.id, weaponId, Assignment.DAMAGE, destructible, false, damageData, conditions);
        }
    }

    addDamageNode(source, initiator, result, parentId, id, weaponId, assignment, destructible, onlyPlayer, damageData, conditions) {
        if (damageData.curveCurrent === 0 && damageData.magnitude === 0 && damageData.value === 0) {
            conditions.length = 0;
            return;
        }
        const copyConditions = this.handleConditions(conditions);
        if (source.includes("Crit")) {
            damageData.isCrit = true;
        }
        const obj = DamageExtractor.createDamageObject(source, initiator, parentId, id, weaponId, assignment,
                    destructible, onlyPlayer, damageData, copyConditions);
        this.addDamage(obj, result);
    }
}