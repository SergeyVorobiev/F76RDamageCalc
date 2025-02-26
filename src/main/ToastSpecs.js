import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { keyValueRow } from '../helpers/RowBuilder';
import { getHotPercentage } from '../helpers/Item';
import { Progress } from 'antd';
import { memo, useState } from 'react';
import { ammo, addText } from '../helpers/Emoji';
import { getImageElement } from '../helpers/WeaponImages';
import { getAverageTime } from "../entities/ECreatures";
import { getLegendary } from '../helpers/LegendaryProvider';
import Button from 'react-bootstrap/Button';
import AAView from '../damage/AAView';
import DamageDetailsCard from '../damage/DamageDetailsCard';
import Row from 'react-bootstrap/Row';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';
import { buildCreatureInfo2 } from '../creature/CreatureInfoPopover';
import ResistanceChart from '../main/ResistanceChart';
import { buildExtraDamageView, getFireRateLabel } from './SummaryView';
import ModView from '../snapshot/ModView';


function getLegendaryRow(legendaryId, star) {
    if (!legendaryId || legendaryId === "" || star > 5) {
        return (<></>);
    } else {
        let stars = "⭐";
        stars = stars.repeat(star);
        const legData = getLegendary(legendaryId);
        if (!legData) {
            return (<></>);
        }
        return (<>{keyValueRow(stars, legData.name, "default", "gold")}</>)
    }
}

const ToastSpecs = memo(function ToastSpecs({mods, creatures, legendary, iconName, weaponName, graphValues, resultDamage, showStat, setShowStat, creatureChartNumber, setCreatureChartNumber, extraDamage, setExtraDamage, boostDamageRef, setBoostDamage}) {
    console.log("ToastSpecs");
    const [showView, setShowView] = useState("Main");
    const [detailIndex, setDetailIndex] = useState(-1);
    const [creatureNumber, setCreatureNumber] = useState(1);
    const dropdownNames = ["Main", "Damage Stats", "Creature", "Chart"];
    if (resultDamage.damageDetails && (resultDamage.damageDetails.length - 1) < detailIndex) {
        setDetailIndex(-1);
    }
    if (!resultDamage || Object.keys(resultDamage).length === 0) {
        return (<></>);
    }
    let strengthTail = (resultDamage.strengthBonus > 0) ? " (+" + resultDamage.strengthBonus + "%)" : "";
    const strength = resultDamage.strength + strengthTail;
    let bonuses = [];
    for(let property in resultDamage.bonusMult) {
        bonuses.push((resultDamage.bonusMult[property] - 1) * 100);
    }
    const minBonus = Math.min(...bonuses).toFixed(0);
    const maxBonus = Math.max(...bonuses).toFixed(0);
    const bonusText = minBonus + "% - " + maxBonus + "%";
    const totalBonusTextMin = (((resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer) - 1) * 100).toFixed(0) + "%";
    const totalBonusTextMax = (((resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner) - 1) * 100).toFixed(0) + "%";
    const totalBonusText = totalBonusTextMin + " - " + totalBonusTextMax;
    let toastBody = null;
    if (showView === "Main") {
        toastBody = getMainToast(mods, creatures, resultDamage, legendary, bonusText, totalBonusText, strength)
    } else if (showView === "Damage Stats") {
        toastBody = getDetails(resultDamage, detailIndex, setDetailIndex);
    } else if (showView === "Creature") {
        toastBody = getCreatures(resultDamage, creatures, creatureNumber);
    } else {
        toastBody = getChart(graphValues, creatures, creatureChartNumber, setCreatureChartNumber);
    }
    function onDropdownSelect(e) {
        setShowView(e);
    }
    return (
        <ToastContainer
            className="position-fixed p-1"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 10 }}>
            <Toast bg="light" onClose={(e) => setShowStat(false)} show={showStat} animation={false}>
                <Toast.Header className="pe-3">
                    {getImageElement(iconName, "1.5rem")}
                    <strong className="ms-2 mt-auto mb-auto p-auto me-auto">{weaponName}</strong>
                    <small className="me-2">
                        <Progress
                            type="dashboard"
                            steps={50}
                            percent={getHotPercentage(creatures)}
                            format={(percent) => percent}
                            size={28}
                            strokeColor="rgb(64, 255, 255)"
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20} />
                    </small>
                </Toast.Header>
                <div className="m-1" />
                {buildExtraDamageView(extraDamage, setExtraDamage, boostDamageRef, setBoostDamage)}
                {toastBody}
                <Row className="pb-2">
                    <div className="col d-flex justify-content-start">
                        {getPrevButtonDetails(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex)}
                        {getPrevButtonCreature(showView, creatureNumber, setCreatureNumber)}
                    </div>
                    <div className="col d-flex justify-content-center">
                        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onDropdownSelect} names={dropdownNames} title={<strong>{showView}</strong>} />
                    </div>
                    <div className="col d-flex justify-content-end">
                        {getNextButtonDetails(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex)}
                        {getNextButtonCreature(showView, creatureNumber, setCreatureNumber)}
                    </div>
                </Row>
            </Toast>
        </ToastContainer>
    );
});

