import Row from 'react-bootstrap/Row';
import { numberToString } from '../helpers/StringHelpers';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import Stack from 'react-bootstrap/Stack';
import { keyValueBadge } from '../helpers/RowBuilder';
import AdditionalDView from '../helpers/AdditionalDView';
import LegendaryView from '../helpers/LegendaryView';
import CritView from '../helpers/CritView';
import { assembleFireRate } from '../damage/weapon/WeaponSpecsAssembler';
import Col from 'react-bootstrap/Col';


function buildInfoRows(info, badgeStyle, badgesRow) {
    const filteredInfo = [];
    const filteredMarks = [];
    for (let i = 1; i < info.length; i += 2) {
        if (info[i] !== "") {
            filteredMarks.push(info[i - 1]);
            filteredInfo.push(info[i]);
        }
    }
    let size = filteredInfo.length;
    let k = badgesRow.length;
    for (let i = 0; i < size; i += 3) {
        if ((i + 1) === size) {
            badgesRow.push(resultBadges(k++, badgeStyle, "-", "-", filteredMarks[i], filteredInfo[i], "-", "-"));
        } else if ((i + 2) === size) {
            badgesRow.push(resultBadges(k++, badgeStyle, filteredMarks[i], filteredInfo[i], "-", "-", filteredMarks[i + 1], filteredInfo[i + 1]));
        } else {
            badgesRow.push(resultBadges(k++, badgeStyle, filteredMarks[i], filteredInfo[i], filteredMarks[i + 1], filteredInfo[i + 1], filteredMarks[i + 2], filteredInfo[i + 2]));
        }
    }
    const badgesCols = [];
    size = badgesRow.length;
    for (let i = 0; i < size; i += 2) {
        if ((i + 1) === size) {
            badgesCols.push(
                <Col key={i}>
                    <Row>
                        {badgesRow[i]}
                    </Row>
                </Col>
            );
        } else {
            badgesCols.push(
                <Col key={i}>
                    <Row>
                        {badgesRow[i]}
                        {badgesRow[i + 1]}
                    </Row>
                </Col>
            );
        }
    }
    return badgesCols;
}

function resultBadges(key, style, left1, right1, left2, right2, left3, right3) {
    return (
        <div key={key} className="col d-flex justify-content-center">
            <Stack className='pb-1' direction="horizontal" gap={1}>
                {keyValueBadge(style, '6.5rem', left1,  right1)}
                {keyValueBadge(style, '6.5rem', left2,  right2)}
                {keyValueBadge(style, '6.5rem', left3,  right3)}
            </Stack>
        </div>
    );
}

export default function WeaponTechnicals(props) {
    const template = props.template;
    let legBonus = 0;
    for (const name in template.legBonusMult) {
        legBonus += template.legBonusMult[name];
    }
    legBonus += template.bonusMult[1];
    const fireRateText = numberToString(assembleFireRate(template.type[1], template.tags, template.isAuto[1], template.speed[1], template.triggerDelay[1], template.autoDelay[1], template.attackDelay[1]), 2);
    const iSize = '0.75rem';
    const badgeStyle = "badge bg-lite-outline m-1";
    let crit = (template.crMult[1] - template.crMult[0]) * 100;
    let sneak = (template.sneak[1] - template.sneak[0]) * 100;
    const critText = (crit === 0) ? "" : ((crit > 0) ? "+" + crit.toFixed(1) + "%" : "-" + crit.toFixed(1) + "%");
    const expText = (template.exp[1] === 0) ? "" : "+" + template.exp[1].toFixed(1) +"%";
    const strText = (template.strengthBoost[1] === 0) ? "" : "+" + template.strengthBoost[1].toFixed(1) + "%";
    const sneakText = (sneak === 0) ? "" : ((sneak > 0) ? "+" + sneak.toFixed(1) + "%" : "-" + sneak.toFixed(1) + "%");
    const bashText = (template.bash[1] === 0) ? "" : "+" + template.bash[1].toFixed(1) + "%";
    const aaText = (template.antiArmor[1] === 0) ? "" : "+" + template.antiArmor[1].toFixed(1) + "%";
    const bonusText = (legBonus === 0) ? "" : (((legBonus) ? "" : "+") + ((legBonus) * 100).toFixed(1) + "%");
    const crippleText = (template.cripple[1] === 0) ? "" : "+" + template.cripple[1].toFixed(1) + "%";
    const batteryText = (template.chargePowerTime[1] === 0) ? "" : template.chargePowerTime[1].toFixed(2) + " s";
    const powerText = (template.powerAttack[1] === 0) ? "" : "+" + (template.powerAttack[1]).toFixed(1) + "%";
    const attackDelayText = (template.startAttackDelay[1] === 0) ? "" : (template.startAttackDelay[1]).toFixed(1) + " s";
    const info = ["☠️", critText, "💣", expText, "💪", strText, "🐍", sneakText, "🌪️", bashText, "🛡️", aaText, "🚀", bonusText, "🦵", crippleText, "🔋", batteryText, "🪓", powerText, "⏱️", attackDelayText];
    let badgesRow = [];
    let shotSizeIcon = bullet(iSize);
    let fireRateIcon = fireRate(iSize);
    let reloadIcon = "⌛";
    let reloadTime = template.reloadTime[1].toFixed(2) + " s";
    let capacityIcon = ammo(iSize);
    let capacity = template.capacity[1].toFixed(0);
    if (template.type[1] === "Melee" || template.type[1] === "Unarmed") {
        shotSizeIcon = "👊🏼";
        fireRateIcon = "🏏";
        reloadIcon = "-";
        reloadTime = "-";
        capacityIcon = "-";
        capacity = "-";
    }
    badgesRow.push(resultBadges(0, badgeStyle, shotSizeIcon, template.shotSize[1].toFixed(0), reloadIcon, reloadTime, fireRateIcon, fireRateText));
    badgesRow.push(resultBadges(1, badgeStyle, capacityIcon, capacity, "🏃", template.ap[1].toFixed(2), "🏋", template.weight[1].toFixed(2)));
    const infoRows = buildInfoRows(info, badgeStyle, badgesRow);
    return (
        <>
            <Row className="d-flex justify-content-center">
                {infoRows}
            </Row>
            <AdditionalDView template={template}></AdditionalDView>
            <CritView template={template}></CritView>
            <LegendaryView template={template}></LegendaryView>
        </>
    );
}