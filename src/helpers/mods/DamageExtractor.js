import getAmmo from '../Ammo';
import { getEffect } from '../EffectProvider';
import { getTemplateCopyById } from '../TemplatesRegister';

export default class DamageExtractor {

    damageTypes = {
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
    };

    // Based on resistance
    resTypes = {
        '000002ea': this.damageTypes['radiation'],
        '000002eb': this.damageTypes['energy'],
        '000002e7': this.damageTypes['cryo'],
        '000002e4': this.damageTypes['poison'],
        '000002e5': this.damageTypes['fire'],
        '000002e6': this.damageTypes['electrical'],
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
        }
    }

    extractFromTemplate(template) {

        // Ammo
        const ammoId = template.ammoId[1];
        const curWeapId = template.id;
        if (!curWeapId) {
            throw new Error("Weapon has no id");
        }
        if (ammoId && ammoId !== '00000000' && ammoId !== '') {
            const ammoData = getAmmo().get(ammoId);
            this.extractAmmo(ammoData, template.damageData, "Ammo: " + ammoId, curWeapId);
        }

        // Effect
        this.extractEnch(template.spellId, template.damageData, "Base Spell: " + template.spellId, false, curWeapId, 0, 0)

        // Additional Proj
        const projIds = template.projId[1];
        for (let i = 0; i < projIds.length; i++) {
            const projId = projIds[i];
            if (projId !== '00000000' && projId !== '') {
                if (typeof projId !== typeof '') {
                    throw new Error("ProjId is not an Id");
                }
                const projData = getEffect(projId);
                this.extractProj(projData, template.damageData, "Projectile: " + projId, false, curWeapId);
            }
        }

        // Additional Mod Effects
        const effectIds = template.adEffects[1];
        for (let i = 0; i < effectIds.length; i++) {
            const effectId = effectIds[i];
            if (effectId !== '00000000' && effectId !== '') {
                if (typeof effectId !== typeof '') {
                    throw new Error("EffectId is not an Id");
                }
                this.extractEnch(effectId, template.damageData, "Spell: " + effectId, false, curWeapId, 0, 0)
            }
        }
    }

    extractAmmo(ammo, result, parent, curWeapId) {
        const ammoDamage = ammo.damage;
        const ammoId = ammo.id;
        if (!parent) {
            parent = "Ammo: " + ammoId;
        }
        if (ammoDamage > 0) {
            if (ammo.ammo_type !== 'Ballistic') {
                throw new Error("Ammo type is not 'Ballistic'");
            }
            const dTypes = this.damageTypes.physical;
            this.addDamageNode(result, "Ammo", false, "Ammo Damage", dTypes.name, dTypes.id, dTypes.full, 0,
                                 ammoDamage, 0, 0, 0, 0, parent, ammoId, curWeapId, "No", false, false, false, "");
        }
        const projId = ammo.projectile;
        if (projId && projId !== '' && projId !== '00000000') {
            const projData = getEffect(projId);
            this.extractProj(projData, result, parent, false, curWeapId);
        }
    }

    extractProj(proj, result, parent, destructible, curWeapId) {
        this.extractExp(proj.destructible, result, parent, true, curWeapId);
        this.extractExp(proj.expl, result, parent, destructible, curWeapId); // In case if some inner proj comes from destructible parent
    }

    resolveAndExtractProj(projId, result, parent, destructible, curWeapId) {
        if (projId !== '' && projId !== '00000000') {
            if (typeof projId !== typeof '') {
                throw new Error("Proj id is not an id");
            }
            const projData = getEffect(projId);
            this.extractProj(projData, result, parent, destructible, curWeapId);
        }
    }

    extractEnch(ench, result, parent, destructible, curWeapId, time = 0, interval = 0) {
        if (ench && typeof ench !== typeof '') {
            throw new Error("Enchantment is not an id");
        }
        if (ench === "" || ench === "00000000") {
            return;
        }
        let enchId = ench;

        ench = getEffect(ench);
        if (!ench) {
            throw new Error("Can't resolve enchantment: " + enchId + ", weapon: " + curWeapId);
        }
        let perk = null;
        perk = ench.perk;
        this.extractPerk(perk, result, parent, destructible, curWeapId);

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
        this.extractEffects(ench.mag_effects, ench.id, result, parent, destructible, curWeapId, enchTime, interval);
    }

    extractEffects(effects, enchId, result, parent, destructible, curWeapId, time, interval) {
        if (!effects) {
            return;
        }
        //let existedEffects = new Set();
        for (let e = 0; e < effects.length; e++) {
            const effect = effects[e];
            const conditions = effect.conditions;

            // Effect part
            let magnitude = effect.magnitude;
            let curv = effect.d_curv;
            let area = effect.area;
            let duration = effect.duration;
            let globMagnitude = effect.glob_magnitude;
            let globDuration = effect.glob_duration;
            let onlyPlayer = effect.only_player;
            if (!onlyPlayer) {
                onlyPlayer = 'No';
            }

            // MEffect
            let mEffect = effect.m_effect;
            mEffect = getEffect(mEffect);
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
            let blood = false;
            if (name.toLowerCase().includes("bleed") || full.toLowerCase().includes("bleed")) {
                blood = true;
            }
            //existedEffects.add(mEffect.id);
            this.extractPerk(mEffect.perk, result, parent, destructible, curWeapId);
            this.extractExp(mEffect.explosion, result, parent, destructible, curWeapId);
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
                curv = r_curve.curve;
                if (curv === 0 && magnitude === 0) {
                    continue;
                }
                let dType = this.findEffectDamageType(mEffect, enchId, curWeapId);
                if (dType && onlyPlayer === 'No') {
                    let name = '';
                    if (destructible) {
                        name = "Destructible Spell";
                    } else {
                        name = "Spell";
                    }

                    // Armor penetration
                    if (dType.id === '00097341') {
                        name = "Armor Penetration";
                    } else if (dType.id === '0018eee1' || dType.id === '00312d66') {
                        name = "Damage Bonus";
                    }
                    let source = '';
                    if (crit) {
                        source = "Crit Spell";
                    } else {
                        source = "Spell";
                    }
                    this.addDamageNode(result, source, destructible, name, dType['name'], dType['id'],
                                         dType['full'], r_curve, 0, magnitude, time, interval, area, parent, mEffect.id, curWeapId, onlyPlayer, false, crit, blood, conditions);
                }
            }
        }
    }

    findEffectDamageType(mEffect, enchId, curWeapId) {
        if (mEffect['id'] === '00239552' || mEffect['id'] === '00239550') { // Radiation healing damage
            return null;
        }
        let result = mEffect['d_type']['id'];
        if (result) {
            return mEffect['d_type'];
        }
        let resId = mEffect['resist']['id'];
        if (resId) {
            return this.resTypes[resId];
        }
        let actor1 = mEffect['actor_value1']['id'];
        if (actor1 === '000002e3') { // Damage resistance
            return null;
        } else if (actor1 === '00097341') { // Armor Penetration
            return mEffect['actor_value1'];
        } else if (actor1 === '0018eee1') { // STAT_DmgAll this is bonus mult
            return mEffect['actor_value1'];
        } else if (actor1 === '00312d66') { // STAT_DmgMelee this is bonus mult
            return mEffect['actor_value1'];
        } else if (actor1 === '000002d4') { // Health
            console.log("Actor: " + mEffect.actor_value1.name + " WId: " + curWeapId + " AId: " + mEffect.actor_value1.id + " EId: " + enchId);
        }
        let actor2 = mEffect['actor_value2']['name'];
        if (actor2) {
            throw new Error("Actor2 Exists");
        }
        return null;
    }

    extractObject(obj, result, parent, destructible, curWeapId) {
        if (typeof(obj) !== typeof("")) {
            if (obj.type === 'MSTT') {
                obj = obj.value.id;
                console.log("MSTT is found: " + obj + " in " + curWeapId);
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
        if (curWeapId === obj) {
            return;
        } else if (obj === '000042f2') {
            placedObj = true;
            wId = obj;
            damageData = this.tomahawk.damageData;
        } else if (obj === '003879a3') {
            placedObj = true;
            wId = obj;
            damageData = this.throwingKnife.damageData;
        }
        if (placedObj) {
            for (const property in damageData) {
                const damages = damageData[property];
                for (let i = 0; i < damages.length; i++) {
                    const damage = damages[i];
                    this.addDamageNode(result, damage['source'], damage['destructible'], damage['view_name'],
                                             damage['type_name'],
                                             damage['type_id'], damage['type_full_name'], damage['curv'], damage['value'],
                                             damage['magnitude'], damage['time'], damage['interval'], 0, parent, wId, curWeapId, "No", false, false, false, "");
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
            this.extractEnch(resolved['effect'].value, result, parent, destructible, curWeapId, resolved['lifeTime'], resolved['interval']);
        } else if (label === 'MSTT') {
            const spell = resolved['spell'];
            if (spell && spell !== '' && spell !== '00000000') {
                throw new Error("Spell in explosive object");
            }
            this.extractExp(resolved['expl'], result, parent, destructible, curWeapId);
            this.extractEnch(resolved['effect'].value, result, parent, destructible, curWeapId, resolved['lifeTime'], resolved['interval']);
        } else if (label === 'EXPL') {
            this.extractExp(resolved, result, parent, destructible, curWeapId);
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

    // TODO: LimbBash and WeaponAttackDamage for v_type 1 - 'Float'
    // 3 - 'List' is not presented, 4 - 'Activate' is not presented, 9 - 'Item' is not presented
    // 5 - 'Spell' is solved, 8 - 'Actor' is solved.
    // Check this - 00621a92 0077176b 198 1 (Zeta's Revenge)
    skipFunctions = ["198", "OutgoingLimbBashDamage", "OutgoingLimbDamage", "MaxConsecutiveHits",
        "SetDamageOnConsecutiveHits", "LossCondition", "WeaponAttackDamage"];

    extractPerk(perkId, result, parent, destructible, curWeapId) {
        if (perkId && perkId !== '00000000' && perkId !== '') {
            const perk = getEffect(perkId);
            const effects = perk.effects;
            for (let i = 0; i < effects.length; i++) {
                const effect = effects[i];

                if (effect.v_type === 1) {
                    // if (this.skipFunctions.includes(effect.entry)) {
                    //     continue;
                    // }
                } else if (effect.v_type === 3) {
                    throw new Error("Found v_type 3");
                } else if (effect.v_type === 4) {
                    throw new Error("Found v_type 4");
                } else if (effect.v_type === 5) {
                    this.extractEnch(effect.value, result, parent, destructible, curWeapId)
                } else if (effect.v_type === 8) { // Do we really need this 1% what is the purpose of it?
                    // console.log("Perk8: " + curWeapId + " " + perkId + " " + effect.entry + " " + effect.value.value);
                } else if (effect.v_type === 9) {
                    throw new Error("Found v_type 9");
                }
            }
        }
    }

    extractExp(exp, result, parent, destructible, curWeapId) {
        if (!exp || exp === '' || exp === '00000000') {
            return;
        }
        if (typeof exp !== typeof {}) {
            exp = getEffect(exp);
            // throw new Error("Explosive is not an object but id: " + exp);
        }
        const ench = exp.enchantment;
        if (ench && ench !== '' && ench !== '00000000') {
            this.extractEnch(ench, result, parent, destructible, curWeapId);
        }  
        this.resolveAndExtractProj(exp.projectile, result, parent, destructible, curWeapId);
        this.extractObject(exp.object, result, parent, destructible, curWeapId);
        this.dDamage(exp, result, destructible, parent, curWeapId);
        const damageType = this.damageTypes.physical;
        const damage = exp.damage;
        const expCurv = exp.exp_curv;
        let curv = 0;
        let r_curve = 0;
        if (expCurv !== '' && expCurv !== '00000000') {
            r_curve = this.resolveCurve(expCurv);
            curv = r_curve.curve;
        }
        let name = '';
        if (destructible) {
            name = "Destructible Explosive Damage";
        } else {
            name = "Explosive Damage";
        }
        this.addDamageNode(result, "Projectile", destructible, name, damageType.name, damageType.id, damageType.full, r_curve,
            damage, 0, 0, 0, 0, parent, exp.id, curWeapId, "No", true, false, false, "");

        if (exp.damage_mult > 0) {
            this.addDamageNode(result, "Projectile", destructible, "Explosive Damage Multiplier", "ExpDamageMult", "", "", 0,
                exp.damage_mult, 0, 0, 0, 0, parent, exp.id, curWeapId, "No", true, false, false, "");
        }
    }

    addDamageNode(result, source, destructible, view_name, type_name, type_id, type_full_name, curv, value,
                    magnitude, time, interval, area, parent, directParent, weapId, only_player, exp, crit, blood,
                    conditions) {
        if (!curv || curv === 0) {
            curv = {curve: 0, curve_alt_max: 0, curve_base_max: 0};
        }

        if (curv.curve === 0 && magnitude === 0 && value === 0) {
            return;
        }

        if (crit && parent !== "Base Crit") {
            console.log("Spell Crit is found");
            console.log("Spell Crit is found");
        }
        const obj = {
            "destructible": destructible,
            "source": source,
            "view_name": view_name,
            "type_name": type_name,
            "type_id": type_id,
            "weaponId": weapId,
            "type_full_name": type_full_name,
            "curve_alt_max": curv.curve_alt_max,
            "curve_base_max": curv.curve_base_max,
            "value": value,
            "magnitude": magnitude,
            "time": time,
            "area": area,
            "interval": interval,
            "parent": parent,
            "directParent": directParent,
            "only_player": only_player,
            "exp": exp,
            "crit": crit,
            "blood": blood,
            "conditions": conditions,
        };
        const entries = result[source];
        if (!entries) {
            result[source] = [obj];
        } else {
            entries.push(obj);
        }
    }

    resolveCurve(curve) {
        if (curve !== '' && curve !== '00000000') {
            if (typeof curve === typeof '') {
                throw new Error("expCurv must be already evaluated: " + curve);
            } else {
                if (this.alt && curve.maxValueAlt !== 0) {
                    curve = curve.maxValueAlt;
                }
                return {curve: curve, curve_base_max: curve.maxValue, curve_alt_max: curve.maxValueAlt}; // Consider it is a number.
            }
        } else {
            return {curve: 0, curve_base_max: 0, curve_alt_max: 0};
        }
    }

    dDamage(explosive, result, destructible, parent, weaponId) {
        let value = explosive['d_value'];
        if (Math.abs(value) < 0.01) {
            value = 0;
        }
        let curv = explosive['d_curv'];
        if (value > 0 || (curv !== '' && curv !== '00000000')) {
            const r_curve = this.resolveCurve(curv);
            curv = r_curve.curve;
            let dType = explosive.d_type;
            if (dType === '' || dType === '00000000') {
                dType = this.damageTypes.physical;
            }
            let name = '';
            if (destructible) {
                name = "Destructible Damage";
            } else {
                name = "Damage";
            }
            this.addDamageNode(result, "Projectile", destructible, name, dType.name, dType.id, dType.full, r_curve, value,
                                 0, 0, 0, 0, parent, explosive.id, weaponId, "No", true, false, false, "");
        }
    }
}