export function getColorsForHotMeter() {
    let colors = []
    let r = 64;
    let g = 255;
    let b = 255;
    let s = 12;
    for (let i = 0; i < 50; i++) {
        if (b > 64) {
            b = b - s;
            b = (b < 64) ? 64 : b;
        } else if (r < 255) {
            r = r + s;
            r = (r > 255) ? 255 : r;
        } else if (g > 64) {
            g = g - s;
            g = (g < 64) ? 64 : g;
        }
        colors.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colors;
}
