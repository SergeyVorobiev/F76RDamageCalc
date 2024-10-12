import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {keyValueRow} from '../helpers/RowBuilder';
import { getHotPercentage } from '../helpers/Item';
import { Progress } from 'antd';
import { memo, useState, useEffect } from 'react';
import { ammo, fireRate, addText } from '../helpers/Emoji';
import { getImageElement } from '../helpers/WeaponImages'
import {getAverageTime } from "../entities/ECreatures";
import { getLegendary } from '../helpers/LegendaryProvider';
import { Button } from 'antd';
import AAView from '../damage/AAView';
import DamageDetailsCard from '../damage/DamageDetailsCard';
import Row from 'react-bootstrap/Row';


function getLegendaryRow(legendaryId, star) {
    if (!legendaryId || legendaryId === "" || star > 3) {
        return (<></>);
    } else {
        let stars = "⭐";
        if (star === 2) {
            stars = "⭐⭐";
        } else if (star === 3) {
            stars = "⭐⭐⭐";
        }
        const legData = getLegendary(legendaryId);
        if (!legData) {
            return (<></>);
        }
        return (<>{keyValueRow(stars, legData.name, "default", "gold")}</>)
    }
}

const ToastSpecs = memo(function ToastSpecs({creatures, legendary, iconName, weaponName, resultDamage, showStat, setShowStat}) {
    const [showView, setShowView] = useState(0);
    const [detailIndex, setDetailIndex] = useState(-1);
    const buttonNames = ["Details", "Main"];
    const buttonName= buttonNames[showView];
    if (resultDamage.damageDetails && (resultDamage.damageDetails.length - 1) < detailIndex) {
        setDetailIndex(-1);
    }
    if (!resultDamage || Object.keys(resultDamage).length === 0) {
        return (<></>);
    }
    function onClick(e) {
        if (showView === 0) {
            setShowView(1);
        } else {
            setShowView(0);
        }
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
    if (showView === 0) {
        toastBody = getMainToast(creatures, resultDamage, legendary, bonusText, totalBonusText, strength)
    } else {
        toastBody = getDetails(resultDamage, detailIndex, setDetailIndex);
    }
    return (
        <ToastContainer
            className="p-3 position-fixed p-3"
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
                            size={[28, 28]}
                            strokeColor="rgb(64, 255, 255)"
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20} />
                    </small>
                </Toast.Header>
                {toastBody}
                <Row className="pb-2">
                    <div class="col d-flex justify-content-start">
                        {getPrevButton(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex)}
                    </div>
                    <div class="col d-flex justify-content-center">
                        <Button size="sm" onClick={onClick}>{buttonName}</Button>
                    </div>
                    <div class="col d-flex justify-content-end">
                        {getNextButton(showView, resultDamage.damageDetails.length, detailIndex, setDetailIndex)}
                    </div>
                </Row>
            </Toast>
        </ToastContainer>
    );
});

function getPrevButton(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex - 1;
        if (index < -1) {
            index = detailsLength - 1;
        }
        setDetailIndex(index);
    }
    const symbol = "<<";
    if (showView === 0 || detailsLength === 0) {
        return (<></>);
    } else {
        return (<Button size="sm" variant="outline-secondary" className="ms-2" onClick={onClick}>{symbol}</Button>);
    }
}

function getNextButton(showView, detailsLength, detailIndex, setDetailIndex) {
    function onClick(e) {
        let index = detailIndex + 1;
        if (index > (detailsLength - 1)) {
            index = -1;
        }
        setDetailIndex(index);
    }
    if (showView === 0 || detailsLength === 0) {
        return (<></>);
    } else {
        return (<Button size="sm" variant="outline-secondary" className="me-2" onClick={onClick}>>></Button>);
    }
}

function getDetails(resultDamage, detailIndex, setDetailIndex) {
    let view = null;
    if (detailIndex === -1) {
        view = (<AAView resultDamage={resultDamage}></AAView>);
    } else {
        view = (<DamageDetailsCard resultDamage={resultDamage} damageData={resultDamage.damageDetails[detailIndex]}></DamageDetailsCard>);
    }
    return (
        <Toast.Body>
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
function getMainToast(creatures, resultDamage, legendary, bonusText, totalBonusText, strength) {
    return (
        <Toast.Body>
            {keyValueRow('💥 Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize, "default", "indigo")}
            {keyValueRow(addText(fireRate, '0.7rem', '0.27rem', "Fire Rate:"), resultDamage.fireRate.toFixed(2) + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec", "default", "purple")}
            {keyValueRow(addText(ammo, '0.7rem', '0.27rem', "Ammo / Hit:"), resultDamage.ammoCapacity, "default", "purple")}
            {keyValueRow('⌛ Reload:', resultDamage.reloadTime.toFixed(1) + ' s', "default", "purple")}
            {keyValueRow('💪 Strength:', strength, "default", "brown")}
            {keyValueRow('💀 Average Time:', getAverageTime(creatures), "default", "red")}
            {getLegendaryRow(legendary[0][0], 1)}
            {getLegendaryRow(legendary[1][0], 2)}
            {getLegendaryRow(legendary[2][0], 3)}
        </Toast.Body>
    );
}
export default ToastSpecs;