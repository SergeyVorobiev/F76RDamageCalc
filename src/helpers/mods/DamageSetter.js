import DamageBlackList from "../../damage/DamageBlackList";


export function buildDamageItem(weaponId, damageId, type, kind, name, damage, time, interval, area, chance, accuracy, stack, index=0, isUsed=true, conditions=[]) {
    const ignored = DamageBlackList.check(weaponId, damageId);
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
    };
}

export function buildBleedDamage(damage, time, chance=100, accuracy=100, stack=false) {
    return buildDamageItem("", "", "dtPhysical", "bleed", "Bleed", damage, time, 0, 0, chance, accuracy, stack);
}

export function convertDamageDataToDamageItem(damageData, alt) {
    const type = getDamageTypeFromCellName(damageData.type_name);
    const damage = getDamageValue(damageData, alt);
    return buildDamageItem(damageData.weaponId, damageData.directParent, type[0], type[1], type[2], damage, damageData.time, damageData.interval, damageData.area, 100, 100, false, 0, true, damageData.conditions);
}

export function makeDamageItemCopy(damageItem) {
    return buildDamageItem(damageItem.weaponId, damageItem.damageId, damageItem.type, damageItem.kind, damageItem.name, damageItem.damage, damageItem.time,
        damageItem.interval, damageItem.area, damageItem.chance, damageItem.accuracy, damageItem.stack, damageItem.index, damageItem.isUsed, damageItem.conditions);
}

export function getCurveValueFromDamageItem(damage, is_alt) {
    return getCurveDamage(damage.curve_base_max, damage.curve_alt_max, is_alt);
}

export function getCurveDamage(base_value, alt_value, is_alt) {
    if (is_alt && alt_value !== 0) {
        return alt_value;
    }
    return base_value;
}

function getDamageValue(damage, alt) {
    let curve = getCurveValueFromDamageItem(damage, alt);
    if (curve > 0) {
        return curve;
    } else if (damage.value > 0) {
        return damage.value;
    }
    return damage.magnitude;
}

const cellNames = ['bbDamage', 'ebDamage', 'fbDamage', 'pbDamage', 'cbDamage', 'rbDamage', 'projExp', 'bleed'];

export function collectAllDamages(template, alt) {
    let result = [];
    for (let i = 0; i < template.adDamage.length; i++) {
        result.push(makeDamageItemCopy(template.adDamage[i]));
    }

    for (let i = 0; i < cellNames.length; i++) {
        const name = cellNames[i];
        let damage = template[name][1];
        let damageId = template[name][2];
        if (typeof damage === typeof '') {
            const split = damage.split(" / ");
            damage = parseFloat(split[0]);
            const time = parseFloat(split[1].slice(0, -1));
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(template.id, damageId, type[0], type[1], type[2], damage, time, 0, 0, 100, 100, false);
            result.push(obj);
        } else if (damage > 0) {
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(template.id, damageId, type[0], type[1], type[2], damage, 0, 0, 0, 100, 100, false);
            result.push(obj);
        }
    }
    return result;
}

export function getDamageTypeFromCellName(cellName) {
    switch(cellName) {
        case 'bleed':
            return ['dtPhysical', 'bleed', "Bleed"];
        case 'projExp':
            return ['dtPhysical', 'explosive', "Explosive"];
        case 'bbDamage':
        case 'dtPhysical':
            return ['dtPhysical', 'physical', "Physical"];
        case 'ebDamage':
        case 'dtEnergy':
        case 'dtElectrical':
            return ['dtEnergy', 'energy', "Energy"];
        case 'fbDamage':
        case 'dtFire':
            return ['dtFire', 'fire', "Fire"];
        case 'pbDamage':
        case 'dtPoison':
            return ['dtPoison', 'poison', "Poison"];
        case 'cbDamage':
        case 'dtCryo':
            return ['dtCryo', 'cryo', "Cryo"];
        case 'rbDamage':
        case 'dtRadiationExposure':
            return ['dtRadiationExposure', 'radiation', "Radiation"];
        default:
            console.log("Can't determine appropriate damate type by cell name: " + cellName);
            return ['dtPhysical', 'ballistic', "Physical"];
    }
}

export default class DamageSetter {

    constructor(alt) {
        this.alt = alt;
    }

    setDamages(templates) {
        for (let i = 0; i < templates.length; i++) {
            this.setDamage(templates[i]);
        }
    }

    setAlt(alt) {
        this.alt = alt;
    }

    setDamage(template) {
        template.adDamage = []; // Additional damages
        this.setDamageForCategory(template, "Base");
        this.setDamageForCategory(template, "Ammo");
        this.setDamageForCategory(template, "Projectile");
        this.setDamageForCategory(template, "Base Spell");
        this.setDamageForCategory(template, "Spell");
    }

    setDamageForCategory(template, category) {
        const damageData = template.damageData;
        for (const property in damageData) {
            if (property !== category) {
                continue;
            }
            const damages = damageData[property];
            for (let i = 0; i < damages.length; i++) {
                const damage = damages[i];
                this.setCurrent(template, damage);
            }
        }
    }

    setCurrent(template, damage) {
        if (damage.destructible === false && damage.only_player === "No") {
            const damageValue = getDamageValue(damage, this.alt);
            if (damageValue === 0) {
                return;
            }
            this.placeValueByType(template, damage, damageValue);
        }
    }

    placeValueByType(template, damageData, damageValue) {
        const damage = [damageValue, damageValue];
        const exp = damageData.exp;
        const blood = damageData.blood;
        switch(damageData.type_name) {
            case "ArmorPenetration":
                template.antiArmor = damage;
                break;
            case "ExpDamageMult":
                template.exp[1] = damage[1] * 100;
                break;
            case "STAT_DmgAll":
            case "STAT_DmgMelee":
                template.bonusMult[1] += damage[1] / 100;
                break;
            case "dtPhysical":
                if (exp) {
                    this.putDamage(template, "projExp", damage, damageData);
                } else if (blood) {
                    const type = getDamageTypeFromCellName("bleed");
                    template.adDamage.push(buildDamageItem(template.id, damageData.directParent, type[0], type[1], type[2], damageValue, damageData.time, 0, 0, 100, 100, false, 0, true, damageData.conditions));
                } else {
                    this.putDamage(template, "bbDamage", damage, damageData);
                }
                break;
            case "dtEnergy":
            case "dtElectrical":
                this.putDamage(template, "ebDamage", damage, damageData);
                break;
            case "dtFire":
                this.putDamage(template, "fbDamage", damage, damageData);
                break;
            case "dtPoison":
                this.putDamage(template, "pbDamage", damage, damageData);
                break;
            case "dtCryo":
                this.putDamage(template, "cbDamage", damage, damageData);
                break;
            case "dtRadiationExposure":
                this.putDamage(template, "rbDamage", damage, damageData);
                break;
            default:
                break;
        }
    }

    putDamage(template, field, damage, damageData) {
        const type = getDamageTypeFromCellName(field);
        if (template[field][0] > 0 || damageData.time > 0 || damageData.interval > 0) { // We already have this type of damage, add it as additional

            // Will be modified only by boost multiplier independently
            template.adDamage.push(buildDamageItem(template.id, damageData.directParent, type[0], type[1], type[2], damage[1], damageData.time, damageData.interval, damageData.area, 100, 100, false, 0, true, damageData.conditions));
        } else {

            // Later can be modified by boosts (current architecture does not allow to push it to adDamage
            const newDamage = [damage[0], damage[1], damageData.directParent];
            template[field] = newDamage;
        }
    }
}