export function buildDamageItem(type, kind, name, damage, time, interval, chance, stack, index=0, isUsed=true) {
    return {
        "isUsed": isUsed,
        "type": type,
        "kind": kind,
        "name": name,
        "damage": damage,
        "time": time,
        "interval": interval,
        "chance": chance,
        "stack": stack,
        "index": index,
    };
}

function makeDamageItemCopy(damageItem) {
    return buildDamageItem(damageItem.type, damageItem.kind, damageItem.name, damageItem.damage, damageItem.time,
        damageItem.interval, damageItem.chance, damageItem.stack, damageItem.index, damageItem.isUsed);
}

const cellNames = ['bbDamage', 'ebDamage', 'fbDamage', 'pbDamage', 'cbDamage', 'rbDamage', 'projExp', 'bleed'];

export function collectAllDamages(template) {
    let result = [];
    for (let i = 0; i < template.adDamage.length; i++) {
        result.push(makeDamageItemCopy(template.adDamage[i]));
    }

    for (let i = 0; i < cellNames.length; i++) {
        const name = cellNames[i];
        let damage = template[name][1];
        if (typeof damage === typeof '') {
            const split = damage.split(" / ");
            damage = parseFloat(split[0]);
            const time = parseFloat(split[1].slice(0, -1));
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(type[0], type[1], type[2], damage, time, 0, 100, false);
            result.push(obj);
        } else if (damage > 0) {
            const type = getDamageTypeFromCellName(name);
            const obj = buildDamageItem(type[0], type[1], type[2], damage, 0, 0, 100, false);
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
            return ['dtPhysical', 'physical', "Physical"];
        case 'ebDamage':
            return ['dtEnergy', 'energy', "Energy"];
        case 'fbDamage':
            return ['dtFire', 'fire', "Fire"];
        case 'pbDamage':
            return ['dtPoison', 'poison', "Poison"];
        case 'cbDamage':
            return ['dtCryo', 'cryo', "Cryo"];
        case 'rbDamage':
            return ['dtRadiationExposure', 'radiation', "Radiation"];
        default:
            console.log("Can't determine appropriate damate type by cell name: " + cellName);
            return ['dtPhysical', 'ballistic', "Physical"];
    }
}

export default class DamageSetter {

    setDamages(templates) {
        for (let i = 0; i < templates.length; i++) {
            this.setDamage(templates[i]);
        }
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
            const damageValue = this.getDamageValue(damage);
            if (damageValue === 0) {
                return;
            }
            this.placeValueByType(template, damage, damageValue);
        }
    }

    getDamageValue(damage) {
        if (damage.curv > 0) {
            return damage.curv;
        } else if (damage.value > 0) {
            return damage.value;
        }
        return damage.magnitude;
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
                template.exp[1] = damage[0] * 100;
                break;
            case "STAT_DmgAll":
            case "STAT_DmgMelee":
                template.bonusMult[1] += damage[0] / 100;
                break;
            case "dtPhysical":
                if (exp) {
                    this.putDamage(template, "projExp", damage, damageData.time, damageData.interval);
                } else if (blood) {
                    const type = getDamageTypeFromCellName("bleed");
                    template.adDamage.push(buildDamageItem(type[0], type[1], type[2], damageValue, damageData.time, 0, 100, false));
                } else {
                    this.putDamage(template, "bbDamage", damage, damageData.time, damageData.interval);
                }
                break;
            case "dtEnergy":
            case "dtElectrical":
                this.putDamage(template, "ebDamage", damage, damageData.time, damageData.interval);
                break;
            case "dtFire":
                this.putDamage(template, "fbDamage", damage, damageData.time, damageData.interval);
                break;
            case "dtPoison":
                this.putDamage(template, "pbDamage", damage, damageData.time, damageData.interval);
                break;
            case "dtCryo":
                this.putDamage(template, "cbDamage", damage, damageData.time, damageData.interval);
                break;
            case "dtRadiationExposure":
                this.putDamage(template, "rbDamage", damage, damageData.time, damageData.interval);
                break;
            default:
                break;
        }
    }
    putDamage(template, field, damage, time, interval) {
        const type = getDamageTypeFromCellName(field);
        if (template[field][0] > 0 || time > 0 || interval > 0) { // We already have this type of damage, add it as additional

            // Will be modified only by boost multiplier independently
            template.adDamage.push(buildDamageItem(type[0], type[1], type[2], damage[1], time, interval, 100, false));
        } else {

            // Later can be modified by boosts (current architecture does not allow to push it to adDamage
            template[field] = damage;
        }
    }
}