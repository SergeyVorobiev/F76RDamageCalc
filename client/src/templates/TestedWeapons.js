const testImagePaths = require.context('../resources/forReadme/Tests', true, /\.webp$/);
const versionPaths = require.context('../resources/forReadme/Tests', true, /\.json$/);


export const testedWeapons = buildTestedWeapons();

export function isTested(wId) {
    return (testedWeapons.get(wId)) ? true : false;
}

function buildTestedWeapons() {
    const versions = buildMap(versionPaths);
    const imagesMap = buildMap(testImagePaths);
    let resultMap = new Map();
    imagesMap.forEach((value, key) => {
        const version = versions.get(key)[0];
        const obj = {
            img: value,
            alt: version.alt,
            version: version.version,
        };
        resultMap.set(key, obj);
    });
    return resultMap;
}

function buildMap(paths) {
    let result = new Map();
    paths.keys().map(key => {
        const firstIndex = key.indexOf("/") + 1;
        const lastIndex = key.indexOf("/", firstIndex);
        const id = key.substring(firstIndex, lastIndex);
        let array = result.get(id);
        const path = paths(key);
        if (!array) {
            result.set(id, [path]);
        } else {
            array.push(path);
        }
        return result;
    });
    return result;
}


