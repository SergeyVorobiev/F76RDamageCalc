import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import { memo, useState } from 'react';
import ConsumableItems from './ConsumableItems';
import ConsumableToast from './ConsumableToast';
import ConsumableFilter from './ConsumableFilter';
import FilterDisplay from './FilterDisplay';
import StaticPopoverRenderer from '../../viewComponents/popover/StaticPopoverRenderer';
import Global from '../../helpers/Global';
import Button from 'react-bootstrap/Button';


const questionPopoverHeader = (<b>Consumables</b>);

const questionPopoverBody = (
    <>
        <div><b>Items with next properties are not included:</b></div>
        <div>⁃<i> No name</i></div>
        <div>⁃<i> Templates</i></div>
        <div>⁃<i> Events</i></div>
        <div>⁃<i> CUT</i></div>
        <div>⁃<i> DEPRECATED</i></div>
        <div>⁃<i> test</i></div>
        <div className="mb-2">⁃<i> Babylon</i></div>
        <div className="mb-2"><b>Parsed from:</b></div>
        <div><i>{Global.consumablesParseVersion}</i></div>
        <div><i>{Global.consumablesParseVersionName}</i></div>
    </>
);

const questionPopover = new StaticPopoverRenderer(questionPopoverHeader, questionPopoverBody, 'ConsumablesViewQuestionPopoverPlace');

const ConsumablesView = memo(function ConsumablesView() {
    console.log("ConsumablesView");
    const [currentItem, setCurrentItem] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [filterType, setFilterType] = useState('All');
    const [filterName, setFilterName] = useState('');
    const [filterEffect, setFilterEffect] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="7">
                <Accordion.Header>
                    <div id="ConsumablesViewQuestionPopoverPlace"></div>
                    <InputGroup>
                        <InputGroup.Text style={{width: '12rem'}}>
                            <span className="ac-text">Consumables</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '2rem'}} onClick={onQClick}>?</Button>
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