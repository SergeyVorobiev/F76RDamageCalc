import { ModTools } from '../helpers/mods/ModTools';


export default class TemplateTools {

    // ATTENTION! Do not exclude activated by default
    static excludedModIds = {
        "00693d37" : ["00496566", "001ac24e", "00147b02", "00496564", "00496565"], // Blue flamer (Holy fire)
        "000e5881" : ["00496566", "001ac24e", "00147b02", "00496564", "00496565", "006e06a3"],
    }

    static excludeMod(wId, mId) {
        const eIds = TemplateTools.excludedModIds[wId];
        if (eIds) {
            for (let i = 0; i < eIds.length; i++) {
                const eId = eIds[i];
                if (eId === mId) {
                    return true;
                }
            }
        }
        return false;
    }

    // Get rid of mods which do not influence on damage or hidden
    static getDamagedModIndexes(template, includeGroups, accuracyMods, silencerDamage) {
        const result = {}
        for (const categoryName in template.allMods) {
            const mods = template.allMods[categoryName];
            const exclude = includeGroups && !includeGroups.includes(categoryName);
            let defaultIndex = -1;
            let accuracyBestIndex = -1;
            let indexes = [];
            for (let i = 0; i < mods.length; i++) {
                const mod = mods[i];
                const modId = mod[0];
                if (exclude) { // Care only about default if it is presented
                    if (mod[1]) {
                        defaultIndex = i;
                        break;
                    }
                } else if (!TemplateTools.excludeMod(template.id, modId) && !mod[3]) { // 3-hidden

                    // 4-useful (means directly affecting on damage)
                    if (mod[4]) {
                        if (ModTools.hasSilencerById(modId)) {
                            if (silencerDamage) {
                                indexes.push(i);
                            }
                        } else {
                            indexes.push(i);
                        }
                    } else if (accuracyBestIndex === -1) {
                        const bestMod = accuracyMods[categoryName];
                        if (bestMod && bestMod === modId) {
                            accuracyBestIndex = i;
                        }
                    }
                }
            }
            if (exclude) { // Can't choose, using only default one
                indexes = [defaultIndex];
            } else if (indexes.length === 0) { // All are damage useless, using best accuracy or default
                if (accuracyBestIndex === -1) {
                    indexes = [defaultIndex];
                } else {
                    indexes = [accuracyBestIndex];
                }
            }
            result[categoryName] = indexes;
        }
        return result;
    }

    static resetMods(template) {
        const modCategories = template.allMods;
        for (const modCategory in modCategories) {
            const mods = modCategories[modCategory];
            for (let i = 0; i < mods.length; i++) {
                const mod = mods[i];
                mod[1] = false;
            }
        }
    }

    static getImage(template) {
        return template.iconName[template.type[1]];
    }

    static hasDefaultLegendary(template) {
        const leg1 = template.legendary1;
        const leg2 = template.legendary2;
        const leg3 = template.legendary3;
        const leg4 = template.legendary4;
        const leg5 = template.legendary5;
        return (leg1.id || leg2.id || leg3.id || leg4.id || leg5.id);
    }

    static getDefaultLegendary(template, legendarySetter) {
        const result = [];
        const obj = legendarySetter.extractDefaultLegendary(template);
        const leg1 = obj.legendary1;
        const leg2 = obj.legendary2;
        const leg3 = obj.legendary3;
        const leg4 = obj.legendary4;
        const leg5 = obj.legendary5;
        if (leg1) {
            result.push([leg1.id, 0]);
        }
        if (leg2) {
            result.push([leg2.id, 1]);
        }
        if (leg3) {
            result.push([leg3.id, 2]);
        }
        if (leg4) {
            result.push([leg4.id, 3]);
        }
        if (leg5) {
            result.push([leg5.id, 4]);
        }
        return result;
    }

    static isWeaponRanged(template) {
        return !(template.type[1] === "Melee" || template.type[1] === "Unarmed");
    }

    static isWeaponExplosive(template) {
        return template['exp'][1] > 0;
    }

    static hasPhysicalDamage(template) {
        return template['bbDamage'][1] > 0;
    }

    static getGroups(templates, set) {
        for (let i = 0; i < templates.length; i++) {
            for (const name in templates[i].allMods) {
                set.add(name);
            }
        }
    }
}