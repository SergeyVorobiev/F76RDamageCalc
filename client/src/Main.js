import { useState, useEffect, useRef } from 'react';
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
import { defaultExtraDamage } from './entities/ExtraDamageOptions';
import { defaultCreatures, buildCreatureNames } from './entities/ECreatures';
import { defaultBoosts } from './entities/EBoosts';
import { defaultPlayerStats } from './entities/EPlayerStats';
import { defaultPlayer } from './entities/EPlayer';
import { defaultAdds } from './entities/EAddDamages';
import { defaultWeaponSpecs } from './entities/EWeaponSpecs';
import WeaponSpecs from './main/WeaponSpecs';
import DamageBoosts from './main/DamageBoosts';
import Snapshots from './main/Snapshots';
import BoostStuff from './main/BoostStuff';
import WeaponTemplates from './templates/WeaponTemplates';
import ConsumablesBuilder from './boostStuff/ConsumablesBuilder';
import RaceView from './race/view/RaceView';
import PerkCardView from './perkCard/view/PerkCardView';
import ConsumablesView from './consumables/view/ConsumablesView';
import LoadingLine from './main/LoadingLine';
import Global from './helpers/Global';


const defPlayerStats = defaultPlayerStats();

const defPlayer = defaultPlayer();

function getDefaultGraphData() {
    let xValues = [];
    let yValues = [];
    const maxRes = 1000;
    const coef = maxRes / Global.points;
    for (let i = 0; i <= Global.points; i++) {
        xValues.push(coef * i);
        yValues.push(0);
    }
    return {
        xValues: xValues,
        yValues: yValues,
    }
}

export default function Main() {

    const [key, setKey] = useState('Main');

    const [creatureChartNumber, setCreatureChartNumber] = useState(1);

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
            setGraphValues(graphDamage(creatures["creature" + creatureChartNumber], weaponFactory));
            setResultDamage(calcDamage(weaponFactory, creatures));
            setLoadedScreen(true);
    }, [boostDamage, wSpec, extraDamage, creatures, additionalDamages, stuffBoost, consumableTouched, player, playerStats]);

    useEffect(() => {
        const weaponFactory = new WeaponFactory(wSpec, boostDamage, extraDamage, additionalDamages, stuffBoost, playerStats);
        setGraphValues(graphDamage(creatures["creature" + creatureChartNumber], weaponFactory));
    }, [creatures, creatureChartNumber]);

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
        return (<LoadingLine text="Please Wait..."/>);
    }
    const b = (
        <>
            <MainCardsDisplay creatureNamesRef={creatureNamesRef} wSpecRef={wSpecRef} graphValues={graphValues} resultDamage={resultDamage} creatures={creatures} boostDamageRef={boostDamageRef} setBoostDamage={setBoostDamage} setCreatures={setCreatures} creatureChartNumber={creatureChartNumber} setCreatureChartNumber={setCreatureChartNumber} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></MainCardsDisplay>
            <ToastSpecs creatures={creatures} legendary={wSpec.legendary} iconName={wSpec.iconName} weaponName={wSpec.defaultName} graphValues={graphValues} resultDamage={resultDamage} showStat={showStat} setShowStat={setShowStat} creatureChartNumber={creatureChartNumber} setCreatureChartNumber={setCreatureChartNumber} extraDamage={extraDamage} setExtraDamage={setExtraDamage} boostDamageRef={boostDamageRef} setBoostDamage={setBoostDamage}></ToastSpecs>
            <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-1 mb-3 ms-1 me-1">
                <Tab eventKey="Main" title={<span className="tab-text">Main</span>}>
                    <Accordion className="accordion">
                        <WeaponSpecs wSpec={wSpec} setWSpec={setWSpec} showStatRef={showStatRef} setShowStat={setShowStat} health={player.health.value}></WeaponSpecs>
                        <DamageBoosts player={player} setPlayer={setPlayer} extraDamage={extraDamage} boostDamage={boostDamage} setBoostDamage={setBoostDamage} showStatRef={showStatRef} setShowStat={setShowStat}></DamageBoosts>
                        <AdditionalDamage additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages} showStatRef={showStatRef} setShowStat={setShowStat}></AdditionalDamage>
                        <CreaturesView creatureNamesRef={creatureNamesRef} creatures={creatures} setCreatures={setCreatures} resultDamage={resultDamage} extraDamage={extraDamage} setExtraDamage={setExtraDamage} boostDamageRef={boostDamageRef} setBoostDamage={setBoostDamage}></CreaturesView>
                        <RaceView />
                        <ConsumablesView />
                        <PerkCardView />
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

            <div className="pb-1 ps-2 pe-2 pt-3 mt-1 ms-1 me-1" style={{backgroundColor: "#f8f2f2", borderRadius: "10px 10px 0px 0px", outline: '1px solid #bdb499'}}>
                <table>
                    <tr>
                        <td className="version-text">
                            <div><i>{Global.version1}</i></div>
                            <div><i>{Global.version2}</i></div>
                        </td>
                        <td>
                            <WarningPopoverBadge className="ms-3" sign="?" message={Global.versionMessage} header={'Game Version'} placement={'top'} />
                        </td>
                    </tr>
                </table>
                <div className="w-100 mt-1 d-flex justify-content-end">
                    <div className="version-text-2">{Global.webVersion}</div>
                </div>
            </div>
        </>
    );
    return b;
}