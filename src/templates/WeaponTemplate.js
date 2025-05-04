import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { Tag, Divider, Collapse } from 'antd';
import Button from 'react-bootstrap/Button';
import { keyValueBadge } from '../helpers/RowBuilder';
import { getRowWithImage } from '../helpers/WTypeDropdown'
import { getImageElement } from '../helpers/WeaponImages'
import { useState, memo } from 'react';
import { getTemplateCopyById } from '../helpers/TemplatesRegister';
import AmmoView from '../helpers/AmmoView';
import ProjView from '../helpers/ProjView';
import GeneralView from '../helpers/GeneralView';
import AdditionalDView from '../helpers/AdditionalDView';
import LegendaryView from '../helpers/LegendaryView';
import CritView from '../helpers/CritView';
import DamageOverview from '../helpers/DamageOverview';
import ModRow from './ModRow';
import Container from 'react-bootstrap/Container';
import { WarningPopover } from '../helpers/WarningPopover';
import { isTested } from './TestedWeapons';
import { weaponRestrictions } from '../helpers/WeaponRestrictions';
import { assembleFireRate } from '../damage/weapon/WeaponSpecsAssembler';
import { numberToString } from '../helpers/StringHelpers';


function getApplyButton(template, setModalTemplate, setModalCalculate, onTestClick) {
    function testedMedal(wId) {
        if (isTested(wId)) {
            return (
                <Button id={wId} variant="white" className="p-0 ps-2 pe-2 m-0" onClick={onTestClick}>
                    <div style={{fontSize: '1.5rem'}}>🎖️</div>
                </Button>
            );
        }
        return (<></>);
    }
    function restrictions(wId) {
        const version = weaponRestrictions[wId];
        if (version) {
            return (
                <WarningPopover element={(
                    <Button variant="white" className="p-0 ps-2 pe-2 m-0">
                        <div style={{fontSize: '1.5rem'}}>📛</div>
                    </Button>
                )} message={version} header={'Restrictions'} />
            );
        }
        return (<></>);
    }
    if (template.apply) {
        return (
            <Row className="mt-3">
                <Col className="col-2 d-flex justify-content-center">
                    {restrictions(template.id)}
                </Col>
                <Col className="col-4 d-flex justify-content-center">
                    <Button style={{minWidth: '6rem'}} onClick={(e) => setModalTemplate({template: template, show: true})}>Choose</Button>
                </Col>
                <Col className="col-4 d-flex justify-content-center">
                    <Button style={{minWidth: '6rem'}} onClick={(e) => setModalCalculate({template: template, show: true})}>Calculate</Button>
                </Col>
                <Col className="col-2 justify-content-center center-text">
                    {testedMedal(template.id)}
                </Col>
            </Row>
        );
    }
    return (<></>);
}

function getResetButton(template, modsSetter, itemsLength, resetButtonActive, setResetButtonActive) {
    if (itemsLength === 0 || !resetButtonActive) {
        return (<></>);
    }
    function onClick(e) {
        const cleanTemplate = getTemplateCopyById(template.id);
        for (const property in cleanTemplate) {
            template[property] = cleanTemplate[property];
        }
        modsSetter.setTemplatesMods([template]);
        setResetButtonActive(!resetButtonActive);
    }
    return (
        <span className='d-flex justify-content-center'>
            <Button size="sm" variant="warning" className='ms-0 mt-0 mb-3' onClick={onClick}>Reset</Button>
        </span>
    );
}

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
};

