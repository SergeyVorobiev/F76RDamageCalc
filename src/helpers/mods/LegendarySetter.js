import getMods from '../Mods';


export default class LegendarySetter {

    constructor() {

    }

    set(template, mod) {
        this.privateSet(template, mod);
    }

    privateSet(obj, mod) {
        const words = mod.ap.split("_");
        const lastWord = words[words.length - 1];
        if (lastWord === "Legendary1") {
            if (mod.name !== '') {
                obj.legendary1 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary2") {
            if (mod.name !== '') {
                obj.legendary2 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary3") {
            if (mod.name !== '') {
                obj.legendary3 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary4") {
            if (mod.name !== '') {
                obj.legendary4 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary5") {
            if (mod.name !== '') {
                obj.legendary5 = {"id": mod.id, "name": mod.name};
            }
        }
    }

    extractDefaultLegendary(template) {
        const result = {};
        for (const property in template.allMods) {
            const propMods = template.allMods[property];
            for (let j = 0; j < propMods.length; j++) {
                const mod = propMods[j];
                const modId = mod[0];
                const isUsed = mod[1];
                const modData = getMods().get(modId);
                if (modData) {
                    if (isUsed) {
                        this.privateSet(result, modData);
                    }
                }
            }
        }
        return result;
    }
}