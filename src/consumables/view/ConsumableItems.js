import consItems from '../../resources/consumables.json';
import Container from 'react-bootstrap/Container';
import ConsumableButton from './ConsumableButton';
import ConsumableTools from '../ConsumableTools';
import { memo, useState } from 'react';
import { Pagination, FloatButton } from 'antd';


function nameComparator(item1, item2) {
    const name1 = item1['full'];
    const name2 = item2['full'];
    return name1.localeCompare(name2)
}

export const sortItems = consItems.sort(nameComparator);

export function getItem(id) {
    for (let i = 0; i < sortItems.length; i++) {
        const item = sortItems[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}

const types = ["Chem", "Food", "Magazine", "Serum", "Drink", "Bobblehead", "Stimpak", "BloodPack"];

const ConsumableItems = memo(function ConsumableItems(props) {
    console.log("Consumable Items");
    const [pageSize, setPageSize] = useState(20);
    function onItemClick(e) {
        const id = e.currentTarget.id;
        if (!props.currentItem) {
            props.setShowToast(true);
        } else {
            props.setShowToast(!(props.currentItem.id === id && props.showToast));
        }
        props.setCurrentItem(getItem(id));
    }
    const items = [];
    const needTypeFilter = props.filterType !== 'All';
    for (let i = 0; i < sortItems.length; i++) {
        const item = sortItems[i];
        const type = ConsumableTools.getItemType(item);
        if (needTypeFilter) {
            if (props.filterType === "Other" && types.includes(type)) {
                continue;
            } else if (props.filterType !== "Other" && props.filterType !== type) {
                continue;
            }
        }
        if (props.filterName && props.filterName.length > 0) {
            if (!item.full.toLowerCase().includes(props.filterName.toLowerCase())) {
                continue;
            }
        }
        if (props.filterEffect && props.filterEffect !== 'None') {
            if (!item.effectTags.includes(props.filterEffect)) {
                continue;
            }
        }
        items.push(
            <ConsumableButton key={item.id} index={i} item={item} type={type} effectTag={props.filterEffect} onClick={onItemClick} />
        );
    }
    function onPageChanged(page, pageSize) {
        props.setCurrentPage(page);
        setPageSize(pageSize);
    }
    const paginated = [];
    const start = (props.currentPage - 1) * pageSize;
    const end = start + pageSize;
    for (let i = start; i < end; i++) {
        paginated.push(items[i]);
    }
    return (
        <Container>
            <Pagination className="pt-1 pb-3" align="center" current={props.currentPage} defaultPageSize={pageSize} onChange={onPageChanged} total={items.length} showSizeChanger={false} />
            {paginated}
            <Pagination className="pt-3" align="center" current={props.currentPage} defaultPageSize={pageSize} onChange={onPageChanged} total={items.length} showSizeChanger={false} />
            <FloatButton.BackTop style={{ right: 60 }} duration={100} visibilityHeight={2000} />
        </Container>

    );
});

export default ConsumableItems;