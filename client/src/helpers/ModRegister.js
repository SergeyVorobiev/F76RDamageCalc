const mods = require.context('../resources/mods', true, /\.json$/);
const modsMap = new Map(mods.keys().map(mod => mods(mod)[0]).map((obj) => [obj.id, obj]));


export default function getMods() {
    return modsMap;
}