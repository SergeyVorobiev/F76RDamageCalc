export function readWeaponsFromInput(inputId, setIdCallback, setItemsCallback, maxItems=10000) {
    const file = document.getElementById("weaponFile").files[0];
    readWeaponsFrom(file, setIdCallback, setItemsCallback, maxItems)
};

export function readWeaponsFromResources(file, setIdCallback, setItemsCallback, maxItems=10000) {
    readJson(file, setIdCallback, setItemsCallback, maxItems=10000);
};

function readJson(items, setIdCallback, setItemsCallback, maxItems=10000) {
    let map = new Map();
    let i;
    const length = items.length > maxItems ? maxItems : items.length;
    if (length < 1) {
        return;
    }
    for (i = 0; i < length; i++) {
        items[i].id = i;
        map.set(i, items[i]);
    }
    const newItems = {
        map: map,
    }
    setIdCallback(i);
    setItemsCallback(newItems);
}

function readWeaponsFrom(file, setIdCallback, setItemsCallback, maxItems=10000) {
    try {
        const reader = new FileReader();
        reader.onload = e => {
            let items = JSON.parse(e.target.result);
            readJson(items, setIdCallback, setItemsCallback, maxItems);
        };
        reader.readAsText(file);
    } catch {
        // Ok
    }
};