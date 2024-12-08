import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { truncateLongWords } from '../helpers/Input';
import ParameterCalculator from './calc/ParameterCalculator';
import CalcModGroups from './calc/view/CalcModGroups';
import CalcCards from './calc/view/CalcCards';
import PickedGroups from './calc/view/PickedGroups';
import CalcMain from './calc/view/CalcMain';
import CalcConsumables from './calc/view/CalcConsumables';
import CalcLegendary from './calc/view/CalcLegendary';
import SortRadios from '../snapshot/SortRadios';
import WeaponEmblem from './WeaponEmblem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WarningPopoverBadge } from '../helpers/WarningPopover';
import TemplateTools from './TemplateTools';
import { keyValueTag } from '../helpers/RowBuilder';
import ConsumablesBuilder from '../boostStuff/ConsumablesBuilder';
import LegendaryCalcRowView from './calc/view/LegendaryCalcRowView';
import ModsCalcRowView from './calc/view/ModsCalcRowView';
import EmblemCalcRowView from './calc/view/EmblemCalcRowView';
import AccuracyHelper from '../helpers/AccuracyHelper';
import AntRadio from '../helpers/views/AntRadio';
import { Divider } from 'antd';
import getPerkImage from '../boost/PerkImageProvider';
import { getDefaultCards, getDefaultMain, getDefaultStuff, getDefaultLegendary } from './calc/CalcEntities';


let parameterCalculator = null;

let firstShown = false;

const creatureName = ["Average", "SBQ", "Earle", "UTitan"];

