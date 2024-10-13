export function readSnapshotsFromInput(inputId, setIdCallback, setItemsCallback, oldItems=null, add=true, maxItems=1000) {

    const file = document.getElementById(inputId).files[0];
    readSnapshotsFrom(file, setIdCallback, setItemsCallback, oldItems, add, maxItems)
};

export function readSnapshotsFromResources(file, setIdCallback, setItemsCallback, maxItems=1000) {
    readSnapshotsJson(file, setIdCallback, setItemsCallback, null, true, maxItems=1000);
};

function readSnapshotsJson(items, setIdCallback, setItemsCallback, oldItems, add=true, maxItems=1000) {
    let map = new Map();
    let k = 0;
    if (oldItems && add) {
        for (const [, value] of oldItems.entries()) {
            value.id = k;
            map.set(k++, value);
        }
    }
    let newMaxItems = maxItems - map.size;
    newMaxItems = (newMaxItems < 0) ? 0 : newMaxItems;
    const length = items.length > newMaxItems ? newMaxItems : items.length;
    for (let i = 0; i < length; i++) {
        items[i].id = i + k;
        map.set(i + k, items[i]);
    }
    const newItems = {
        map: map,
    }
    setIdCallback(map.size);
    setItemsCallback(newItems);
}

function readSnapshotsFrom(file, setIdCallback, setItemsCallback, oldItems, add, maxItems=1000) {
    try {
        const reader = new FileReader();
        reader.onload = e => {
            let items = JSON.parse(e.target.result);
            readSnapshotsJson(items, setIdCallback, setItemsCallback, oldItems, add, maxItems);
        };
        reader.readAsText(file);
    } catch {
        // Ok
    }
};