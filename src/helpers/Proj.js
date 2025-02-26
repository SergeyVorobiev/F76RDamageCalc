import items from '../resources/proj.json';

function createMap() {
    let map = new Map();
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        map.set(item['id'], item);
    }
    return map;
}

const iMap = createMap();

export default function getProj() {
    return iMap;
}