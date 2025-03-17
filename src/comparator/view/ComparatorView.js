import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { memo } from 'react';
import ComparatorChartView from './ComparatorChartView';
import CreatureDataProvider from '../../creature/CreatureDataProvider';
import { CreatureShortInfoButton } from '../../creature/CreatureInfoButton';
import { CreatureDropdownButton } from '../../creature/CreatureDropdown';
import { useState } from 'react';
import ComparatorWeaponDataView from './ComparatorWeaponDataView';
import { graphDamage } from '../../helpers/Calc';
import { buildCreature } from '../../entities/ECreatures';
import WeaponFactory from '../../damage/weapon/WeaponFactory';
import ConsumablesBuilder from '../../consumables/ConsumablesBuilder';
import { Slider } from 'antd';
import LoadingModal from '../../helpers/views/LoadingModal';
import { WarningPopoverBadge } from '../../helpers/WarningPopover';


const explanation = (
    <>
        <p>‣ Adjust parameters for a weapon in <i><b>Weapon Specs</b></i> or choose a weapon under <i><b>Weapons</b></i> tab and click <i><b>Set</b></i> button under <i><b style={{color: 'red'}}>Red</b></i> section.</p>
        <p>‣ Choose another weapon or adjust previously chosen and click <i><b>Set</b></i> button under <i><b style={{color: 'blue'}}>Blue</b></i> section.</p>
        <p>‣ See in which case one better than other in <i>damage per second</i> term. (For example: Anti-Armor vs. Bloodied).</p>
        <p>‣ Choose weapon's accuracy from subjective feeling / experience. Accuracy and chance of every particular damage item are also counting.</p>
        <p>‣ Time damage is counting without stacking.</p>
        <p>‣ Creature is used to apply appropriate bonuses, default reduction and resistance.</p>
        <p>‣ <i>First Blood</i>, <i>Last Shot</i>, <i>Executioner</i> are not counting, to see these effects in action, adjust BDB and TDB bonuses under <i>Additional Damage</i> section.</p>
    </>
);
const creatureNames = CreatureDataProvider.getCreatureNames();

const marks90 = {
    0: <small>0%</small>,
    10: <small>10%</small>,
    20: <small>20%</small>,
    30: <small>30%</small>,
    40: <small>40%</small>,
    50: <small>50%</small>,
    60: <small>60%</small>,
    70: <small>70%</small>,
    80: <small>80%</small>,
    90: <small>90%</small>,
};

function buildDamages(creature, data) {
    if (!data) {
        return {xValues: [], yValues: []};
    }
    const [, consumables,] = ConsumablesBuilder.buildFromList(data.consumableList, data.player);
    const weaponFactory = new WeaponFactory(data.wSpec, data.boostDamage, data.extraDamage, data.additionalDamages, consumables, data.playerStats, data.player.health.value);
    return graphDamage(creature, weaponFactory, false, true, data.accuracy, 100);
}

function getYPoint(xValue, xValues, yValues) {
    let point = null;
    for (let i = 0; i < xValues.length; i++) {
        const x = xValues[i];
        if (x === xValue) {
            point = yValues[i];
            break;
        }
    }
    return point;
}

function buildYPoints(xValue, xValues, yValues1, yValues2) {
    const result = [];
    const point1 = getYPoint(xValue, xValues, yValues1);
    const point2 = getYPoint(xValue, xValues, yValues2);
    if (point1) {
        result.push({x: xValue, y: point1});
    }
    if (point2) {
        result.push({x: xValue, y: point2});
    }
    return result;
}

function getResData(creature=null, xValues, redY, blueY) {
    let b = 0;
    let e = 0;
    let f = 0;
    let c = 0;
    let p = 0;
    let r = 0;
    if (creature) {
        b = creature.b;
        e = creature.e;
        f = creature.f;
        c = creature.c;
        p = creature.p;
        r = creature.r;
    }
    return {
        b: {
            values: buildYPoints(b, xValues, redY, blueY),
            label: 'Physical',
            color: 'grey',
        },
        e: {
            values: buildYPoints(e, xValues, redY, blueY),
            label: 'Energy',
            color: 'purple',
        },
        f: {
            values: buildYPoints(f, xValues, redY, blueY),
            label: 'Fire',
            color: 'red',
        },
        c: {
            values: buildYPoints(c, xValues, redY, blueY),
            label: 'Cold',
            color: 'blue',
        },
        p: {
            values: buildYPoints(p, xValues, redY, blueY),
            label: 'Poison',
            color: 'green',
        },
        r: {
            values: buildYPoints(r, xValues, redY, blueY),
            label: 'Radiation',
            color: 'orange',
        },
    }
}

const ComparatorView = memo(function ComparatorView(props) {
    console.log("ComparatorView");
    const [creature, setCreature] = useState(buildCreature(creatureNames[0], "Max", ""));
    const [reduction, setReduction] = useState(0);
    const [blueData, setBlueData] = useState(null);
    const [redData, setRedData] = useState(null);
    const [loading, setLoading] = useState(false);
    let title = creature.capName;
    const openStat = (e) => {
        props.setShowStat(!props.showStatRef.current);
        e.stopPropagation();
    }
    const values = {
        xValues: [],
        yValuesRed: [],
        yValuesBlue: [],
        resPoints: null,
    }
    const blueValues = buildDamages(creature, blueData);
    const redValues = buildDamages(creature, redData);
    values.xValues = (blueValues.xValues > redValues.xValues) ? blueValues.xValues : redValues.xValues;
    values.yValuesBlue = blueValues.yValues;
    values.yValuesRed = redValues.yValues;
    values.resPoints = getResData(creature, values.xValues, redValues.yValues, blueValues.yValues);
    function onCreatureNameSelect(e) {
        const creature = buildCreature(e, "Max", "");
        setReduction(creature.damageReduction * 100.0);
        setCreature(creature);
    }
    function reductionChanged(e) {
        creature.damageReduction = (e / 100);
        setReduction(e);
    }

    function reductionChangeFinished(e) {

    }

    return (
        <div className="ps-1 pe-1 pb-2">
            <LoadingModal show={loading} />
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">DPS Comparator</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="mt-1 p-2">
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '100%'}}>
                            <WarningPopoverBadge sign="!" message={explanation} header={"Explanation"} placement={'right'} />
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <CreatureDropdownButton title={title} names={creatureNames} onSelect={onCreatureNameSelect} />
                        </div>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'end'}}>
                            <CreatureShortInfoButton creature={creature} />
                        </div>
                    </div>
                    <ComparatorChartView chartId="ComparatorChart" values={values} />
                    <div className="p-2 pt-1 ps-3 pe-3">
                        <b style={{fontSize: '0.65rem'}}>Damage Reduction</b>
                        <Slider open={true} onChangeComplete={reductionChangeFinished} onChange={reductionChanged} marks={marks90} min={0} max={90} step={1} value={reduction} />
                    </div>
                    <ComparatorWeaponDataView defTitle="Red" itemId="red" color="#db0076" weaponDataRef={props.weaponDataRef} setLoading={setLoading} data={redData} setData={setRedData} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setPlayerStats={props.setPlayerStats} setAdditionalDamages={props.setAdditionalDamages} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers} />
                    <ComparatorWeaponDataView defTitle="Blue" itemId="blue" color="#0072db" weaponDataRef={props.weaponDataRef} setLoading={setLoading} data={blueData} setData={setBlueData} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setPlayerStats={props.setPlayerStats} setAdditionalDamages={props.setAdditionalDamages} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers} />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default ComparatorView;