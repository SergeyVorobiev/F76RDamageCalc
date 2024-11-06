const cal50s = require.context('../resources/forReadme/Tests/50Cal', true, /\.webp$/);
const cal50sList = cal50s.keys().map(image => cal50s(image));

const u54 = "Patch 1.7.14.15 - Update 54 Milepost Zero - September 3, 2024";

export const testedWeapons = {
    "0003a0d4": {img: cal50sList, alt: "50Cal", version: u54},
}

export function isTested(wId) {
    return (testedWeapons[wId]) ? true : false;
}


