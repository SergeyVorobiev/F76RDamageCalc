export default class CustomConditions {
    static names = {
        burned: ["burned", "", null],
        // night: ["night", "Global Value (00000038 / GameHour) < 6.0"],
        reload: ["reload", "(Subject) Loaded Ammo Count < 1.0", null],
        reload2: ["reload", "(Subject) Loaded Ammo Count = 0.0 And (Subject) ?930 > 0.0", null],
        bashing: ["bash", "(Subject) Is Power Attacking"],
        poisoned: ["poisoned", "", null],
        bleed: ["bleed", "", null],
        firstBlood: ["firstBlood", "(Subject) Health Percentage = 100.0", null],
        furious: ["furious", "", {"all": [5, 45, 0]}],
        pounder: ["pounder", "", {"auto": [1, 100, 0], "nonAuto": [10, 100, 0]}],
    }

    static staticBonuses = [];

    static dynamicBonuses = ["burned", "reload", "poisoned", "bleed", "firstBlood", "consecutive"];

    static exclude = [
        "(Subject) Is In Iron Sight", // Aiming
        "(Subject) Is Not Moving", // Standing still
        "Global Value (00000038 / GameHour) < 6.0", // Night only (currently we consider always night)
        "(Subject) Is Not Dead",
        "(Subject) Is Not Player And (Subject) Is Not Dead",
        "(Subject) ?10014 = 0.0",
        "(Subject) ?10014 = 1.0",
        "(Subject) ?10014 = 0.0 And (Subject) Has No Perk (000a2776 / ImmuneToPoison)",
        "(Subject) ?10014 = 1.0 And (Subject) Has No Perk (000a2776 / ImmuneToPoison)",
        "(Target) Has No Tag (00249d7a / CriticalCryoNoFreeze)",
        "(Subject) Is Not Player And (Subject) ?10014 = 0.0 And (Subject) Has No Perk (000a2776 / ImmuneToPoison)",
        "(Subject) Is Not Player And (Subject) ?10014 = 1.0 And (Subject) Has No Perk (000a2776 / ImmuneToPoison)",
        "(Subject) Global Value (00000038 / GameHour) >= 21.0 Or (Subject) Global Value (00000038 / GameHour) < 6.0",
        "(Subject) Is Not Dead And (Subject) ?933 > 1.0",
        "(Subject) Is Player And (Subject) Is Wearing (0079296d / WIP4_HasLegendary_Weapon_Bully)",
        "(Subject) Has No Tag (0079a767 / NoFireVFX) And (Subject) Is Not Wearing (00245ad9 / dn_HasLining_FlameResistance)",
        "(Subject) Has No Perk (000a2776 / ImmuneToPoison)",
        "(Target) Is Not Wearing (001f109b / HasLegendary_Weapon_HealAllies)",
        "(Subject) Is Not Wearing (00245ad9 / dn_HasLining_FlameResistance)",
        "(Subject) Is Not Essential And (Subject) Is Not Protected",
        "(Subject) Is Not Essential And (Subject) Is Not Protected And (Subject) Has No Tag (0022db8f / NoDisintegrate)",
        "(Subject) Has No Tag (00249d7a / CriticalCryoNoFreeze) And (Subject) Is Not Essential And (Subject) Is Not Protected",
        "(Subject) Has No Tag (0079a767 / NoFireVFX)",
        "(Subject) Teammate Count = 0.0",
        "(Subject) Teammate Count = 1.0 And (Teammates) Distance < 2500.0",
        "(Subject) Teammate Count = 2.0 And (Teammates) Distance < 2500.0",
        "(Subject) Teammate Count = 3.0 And (Teammates) Distance < 2500.0",
        "(Subject) Is Player",
        "(Subject) Has Tag (0079296b / WIP4_HasLegendary_Weapon_Fracturers)",
        "(Subject) Has Tag (00792970 / WIP4_HasLegendary_Weapon_Icemens)",
        "(Subject) Is Not Dead And (Subject) Is Not Player And (Subject) ?934 = 1.0",
        "(Subject) Has Tag (00792963 / WIP4_HasLegendary_Weapon_Vipers)",
        "(Subject) Number Of Active Effects With Tag (0004b25b / DamageTypePoison) >= 1.0",
    ]

    static checkExclude(condition) {
        return CustomConditions.exclude.includes(condition);
        /*
        for (let i = 0; i < CustomConditions.exclude.length; i++) {
            if (condition.includes(CustomConditions.exclude[i])) {
                return true;
            }
        }
        return false;
        */
    }

    static convertCondition(condition) {
        if (CustomConditions.checkExclude(condition)) {
            return [null, null];
        }
        for (const field in CustomConditions.names) {
            const custom = CustomConditions.names[field];
            const customName = custom[0];
            const realName = custom[1];
            const data = custom[2];
            if (condition === customName || (realName && realName !== "" && condition.includes(realName))) {
                return [customName, data];
            }
        }

        console.warn("New condition has been found: " + condition);
        return [null, null];
    }
}

