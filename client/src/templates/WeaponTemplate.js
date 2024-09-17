import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { Tag, Divider, Collapse } from 'antd';
import Button from 'react-bootstrap/Button';
import { keyValueBadge } from '../helpers/RowBuilder';
import { getRowWithImage } from '../helpers/WTypeDropdown'
import { getImageElement } from '../helpers/WeaponImages'
import { useState } from 'react';
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
import { modsSetter } from '../templates/TemplateItems';
import WarningPopover from '../helpers/WarningPopover';


function getApplyButton(template, setModalTemplate) {
    if (template.apply) {
        return (
        <>
            <div className='d-flex justify-content-center'>
                <Button className='ms-0 mt-3 mb-0' disabled onClick={(e) => setModalTemplate({template: template, show: true})}>Apply</Button>
            </div>
            <div className='d-flex justify-content-center mt-2'>
                <WarningPopover variant={"danger"} message={"Temporarily Unavailable"} sign={"!"}></WarningPopover>
            </div>
        </>
        );
    }
    return (<></>);
}

function getResetButton(template, itemsLength, resetButtonActive, setResetButtonActive) {
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

export default function WeaponTemplate({modsSetter, template, setModalTemplate}) {
    console.log("WeaponTemplate: " + template.index);
    const [changed, setChanged] = useState(false);
    const [resetButtonActive, setResetButtonActive] = useState(false);
    const index = template.index;

    function modRow(index, modsSameType, checkMod) {
        return (
           <ModRow key={index} weaponId={template.id} index={index} modsSameType={modsSameType} checkMod={checkMod} defMods={template.defMods}>
           </ModRow>
        );
    };

    function resultBadges(style, left1, right1, left2, right2, left3, right3) {
        return (
            <div class="col d-flex justify-content-center">
                <Stack className='pb-1' direction="horizontal" gap={1}>
                    {keyValueBadge(style, '6.5rem', left1,  right1)}
                    {keyValueBadge(style, '6.5rem', left2,  right2)}
                    {keyValueBadge(style, '6.5rem', left3,  right3)}
                </Stack>
            </div>
        );
    };

    function checkMod(e, weaponId, modData, modSameType, modsSameType) {
        const check = !modSameType[1];

        // Disable mods because only one mod of the same type can be selected at the same time.
        for (let i = 0; i < modsSameType.length; i++) {
            modsSameType[i][1] = false;
        }
        modSameType[1] = check;
        modsSetter.setCleanTemplateMods(template);
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
                children.push(<>{modRow(j, modsSameType, checkMod)}</>);
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
        result.push(<></>);
    } else {
        result.push(<Collapse accordion key={template['id']} items={items} />);
    }
    const fireRateText = (template.isAuto[1]) ? template.autoRate[1].toFixed(2) : (10 / template.manualRate[1]).toFixed(2);
    const iSize = '0.75rem';
    let expProj = template.projExp[1];
    return (
        <div className="ps-1 pe-1 pt-1 pb-1" key={index} id={template.id} title={template.name}>
            <Accordion.Item key={index} eventKey={index} className="p-1 m-0 out-accordion">
                <Accordion.Button className='p-0 ps-2 pe-3 m-0 out-accordion'>
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
                        <div class="col d-flex justify-content-start mb-2 pt-1">
                            <Tag bordered={true} color="default"><h6 className="m-0 p-1"><strong>Level: {template.level}</strong></h6></Tag>
                        </div>
                         <div class="col d-flex justify-content-end mb-2 pt-1 pe-1">
                            <Tag bordered={true} color="volcano"><h6 className="m-0 p-1"><strong>{getRowWithImage(template.type[1])}</strong></h6></Tag>
                       </div>
                    </Row>
                    <Divider className='mt-1 mb-2'></Divider>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-ballistic", '💥 B', template.bbDamage[1].toFixed(2), '💥 M', template.bmDamage[1].toFixed(2), '💥 T', template.btDamage[1].toFixed(2))}
                                {resultBadges("badge bg-energy", '⚡ B', template.ebDamage[1].toFixed(2), '⚡ M', template.emDamage[1].toFixed(2),  '⚡ T', template.etDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-fire", '🔥 B', template.fbDamage[1].toFixed(2), '🔥 M', template.fmDamage[1].toFixed(2), '🔥 T', template.ftDamage[1].toFixed(2))}
                                {resultBadges("badge bg-poison", '☣️ B', template.pbDamage[1].toFixed(2), '☣️ M', template.pmDamage[1].toFixed(2), '☣️ T', template.ptDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-cold", '❄️️ B', template.cbDamage[1].toFixed(2), '❄️ M', template.cmDamage[1].toFixed(2), '❄️ T', template.ctDamage[1].toFixed(2))}
                                {resultBadges("badge bg-rad", '☢️ B', template.rbDamage[1].toFixed(2), '☢️️ M', template.rmDamage[1].toFixed(2), '☢️ T', template.rtDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-lite", bullet(iSize), template.shotSize[1].toFixed(0), "⌛", template.reloadTime[1].toFixed(2), fireRate(iSize), fireRateText)}
                                {resultBadges("badge bg-lite", ammo(iSize), template.capacity[1].toFixed(0), "🛡️", template.antiArmor[1].toFixed(2), "💪", template.strengthBoost[1].toFixed(2))}
                            </Row>

                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-lite", "☠️", template.crit[1].toFixed(2), "💣", template.exp[1].toFixed(2), "🐵", template.cd[1].toFixed(2))}
                                {resultBadges("badge bg-lite", "🐍", template.sneak[1].toFixed(2), "🌪️", template.bash[1].toFixed(2), "🩸", template.bleed[1])}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-lite", "🏋", template.weight[1].toFixed(2), "🏃", template.ap[1].toFixed(2), "🧨", expProj.toFixed(2))}
                            </Row>
                        </Col>
                    </Row>
                    <AdditionalDView adDamage={template.adDamage}></AdditionalDView>
                    <LegendaryView template={template}></LegendaryView>
                    <CritView crits={template.crSpellId[1]} weapId={template.id}></CritView>
                    <Divider className='mt-2 mb-2'></Divider>
                    <GeneralView template={template}></GeneralView>
                    <AmmoView className="pt-2" ammoId={template.ammoId[1]}></AmmoView>
                    <ProjView className="pt-2" projId={template.projId[1]}></ProjView>
                    <div className="pt-2" />
                    <DamageOverview damageData={template.damageData}></DamageOverview>
                    {divider}
                    {getResetButton(template, items.length, resetButtonActive, setResetButtonActive)}
                    {result}
                    {getApplyButton(template, setModalTemplate)}
                </Accordion.Body>

            </Accordion.Item>
        </div>
    );
};