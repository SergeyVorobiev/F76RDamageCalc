export default class PickedGroups {
    static excludeGroups = ["Replacement", "Feedthroat", "Handle", "Mod1", "Mod2", "Mod3", "Mod4", "Modelswap", "Meleelogo", "Shaft", "Legendary1", "Legendary2", "Legendary3", "Legendary4", "Legendary5", "Customname", "Frontsight"];
    static groups = [];

    static init(template) {
        PickedGroups.groups.length = 0;
        for (const name in template.allMods) {
            PickedGroups.push(name);
        }
    }

    static excluded(name) {
        return PickedGroups.excludeGroups.includes(name);
    }

    static push(name) {
        if (!PickedGroups.excluded(name)) {
            PickedGroups.groups.push(name);
        }
    }

    static clear() {
        PickedGroups.groups.length = 0;
    }

    static get() {
        return PickedGroups.groups;
    }
}