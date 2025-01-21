import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bsButtons.css';
import './css/buttons.css';
import './css/bsCheck.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { WarningPopoverBadge } from './helpers/WarningPopover';
import AdditionalDamage from "./main/AdditionalDamage";
import MainCardsDisplay from "./main/MainCardsDisplay";
import ToastSpecs from "./main/ToastSpecs";
import CreaturesView from "./creature/CreaturesView";
import WeaponFactory from './damage/weapon/WeaponFactory';
import { calcDamage, graphDamage } from "./helpers/Calc";
import Accordion from 'react-bootstrap/Accordion';
import { defaultExtraDamage } from './entities/EResultDamage';
import { defaultCreatures, buildCreatureNames } from './entities/ECreatures';
import { defaultBoosts } from './entities/EBoosts';
import { defaultPlayerStats } from './entities/EPlayerStats';
import { defaultPlayer } from './entities/EPlayer';
import { defaultAdds } from './entities/EAddDamages';
import { defaultWeaponSpecs } from './entities/EWeaponSpecs';
import F76NavBar from './main/F76NavBar';
import WeaponSpecs from './main/WeaponSpecs';
import DamageBoosts from './main/DamageBoosts';
import Snapshots from './main/Snapshots';
import BoostStuff from './main/BoostStuff';
import WeaponTemplates from './templates/WeaponTemplates';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ConsumablesBuilder from './boostStuff/ConsumablesBuilder';
import RaceView from './race/view/RaceView';
import ConsumablesView from './consumables/view/ConsumablesView';
import SSLink from './main/SSLink';
import LCLink from './main/LCLink';
import FILink from './main/FILink';


const defPlayerStats = defaultPlayerStats();

const defPlayer = defaultPlayer();

// const version1 = "Patch 1.7.16.13 - Update 56";
// const version2 = "Gleaming Depths - December 3, 2024";

const version1 = "Patch 1.7.14.15 - Update 54";
const version2 = "Milepost Zero - September 3, 2024";
const versionMessage = "Version of game from which weapon / legendary / mod data were parsed."

function getDefaultGraphData() {
    let xValues = [];
    let yValues = [];
    for (let i = 0; i <= 50; i++) {
        xValues.push(20.0 * i);
        yValues.push(0);
    }
    return {
        xValues: xValues,
        yValues: yValues,
    }
}

