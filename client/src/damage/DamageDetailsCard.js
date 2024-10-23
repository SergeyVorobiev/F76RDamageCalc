import Card from 'react-bootstrap/Card';
import { keyValueRow } from '../helpers/RowBuilder';
import { memo, useState } from 'react';
import { getSymbolStyle } from '../helpers/AdditionalDView';
import { getNumberEmoji } from '../helpers/Emoji.js';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function getRow(leftValue, rightValue, leftColor, rightColor, show=true) {
    return (show) ? keyValueRow((<span className="pt-0 pb-0">{leftValue}</span>), (<span className="pt-0 pb-0"><strong>{rightValue}</strong></span>), leftColor, rightColor) : (<></>);
}

function showExplosive(damageData, resultDamage) {
    return damageData.type === "dtPhysical" && damageData.kind === "physical" && damageData.time === 0 && resultDamage.explosive > 0;
}

function getAnyCreatureBonus(resultDamage) {
    for (let [, bonus] of resultDamage.creatureBonus) {
        if (bonus.name === "any") {
            return bonus.value / 100.0;
        }
    }
    return 0;
}

function getCreatureNames(resultDamage) {
    let result = ["general"];
    for (let [key,] of resultDamage.creatureBonus) {
        result.push(key);
    }
    return result;
}

function getResult(resultDamage, damageData, additionalBonus=0) {
    const damageValue = damageData.damage * ((damageData.time > 0) ? damageData.time : 1);
    let bonusMult = resultDamage.bonusMult[damageData.type] - 1 + getAnyCreatureBonus(resultDamage) + additionalBonus;
    if (damageData.kind === "explosive") {
        bonusMult += resultDamage.expDTypeBonus;
    }
    const bonusDamage = damageValue * bonusMult;
    const bonusText = "+" + (bonusMult * 100).toFixed(1) + "% / +" + bonusDamage.toFixed(1);
    const crit = resultDamage.displayedCrit / 100.0;
    const critValue = damageValue * crit;
    const critText = "+" + resultDamage.displayedCrit.toFixed(1) + "%  / +" + critValue.toFixed(1);
    const sneak = resultDamage.displayedSneak / 100.0;
    const totalDamageBonusMin = resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer;
    const totalDamageBonusMinPercent = (resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer - 1) * 100;
    const totalDamageBonusMax = resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner;
    const totalDamageBonusMaxPercent = (resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer * resultDamage.totalBonus.executioner - 1) * 100;
    let totalDamageBonusText = "";
    if (totalDamageBonusMin === totalDamageBonusMax) {
        totalDamageBonusText = "+" + totalDamageBonusMinPercent.toFixed(1) + "%";
    } else {
        totalDamageBonusText = "+" + totalDamageBonusMinPercent.toFixed(1) + "% / +" + totalDamageBonusMaxPercent.toFixed(1) + "%";
    }
    const totalSneakValue = sneak * damageValue * resultDamage.totalBonus.value * resultDamage.totalBonus.tenderizer;
    const sneakText = "+" + resultDamage.displayedSneak.toFixed(1) + "% / +" + totalSneakValue.toFixed(1);
    const resultSneakValue = (resultDamage.isSneak) ? totalSneakValue : 0;
    const resultCritValue = (resultDamage.isCrit) ? critValue : 0;
    const totalDamageMin = (damageValue + bonusDamage) * totalDamageBonusMin + resultSneakValue + resultCritValue;
    const totalDamageMax = (damageValue + bonusDamage) * totalDamageBonusMax + resultSneakValue + resultCritValue;
    const explosiveValueMin = (damageValue + bonusDamage) * totalDamageBonusMin * resultDamage.explosive / 100.0;
    const explosiveValueMax = (damageValue + bonusDamage) * totalDamageBonusMax * resultDamage.explosive / 100.0;
    let explosiveText = explosiveValueMin.toFixed(1);
    const explosiveCritValueMin = critValue * resultDamage.explosive / 100.0 + explosiveValueMin;
    const explosiveCritValueMax = critValue * resultDamage.explosive / 100.0 + explosiveValueMax;
    let explosiveCritText = explosiveCritValueMin.toFixed(1);
    let totalDamageText = totalDamageMin.toFixed(1);
    if (totalDamageMin < totalDamageMax) {
        totalDamageText += " (" + totalDamageMax.toFixed(1) + ")";
        explosiveText += " (" + explosiveValueMax.toFixed(1) + ")";
        explosiveCritText += " (" + explosiveCritValueMax.toFixed(1) + ")";
    }
    if (damageData.time > 0) {
        const tail = " / " + damageData.time.toFixed(0) + " sec.";
        totalDamageText += tail;
        explosiveText += tail;
        explosiveCritText += tail;
    }
    return {
        base: damageData.damage.toFixed(1),
        bonus: bonusText,
        totalBonus: totalDamageBonusText,
        explosive: resultDamage.explosive.toFixed(1),
        sneak: sneakText,
        crit: critText,
        total: totalDamageText,
        totalExp: explosiveText,
        totalExpCrit: explosiveCritText,
    };
}

