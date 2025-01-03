
import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import { memo, useState } from 'react';
import ConsumableItems from './ConsumableItems';
import ConsumableToast from './ConsumableToast';
import ConsumableFilter from './ConsumableFilter';
import FilterDisplay from './FilterDisplay';


const ConsumablesView = memo(function ConsumablesView() {
    const [currentItem, setCurrentItem] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [filterType, setFilterType] = useState('All');
    const [filterName, setFilterName] = useState('');
    const [filterEffect, setFilterEffect] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="6">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '14rem'}}>
                            <span className="ac-text">Consumables</span>
                        </InputGroup.Text>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <ConsumableToast item={currentItem} showToast={showToast} setShowToast={setShowToast} />
                    <ConsumableFilter setFilterType={setFilterType} setFilterName={setFilterName} setFilterEffect={setFilterEffect} setCurrentPage={setCurrentPage} />
                    <FilterDisplay filterType={filterType} filterEffect={filterEffect} />
                    <ConsumableItems filterName={filterName} filterType={filterType} filterEffect={filterEffect} currentPage={currentPage} setCurrentPage={setCurrentPage} currentItem={currentItem} setCurrentItem={setCurrentItem} showToast={showToast} setShowToast={setShowToast} />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default ConsumablesView;