function getChart(graphValues, creatures, creatureNumber, setCreatureNumber) {
    return (<ResistanceChart graphValues={graphValues} chartId={"toastResChart"} dps='true' creatures={creatures} creatureNumber={creatureNumber} setCreatureNumber={setCreatureNumber} />);
}

function getPrevButtonDetails(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex - 1;
        if (index < -1) {
            index = detailsLength - 1;
        }
        setDetailIndex(index);
    }
    const symbol = "<<";
    if (showView !== "Damage Stats" || detailsLength === 0) {
        return (<></>);
    } else {
        return (<Button size="sm" variant="blue-white-border" className="ms-2" onClick={onClick}>{symbol}</Button>);
    }
}

function getNextButtonDetails(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex + 1;
        if (index > (detailsLength - 1)) {
            index = -1;
        }
        setDetailIndex(index);
    }
    const arr = '>>';
    if (showView !== "Damage Stats" || detailsLength === 0) {
        return (<></>);
    } else {
        return (<Button size="sm" variant="blue-white-border" className="me-2" onClick={onClick}>{arr}</Button>);
    }
}

function getNextButtonCreature(showView, creatureNumber, setCreatureNumber) {
    function onClick(e) {
        let number = creatureNumber + 1;
        if (number > 4) {
            number = 1;
        }
        setCreatureNumber(number);
    }
    const arr = '>>';
    if (showView !== "Creature") {
        return (<></>);
    } else {
        return (<Button size="sm" variant="blue-white-border" className="me-2" onClick={onClick}>{arr}</Button>);
    }
}

function getPrevButtonCreature(showView, creatureNumber, setCreatureNumber) {
    function onClick(e) {
        let number = creatureNumber - 1;
        if (number < 1) {
            number = 4;
        }
        setCreatureNumber(number);
    }
    if (showView !== "Creature") {
        return (<></>);
    } else {
        return (<Button size="sm" variant="blue-white-border" className="ms-2" onClick={onClick}>{"<<"}</Button>);
    }
}

function getCreatures(resultDamage, creatures, creatureNumber) {
    const creature = creatures["creature" + creatureNumber];
    return (
        <Toast.Body className="p-2">
            {buildCreatureInfo2(creature, resultDamage)}
        </Toast.Body>
    );
}

function getDetails(resultDamage, detailIndex, setDetailIndex) {
    let view = null;
    if (detailIndex === -1) {
        view = (<AAView resultDamage={resultDamage}></AAView>);
    } else {
        view = (<DamageDetailsCard resultDamage={resultDamage} damageData={resultDamage.damageDetails[detailIndex]}></DamageDetailsCard>);
    }
    return (
        <Toast.Body className="p-2">
            {view}
        </Toast.Body>
    );
}

/*
            {keyValueRow('💣 Explosive:', "+" + resultDamage.explosive.toFixed(0) + "%", "default", "pink")}
            {keyValueRow('🚀️ Bonus:', bonusText, "default", "blue")}
            {keyValueRow('⏫ Total Bonus:', totalBonusText, "default", "blue")}
            {keyValueRow('🐍 Sneak:', "+" + resultDamage.displayedSneak + "%", "default", "darkGreen")}
            {keyValueRow('☠️ Crit:', "+" + resultDamage.displayedCrit + "%", "default", "black")}
            {keyValueRow('💪 Strength:', strength, "default", "brown")}
*/
function getMainToast(mods, creatures, resultDamage, legendary, bonusText, totalBonusText, strength) {
    const fireRateLabel = getFireRateLabel(resultDamage.weaponType);
    return (
        <Toast.Body className="p-2">
            {keyValueRow('💥 Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize, "default", "indigo")}
            {keyValueRow(fireRateLabel, resultDamage.fireRate.toFixed(2) + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec", "default", "purple")}
            {keyValueRow(addText(ammo, '0.7rem', '0.27rem', "Ammo / Hit:"), resultDamage.ammoCapacity, "default", "purple")}
            {keyValueRow('⌛ Reload:', resultDamage.reloadTime.toFixed(1) + ' s', "default", "purple")}
            {keyValueRow('💪 Strength:', strength, "default", "brown")}
            {keyValueRow('💀 Average Time:', getAverageTime(creatures), "default", "red")}
            {getLegendaryRow(legendary[0][0], 1)}
            {getLegendaryRow(legendary[1][0], 2)}
            {getLegendaryRow(legendary[2][0], 3)}
            {getLegendaryRow(legendary[3][0], 4)}
            {getLegendaryRow(legendary[4][0], 5)}
            <ModView mods={mods} fontSize='0.6rem' />
        </Toast.Body>
    );
}
export default ToastSpecs;