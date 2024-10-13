import { Apply } from './Apply';


export class Keywords extends Apply {

    addTag(template, tag, apply) {
        if (apply) {
            template.tags.push(tag);
        } else {
            let k = -1;
            for (let i = 0; i < template.tags.length; i++) {
                if (template.tags[i] === tag) {
                    k = i;
                    break;
                }
            }
            if (k > -1) {
                template.tags.splice(k, 1);
            }
        }
    }

    print(name) {
        if (!name.includes("IsAmmoType") && !name.includes("dn_Has") && !name.includes("HasS") && !name.includes("legendary")
            && !name.includes("s_30") && !name.includes("Anims") && !name.includes("remapNode") && !name.includes("CustomItem")
            && !name.includes("Legendary") && !name.includes("ATX") && !name.includes("UI_") && !name.includes("s_35")
            && !name.includes("ma_") && !name.includes("s_20") && !name.includes("FeaturedItem") && !name.includes("00000000")
            && !name.includes("WeaponTypePistol") && !name.includes("WeaponTypeRifle") && !name.includes("VATSWeaponLongBurst")
            && !name.includes("DamageType") && !name.includes("s_00")) {
            console.log("Keywords: " + name);
        }
    }

    apply(template, mod, apply) {
        const name = mod.val1;
        switch(name) {
            case '00060a81 / dtEnergy':
            case '0033a7c9 / WeaponTypeEnergy':
                this.addTag(template, "Energy", apply);
                return;
            case '001e05d6 / HasSilencer':
                this.addTag(template, "HasSilencer", apply);
                return;
            case '0004a0a2 / WeaponTypeAutomatic':
            case '0034087a / WeaponTypeAutomaticRifle':
                this.addTag(template, "Automatic", apply);
                if (apply) {
                    template.isAuto[1] = 1;
                } else {
                    template.isAuto[1] = template.isAuto[0];
                }
                return;
            default:
                break;
        }

        // Some weapons like MG-42 can have 'Rifle' keyword we skip it to not change its type
        if (template.type[0] !== 'Rifle' && template.type[0] !== 'Pistol') {
            return;
        }
        switch(name) {
            case '0004a0a1 / WeaponTypeRifle':
                template.type[1] = (apply) ? "Rifle" : template.type[0];
                break;
            case '0004a0a0 / WeaponTypePistol':
                template.type[1] = (apply) ? "Pistol" : template.type[0];
                break;
             default:
                break;
        }
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        const name = mod.val1;
        if (name.includes("dt") || name.includes("WeaponType")) {
            throw new Error("Legendary changes weapon or damage type");
        }

    }
}