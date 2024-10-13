import items from '../resources/legendary.json';

function createMap() {
    let map = new Map();
    let legendary = [[{name: "None", id: "1"}], [{name: "None", id: "2"}], [{name: "None", id: "3"}], [{name: "None", id: "4"}], [{name: "None", id: "5"}]];
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        map.set(item.id, item);
        legendary[item.star - 1].push(item);
    }
    return [map, legendary];
}

const [iMap, legendary] = createMap();

export function getLegendary(id) {
    return iMap.get(id);
}

export function getLegendaryByStar() {
    return legendary;
}

export function getLegendaryNameFromSpec(wSpec, star) {
    if (wSpec && wSpec.legendary) {
        const leg = wSpec.legendary[star - 1][0];
        if (leg && leg !== "") {
            const legObj = getLegendary(leg);
            if (legObj) {
                return legObj.name;
            }
            return "";
        }
    }
    return "";
}