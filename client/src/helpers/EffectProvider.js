import effects from '../resources/effects.json';


const vmadObjects = new Map();

// PERK, SPEL, MGEF
export function getEffect(id) {
    return effects[0][id];
}

export function setVMADObject(id, object) {
    vmadObjects.set(id, object);
}

export function getVMADObject(id) {
    return vmadObjects.get(id);
}

export function clearVMADObjects() {
    vmadObjects.clear();
}

export function printVMADS() {
    console.log(vmadObjects);
}