export function intersects(array1, array2) {
    if (!array1 || array1 === null || array1.length === 0 || !array2 || array2 === null || array2.length === 0) {
        return false;
    }
    let arrayLess = array1;
    let arrayMore = array2;
    if (array1.length > array2.length) {
        arrayLess = array2;
        arrayMore = array1;
    }
    for (let i = 0; i < arrayLess.length; i++) {
        const value = arrayLess[i];
        if (arrayMore.includes(value)) {
            return true;
        }
    }
    return false;
}