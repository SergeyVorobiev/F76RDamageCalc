import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdditionalDamage from "./main/AdditionalDamage";
import Legendary from './main/Legendary';
import ATotalDamage from "./main/ATotalDamage";
import ToastSpecs from "./main/ToastSpecs";
import Creature from "./main/Creature";
import { calcDamage } from "./helpers/Calc";
import Accordion from 'react-bootstrap/Accordion';
import { defaultResultDamage, defaultExtraDamage } from './entities/EResultDamage';
import { defaultCreatures } from './entities/ECreatures';
import { defaultLegendary } from './entities/ELegendary';
import { defaultBoosts } from './entities/EBoosts';
import { defaultAdds } from './entities/EAddDamages';
import { defaultWeaponDamageSpecs, defaultWeaponSpecs } from './entities/EWeaponSpecs';
import './css/style.css';
import readCreaturesFromFile from './helpers/FetchCreatures';
import F76NavBar from './main/F76NavBar';
import WeaponSpecs from './main/WeaponSpecs';
import DamageBoosts from './main/DamageBoosts';
import Snapshots from './main/Snapshots';
import BoostStuff from './main/BoostStuff';
import WeaponTemplates from './templates/WeaponTemplates';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { prepareItems, defaultStuffBoost, loadBoosts } from './entities/EStuffBoost';
import magaz from './resources/boostStuff/magazines/magazines.json';
import bobble from './resources/boostStuff/bobbleHeads/bobbleHeads.json';
import foodD from './resources/boostStuff/food/food.json';
import drinkD from './resources/boostStuff/drink/drink.json';
import psychoM from './resources/boostStuff/psycho/psycho.json';
import serumS from './resources/boostStuff/serums/serum.json';
import othersL from './resources/boostStuff/others/others.json';


const defaultPlayerStats = {
    strength: {
        name: "Strength",
        value: 5.0,
    },
    luck: {
        name: "Luck",
        value: 1.0,
    },
};

const defaultPlayer = {
    team: false,
    strange: 0.0,
    freak: 0.0,
    alcoholEffects: 1.0,
    health: {
        name: "Health",
        value: 100.0,
    }
};

