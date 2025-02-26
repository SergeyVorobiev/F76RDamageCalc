import items from '../resources/perk.json';

function createMap() {
    let map = new Map();
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        map.set(item['id'], item);
    }
    return map;
}

const iMap = createMap();

export default function getPerks() {
    return iMap;
}

export function getPerk(id) {
    return getPerks().get(id);
}