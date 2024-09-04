import { Apply } from './Apply';


export class Keywords extends Apply {

    constructor() {
        super();
    }

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

    apply(template, weaponId, mod, apply) {
        const name = mod.val1;
        switch(name) {
            case '00060a81 / dtEnergy':
            case '0033a7c9 / WeaponTypeEnergy':
                this.addTag(template, "Energy", apply);
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
}