export default class DamageExtractor {

    set(template, mod) {
        const words = mod.ap.split("_");
        const lastWord = words[words.length - 1];
        if (lastWord === "Legendary1") {
            if (mod.name !== '') {
                template.legendary1 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary2") {
            if (mod.name !== '') {
                template.legendary2 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary3") {
            if (mod.name !== '') {
                template.legendary3 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary4") {
            if (mod.name !== '') {
                template.legendary4 = {"id": mod.id, "name": mod.name};
            }
        } else if (lastWord === "Legendary5") {
            if (mod.name !== '') {
                template.legendary5 = {"id": mod.id, "name": mod.name};
            }
        }
    }
}