export default function ModalCalculateWeapon(props) {
    // console.log("ModalCalculateWeapon");
    const [count, setCount] = useState({config: {}, current: 0, percent: 0, bestTime: Infinity});
    const [calculating, setCalculating] = useState(0); // 0 - start, 1 - calculating, 2 - finished
    const [cards, setCards] = useState(getDefaultCards());
    const [main, setMain] = useState(getDefaultMain());
    const [stuff, setStuff] = useState(getDefaultStuff());
    const [leg, setLeg] = useState(getDefaultLegendary());
    const [frCrit, setFrCrit] = useState(4);
    const [frHead, setFrHead] = useState(100);
    const [cId, setCId] = useState(0);
    const [accuracyPref, setAccuracyPref] = useState(AccuracyHelper.BALANCE);

    if (!props.modalCalculate.show) {
        firstShown = false;
        return (<></>);
    }

    if (!firstShown) {
        firstShown = true;
        PickedGroups.init(props.modalCalculate.template);
    }

    let name = "";
    if (props.modalCalculate.template) {
        name = props.modalCalculate.template.name;
    }
    name = truncateLongWords(name, 25);

    function onHide(e) {
        setCount({config: {}, current: 0, percent: 0, bestTime: Infinity});
        setCalculating(0);
        props.setModalCalculate({template: null, show: false});
        parameterCalculator = null;
        firstShown = false;
    }

    function applyTemplate(e) {
        if (parameterCalculator) {
            const result = parameterCalculator.getBestParameters();
            const parameters = result.Parameters;
            props.setWSpec(parameters.wSpec);
            props.setBoostDamage(parameters.boostDamage);
            props.setPlayer(parameters.player);
            props.setPlayerStats(parameters.playerStats);
            props.setAdditionalDamages(parameters.additionalDamages);
            props.setExtraDamage(parameters.extraDamage);

            // Have to recalculate it for best result to set appropriate selection to items.
            const [foodPref, stuffBoost] = ConsumablesBuilder.buildFromList(parameters.consumableList, parameters.player);
            props.setFoodPref(foodPref);
            props.setStuffBoost(stuffBoost);
        }
        onHide(e);
    }

    function startCalculation(e) {
        parameterCalculator = new ParameterCalculator(props.modalCalculate.template.id, PickedGroups.get(), cards, frCrit, frHead, main, stuff, leg, accuracyPref);
        parameterCalculator.prepareAndCalcFirst(creatureName[cId]);
        setCount({config: parameterCalculator.getCurrentConfig(), current: parameterCalculator.getCount(), percent: parameterCalculator.getCompletionPercent(), bestTime: parameterCalculator.getBestTime()});
        setCalculating(1);
    }

    if (calculating === 1) {
        setTimeout(() => {
                if (parameterCalculator) {
                    const calculated = parameterCalculator.calculateCombinations(4);
                    if (!calculated) {
                        setCalculating(2);
                        setCount({config: parameterCalculator.getBestConfig(), current: parameterCalculator.getCount(), percent: parameterCalculator.getCompletionPercent(), bestTime: parameterCalculator.getBestTime()});
                    } else {
                        setCount({config: parameterCalculator.getCurrentConfig(), current: parameterCalculator.getCount(), percent: parameterCalculator.getCompletionPercent(), bestTime: parameterCalculator.getBestTime()});
                    }
                }
            }
        );
    }

    function getButtons(calculating) {
        if (calculating === 0) {
            return (
                <>
                    <Button className="w-100 me-1" onClick={startCalculation}>Start</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </>
            );
        } else if (calculating === 1) {
            return (
                <Button className="w-100 me-1" onClick={onHide}>Stop And Close</Button>
            );
        } else {
            return (
                <>
                    <Button className="w-100 me-1" onClick={applyTemplate}>Apply</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </>
            );

        }
    }

    function getCounter(calculating) {
        if (calculating === 0) {
            return (<></>);
        }
        const leftValue = count.current + " - " + count.percent + "%";
        const rightValue = count.bestTime;
        const wrapText = (calculating === 2);
        return (
            <>
                <div className="mb-2 d-flex justify-content-center">
                    {keyValueTag(leftValue,  rightValue, 'volcano', {width: '100%', height: '1.34rem', fontSize: '1rem'}, false)}
                </div>
                <LegendaryCalcRowView legendary={count.config.legendary} width='50%' fontSize='65%' starSize='50%' />
                <ModsCalcRowView minHeight='2.9rem' mods={count.config.mods} fontSize='65%' wrapText={wrapText} />
                <EmblemCalcRowView imNames={count.config.perks} imageProvider={getPerkImage} iconSize='2.0rem' imageSize='1.864rem' borderRadius='5px' />
                <EmblemCalcRowView imNames={count.config.consumables} imageProvider={ConsumablesBuilder.getImagePathById} iconSize='2.0rem' imageSize='1.864rem' />
            </>
        );
    }

    function getSettings(calculating) {
        if (calculating === 0) {
            let show = !TemplateTools.hasDefaultLegendary(props.modalCalculate.template);
            return (
                <>
                    <div className="d-flex justify-content-center"><SortRadios algIndex={cId} setSortId={setCId} /></div>
                    <Divider className="mt-4 mb-2">
                        Accuracy
                        <WarningPopoverBadge className="ms-3" message={AccuracyHelper.ACCURACY_INFO} header={"Accuracy"} placement={'bottom'} />
                    </Divider>
                    <AntRadio className="d-flex justify-content-center m-1" pairs={AccuracyHelper.ACC_PREFERENCE} value={accuracyPref} setValue={setAccuracyPref} />
                    <CalcMain main={main} setMain={setMain} frHead={frHead} setFrHead={setFrHead}></CalcMain>
                    <CalcModGroups template={props.modalCalculate.template}></CalcModGroups>
                    <CalcCards cards={cards} setCards={setCards} frCrit={frCrit} setFrCrit={setFrCrit}></CalcCards>
                    <CalcLegendary leg={leg} setLeg={setLeg} show={show}></CalcLegendary>
                    <CalcConsumables stuff={stuff} setStuff={setStuff}></CalcConsumables>
                </>
            );
        }
        return (<></>);
    }

    function nameView() {
        if (calculating !== 0) {
            return (<></>);
        }
        return (
            <div className="d-flex justify-content-center mb-3">
                <strong><small>Calculate Best Options</small></strong>
            </div>
        );
    }

    return (
        <Modal
            show = {props.modalCalculate.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header className="d-flex justify-content-center p-1">
                <Row className="p-1" style={{width: '100%'}}>
                    <Col className="d-flex justify-content-start p-0" xs={2}>
                        <WeaponEmblem template={props.modalCalculate.template} iconSize='2.5rem' />
                    </Col>
                    <Col xs={8} className="d-flex justify-content-center">
                        <div className="p-auto m-auto" style={{fontSize: '1rem', fontWeight: 'bold'}}>{name}</div>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end m-auto pe-1">
                        <WarningPopoverBadge message={ParameterCalculator.info} header={"Description"} placement={'left'} />
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body className="modal-scroll">
                {nameView()}
                {getCounter(calculating)}
                {getSettings(calculating)}
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    {getButtons(calculating)}
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}