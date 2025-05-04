import DamageBlackList from "../../damage/DamageBlackList";
import { Assignment } from "./DamageExtractor";
import DamageExtractor from "./DamageExtractor";
import { getLegendary } from '../LegendaryProvider';


// Track legendary to not apply bonus mods from them as they will be applied later
const legendaryEffectsMap = new Map();


export function setLegendaryEffect(legEffect, legId) {
    legendaryEffectsMap.set(legEffect, legId);
}

export function buildDamageItem(weaponId, damageId, type, kind, name, damage, time, interval, area, chance, accuracy, stack, bonuses=null, repeat=1, index=0, isUsed=true, isCrit=false, conditions=[], fConditions=null) {
    const ignored = DamageBlackList.check(weaponId, damageId);
    let bMult = true;
    let bCrit = true;
    let bSneak = true;
    if ((!bonuses && isCrit) || bonuses === "no") {
        bMult = false;
        bCrit = false;
        bSneak = false;
    } else if (bonuses) {
        bMult = bonuses.isBonusMult;
        bCrit = bonuses.isBonusCrit;
        bSneak = bonuses.isBonusSneak;
    }
    return {
        "isUsed": isUsed,
        "type": type,
        "kind": kind,
        "name": name,
        "damage": damage,
        "time": time,
        "interval": interval,
        "area": area, // Is not used?
        "chance": chance,
        "accuracy": accuracy, // Accuracy from weapon and mods or from user
        "finalAccuracy": accuracy, // Final accuracy with perks, consumables, legendary
        "stack": stack,
        "index": index,
        "weaponId": weaponId,
        "damageId": damageId,
        "ignored": ignored,
        "conditions": conditions,
        "fConditions": fConditions, // Resolved conditions
        "isCrit": isCrit,
        "bonuses": {
            isBonusMult: bMult,
            isBonusCrit: bCrit,
            isBonusSneak: bSneak,
        },
        "repeat": repeat,
    };
}

export function getBonusesCheck(flag) {
    return {
        isBonusMult: flag,
        isBonusCrit: flag,
        isBonusSneak: flag,
    }
}

export function copyBonusesCheck(bonuses) {
    return {
        isBonusMult: bonuses.isBonusMult,
        isBonusCrit: bonuses.isBonusCrit,
        isBonusSneak: bonuses.isBonusSneak,
    }
}

export function buildBleedDamage(damage, time, chance=100, accuracy=100, stack=false, bonuses=false) {
    return buildDamageItem("", "", "dtPhysical", "bleed", "Bleed", damage, time, 0, 0, chance, accuracy, stack, getBonusesCheck(bonuses), 1);
}

export function makeDamageItemCopy(damageItem) {
    return buildDamageItem(damageItem.weaponId, damageItem.damageId, damageItem.type, damageItem.kind, damageItem.name, damageItem.damage, damageItem.time,
        damageItem.interval, damageItem.area, damageItem.chance, damageItem.accuracy, damageItem.stack, copyBonusesCheck(damageItem.bonuses), damageItem.repeat, damageItem.index, damageItem.isUsed, damageItem.isCrit, damageItem.conditions, damageItem.fConditions);
}

export function getCurveValueFromDamageItem(damage, isAlt) {
    return getCurveDamage(damage.curveBase, damage.curveAlt, isAlt);
}

export function getCurveDamage(baseValue, altValue, isAlt) {
    if (isAlt && altValue && altValue !== 0) {
        return altValue;
    }
    return baseValue;
}

export function getDamageValue(damage, alt) {
    let curve = getCurveValueFromDamageItem(damage, alt);
    if (curve && curve !== 0) {
        return curve;
    } else if (damage.value && damage.value !== 0) {
        return damage.value;
    }
    return (damage.magnitude) ? damage.magnitude : 0;
}

const cellNames = ['dtPhysical', 'dtEnergy', 'dtFire', 'dtPoison', 'dtCryo', 'dtRadiationExposure', 'projExp', 'bleed'];

export function copyAllDamages(template) {
    let result = [];
    for (let i = 0; i < template.damages.length; i++) {
        result.push(makeDamageItemCopy(template.damages[i]));
    }
    return result;
}

export function getDamageTypeFromCellName(cellName) {
    switch(cellName) {
        case 'bleed':
            return ['dtPhysical', 'bleed', "Bleed"];
        case 'projExp':
            return ['dtPhysical', 'explosive', "Explosive"];
        case 'dtPhysical':
            return ['dtPhysical', 'physical', "Physical"];
        case 'dtEnergy':
        case 'dtElectrical':
            return ['dtEnergy', 'energy', "Energy"];
        case 'dtFire':
            return ['dtFire', 'fire', "Fire"];
        case 'dtPoison':
            return ['dtPoison', 'poison', "Poison"];
        case 'dtCryo':
            return ['dtCryo', 'cryo', "Cryo"];
        case 'dtRadiationExposure':
            return ['dtRadiationExposure', 'radiation', "Radiation"];
        default:
            console.warn("Can't determine appropriate damage type by cell name: " + cellName);
            return ['dtPhysical', 'physical', "Physical"];
    }
}

export default class DamageSetter {

    constructor(alt) {
        this.alt = alt;
    }

