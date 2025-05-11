import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag, Divider, Collapse } from 'antd';
import Button from 'react-bootstrap/Button';
import { getRowWithImage } from '../helpers/WTypeDropdown'
import { getImageElement } from '../helpers/WeaponImages'
import { useState, memo } from 'react';
import { getTemplateCopyById } from '../helpers/TemplatesRegister';
import AmmoView from '../helpers/AmmoView';
import ProjView from '../helpers/ProjView';
import GeneralView from '../helpers/GeneralView';
import DamageOverview from '../helpers/DamageOverview';
import ModRow from './ModRow';
import Container from 'react-bootstrap/Container';
import { WarningPopover } from '../helpers/WarningPopover';
import { isTested } from './TestedWeapons';
import { weaponRestrictions } from '../helpers/WeaponRestrictions';
import WeaponTechnicals from '../damage/WeaponTechnicals';
import WeaponToastTechnicals from '../damage/WeaponToastTechnicals';


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

const WeaponTemplate = memo(function WeaponTemplate({modsSetter, template, setModalTemplate, setModalCalculate, onTestClick}) {
    console.log("WeaponTemplate: " + template.index + " " + template.name);
    const [changed, setChanged] = useState(false);
    const [resetButtonActive, setResetButtonActive] = useState(false);
    const [showTechnicalToast, setShowTechnicalToast] = useState(false);
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

    function onClickTechnical(e) {
        setShowTechnicalToast(!showTechnicalToast);
    }

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
                        <div className="col d-flex justify-content-center p-1 pb-2">
                            <Button size="sm" variant="blue-white-border" onClick={onClickTechnical}>⌞ ⌝</Button>
                        </div>
                         <div className="col d-flex justify-content-end mb-2 pt-1 pe-1 debug-type-WeaponTemplate.js">
                            <Tag bordered={true} color="volcano" className="shadow-outline3"><h6 className="m-0 p-1"><strong>{getRowWithImage(template.type[1])}</strong></h6></Tag>
                       </div>
                    </Row>
                    <Divider className='mt-1 mb-2'></Divider>
                    <WeaponTechnicals template={template} />
                    <WeaponToastTechnicals show={showTechnicalToast} setShow={setShowTechnicalToast} template={template} />
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