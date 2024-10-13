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
import { modsSetter } from '../templates/TemplateItems';
import { WarningPopover } from '../helpers/WarningPopover';
import { testedWeapons } from '../helpers/TestedWeapons';
import { weaponRestrictions } from '../helpers/WeaponRestrictions';


function getApplyButton(template, setModalTemplate) {
    function testedMedal(wId) {
        const version = testedWeapons[wId];
        if (version) {
            return (
                <WarningPopover element={(
                    <Button variant="white" className="p-0 ps-2 pe-2 m-0">
                        <div style={{fontSize: '1.5rem'}}>🎖️</div>
                    </Button>
                )} message={version} header={'Tested'} />
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
                <Col className="col-2">
                    {restrictions(template.id)}
                </Col>
                <Col className="col-8 d-flex justify-content-center">
                    <Button onClick={(e) => setModalTemplate({template: template, show: true})}>Apply</Button>
                </Col>
                <Col className="col-2 justify-content-end center-text pe-4">
                    {testedMedal(template.id)}
                </Col>
            </Row>
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

const WeaponTemplate = memo(function WeaponTemplate({modsSetter, template, setModalTemplate}) {
    // console.log("WeaponTemplate: " + template.index);
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
    const badgeStyle = "badge bg-lite-outline";
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
                                {resultBadges(badgeStyle, bullet(iSize), template.shotSize[1].toFixed(0), "⌛", template.reloadTime[1].toFixed(2) + " s", fireRate(iSize), fireRateText)}
                                {resultBadges(badgeStyle, ammo(iSize), template.capacity[1].toFixed(0), "🛡️", "+" + template.antiArmor[1].toFixed(1) + "%", "💪", "+" + template.strengthBoost[1].toFixed(1) + "%")}
                            </Row>

                        </Col>
                        <Col>
                            <Row>
                                {resultBadges(badgeStyle, "☠️", "+" + template.crit[1].toFixed(1) + "%", "💣", "+" + template.exp[1].toFixed(1) +"%", "🏋", template.weight[1].toFixed(2))}
                                {resultBadges(badgeStyle, "🐍", "+" + template.sneak[1].toFixed(1) + "%", "🌪️", "+" + template.bash[1].toFixed(1) + "%", "🏃", template.ap[1].toFixed(2))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges(badgeStyle, "🚀", "+" + (template.bonusMult[1] * 100).toFixed(1) + "%", "🦵", "+" + template.cripple[1].toFixed(1) + "%", "🔋", template.chargeTime[1].toFixed(2) + " s")}
                                {resultBadges(badgeStyle, "-", "-", "🪓", "+" + (template.powerAttack[1] * 100).toFixed(1) + "%", "-", "-")}
                            </Row>
                        </Col>
                    </Row>
                    <AdditionalDView template={template}></AdditionalDView>
                    <CritView crits={template.crSpellId[1]} weapId={template.id}></CritView>
                    <LegendaryView template={template}></LegendaryView>
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
});

export default WeaponTemplate;