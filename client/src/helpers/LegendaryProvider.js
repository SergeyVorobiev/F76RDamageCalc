import items from '../resources/legendary.json';

function createMap() {
    let map = new Map();
    let legendary = [[], [], [], [], []];
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