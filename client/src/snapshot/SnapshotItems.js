import { memo } from 'react';
import SnapshotItem from './SnapshotItem'

function compareSBQ(item1, item2) {
    return compareCreature(item1, item2, "sbq");
}

function compareEarle(item1, item2) {
    return compareCreature(item1, item2, "earle");
}

function compareTitan(item1, item2) {
    return compareCreature(item1, item2, "titan");
}

function compareCreature(item1, item2, name) {
    if (item1 == null || item2 == null) {
        return 0;
    }
    const time1 = parseInt(item1.creatures[name].lifeTime);
    const time2 = parseInt(item2.creatures[name].lifeTime);
    if (time1 < time2) {
        return -1;
    } else if (time2 < time1) {
        return 1;
    }
    return 0;
}

function compareAverage(item1, item2) {
    if (item1 == null || item2 == null) {
        return 0;
    }
    const time1 = parseInt(item1.averageTime);
    const time2 = parseInt(item2.averageTime);
    if (time1 < time2) {
        return -1;
    } else if (time2 < time1) {
        return 1;
    }
    return 0;
}

const SnapshotItems = memo(function SnapshotItems({items, isOpen, sortId, filterName, weaponType, setModalDownloadSnapshot, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem}) {
    const sorts = [compareSBQ, compareEarle, compareTitan, compareAverage];
    console.log("SnapshotItems");
    const sortAlg = sorts[sortId];
    let index = 1;
    const filterByName = (item) => {
        if (filterName === "" || filterName === null) {
            return true;
        }
        return item.name.includes(filterName);
    };
    const filterByType = (item) => {
        if (weaponType === "All") {
            return true;
        }
        return weaponType === item.wSpec.type;
    };
    const snapshots = [...items.map.values()].sort(sortAlg).filter(filterByType).filter(filterByName);
    const size = snapshots.length;
    function result(item) {
        return (
            <SnapshotItem key={item.id} index={index++} isOpen={isOpen} size={size} item={item} setModalDownloadSnapshot={setModalDownloadSnapshot} setModalUpdateItem={setModalUpdateItem} setModalRenameItem={setModalRenameItem} setModalDeleteItem={setModalDeleteItem} setModalApplyItem={setModalApplyItem}></SnapshotItem>
        );
    }
    const values = snapshots.map((item) => (result(item)));
    return (
        values
    );
});

export default SnapshotItems;