export default function MyApp() {

    const [key, setKey] = useState('Main');

    const [loadedScreen, setLoadedScreen] = useState(false);

    const [wSpec, setWSpec] = useState(defaultWeaponSpecs());

    const [showStat, setShowStat] = useState(false);

    const [graphValues, setGraphValues] = useState(getDefaultGraphData());

    const [creatures, setCreatures] = useState(defaultCreatures());

    const [boostDamage, setBoostDamage] = useState(defaultBoosts());

    const [resultDamage, setResultDamage] = useState({});

    const [extraDamage, setExtraDamage] = useState(defaultExtraDamage());

    const [additionalDamages, setAdditionalDamages] = useState(defaultAdds());

    const [stuffBoost, setStuffBoost] = useState(ConsumablesBuilder.getEmptyConsumableBoosts());

    const [player, setPlayer] = useState(defPlayer);

    const [playerStats, setPlayerStats] = useState(defPlayerStats);

    const [magazines, setMagazines] = useState(ConsumablesBuilder.getMagazines());

    const [bobbleHeads, setBobbleHeads] = useState(ConsumablesBuilder.getBobbleHeads());

    const [food, setFood] = useState(ConsumablesBuilder.getFood());

    const [drink, setDrink] = useState(ConsumablesBuilder.getDrink());

    const [psycho, setPsycho] = useState(ConsumablesBuilder.getPsycho());

    const [serum, setSerum] = useState(ConsumablesBuilder.getSerum());

    const [others, setOthers] = useState(ConsumablesBuilder.getOthers());

    const [foodPref, setFoodPref] = useState({carnivore: false, herbivore: false});

    const [consumableTouched, setConsumableTouched] = useState([]);

    // Refs
    const creatureNamesRef = useRef(buildCreatureNames(creatures));

    const applySnapshotRef = useRef(null);

    const wSpecRef = useRef(null);

    const resultDamageRef = useRef(null);

    const playerRef = useRef(null);

    const playerStatsRef = useRef(null);

    const stuffBoostRef = useRef(null);

    const boostDamageRef = useRef(null);

    const extraDamageRef = useRef(null);

    const additionalDamagesRef = useRef(null);

    const creaturesRef = useRef(null);

    const showStatRef = useRef(null);

    useEffect(() => {
            const weaponFactory = new WeaponFactory(wSpec, boostDamage, extraDamage, additionalDamages, stuffBoost, playerStats);
            setGraphValues(graphDamage(graphValues.xValues, 0, creatures.creature1.headShot, weaponFactory));
            setResultDamage(calcDamage(weaponFactory, creatures));
            setLoadedScreen(true);
    }, [boostDamage, wSpec, extraDamage, creatures, additionalDamages, stuffBoost, consumableTouched, player, playerStats, graphValues.xValues]);

    const applySnapshot = (cBoostDamage, cWSpec, cExtraDamage, cAdditionalDamages, cCreatures, cPlayer, cPlayerStats, cStuff) => {
        setPlayer(cPlayer);
        setPlayerStats(cPlayerStats);
        setBoostDamage(cBoostDamage);
        setWSpec(cWSpec);
        setExtraDamage(cExtraDamage);
        setAdditionalDamages(cAdditionalDamages);
        const [foodPref, allStuffBoosts, consumables] = ConsumablesBuilder.buildFromList(cStuff, cPlayer);
        ConsumablesBuilder.setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers);
        setFoodPref(foodPref);
        setStuffBoost(allStuffBoosts);
        setCreatures({...cCreatures});
    }
    applySnapshotRef.current = applySnapshot;
    wSpecRef.current = wSpec;
    resultDamageRef.current = resultDamage;
    playerRef.current = player;
    playerStatsRef.current = playerStats;
    stuffBoostRef.current = stuffBoost;
    boostDamageRef.current = boostDamage;
    extraDamageRef.current = extraDamage;
    additionalDamagesRef.current = additionalDamages;
    creaturesRef.current = creatures;
    creatureNamesRef.current = buildCreatureNames(creatures);
    showStatRef.current = showStat;
    if (!loadedScreen) {
        return (
            <div>
                <div className="d-flex justify-content-center mt-5">
                    <h1><b>Loading...</b></h1>
                </div>
            </div>
        );
    }
    const b = (
        <div className='m-auto ps-0 pe-0' style={{maxWidth: '80rem'}}>
            <F76NavBar></F76NavBar>
            <MainCardsDisplay creatureNamesRef={creatureNamesRef} wSpecRef={wSpecRef} graphValues={graphValues} resultDamage={resultDamage} creatures={creatures} setCreatures={setCreatures} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></MainCardsDisplay>
            <ToastSpecs creatures={creatures} legendary={wSpec.legendary} iconName={wSpec.iconName} weaponName={wSpec.defaultName} resultDamage={resultDamage} showStat={showStat} setShowStat={setShowStat}></ToastSpecs>
            <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-1 mb-3">
                <Tab eventKey="Main" title={<span className="tab-text">Main</span>}>
                    <Accordion className="accordion">
                        <WeaponSpecs wSpec={wSpec} setWSpec={setWSpec} showStatRef={showStatRef} setShowStat={setShowStat} health={player.health.value}></WeaponSpecs>
                        <DamageBoosts player={player} setPlayer={setPlayer} boostDamage={boostDamage} setBoostDamage={setBoostDamage} showStatRef={showStatRef} setShowStat={setShowStat}></DamageBoosts>
                        <AdditionalDamage additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages} showStatRef={showStatRef} setShowStat={setShowStat}></AdditionalDamage>
                        <CreaturesView creatureNamesRef={creatureNamesRef} creatures={creatures} setCreatures={setCreatures} resultDamage={resultDamage} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></CreaturesView>
                        <RaceView />
                        <ConsumablesView />
                    </Accordion>
                </Tab>
                <Tab eventKey="Templates" title={<span className="tab-text">Weapons</span>}>
                    <WeaponTemplates creatureNamesRef={creatureNamesRef} setWSpec={setWSpec} setBoostDamage={setBoostDamage} setPlayer={setPlayer} setExtraDamage={setExtraDamage} setFoodPref={setFoodPref} setStuffBoost={setStuffBoost} setAdditionalDamages={setAdditionalDamages} setPlayerStats={setPlayerStats} setMagazines={setMagazines} setBobbleHeads={setBobbleHeads} setFood={setFood} setDrink={setDrink} setPsycho={setPsycho} setSerum={setSerum} setOthers={setOthers}></WeaponTemplates>
                </Tab>
                <Tab eventKey="Boosts" title={<span className="tab-text">Boosts</span>}>
                    <BoostStuff foodPref={foodPref} setFoodPref={setFoodPref} magazines={magazines} setMagazines={setMagazines} bobbleHeads={bobbleHeads} setBobbleHeads={setBobbleHeads} food={food} setFood={setFood} drink={drink} setDrink={setDrink} psycho={psycho} setPsycho={setPsycho} serum={serum} setSerum={setSerum} others={others} setOthers={setOthers} player={player} setPlayer={setPlayer} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} showStat={showStat} setShowStat={setShowStat} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats} setConsumableTouched={setConsumableTouched}></BoostStuff>
                </Tab>
                <Tab eventKey="Snapshots" title={<span className="tab-text">Snapshots</span>}>
                     <Snapshots playerRef={playerRef} playerStatsRef={playerStatsRef} stuffBoostRef={stuffBoostRef} boostDamageRef={boostDamageRef} wSpecRef={wSpecRef} extraDamageRef={extraDamageRef} additionalDamagesRef={additionalDamagesRef} creaturesRef={creaturesRef} resultDamageRef={resultDamageRef} applySnapshotRef={applySnapshotRef}></Snapshots>
                </Tab>
            </Tabs>
            <div style={{height: '1.5rem'}}></div>

            <Container className="mb-4">
                <table>
                    <tr>

                        <td className="version-text">
                            <div><i>{version1}</i></div>
                            <div><i>{version2}</i></div>
                        </td>
                        <td>
                            <WarningPopoverBadge className="ms-3" sign="?" message={versionMessage} header={'Game Version'} placement={'top'} />
                        </td>
                    </tr>
                </table>
                <Row className="p-1 mt-3 mb-3">
                    <Col className="p-0 m-0">
                        <FILink />
                    </Col>
                    <Col className="p-0 m-0">
                        <LCLink />
                    </Col>
                    <Col className="p-0 m-0">
                        <SSLink />
                    </Col>
                </Row>
            </Container>
        </div>
    );
    return b;
}