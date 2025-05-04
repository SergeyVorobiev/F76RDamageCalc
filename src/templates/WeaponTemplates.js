import { memo, useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ModalApplyTemplate from './ModalApplyTemplate';
import ModalCalculateWeapon from './ModalCalculateWeapon';
import ModalCalculateWeapons from './ModalCalculateWeapons';
import ModalTestedWeapon from './ModalTestedWeapon';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import WTypeDropdown from '../helpers/WTypeDropdown';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import TemplateItems from './TemplateItems';
import { FloatButton } from 'antd';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import ModsSetter from '../helpers/mods/ModsSetter';
import getTemplates from '../helpers/TemplatesRegister';
import TemplateTools from './TemplateTools';
import Global from '../helpers/Global';


function buildLicense() {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>Licensing</strong></Popover.Header>
            <Popover.Body>
                Weapon images below were taken from the video game Fallout 76 or from websites created and owned by Bethesda Softworks, the copyright of which is held by Bethesda Softworks, or were released to the press for promotional purposes by the same.
                The use of images to illustrate items of the game concerning the subject of the images in question is believed to qualify as fair use under United States copyright law, as such display does not significantly impede the right of the copyright holder to sell the copyrighted material and is not being used to generate profit.
            </Popover.Body>
        </Popover>
    );
}

const modGroups = new Set();

const weaponIds = {All: []};

export function getModGroups() {
    return modGroups;
}

export function getWeaponIds() {
    return weaponIds;
}

function buildTemplates(modsSetter) {
    console.log("BuildTemplates");
    const templates = JSON.parse(JSON.stringify(getTemplates()));
    if (modGroups.size === 0) {
        TemplateTools.getGroups(templates, modGroups);
    }
    const weaponIdsExists = (weaponIds.All.length > 0);
    for (let i = 0; i < templates.length; i++) {
        const template = templates[i];
        template.index = i;
        if (!weaponIdsExists) {
            const type = template.type[0];
            let weaponIdsByType = weaponIds[type];
            if (!weaponIdsByType) {
                weaponIdsByType = [];
                weaponIds[type] = weaponIdsByType;
            }
            const obj = {id: template.id, apply: template.apply};
            weaponIdsByType.push(obj);
            weaponIds.All.push(obj);
        }
    }
    modsSetter.setTemplatesMods(templates);
    return templates;
}

const WeaponTemplates = memo(function WeaponTemplates(props) {
    console.log("WeaponTemplates");
    const [modalTemplate, setModalTemplate] = useState({template: null, show: false});
    const [modalCalculate, setModalCalculate] = useState({template: null, show: false});
    const [modalCalculates, setModalCalculates] = useState({show: false});
    const [modalTested, setModalTested] = useState({wId: '', show: false});
    const [filterName, setFilterName] = useState("");
    const [weaponType, setWeaponType] = useState("All");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(20);
    const [startIndex, setStartIndex] = useState(0);
    const [alt, setAlt] = useState(Global.isWeaponAlt);
    const [modsSetter, setModsSetter] = useState(null);
    const [templates, setTemplates] = useState([]);
    useEffect(() => {
        const modsSetter = ModsSetter.buildModsSetter(Global.isWeaponAlt);
        setModsSetter(modsSetter);
        setTemplates(buildTemplates(modsSetter));
    }, []);

    function resetPage() {
        setPage(1);
        setStartIndex(0);
    }
    function filterNameChanged(e) {
        setPage(1);
        setStartIndex(0);
        setFilterName(e.target.value);
    }
    function onPageChanged(page, pageSize) {
        setStartIndex(pageSize * (page - 1));
        setPage(page);
        setPageSize(pageSize);
    }
    function onTestClick(e) {
        setModalTested({wId: e.currentTarget.id, show: true});
    }
    function findBestClick(e) {
        setModalCalculates({show: true});
    }
    function onAlt(e) {
        const newAlt = !alt;
        Global.isWeaponAlt = newAlt;
        setAlt(newAlt);
        const modsSetter = ModsSetter.buildModsSetter(newAlt);
        setTemplates(buildTemplates(modsSetter));
        setModsSetter(modsSetter);
    }
    return (
        <>
            <Row className="mt-1 mb-2 pt-1 pb-1 ms-1 me-1">
                <Col className="d-flex justify-content-start">
                    <InputGroup size="sm" className="flex-nowrap">
                        <InputGroup.Text>
                            <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                        <Badge variant="black" pill style={{cursor: "pointer"}}>!</Badge>
                    </OverlayTrigger>
                        </InputGroup.Text>
                        <InputGroup.Text>
                            <b>Alt</b>
                        </InputGroup.Text>
                        <InputGroup.Text>
                            <UCheckbox onChange={onAlt} checked={alt}></UCheckbox>
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col className="d-flex justify-content-end">
                    <Button size="sm" variant="danger" onClick={findBestClick}><strong className="best-button-shadow">Find The Best</strong></Button>
                </Col>
            </Row>
            <ModalTestedWeapon modalTested={modalTested} setModalTested={setModalTested} />
            <ModalApplyTemplate alt={alt} modalTemplate={modalTemplate} setModalTemplate={setModalTemplate} setWSpec={props.setWSpec}></ModalApplyTemplate>
            <ModalCalculateWeapon creatureNamesRef={props.creatureNamesRef} modalCalculate={modalCalculate} setModalCalculate={setModalCalculate} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setAdditionalDamages={props.setAdditionalDamages} setPlayerStats={props.setPlayerStats} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers}></ModalCalculateWeapon>
            <ModalCalculateWeapons creatureNamesRef={props.creatureNamesRef} modalCalculates={modalCalculates} setModalCalculates={setModalCalculates} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setAdditionalDamages={props.setAdditionalDamages} setPlayerStats={props.setPlayerStats} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers}></ModalCalculateWeapons>
            <InputGroup className="ps-1 pe-1 pb-2 flex-nowrap">
                <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType} resetPage={resetPage}></WTypeDropdown>
                <Form.Control placeholder="name / id" style={{width: '10rem'}} maxLength="70" onChange={filterNameChanged} />
            </InputGroup>
            <Accordion className="accordion">
                <TemplateItems templates={templates} modsSetter={modsSetter} onTestClick={onTestClick} onPageChanged={onPageChanged} startIndex={startIndex} pageSize={pageSize} page={page} weaponType={weaponType} filterName={filterName} setModalTemplate={setModalTemplate} setModalCalculate={setModalCalculate}></TemplateItems>
            </Accordion>
            <FloatButton.BackTop style={{ right: 60 }} duration={100} visibilityHeight={2000} />
        </>
    );
});

export default WeaponTemplates;