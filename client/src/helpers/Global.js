export const currentLegendaryIds = [["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""], ["", 0, ""]];

export function setCurrentLegendaryIds(wSpec) {
    for (let i = 0; i < 5; i++) {
        currentLegendaryIds[i] = [wSpec.legendary[i][0], wSpec.legendary[i][1], wSpec.legendary[i][2]];
    }
}