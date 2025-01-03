import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/bsButtons.css';
import './css/bsCheck.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdditionalDamage from "./main/AdditionalDamage";
import ATotalDamage from "./main/ATotalDamage";
import ToastSpecs from "./main/ToastSpecs";
import CreatureView from "./main/CreatureView";
import WeaponFactory from './damage/weapon/WeaponFactory';
import { calcDamage, graphDamage } from "./helpers/Calc";
import Accordion from 'react-bootstrap/Accordion';
import { defaultExtraDamage } from './entities/EResultDamage';
import { defaultCreatures } from './entities/ECreatures';
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
    useEffect(() => {
        setTimeout(() => {
                const weaponFactory = new WeaponFactory(wSpec, boostDamage, extraDamage, additionalDamages, stuffBoost, playerStats);
                setGraphValues(graphDamage(graphValues.xValues, creatures.creature.damageReduction, creatures.creature.headShot, weaponFactory));
                setResultDamage(calcDamage(weaponFactory, creatures));
            }, 0
        );

    }, [boostDamage, wSpec, extraDamage, creatures, additionalDamages, stuffBoost, consumableTouched, player, playerStats, graphValues.xValues]);

    // Build new address every pass so it forces to re-render ModalApplyItem dialog for no reason,
    // but we can omit this cause it is not affected on render time to much.
    const applySnapshot = (cBoostDamage, cWSpec, cExtraDamage, cAdditionalDamages, cCreatures, cPlayer, cPlayerStats, cStuff) => {
        setPlayer(cPlayer);
        setPlayerStats(cPlayerStats);
        setBoostDamage(cBoostDamage);
        setWSpec(cWSpec);
        setExtraDamage(cExtraDamage);
        setAdditionalDamages(cAdditionalDamages);
        creatures.creature.damageToCreature = cCreatures.creature.damageToCreature;
        creatures.creature.headShot = cCreatures.creature.headShot;
        creatures.creature.damageReduction = cCreatures.creature.damageReduction;
        creatures.sbq.damageToCreature = cCreatures.sbq.damageToCreature;
        creatures.earle.damageToCreature = cCreatures.earle.damageToCreature;
        creatures.titan.damageToCreature = cCreatures.titan.damageToCreature;
        const [foodPref, allStuffBoosts, consumables] = ConsumablesBuilder.buildFromList(cStuff, cPlayer);
        ConsumablesBuilder.setConsumableItems(consumables, setMagazines, setBobbleHeads, setFood, setDrink, setPsycho, setSerum, setOthers);
        setFoodPref(foodPref);
        setStuffBoost(allStuffBoosts);
        setCreatures({...creatures});
    }

    const b = (
        <div className='m-auto ps-0 pe-0' style={{maxWidth: '80rem'}}>
            <F76NavBar></F76NavBar>
            <ATotalDamage weaponName={wSpec.weaponName} graphValues={graphValues} iconName={wSpec.iconName} defaultName={wSpec.defaultName} resultDamage={resultDamage} creatures={creatures} setCreatures={setCreatures} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></ATotalDamage>
            <ToastSpecs creatures={creatures} legendary={wSpec.legendary} iconName={wSpec.iconName} weaponName={wSpec.defaultName} resultDamage={resultDamage} showStat={showStat} setShowStat={setShowStat}></ToastSpecs>
            <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-1 mb-3">
                <Tab eventKey="Main" title={<span className="tab-text">Main</span>}>
                    <Accordion className="accordion">
                        <WeaponSpecs wSpec={wSpec} setWSpec={setWSpec} showStat={showStat} setShowStat={setShowStat} health={player.health.value}></WeaponSpecs>
                        <DamageBoosts player={player} setPlayer={setPlayer} boostDamage={boostDamage} setBoostDamage={setBoostDamage} showStat={showStat} setShowStat={setShowStat}></DamageBoosts>
                        <AdditionalDamage additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages} showStat={showStat} setShowStat={setShowStat}></AdditionalDamage>
                        <CreatureView creatures={creatures} setCreatures={setCreatures}></CreatureView>
                        <RaceView />
                        <ConsumablesView />
                    </Accordion>
                </Tab>
                <Tab eventKey="Templates" title={<span className="tab-text">Weapons</span>}>
                    <WeaponTemplates setWSpec={setWSpec} setBoostDamage={setBoostDamage} setPlayer={setPlayer} setExtraDamage={setExtraDamage} setFoodPref={setFoodPref} setStuffBoost={setStuffBoost} setAdditionalDamages={setAdditionalDamages} setPlayerStats={setPlayerStats} setMagazines={setMagazines} setBobbleHeads={setBobbleHeads} setFood={setFood} setDrink={setDrink} setPsycho={setPsycho} setSerum={setSerum} setOthers={setOthers}></WeaponTemplates>
                </Tab>
                <Tab eventKey="Boosts" title={<span className="tab-text">Boosts</span>}>
                    <BoostStuff foodPref={foodPref} setFoodPref={setFoodPref} magazines={magazines} setMagazines={setMagazines} bobbleHeads={bobbleHeads} setBobbleHeads={setBobbleHeads} food={food} setFood={setFood} drink={drink} setDrink={setDrink} psycho={psycho} setPsycho={setPsycho} serum={serum} setSerum={setSerum} others={others} setOthers={setOthers} player={player} setPlayer={setPlayer} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} showStat={showStat} setShowStat={setShowStat} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats} setConsumableTouched={setConsumableTouched}></BoostStuff>
                </Tab>
                <Tab eventKey="Snapshots" title={<span className="tab-text">Snapshots</span>}>
                     <Snapshots player={player} playerStats={playerStats} stuffBoost={stuffBoost} weaponName={wSpec.weaponName} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} creatures={creatures} resultDamage={resultDamage} applySnapshot={applySnapshot}></Snapshots>
                </Tab>
            </Tabs>
            <div style={{height: '1.5rem'}}></div>

            <Container className="mb-4">
                <div className="ps-1 ms-1 version-text">{version1}</div>
                <div className="ps-1 ms-1 mb-4 version-text">{version2}</div>
                <Row className="p-1 mb-3">
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