export function checkLength(e, allowNegative=false) {
    if (e.target.value === "" || e.target.value === null) {
        e.currentTarget.value = 0;
        return true;
    }
    const val = parseFloat(e.currentTarget.value);
    if (val < 0 && !allowNegative) {
         e.currentTarget.value = 0;
    } else if (e.currentTarget.value.length > e.currentTarget.maxLength) {
         e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength);
    } else if (val > e.currentTarget.max) {
        e.currentTarget.value = e.currentTarget.max;
    }
    return true;
}

export function truncate(str, maxLength) {
    if (!str || typeof(str) !== typeof("") || str.length <= maxLength) {
        return str;
    }
    return str.slice(0, maxLength) + "…";
}

export function truncateLongWords(str, maxLength) {
    if (!str || str.length <= maxLength) {
        return str;
    }
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > maxLength) {
            words[i] = truncate(word, maxLength);
        }
    }
    return words.join(' ');
}