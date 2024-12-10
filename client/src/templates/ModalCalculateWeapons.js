import { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import ParameterCalculator from './calc/ParameterCalculator';
import CalcModGroupsAll from './calc/view/CalcModGroupsAll';
import CalcCards from './calc/view/CalcCards';
import PickedGroups from './calc/view/PickedGroups';
import CalcMain from './calc/view/CalcMain';
import CalcConsumables from './calc/view/CalcConsumables';
import CalcLegendary from './calc/view/CalcLegendary';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BSRadio from '../helpers/views/BSRadio';
import { WarningPopoverBadge } from '../helpers/WarningPopover';
import ConsumablesBuilder from '../boostStuff/ConsumablesBuilder';
import TemplateTools from './TemplateTools';
import { modGroups, weaponIds } from './TemplateItems';
import CalcWGroupsDropdown from "./calc/view/CalcWGroupsDropdown";
import CalcCurrentItem from "./calc/view/CalcCurrentItem";
import CalcResultItems from "./calc/view/CalcResultItems";
import { getImage } from '../helpers/WTypeDropdown';
import { Divider } from 'antd';
import { Progress } from 'antd';
import AccuracyHelper from '../helpers/AccuracyHelper';
import { getDefaultCards, getDefaultMain, getDefaultStuff, getDefaultLegendary } from './calc/CalcEntities';


let parameterCalculator = null;

let firstShown = false;

let currentWIndex = 0;

let parameters = null;

const calcIterations = 12;

const creatureName = ["Average", "SBQ", "Earle", "UTitan"];

const creatureOptions = {Average: '0', SBQ: '1', Earle: '2', 'U-Titan': '3'};

function getDefaultModGroups() {
    let result = {};
    for (const name of modGroups) {
        if (!PickedGroups.excluded(name)) {
             result[name] = true;
        }
    }
    return result;
}

export default function ModalCalculateWeapons(props) {
    const [count, setCount] = useState({config: {}, current: 0, percent: 0, bestTime: Infinity});
    const [groups, setGroups] = useState(getDefaultModGroups());
    const [calculating, setCalculating] = useState(0); // 0 - start, 1 - calculating, 2 - finished
    const [cards, setCards] = useState(getDefaultCards());
    const [main, setMain] = useState(getDefaultMain());
    const [stuff, setStuff] = useState(getDefaultStuff());
    const [leg, setLeg] = useState(getDefaultLegendary());
    const [frCrit, setFrCrit] = useState(4);
    const [frHead, setFrHead] = useState(100);
    const [completion, setCompletion] = useState({current: 0, size: 0});
    const [creatureId, setCreatureId] = useState('0');
    const [accuracyPref, setAccuracyPref] = useState(AccuracyHelper.BALANCE);
    const [weaponResult, setWeaponResult] = useState([]);
    const [type, setType] = useState("All");
    const [wNameToApply, setWNameToApply] = useState(null);
    const [renderSwitch, setRenderSwitch] = useState(false);
    const canCalculateRef = useRef(false);
    const finishedRef = useRef(false);

    /*
    // Changes on every render, to allow a user smooth interaction and updates
    useEffect(() => {
        if (canCalculateRef.current) {
            calculateParameters();
            setRenderSwitch(!renderSwitch);
        }
    }, [renderSwitch]);
    */

    // We are finished and child asked to be applied.
    useEffect(() => {
        if (finishedRef.current) {
            finishedRef.current = false;
            const result = parameters.get(wNameToApply);
            if (result) {
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
                onHide(null);
            }
        }
    }, [wNameToApply]);

    if (!props.modalCalculates.show) {
        firstShown = false;
        return (<></>);
    }

    if (!firstShown) {
        currentWIndex = 0;
        firstShown = true;
        // The modal just popped up
    }

    function onHide(e) {
        setCount({config: {}, current: 0, percent: 0, bestTime: Infinity});
        setWeaponResult([]);
        setCompletion({current: 0, size: 0});
        setCalculating(0);
        setWNameToApply(null);
        finishedRef.current = false;
        currentWIndex = 0;
        props.setModalCalculates({show: false});
        canCalculateRef.current = false;
        parameterCalculator = null;
        firstShown = false;
        parameters = null;
    }

    function setupParameterCalculator() {
        let wId = null;
        if (props.modalCalculates.show) {
            const wIds = weaponIds[type];
            let idObj = wIds[currentWIndex];
            while(idObj) {
                currentWIndex++;
                if (idObj.apply) {
                    wId = idObj.id;
                    break;
                }
                idObj = wIds[currentWIndex];
            }
            if (wId) {
                const gNames = [];
                for (const name in groups) {
                    if (groups[name]) {
                        gNames.push(name);
                    }
                }
                parameterCalculator = new ParameterCalculator(wId, gNames, cards, frCrit, frHead, main, stuff, leg, accuracyPref);
                parameterCalculator.prepareAndCalcFirst(creatureName[parseInt(creatureId)]);
            }
        }
        if (!wId) {
            parameterCalculator = null;
            currentWIndex = 0;
        }
        return (wId !== null);
    }

    function startCalculation(e) {
        const wIds = weaponIds[type];
        let size = 0;
        for (let i = 0; i < wIds.length; i++) {
            if (wIds[i].apply) {
                size += 1;
            }
        }
        parameters = new Map();
        setCompletion({current: 0, size: size});
        setupParameterCalculator();
        setCalculating(1);
        finishedRef.current = false;
        setCount({config: parameterCalculator.getCurrentConfig(), current: parameterCalculator.getCount(), percent: parameterCalculator.getCompletionPercent(), bestTime: parameterCalculator.getBestTime()});
        setRenderSwitch(!renderSwitch);
        canCalculateRef.current = true;
    }

    if (calculating === 1 && canCalculateRef.current && parameterCalculator) {
        canCalculateRef.current = false;
        setTimeout(() => {
            calculateParameters();
        });
    }

    function calculateParameters() {
        if (calculating === 1 && parameterCalculator) {
            if (!parameterCalculator.calculateCombinations(calcIterations)) {
                const template = parameterCalculator.getTemplate();
                const wName = template.name;
                const iconName = TemplateTools.getImage(template);
                parameters.set(wName, parameterCalculator.getBestParameters());
                weaponResult.push({config: parameterCalculator.getBestConfig(), wName: wName, iconName: iconName, bestTime: parameterCalculator.getBestTime(), bestTimeCount: parameterCalculator.getBestTime(false)});
                setWeaponResult([...weaponResult]);
                setCompletion({current: completion.current + 1, size: completion.size});
                if (!setupParameterCalculator()) {
                    finishedRef.current = true;
                    setCalculating(2);
                    return;
                }
            }
            canCalculateRef.current = true;
            setCount({config: parameterCalculator.getCurrentConfig(), current: parameterCalculator.getCount(), percent: parameterCalculator.getCompletionPercent(), bestTime: parameterCalculator.getBestTime()});
        }
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
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </>
            );

        }
    }

    function getProgressNumber(percent) {
        return (
            <strong className="text-shadow-blue"><small>{percent}%</small></strong>
        );
    }

    function getCurrentItem() {
        if (parameterCalculator) {
            const template = parameterCalculator.getTemplate();
            const iconName = TemplateTools.getImage(template);
            const wName = template.name;
            const perksUsed = cards["Main Boosts"] || cards["Temp Boosts"];
            let consUsed = false;
            for (const name in stuff) {
                const item = stuff[name];
                if (item) {
                    consUsed = true;
                    break;
                }
            }
            return (<CalcCurrentItem perksUsed={perksUsed} consUsed={consUsed} iconName={iconName} count={count} wName={wName}></CalcCurrentItem>);
        }
    }

    function getProgress(calculating) {
        if (calculating === 0) {
            return (<></>);
        }
        const percent = parseInt(100 * completion.current / completion.size);
        const header = (calculating === 2) ? "Tap To Apply" : "";
        return (
            <>
                <div className="d-flex justify-content-center mb-1">
                    <Progress
                        size={40}
                        type="dashboard"
                        steps={50}
                        percent={percent}
                        format={(percent) => getProgressNumber(percent)}
                        strokeColor="rgb(0, 255, 136)"
                        trailColor="rgba(0, 0, 0, 0.1)"
                        strokeWidth={17} />
                </div>
                {getCurrentItem()}
                <Divider className="mt-3 mb-3 text-shadow-blue2"><b>{header}</b></Divider>
                <CalcResultItems calcItems={weaponResult} finishedRef={finishedRef} setWNameToApply={setWNameToApply}></CalcResultItems>
            </>
        );
    }

    function getSettings(calculating) {
        if (calculating === 0) {
            return (
                <>
                    <CalcWGroupsDropdown type={type} setType={setType}></CalcWGroupsDropdown>
                    <BSRadio className="d-flex justify-content-center" pairs={creatureOptions} selectedValue={creatureId} setSelectedValue={setCreatureId} />
                    <Divider className="mt-4 mb-2">
                        Accuracy
                        <WarningPopoverBadge className="ms-3" message={AccuracyHelper.ACCURACY_INFO} header={"Accuracy"} placement={'bottom'} />
                    </Divider>
                    <BSRadio className="d-flex justify-content-center m-1" pairs={AccuracyHelper.ACC_PREFERENCE} selectedValue={accuracyPref} setSelectedValue={setAccuracyPref} parseValueInt={true} />
                    <CalcMain main={main} setMain={setMain} frHead={frHead} setFrHead={setFrHead}></CalcMain>
                    <CalcModGroupsAll groups={groups} setGroups={setGroups}></CalcModGroupsAll>
                    <CalcCards cards={cards} setCards={setCards} frCrit={frCrit} setFrCrit={setFrCrit}></CalcCards>
                    <CalcLegendary leg={leg} setLeg={setLeg} show={true}></CalcLegendary>
                    <CalcConsumables stuff={stuff} setStuff={setStuff}></CalcConsumables>
                </>
            );
        }
        return (<></>);
    }
    const header = (calculating === 0) ? "Best Of The Best" : type;
    const wIcon = (calculating === 0) ? "" : getImage(type);
    return (
        <Modal
            show = {props.modalCalculates.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header className="d-flex justify-content-center p-1">
                <Row className="p-1" style={{width: '100%'}}>
                    <Col className="d-flex justify-content-start ps-2 p-0" xs={2}>
                        {wIcon}
                    </Col>
                    <Col xs={8} className="d-flex justify-content-center">
                        <div className="p-auto m-auto text-shadow-indigo" style={{fontSize: '1.1rem', letterSpacing: '1px', fontWeight: 'bold'}}>{header}</div>
                    </Col>
                    <Col xs={2} className="d-flex justify-content-end m-auto pe-1">
                        <WarningPopoverBadge message={ParameterCalculator.info} header={"Description"} placement={'left'} />
                    </Col>
                </Row>
            </Modal.Header>
            <Modal.Body className="modal-scroll pt-2 p-3">
                {getProgress(calculating)}
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