const DamageDetailsCard = memo(function DamageDetailsCard({resultDamage, damageData}) {
    const [creature, setCreature] = useState("general");
    if (creature !== "general" && !resultDamage.creatureBonus.get(creature)) {
        setCreature("general");
    }
    const numberEmoji = getNumberEmoji(damageData.index + 1);
    const onDropdownSelect = (e) => {
        setCreature(e);
    };
    const currentCreature = resultDamage.creatureBonus.get(creature);
    let additionalBonus = 0;
    if (currentCreature) {
        additionalBonus = currentCreature.value / 100.0;
    }
    const result = getResult(resultDamage, damageData, additionalBonus);
    const creatureNames = getCreatureNames(resultDamage);
    let dropdownItems = [];
    for (let i = 0; i < creatureNames.length; i++) {
        const creatureName = creatureNames[i];
        dropdownItems.push(<Dropdown.Item key={i} eventKey={creatureName}>{creatureName}</Dropdown.Item>);
    }
    return (
        <div className="col d-flex justify-content-center mb-2">
            <Card className="main-display-adjustable">
                <Card.Header className="ps-3 p-1">
                    <div className="d-flex">
                        <div style={{width: '33%'}} className="d-flex justify-content-start center-text">
                            {getSymbolStyle(damageData.type, damageData.kind)[0]}
                        </div>
                        <div style={{width: '34%'}} className="d-flex justify-content-center">
                            <DropdownButton variant='default' size="sm" onSelect={onDropdownSelect} title={<strong><small>{creature}</small></strong>}>
                                {dropdownItems}
                            </DropdownButton>
                        </div>
                        <div style={{width: '33%'}} className="d-flex justify-content-end me-2 center-text">
                            {numberEmoji}
                        </div>
                    </div>

                </Card.Header>
                <Card.Body className="pt-0 pb-0 ps-2 pe-2">
                    {getRow("Base Damage:", result.base, "default", "purple")}
                    {getRow("Bonus:", result.bonus, "default", "purple")}
                    {getRow("Total Bonus:", result.totalBonus, "default", "purple")}
                    {getRow("Explosive:", result.explosive + "%", "default", "purple", showExplosive(damageData, resultDamage))}
                    {getRow("Sneak:", result.sneak, "default", "purple", resultDamage.isSneak)}
                    {getRow("Crit:", result.crit, "default", "purple", resultDamage.isCrit)}
                </Card.Body>
                <Card.Footer className="ps-2 pe-2 text-muted">
                    {getRow("Total Damage:", result.total, "default", "red")}
                    {getRow("Explosive:", result.totalExp, "default", "red", showExplosive(damageData, resultDamage))}
                    {getRow("Explosive Crit:", result.totalExpCrit, "default", "red", showExplosive(damageData, resultDamage) && resultDamage.isCrit)}
                </Card.Footer>
            </Card>
        </div>
    );
});

export default DamageDetailsCard;
