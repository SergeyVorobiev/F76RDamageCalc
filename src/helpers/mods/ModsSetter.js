import getMods from '../Mods';
import { getTemplateCopyById } from '../TemplatesRegister';
import DamageExtractor from './DamageExtractor';
import DamageSetter from './DamageSetter';
import LegendarySetter from './LegendarySetter';
import { ModParser } from './ModParser';


export default class ModsSetter {

    constructor(legendarySetter, modParser, damageExtractor, damageSetter) {
        this.legendarySetter = legendarySetter;
        this.modParser = modParser;
        this.damageExtractor = damageExtractor;
        this.damageSetter = damageSetter;
    }

    static buildModsSetter(alt) {
        return new ModsSetter(new LegendarySetter(), new ModParser(alt), new DamageExtractor(alt), new DamageSetter(alt));
    }

    getModParser() {
        return this.modParser;
    }

    getDamageExtractor() {
        return this.damageExtractor;
    }

    getLegendarySetter() {
        return this.legendarySetter;
    }

    setAlt(alt) {
        this.modParser.setAlt(alt);
        this.damageExtractor.setAlt(alt);
        this.damageSetter.setAlt(alt);
    }

    // Probably deprecated (Current mods apparently have activated default mods at the beginning)
    setTemplatesDefaultMods(templates) {
        throw new Error("Not implemented");
    }

    cleanTemplateAndApplyCurrentMods(template) {
        this.resetTemplate(template);
        this.setTemplatesMods([template]);
    }

    // It will set mods on current template, use this only for clean ones.
    setTemplatesMods(templates) {

        // Apply default damage effects like (Ammo, Projectile) they will modify default damage values
        // which later have to be modified by other buffs
        this.applyModValues(templates, true, true);

        // Extract all damages with current settings
        this.damageExtractor.extract(templates);

        this.damageSetter.setDamages(templates);

        // Apply all buffs including those who boost damage
        this.applyModValues(templates, false, false);
    }

    applyModValues(templates, mutatingDamage, setLegendary) {
        for (let i = 0; i < templates.length; i++) {
            const template = templates[i];
            const allMods = template.allMods;
            for (let property in allMods) {
                const propMods = allMods[property];
                for (let j = 0; j < propMods.length; j++) {
                    const mod = propMods[j];
                    const modId = mod[0];
                    const isUsed = mod[1];
                    if (isUsed) {
                        const modData = getMods().get(modId);
                        if (modData) {
                            if (setLegendary) {
                                this.legendarySetter.set(template, modData);
                            }
                            this.modParser.applyOrRevoke(modData, template, true, mutatingDamage);
                        }
                    }
                }
            }
        }
    }

    // Forced measure due to bad-knee design
    resetTemplate(template) {
        const cleanTemplate = getTemplateCopyById(template.id);
        for (const property in cleanTemplate) {
            if (property !== "allMods") {
                template[property] = cleanTemplate[property];
            }
        }
    }
}