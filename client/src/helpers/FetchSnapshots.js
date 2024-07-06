export function readSnapshotsFromInput(inputId, setIdCallback, setItemsCallback, maxItems=10000) {

    const file = document.getElementById(inputId).files[0];
    readSnapshotsFrom(file, setIdCallback, setItemsCallback, maxItems)
};

export function readSnapshotsFromResources(file, setIdCallback, setItemsCallback, maxItems=10000) {
    readSnapshotsJson(file, setIdCallback, setItemsCallback, maxItems=10000);
};

function readSnapshotsJson(items, setIdCallback, setItemsCallback, maxItems=10000) {
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

function readSnapshotsFrom(file, setIdCallback, setItemsCallback, maxItems=10000) {
    try {
        const reader = new FileReader();
        reader.onload = e => {
            let items = JSON.parse(e.target.result);
            readSnapshotsJson(items, setIdCallback, setItemsCallback, maxItems);
        };
        reader.readAsText(file);
    } catch {
        // Ok
    }
};