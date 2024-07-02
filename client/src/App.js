import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AdditionalDamage from "./main/AdditionalDamage";
import Legendary from './main/Legendary';
import ATotalDamage from "./main/ATotalDamage";
import ToastSpecs from "./main/ToastSpecs";
import Creature from "./main/Creature";
import {calcDamage} from "./helpers/Calc";
import Accordion from 'react-bootstrap/Accordion';
import { useEffect } from 'react';
import {defaultResultDamage, defaultExtraDamage} from './entities/EResultDamage';
import {defaultCreatures} from './entities/ECreatures';
import {defaultLegendary} from './entities/ELegendary';
import {defaultBoosts} from './entities/EBoosts';
import {defaultAdds} from './entities/EAddDamages';
import {defaultWeaponDamageSpecs, defaultWeaponSpecs} from './entities/EWeaponSpecs';
import './css/style.css';
import readCreaturesFromFile from './helpers/FetchCreatures';
import F76NavBar from './main/F76NavBar';
import WeaponSpecs from './main/WeaponSpecs';
import DamageBoosts from './main/DamageBoosts';
import Snapshots from './main/Snapshots';


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

    const [key, setKey] = useState('Stats');

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

    useEffect(() => {
        readCreaturesFromFile(mapCreatures, setMapCreatures);
    }, []);

    useEffect(() => {
        setResultDamage(calcDamage(damage, boostDamage, legendary, wSpec, creatures, extraDamage, additionalDamages));
    }, [damage, boostDamage, legendary, wSpec, extraDamage, creatures, additionalDamages]);

    // Build new address every pass so it forces to re-render ModalApplyItem dialog for no reason,
    // but we can omit this cause it is not affected on render time to much.
    const applySnapshot = (name, cDamage, cLegendary, cBoostDamage, cWSpec, cExtraDamage, cAdditionalDamages, cCreatures) => {
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
        setCreatures({...creatures})
    }
    console.log("Init: " + (performance.now() - start).toFixed(3));

    const b = (
        <div className='ms-0 me-0 ps-0 pe-0'>
            <F76NavBar></F76NavBar>
            <ATotalDamage weaponName={weaponName} legendary={legendary} resultDamage={resultDamage} creatures={creatures} setCreatures={setCreatures} mapCreatures={mapCreatures} extraDamage={extraDamage} setExtraDamage={setExtraDamage}></ATotalDamage>
            <ToastSpecs resultDamage={resultDamage} showStat={showStat} setShowStat={setShowStat}></ToastSpecs>
            <Tabs
                id="tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3">
                <Tab eventKey="Stats" title="Stats">
                    <Accordion class="accordion">
                        <WeaponSpecs damage={damage} setDamage={setDamage} wSpec={wSpec} setWSpec={setWSpec} showStat={showStat} setShowStat={setShowStat}></WeaponSpecs>
                        <DamageBoosts boostDamage={boostDamage} setBoostDamage={setBoostDamage} legendary={legendary} setLegendary={setLegendary} showStat={showStat} setShowStat={setShowStat}></DamageBoosts>
                        <Legendary legendary={legendary} setLegendary={setLegendary} showStat={showStat} setShowStat={setShowStat}></Legendary>
                        <AdditionalDamage additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages} showStat={showStat} setShowStat={setShowStat}></AdditionalDamage>
                        <Creature creatures={creatures} setCreatures={setCreatures}></Creature>
                    </Accordion>
                </Tab>
                <Tab eventKey="Snapshots" title="Snapshots">
                     <Snapshots damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} creatures={creatures} resultDamage={resultDamage} applySnapshot={applySnapshot}></Snapshots>
                </Tab>
            </Tabs>
            <div style={{height: '4rem'}}></div>
        </div>
    );
    console.log("Return: " + (performance.now() - start).toFixed(3));
    return b;
}