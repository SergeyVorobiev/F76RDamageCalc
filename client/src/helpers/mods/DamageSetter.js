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
            case "dtPhysical":
                if (exp) {
                    this.putDamage(template, "projExp", damage, "dtPhysical", damageData.time, damageData.interval);
                } else if (blood) {
                    template.bleed[1] = damageValue + " / " + damageData.time + "s"
                } else {
                    this.putDamage(template, "bbDamage", damage, "dtPhysical", damageData.time, damageData.interval);
                }
                break;
            case "dtEnergy":
            case "dtElectrical":
                this.putDamage(template, "ebDamage", damage, "dtEnergy", damageData.time, damageData.interval);
                break;
            case "dtFire":
                this.putDamage(template, "fbDamage", damage, "dtFire", damageData.time, damageData.interval);
                break;
            case "dtPoison":
                this.putDamage(template, "pbDamage", damage, "dtPoison", damageData.time, damageData.interval);
                break;
            case "dtCryo":
                this.putDamage(template, "cbDamage", damage, "dtCryo", damageData.time, damageData.interval);
                break;
            case "dtRadiationExposure":
                this.putDamage(template, "rbDamage", damage, "dtRadiationExposure", damageData.time, damageData.interval);
                break;
            default:
                break;
        }
    }
    putDamage(template, field, damage, type, time, interval) {
        if (template[field][0] > 0 || time > 0 || interval > 0) { // We already have this type of damage, add it as additional
            template.adDamage.push({"type": type, "value": damage[0], "time": time, "interval": interval});
        } else {
            template[field] = damage;
        }
    }
}