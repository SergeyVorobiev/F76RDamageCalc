export function millisToTime(value) {
    if (!value || value === Infinity) {
        return "Infinity";
    } else if (value > 3599999999) {
        return "+999:59:59:999";
    }
    const t = [3600000, 60000, 1000];
    let time = [];
    for (let i = 0; i < t.length; i++) {
        let r = value % t[i];
        let q = (value - r) / t[i];
        time.push(q);
        value = r;
    }
    let strTime = "";
    strTime += (time[0] < 10) ? ("00" + time[0] + ":") : ((time[0] < 100) ? ("0" + time[0] + ":") : time[0] + ":");
    strTime += (time[1] < 10) ? ("0" + time[1] + ":") : time[1] + ":";
    strTime += (time[2] < 10) ? ("0" + time[2] + ":") : time[2] + ":";
    if (value < 10) {
        strTime += ( "00" + value);
    } else if (value < 100) {
        strTime += ("0" + value);
    } else {
        strTime += value;
    }
    return strTime;
}