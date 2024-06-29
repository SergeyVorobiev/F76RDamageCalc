export function checkLength(e) {
    if (e.target.value === "" || e.target.value === null) {
        e.currentTarget.value = 0;
        return true;
    }
    const val = parseFloat(e.currentTarget.value)
    if (val < 0) {
         e.currentTarget.value = 0;
    } else if (e.currentTarget.value.length > e.currentTarget.maxLength) {
         e.currentTarget.value = e.currentTarget.value.slice(0, e.currentTarget.maxLength);
    } else if (val > e.currentTarget.max) {
        e.currentTarget.value = e.currentTarget.max;
    }
    return true;
}