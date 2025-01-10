import { useState, useRef } from 'react';
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
import BSRadio from '../helpers/views/BSRadio';
import WeaponEmblem from './WeaponEmblem';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { WarningPopoverBadge } from '../helpers/WarningPopover';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';
import TemplateTools from './TemplateTools';
import { keyValueTag } from '../helpers/RowBuilder';
import ConsumablesBuilder from '../boostStuff/ConsumablesBuilder';
import LegendaryCalcRowView from './calc/view/LegendaryCalcRowView';
import ModsCalcRowView from './calc/view/ModsCalcRowView';
import ParametersApplier from './calc/ParametersApplier';
import EmblemCalcRowView from './calc/view/EmblemCalcRowView';
import AccuracyHelper from '../helpers/AccuracyHelper';
import { Divider } from 'antd';
import getPerkImage from '../boost/PerkImageProvider';
import { getDefaultCards, getDefaultMain, getDefaultStuff, getDefaultLegendary } from './calc/CalcEntities';


let parameterCalculator = null;

let firstShown = false;

export default function ModalCalculateWeapon(props) {
    // console.log("ModalCalculateWeapon");
    const minHeight = useRef(null);
    const [count, setCount] = useState({config: {}, current: 0, percent: 0, bestTime: Infinity});
    const [calculating, setCalculating] = useState(0); // 0 - start, 1 - calculating, 2 - finished
    const [cards, setCards] = useState(getDefaultCards());
    const [main, setMain] = useState(getDefaultMain());
    const [stuff, setStuff] = useState(getDefaultStuff());
    const [leg, setLeg] = useState(getDefaultLegendary());
    const [frCrit, setFrCrit] = useState(4);
    const [frHead, setFrHead] = useState(100);
    const [selectedCreature, setSelectedCreature] = useState('average');
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
            const parameters = parameterCalculator.getBestParameters().Parameters;
            ParametersApplier.applyCalculatedParameters(parameters, props);
        }
        onHide(e);
    }

    function startCalculation(e) {
        parameterCalculator = new ParameterCalculator(props.creatureNamesRef.current, props.modalCalculate.template.id, PickedGroups.get(), cards, frCrit, frHead, main, stuff, leg, accuracyPref);
        parameterCalculator.prepareAndCalcFirst(selectedCreature);
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
        const currentElement = document.getElementById("modal-calc-item");
        if (currentElement) {
            const curHeight = currentElement.offsetHeight;
            if (!minHeight.current || minHeight.current < curHeight) {
                minHeight.current = curHeight;
            }
        }
        return (
            <div style={{minHeight: minHeight.current}} id="modal-calc-item">
                <div className="mb-2 d-flex justify-content-center">
                    {keyValueTag(leftValue,  rightValue, 'volcano', {width: '100%', height: '1.34rem', fontSize: '1rem'}, false)}
                </div>
                <LegendaryCalcRowView legendary={count.config.legendary} width='50%' fontSize='65%' starSize='50%' />
                <ModsCalcRowView minHeight='2.9rem' mods={count.config.mods} fontSize='65%' wrapText={wrapText} />
                <EmblemCalcRowView imNames={count.config.perks} imageProvider={getPerkImage} iconSize='2.0rem' imageSize='1.864rem' borderRadius='5px' />
                <EmblemCalcRowView imNames={count.config.consumables} imageProvider={ConsumablesBuilder.getImagePathById} iconSize='2.0rem' imageSize='1.864rem' />
            </div>
        );
    }

    function getCreatureNames() {
        const result = ["average"];
        for (const fieldName in props.creatureNamesRef.current) {
            const data = props.creatureNamesRef.current[fieldName];
            result.push(data[0]);
        }
        return result;
    }

    function onSelectCreatureName(e) {
        setSelectedCreature(e);
    }

    const creatureNames = getCreatureNames();
    let selectedCreatureName;
    if (creatureNames.includes(selectedCreature)) {
        selectedCreatureName = CreatureDataProvider.capitalizeCreatureName(selectedCreature);
    } else {
        selectedCreatureName = "Average";
        setSelectedCreature("average");
    }

    function getSettings(calculating) {
        if (calculating === 0) {
            let show = !TemplateTools.hasDefaultLegendary(props.modalCalculate.template);
            return (
                <>
                    <div className="d-flex justify-content-center">
                        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onSelectCreatureName} names={creatureNames} title={<strong>{selectedCreatureName}</strong>} />
                    </div>
                    <Divider className="mt-3 mb-2">
                        Accuracy
                        <WarningPopoverBadge className="ms-3" sign="?" message={AccuracyHelper.ACCURACY_INFO} header={"Accuracy"} placement={'bottom'} />
                    </Divider>
                    <BSRadio className="d-flex justify-content-center m-1" pairs={AccuracyHelper.ACC_PREFERENCE} selectedValue={accuracyPref} setSelectedValue={setAccuracyPref} parseValueInt={true} />
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
                        <WarningPopoverBadge message={ParameterCalculator.info} sign="?" header={"Description"} placement={'left'} />
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body className="modal-scroll-80-60">
                {nameView()}
                {getCounter(calculating)}
                {getSettings(calculating)}
            </Modal.Body>
            <Modal.Footer className="p-2">
                <InputGroup className="mb-0 mt-0 flex-nowrap">
                    {getButtons(calculating)}
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}