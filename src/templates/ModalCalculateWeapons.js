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
import TemplateTools from './TemplateTools';
import { modGroups, weaponIds } from './WeaponTemplates';
import CalcWGroupsDropdown from "./calc/view/CalcWGroupsDropdown";
import CalcCurrentItem from "./calc/view/CalcCurrentItem";
import CalcResultItems from "./calc/view/CalcResultItems";
import ParametersApplier from './calc/ParametersApplier';
import { getImage } from '../helpers/WTypeDropdown';
import { Divider } from 'antd';
import { Progress } from 'antd';
import AccuracyHelper from '../helpers/AccuracyHelper';
import { getMainPerks, getTempPerks, getLegPerks, getDefaultCards, getDefaultMain, getDefaultStuff, getDefaultLegendary, getUsableChemo, getUsableDrink, getUsableFood, getUsableMagazines, getUsableSerums, getUsableBobbleHeads} from './calc/CalcEntities';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import LegsId from '../helpers/LegsId';


let parameterCalculator = null;

let firstShown = false;

let currentWIndex = 0;

let parameters = null;

const calcIterations = 4;

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
    const [leg1, setLeg1] = useState(LegsId.getLeg1());
    const [leg2, setLeg2] = useState(LegsId.getLeg2());
    const [leg3, setLeg3] = useState(LegsId.getLeg3());

    const [chemo, setChemo] = useState(getUsableChemo());
    const [food, setFood] = useState(getUsableFood());
    const [drink, setDrink] = useState(getUsableDrink());
    const [magazines, setMagazines] = useState(getUsableMagazines());
    const [bobbleHeads, setBobbleHeads] = useState(getUsableBobbleHeads());
    const [serums, setSerums] = useState(getUsableSerums());

    const [mainPerks, setMainPerks] = useState(getMainPerks());
    const [tempPerks, setTempPerks] = useState(getTempPerks());
    const [legPerks, setLegPerks] = useState(getLegPerks());

    const [frCrit, setFrCrit] = useState(4);
    const [frHead, setFrHead] = useState(100);
    const [completion, setCompletion] = useState({current: 0, size: 0});
    const [selectedCreature, setSelectedCreature] = useState('average');
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
                setCalculating(3);
                setTimeout(() => {
                    const parameters = result.Parameters;
                    ParametersApplier.applyCalculatedParameters(parameters, props);
                    onHide(null);
                }, 100);
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
                parameterCalculator = new ParameterCalculator(props.creatureNamesRef.current, wId, gNames, cards, frCrit,
                                        frHead, main, stuff, leg, {leg1: leg1, leg2: leg2, leg3: leg3},
                                        {chemo: chemo, food: food, drink: drink, magazines: magazines, serums: serums, bobbleHeads: bobbleHeads},
                                        {main: mainPerks, temp: tempPerks, leg: legPerks},
                                        accuracyPref);
                parameterCalculator.prepareAndCalcFirst(selectedCreature);
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
        } else if (calculating === 2) {
            return (
                <>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </>
            );
        } else {
            return (<></>);
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

    function getCreatureNames() {
        const result = ["average"];
        for (const fieldName in props.creatureNamesRef.current) {
            const data = props.creatureNamesRef.current[fieldName];
            result.push(data[0]);
        }
        return result;
    }

    function getSettings(calculating) {
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
        if (calculating === 0) {
            return (
                <>
                    <CalcWGroupsDropdown type={type} setType={setType}></CalcWGroupsDropdown>
                    <div className="d-flex justify-content-center">
                        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onSelectCreatureName} names={creatureNames} title={<strong>{selectedCreatureName}</strong>} />
                    </div>
                    <Divider className="mt-3 mb-2">
                        Accuracy
                        <WarningPopoverBadge className="ms-3" sign="?" message={AccuracyHelper.ACCURACY_INFO} header={"Accuracy"} placement={'bottom'} />
                    </Divider>
                    <BSRadio className="d-flex justify-content-center m-1" pairs={AccuracyHelper.ACC_PREFERENCE} selectedValue={accuracyPref} setSelectedValue={setAccuracyPref} parseValueInt={true} />
                    <CalcMain main={main} setMain={setMain} frHead={frHead} setFrHead={setFrHead}></CalcMain>
                    <CalcModGroupsAll groups={groups} setGroups={setGroups}></CalcModGroupsAll>
                    <CalcCards mainPerks={mainPerks} setMainPerks={setMainPerks} tempPerks={tempPerks} setTempPerks={setTempPerks} legPerks={legPerks} setLegPerks={setLegPerks} cards={cards} setCards={setCards} frCrit={frCrit} setFrCrit={setFrCrit}></CalcCards>
                    <CalcLegendary leg={leg} setLeg={setLeg} show={true} leg1={leg1} setLeg1={setLeg1} leg2={leg2} setLeg2={setLeg2} leg3={leg3} setLeg3={setLeg3}></CalcLegendary>
                    <CalcConsumables stuff={stuff} setStuff={setStuff} food={food} drink={drink} chemo={chemo} setFood={setFood} setDrink={setDrink} setChemo={setChemo} magazines={magazines} setMagazines={setMagazines} bobbleHeads={bobbleHeads} setBobbleHeads={setBobbleHeads} serums={serums} setSerums={setSerums}></CalcConsumables>
                </>
            );
        }
        return (<></>);
    }
    const header = (calculating === 0) ? "Best Of The Best" : type;
    const wIcon = (calculating === 0) ? "" : getImage(type);
    function getModalView() {
        if (calculating === 3) {
            return (
                <Modal.Body className="modal-scroll-80-60">
                    <b>Loading...</b>
                </Modal.Body>
            );
        }
        return (
            <>
                <Modal.Header className="d-flex justify-content-center p-1">
                    <Row className="p-1" style={{width: '100%'}}>
                        <Col className="d-flex justify-content-start ps-2 p-0" xs={2}>
                            {wIcon}
                        </Col>
                        <Col xs={8} className="d-flex justify-content-center">
                            <div className="p-auto m-auto text-shadow-indigo" style={{fontSize: '1.1rem', letterSpacing: '1px', fontWeight: 'bold'}}>{header}</div>
                        </Col>
                        <Col xs={2} className="d-flex justify-content-end m-auto pe-1">
                            <WarningPopoverBadge message={ParameterCalculator.info} sign="?" header={"Description"} placement={'left'} />
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body className="modal-scroll-80-60 pt-2 p-3">
                    {getProgress(calculating)}
                    {getSettings(calculating)}
                </Modal.Body>
                <Modal.Footer className="p-2">
                    <InputGroup className="mb-0 mt-0 flex-nowrap">
                        {getButtons(calculating)}
                    </InputGroup>
                </Modal.Footer>
            </>
        );
    }
    return (
        <Modal
            show = {props.modalCalculates.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            {getModalView()}
        </Modal>
    );
}