    setDamagesToAll(templates) {
        for (let i = 0; i < templates.length; i++) {
            this.setDamages(templates[i]);
        }
    }

    setAlt(alt) {
        this.alt = alt;
    }

    // Will erase previously set damages
    setDamages(template) {
        template.damages = []; // Reset damages
        const damageData = template.damageData;
        const excludeAmmoProjectile = this.hasOverriddenProjectile(damageData);
        for (const property in damageData) {
            if (excludeAmmoProjectile && property === "Ammo Projectile") {
                continue;
            }
            const damages = damageData[property];
            for (let i = 0; i < damages.length; i++) {
                const damage = damages[i];
                if (this.subjectIsNotPlayer(damage.conditions)) {
                    continue;
                }
                this.setCurrent(template, damage);
            }
        }
        template.damages = this.mergeNoTimeDamages(template.damages);
    }

    subjectIsNotPlayer(conditions) {
        return false; // Disabled
        for (let i = 0; i < conditions.length; i++) {
            const condition = conditions[i];
            if (condition.includes("(Subject) Is Not Player")) {
                return true;
            }
        }
        return false;
    }

    // If we have overridden projectiles we don't use ammo projectiles
    hasOverriddenProjectile(damageData) {
        return (damageData["Overridden Projectile"]) ? true : false;
    }

    // Merge damages into one (it does not differentiate between onlyPlayer and destructible)
    mergeNoTimeDamages(damages) {
        const mergedDamages = [];
        const mapDamages = new Map();
        for (let i = 0; i < damages.length; i++) {
            const damage = damages[i];
            if (damage.isUsed && damage.accuracy === 100 && damage.area === 0 && damage.chance === 100 && damage.conditions.length === 0 && !damage.ignored && damage.time === 0 && damage.interval === 0) {
                const damageToMerge = mapDamages.get(damage.kind + damage.type);
                if (damageToMerge) {
                    damageToMerge.damage += damage.damage;
                } else {
                    mapDamages.set(damage.kind + damage.type, damage);
                }
            } else {
                mergedDamages.push(damage);
            }
        }
        mapDamages.forEach((value, key, map) => {
            mergedDamages.push(value);
        });
        return mergedDamages;
    }

    setCurrent(template, damage) {
        if (!damage.destructible && !damage.onlyPlayer) {
            const damageValue = getDamageValue(damage.damageData, this.alt);
            if (damageValue === 0) {
                return;
            }
            this.placeValueByType(template, damage, damageValue);
        }
    }

    placeValueByType(template, damageObj, damageValue) {
        switch(damageObj.assignment) {
            case Assignment.ARMOR:
                template.antiArmor[1] += damageValue;
                break;
            case Assignment.EXP_MULT:
                template.exp[1] = damageValue * 100;
                break;
            case Assignment.SPEED_MULT:
                template.speed[1] += damageValue;
                break;
            case Assignment.BDB:
                if (damageObj.conditions.length > 0) {
                    this.putConditionalBonus(template, damageObj, damageValue);
                } else {
                    const legId = legendaryEffectsMap.get(damageObj.parentId);
                    if (legId) {
                        // Different mods gives different range 0-1, 0-100 to not mess with it just take hardcore default value
                        template.legBonusMult[legId] = getLegendary(legId).value / 100;
                    } else {
                        template.bonusMult[1] += damageValue / 100;
                    }
                }
                break;
            case Assignment.DAMAGE:
                if (damageObj.damageData.kind === DamageExtractor.EXPLOSIVE) {
                    if (!damageObj.damageData.typeName || damageObj.damageData.typeName === "" || damageObj.damageData.typeName === "dtPhysical") {
                        this.putDamage(template, "projExp", damageValue, damageObj);
                    } else {
                        this.putDamage(template, damageObj.damageData.typeName, damageValue, damageObj);
                    }
                } else if (damageObj.damageData.kind === DamageExtractor.BLOOD) {
                    this.putDamage(template, "bleed", damageValue, damageObj);
                } else {
                    this.putDamage(template, damageObj.damageData.typeName, damageValue, damageObj);
                }
                break;
            default:
                this.putDamage(template, damageObj.damageData.typeName, damageValue, damageObj);
        }
    }

    putConditionalBonus(template, damageObj, damageValue) {
        const damageData = damageObj.damageData;
        if (damageValue === 0) {
            console.warn("Damage Value is Zero Weapon " + template.id + " Direct Parent: " + damageObj.id);
        }
        const bonusObj = this.getBonusObject("BDB", damageValue, damageObj.id, damageObj.conditions, damageData.chance);
        template.damageBonusCond.push(bonusObj);
    }

    getBonusObject(type, damageValue, parent, conditions, chance) {
        return {
            type: type,
            damage: damageValue,
            parent: parent,
            conditions: conditions,
            chance: chance,
        };
    }

    putDamage(template, field, damageValue, damageObj) {
        const damageData = damageObj.damageData;

        const type = getDamageTypeFromCellName(field);
        template.damages.push(buildDamageItem(template.id, damageObj.id, type[0], type[1], type[2], damageValue, damageData.time, damageData.interval, damageData.area, damageData.chance, 100, false, damageData.bonuses, damageData.repeat, 0, true, damageData.isCrit, damageObj.conditions));
    }
}