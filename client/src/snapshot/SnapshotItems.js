import { memo } from 'react';
import SnapshotItem from './SnapshotItem'
import { Pagination } from 'antd';
import { getCreatureByName } from '../entities/ECreatures';


function compareCreatureGeneral(item1, item2, name) {
    if (item1 == null || item2 == null) {
        return 0;
    }
    const time1 = parseInt(getCreatureByName(item1.creatures, name).lifeTime);
    const time2 = parseInt(getCreatureByName(item2.creatures, name).lifeTime);
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

const SnapshotItems = memo(function SnapshotItems({onPageChanged, startIndex, pageSize, page, items, isOpen, sortCreatureName, filterName, weaponType, setModalDownloadSnapshot, setModalUpdateItem, setModalRenameItem, setModalDeleteItem, setModalApplyItem}) {
    console.log("SnapshotItems");
    function compareCreature(item1, item2) {
        return compareCreatureGeneral(item1, item2, sortCreatureName.name);
    }
    const sortAlg = (!sortCreatureName || sortCreatureName.name === "average") ? compareAverage : compareCreature;
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
    const filterByCreature = (item) => {
        if (!sortCreatureName || sortCreatureName.name === "average") {
            return true;
        }
        return getCreatureByName(item.creatures, sortCreatureName.name) !== null;
    }
    const snapshots = [...items.map.values()].filter(filterByCreature).sort(sortAlg).filter(filterByType).filter(filterByName);
    const size = snapshots.length;
    function result(item) {
        return (
            <SnapshotItem key={item.id} title={item.name} index={index++} isOpen={isOpen} size={size} item={item} setModalDownloadSnapshot={setModalDownloadSnapshot} setModalUpdateItem={setModalUpdateItem} setModalRenameItem={setModalRenameItem} setModalDeleteItem={setModalDeleteItem} setModalApplyItem={setModalApplyItem}></SnapshotItem>
        );
    }
    const values = snapshots.map((item) => (result(item)));
    let paginated = [];
    for (let i = startIndex; i < startIndex + pageSize; i++) {
        const value = values[i];
        if (!value) {
            break;
        }
        paginated.push(values[i]);
    }
    return getPagination(page, pageSize, onPageChanged, paginated, values.length);
});

function getPagination(page, pageSize, onPageChanged, paginated, total) {
    if (paginated.length > 0) {
        return (
            <>
                {paginated}
                <div className="p-1" />
                <Pagination align="center" current={page} defaultPageSize={pageSize} onChange={onPageChanged} total={total} showSizeChanger={false} />
            </>
        );
    } else {
        return (<></>);
    }
}
export default SnapshotItems;