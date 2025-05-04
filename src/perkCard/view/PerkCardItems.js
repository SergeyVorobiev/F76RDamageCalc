import Container from 'react-bootstrap/Container';
import PerkCardButton from './PerkCardButton';
import { memo, useState } from 'react';
import { Pagination, FloatButton } from 'antd';
import { getPerkCard, getSortedPerkCards } from '../PerkCardProvider';


const PerkCardItems = memo(function PerkCardItems(props) {
    console.log("Perk Card Items");
    const [pageSize, setPageSize] = useState(20);
    function onItemClick(e) {
        const id = e.currentTarget.id;
        if (!props.currentItem) {
            props.setShowToast(true);
        } else {
            props.setShowToast(!(props.currentItem.id === id && props.showToast));
        }
        props.setCurrentItem(getPerkCard(id));
    }
    const items = [];
    const sortedItems = getSortedPerkCards();
    const needTypeFilter = props.filterType !== 'All';
    for (let i = 0; i < sortedItems.length; i++) {
        const item = sortedItems[i];
        if (needTypeFilter && item.type !== props.filterType) {
            continue;
        }
        if (props.filterStatus === "Legendary" && !item.legendary) {
            continue;
        } else if (props.filterStatus === "Ordinary" && item.legendary) {
            continue;
        }
        if (props.filterName && props.filterName !== "" && !item.id.startsWith(props.filterName) && !item.fullName.toLowerCase().includes(props.filterName.toLowerCase())) {
            continue;
        }
        items.push(
            <PerkCardButton key={item.id} index={i} item={item} onClick={onItemClick} />
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

export default PerkCardItems;