const versions = {};
const images = {}
function importAll(r) {
    function resolver(key) {
        if (key.endsWith('.json')) {
            let startIndex = key.indexOf("_") + 1;
            let endIndex = key.lastIndexOf(".");
            if (startIndex > 0 && endIndex > -1 && startIndex < endIndex) {
                const id = key.substring(startIndex, endIndex);
                const jsonObj = r(key);
                versions[id] = {alt: jsonObj.alt, version: jsonObj.version};
            }
        } else if (key.endsWith('.webp')) {
            let firstIndex = key.indexOf("_");
            const number = parseInt(key.substring(2, firstIndex));
            let secondIndex = key.indexOf("_", firstIndex + 1);
            const id = key.substring(firstIndex + 1, secondIndex);
            const name = key.substring(secondIndex + 1, key.length - 5);
            const image = r(key);
            const array = images[id];
            if (array) {
                array.push({name: name, image: image, number: number});
            } else {
                images[id] = [{name: name, image: image, number: number}];
            }
        }
    }
    r.keys().forEach((key) => resolver(key));
}

function importAllImages(r) {
    function resolver(key) {
        images[key] = r(key);
    }
    r.keys().forEach((key) => resolver(key));
}

// Now you can't use require.context several times for different types (ok), you can't see folder's names which forces you to add it in file names,
// and you can't use files with the same names in different folders. Never had this problems in the past (Горите в аду пидарасы)
importAll(require.context('../resources/forReadme/Tests', true, /\.(json|webp)$/));

export function isTested(wId) {
    return versions[wId] && images[wId];
}

export function getTestedWeapon(wId) {
    if (isTested(wId)) {
        return {
            version: versions[wId],
            images: images[wId],
        }
    }
    return null;
}


