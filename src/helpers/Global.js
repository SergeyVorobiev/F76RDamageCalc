export const currentLegendaryIds = [["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""]];

export function setCurrentLegendaryIds(wSpec) {
    for (let i = 0; i < 5; i++) {
        currentLegendaryIds[i] = [wSpec.legendary[i][0], wSpec.legendary[i][1], wSpec.legendary[i][2]];
    }
}

export default class Global {

    // static version1 = "Patch 1.7.16.13 - Update 56";
    // static version2 = "Gleaming Depths - December 3, 2024";
    static version1 = "Patch 1.7.14.15 - Update 54";
    static version2 = "Milepost Zero - September 3, 2024";
    static versionMessage = "Version of game from which weapon / legendary / mod data were parsed.";
    static webVersion = "ver.69";
    static creatureParseVersion = "Patch 1.7.16.13 - Update 56";
    static creatureParseVersionName = "Gleaming Depths - December 3, 2024";
    static raceParseVersion = "Patch 1.7.16.13 - Update 56";
    static raceParseVersionName = "Gleaming Depths - December 3, 2024";
    static consumablesParseVersion = "Patch 1.7.16.13 - Update 56";
    static consumablesParseVersionName = "Gleaming Depths - December 3, 2024";
    static perkCardParseVersion = "Patch 1.7.16.13 - Update 56";
    static perkCardParseVersionName = "Gleaming Depths - December 3, 2024";
    static graphPoints = 50;
}