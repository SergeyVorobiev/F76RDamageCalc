import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import { memo, useState } from 'react';
import StaticPopoverRenderer from '../../viewComponents/popover/StaticPopoverRenderer';
import Global from '../../helpers/Global';
import Button from 'react-bootstrap/Button';
import PerkCardItems from './PerkCardItems';
import PerkCardFilter from './PerkCardFilter';
import PerkCardToast from './PerkCardToast';
import FilterDisplay from '../../consumables/view/FilterDisplay';


const questionPopoverHeader = (<b>Perk Cards</b>);

const questionPopoverBody = (
    <>
        <div><b>Items with next properties are not included:</b></div>
        <div>⁃<i> Vault</i></div>
        <div>⁃<i> CUT</i></div>
        <div>⁃<i> zzz_Babylon</i></div>
        <div className="mb-2">⁃<i> zzz_deleted</i></div>
        <div className="mb-2"><b>Parsed from:</b></div>
        <div><i>{Global.perkCardParseVersion}</i></div>
        <div><i>{Global.perkCardParseVersionName}</i></div>
    </>
);

const questionPopover = new StaticPopoverRenderer(questionPopoverHeader, questionPopoverBody, 'PerkCardQuestionPopoverPlace');

const PerkCardView = memo(function PerkCardView() {
    const [currentItem, setCurrentItem] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [filterName, setFilterName] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [filterStatus, setFilterStatus] = useState("All"); // Legendary / Non Legendary
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="7">
                <Accordion.Header>
                    <div id="PerkCardQuestionPopoverPlace"></div>
                    <InputGroup>
                        <InputGroup.Text style={{width: '12rem'}}>
                            <span className="ac-text">Perk Cards</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '2rem'}} onClick={onQClick}>?</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <PerkCardToast item={currentItem} showToast={showToast} setShowToast={setShowToast} />
                    <PerkCardFilter setFilterType={setFilterType} setFilterName={setFilterName} filterType={filterType} setCurrentPage={setCurrentPage} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
                    <FilterDisplay filterType={filterType} filterEffect={filterStatus} />
                    <PerkCardItems filterType={filterType} filterName={filterName} filterStatus={filterStatus} currentPage={currentPage} setCurrentPage={setCurrentPage} currentItem={currentItem} setCurrentItem={setCurrentItem} showToast={showToast} setShowToast={setShowToast} />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default PerkCardView;