export default function MyApp() {
    const start = performance.now();

    const items = [].map((name, index) => {
        return {label: name, key: name}
    });

    const levels = [1].map((name, index) => {
        return {label: name, key: name}
    });

    const [mapCreatures, setMapCreatures] = useState({
        names: items,
        levels: levels,
        map: new Map(),
    });

    const [key, setKey] = useState('Main');

    const [weaponName, setWeaponName] = useState('Weapon');

    const [damage, setDamage] = useState(defaultWeaponDamageSpecs());

    const [wSpec, setWSpec] = useState(defaultWeaponSpecs());

    const [showStat, setShowStat] = useState(false);

    const [creatures, setCreatures] = useState(defaultCreatures());

    const [legendary, setLegendary] = useState(defaultLegendary());

    const [boostDamage, setBoostDamage] = useState(defaultBoosts());

    const [resultDamage, setResultDamage] = useState(defaultResultDamage());

    const [extraDamage, setExtraDamage] = useState(defaultExtraDamage());

    const [additionalDamages, setAdditionalDamages] = useState(defaultAdds());

    const [stuffBoost, setStuffBoost] = useState(defaultStuffBoost);

    const [player, setPlayer] = useState(defaultPlayer);

    const [playerStats, setPlayerStats] = useState(defaultPlayerStats);

    const [magazines, setMagazines] = useState(magaz);

    const [bobbleHeads, setBobbleHeads] = useState(bobble);

    const [food, setFood] = useState(foodD);

    const [drink, setDrink] = useState(drinkD);

    const [psycho, setPsycho] = useState(psychoM);

    const [serum, setSerum] = useState(serumS);

    const [others, setOthers] = useState(othersL);

    const [foodPref, setFoodPref] = useState({carnivore: false, herbivore: false});

    useEffect(() => {
        prepareItems(magaz);
        prepareItems(bobble);
        prepareItems(foodD);
        prepareItems(drinkD);
        prepareItems(psychoM);
        prepareItems(serumS);
        prepareItems(othersL);
        readCreaturesFromFile(mapCreatures, setMapCreatures);
    }, []);

    useEffect(() => {
        setResultDamage(calcDamage(damage, boostDamage, legendary, wSpec, creatures, extraDamage, additionalDamages, stuffBoost, playerStats));
    }, [damage, boostDamage, legendary, wSpec, extraDamage, creatures, additionalDamages, stuffBoost, playerStats]);

    // Build new address every pass so it forces to re-render ModalApplyItem dialog for no reason,
    // but we can omit this cause it is not affected on render time to much.
    const applySnapshot = (name, cDamage, cLegendary, cBoostDamage, cWSpec, cExtraDamage, cAdditionalDamages, cCreatures, cPlayer, cPlayerStats, cStuff) => {
        setPlayer(cPlayer);
        setPlayerStats(cPlayerStats);
        setWeaponName(name);
        setDamage(cDamage);
        setLegendary(cLegendary);
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
        const setStuff = new Set(cStuff);
        const foodPref = {carnivore: setStuff.has("carnivore_serum"), herbivore: setStuff.has("herbivore_serum")};
        setFoodPref(foodPref);
        prepareItems(magaz, setStuff);
        prepareItems(bobble, setStuff);
        prepareItems(foodD, setStuff);
        prepareItems(drinkD, setStuff);
        prepareItems(psychoM, setStuff);
        prepareItems(serumS, setStuff);
        prepareItems(othersL, setStuff);
        const allStuffBoosts = loadBoosts(magaz, bobble, foodD, drinkD, psychoM, serumS, othersL, foodPref, cPlayer);
        setStuffBoost(allStuffBoosts);
        setCreatures({...creatures})
    }

    console.log("Init: " + (performance.now() - start).toFixed(3));

    const b = (
        <div className='m-auto ps-0 pe-0' style={{maxWidth: '80rem'}}>
            <F76NavBar></F76NavBar>
            <ATotalDamage weaponName={weaponName} defaultName={wSpec.defaultName} legendary={legendary} resultDamage={resultDamage} creatures={creatures} setCreatures={setCreatures} mapCreatures={mapCreatures} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></ATotalDamage>
            <ToastSpecs creatures={creatures} legendary={legendary} weaponName={wSpec.defaultName} resultDamage={resultDamage} showStat={showStat} setShowStat={setShowStat}></ToastSpecs>
            <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mt-1 mb-3">
                <Tab eventKey="Main" title="Main">
                    <Accordion class="accordion">
                        <WeaponSpecs damage={damage} setDamage={setDamage} wSpec={wSpec} setWSpec={setWSpec} showStat={showStat} setShowStat={setShowStat}></WeaponSpecs>
                        <DamageBoosts player={player} setPlayer={setPlayer} boostDamage={boostDamage} setBoostDamage={setBoostDamage} showStat={showStat} setShowStat={setShowStat}></DamageBoosts>
                        <Legendary legendary={legendary} setLegendary={setLegendary} showStat={showStat} setShowStat={setShowStat}></Legendary>
                        <AdditionalDamage additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages} showStat={showStat} setShowStat={setShowStat}></AdditionalDamage>
                        <Creature creatures={creatures} setCreatures={setCreatures}></Creature>
                    </Accordion>
                </Tab>
                <Tab eventKey="Templates" title="Weapons">
                    <WeaponTemplates setWeaponName={setWeaponName} setDamage={setDamage} setWSpec={setWSpec}></WeaponTemplates>
                </Tab>
                <Tab eventKey="Boosts" title="Boosts">
                    <BoostStuff foodPref={foodPref} setFoodPref={setFoodPref} magazines={magazines} setMagazines={setMagazines} bobbleHeads={bobbleHeads} setBobbleHeads={setBobbleHeads} food={food} setFood={setFood} drink={drink} setDrink={setDrink} psycho={psycho} setPsycho={setPsycho} serum={serum} setSerum={setSerum} others={others} setOthers={setOthers} player={player} setPlayer={setPlayer} stuffBoost={stuffBoost} setStuffBoost={setStuffBoost} showStat={showStat} setShowStat={setShowStat} legendary={legendary} setLegendary={setLegendary} boostDamage={boostDamage} setBoostDamage={setBoostDamage} playerStats={playerStats} setPlayerStats={setPlayerStats}></BoostStuff>
                </Tab>
                <Tab eventKey="Snapshots" title="Snapshots">
                     <Snapshots player={player} playerStats={playerStats} stuffBoost={stuffBoost} weaponName={weaponName} damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} creatures={creatures} resultDamage={resultDamage} applySnapshot={applySnapshot}></Snapshots>
                </Tab>
            </Tabs>
            <div style={{height: '4rem'}}></div>
            <Container>
                <Row className="mb-4">
                    <Col>
                        <a className="p-1 m-1 pb-3 d-flex justify-content-start" href="https://www.flaticon.com"><small>Freepik icons</small></a>
                    </Col>
                    <Col>
                        <a className="p-1 m-1 pb-3 d-flex justify-content-center" href="https://nukacrypt.com/"><small>Launch codes</small></a>
                    </Col>
                    <Col>
                        <a className="p-1 m-1 pb-3 d-flex justify-content-end" href="https://fallout.fandom.com/wiki/Fallout_76"><small>Fandom F76</small></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    console.log("Return: " + (performance.now() - start).toFixed(3));
    return (<div>{b}</div>);
}