const WeaponTemplate = memo(function WeaponTemplate({modsSetter, template, setModalTemplate, setModalCalculate, onTestClick}) {
    console.log("WeaponTemplate: " + template.index + " " + template.name);
    const [changed, setChanged] = useState(false);
    const [resetButtonActive, setResetButtonActive] = useState(false);
    function modRow(index, modsSameType, checkMod) {
        return (
           <ModRow key={index} weaponId={template.id} index={index} modsSameType={modsSameType} checkMod={checkMod} defMods={template.defMods} />
        );
    };

    function checkMod(e, weaponId, modData, modSameType, modsSameType) {
        const check = !modSameType[1];

        // Disable mods because only one mod of the same type can be selected at the same time.
        for (let i = 0; i < modsSameType.length; i++) {
            modsSameType[i][1] = false;
        }
        modSameType[1] = check;
        modsSetter.cleanTemplateAndApplyCurrentMods(template);
        setChanged(!changed);
        setResetButtonActive(true);
    };
    let result = [];
    let items = [];

    // All mods
    if (!template.unverified) {
        const mods = template.allMods;
        let i = 0;
        for (const property in mods) {
            const modsSameType = mods[property];
            let children = [];

            // Modes of one type
            for (let j = 0; j < modsSameType.length; j++) {
                children.push(modRow(j, modsSameType, checkMod));
            }
            const item = {
                    key: i,
                    label: property,
                    children: children,
            }
            items.push(item);
            i += 1;
        }
    }
    let divider = (<Divider className='m-1 p-1'>Modifications</Divider>);
    if (items.length === 0) {
        divider = (<></>);
    } else {
        result.push(<Collapse accordion key={template.index} items={items} />);
    }
    let legBonus = 0;
    for (const name in template.legBonusMult) {
        legBonus += template.legBonusMult[name];
    }
    legBonus += template.bonusMult[1];
    const fireRateText = numberToString(assembleFireRate(template.type[1], template.tags, template.isAuto[1], template.speed[1], template.triggerDelay[1], template.autoDelay[1], template.attackDelay[1]), 2);
    const iSize = '0.75rem';
    const badgeStyle = "badge bg-lite-outline m-1";
    const critText = (template.crit[1] === 0) ? "" : "+" + template.crit[1].toFixed(1) + "%";
    const expText = (template.exp[1] === 0) ? "" : "+" + template.exp[1].toFixed(1) +"%";
    const strText = (template.strengthBoost[1] === 0) ? "" : "+" + template.strengthBoost[1].toFixed(1) + "%";
    const sneakText = (template.sneak[1] === 0) ? "" : "+" + template.sneak[1].toFixed(1) + "%";
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
        <div className="p-1 debug-item-WeaponTemplate.js" key={template.id} id={template.id} title={template.name}>
            <Accordion.Item eventKey={template.id} className="p-1 m-0 out-accordion debug2-WeaponTemplate.js">
                <Accordion.Button className='p-0 ps-2 pe-3 m-0 out-accordion' style={{height: '3rem'}}>
                    <Container fluid className="p-0 m-0">
                        <Row className="p-0 m-0">
                            <Col className="p-0 ps-0 m-0 center-text">
                                {getImageElement(template.iconName[template.type[1]], '2.9rem')}
                                <strong className="ps-4">{template.name}</strong>
                            </Col>
                        </Row>
                    </Container>
                </Accordion.Button>
                <Accordion.Body className="p-1">
                    <Row>
                        <div className="col d-flex justify-content-start debug-level-WeaponTemplate.js mb-2 pt-1">
                            <Tag bordered={true} color="default" className="shadow-outline2"><h6 className="m-0 p-1"><strong>Level: {template.level}</strong></h6></Tag>
                        </div>
                         <div className="col d-flex justify-content-end mb-2 pt-1 pe-1 debug-type-WeaponTemplate.js">
                            <Tag bordered={true} color="volcano" className="shadow-outline3"><h6 className="m-0 p-1"><strong>{getRowWithImage(template.type[1])}</strong></h6></Tag>
                       </div>
                    </Row>
                    <Divider className='mt-1 mb-2'></Divider>
                    <Row className="d-flex justify-content-center">
                        {infoRows}
                    </Row>
                    <AdditionalDView template={template}></AdditionalDView>
                    <CritView template={template}></CritView>
                    <LegendaryView template={template}></LegendaryView>
                    <Divider className='mt-2 mb-2'></Divider>
                    <GeneralView template={template}></GeneralView>
                    <AmmoView className="pt-2" ammoId={template.ammoId[1]}></AmmoView>
                    <ProjView className="pt-2" projIds={template.projId[1]}></ProjView>
                    <div className="pt-2" />
                    <DamageOverview damageObj={template.damageData}></DamageOverview>
                    {divider}
                    {getResetButton(template, modsSetter, items.length, resetButtonActive, setResetButtonActive)}
                    {result}
                    {getApplyButton(template, setModalTemplate, setModalCalculate, onTestClick)}
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default WeaponTemplate;