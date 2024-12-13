import { memo, useState } from 'react';
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
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
    return (
        <>
            <Row className="p-auto m-auto mb-2">
                <Col className="m-auto p-2 d-flex justify-content-start">
                    <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                        <Badge variant="black" pill>!</Badge>
                    </OverlayTrigger>
                </Col>
                <Col className="m-auto p-1 pe-2 d-flex justify-content-end">
                    <Button size="sm" variant="danger" onClick={findBestClick}><strong className="best-button-shadow">Find The Best</strong></Button>
                </Col>
            </Row>
            <ModalTestedWeapon modalTested={modalTested} setModalTested={setModalTested} />
            <ModalApplyTemplate modalTemplate={modalTemplate} setModalTemplate={setModalTemplate} setWSpec={props.setWSpec}></ModalApplyTemplate>
            <ModalCalculateWeapon modalCalculate={modalCalculate} setModalCalculate={setModalCalculate} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setAdditionalDamages={props.setAdditionalDamages} setPlayerStats={props.setPlayerStats} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers}></ModalCalculateWeapon>
            <ModalCalculateWeapons modalCalculates={modalCalculates} setModalCalculates={setModalCalculates} setWSpec={props.setWSpec} setBoostDamage={props.setBoostDamage} setPlayer={props.setPlayer} setExtraDamage={props.setExtraDamage} setFoodPref={props.setFoodPref} setStuffBoost={props.setStuffBoost} setAdditionalDamages={props.setAdditionalDamages} setPlayerStats={props.setPlayerStats} setMagazines={props.setMagazines} setBobbleHeads={props.setBobbleHeads} setFood={props.setFood} setDrink={props.setDrink} setPsycho={props.setPsycho} setSerum={props.setSerum} setOthers={props.setOthers}></ModalCalculateWeapons>
            <InputGroup className="ps-1 pe-1 pb-2 flex-nowrap">
                <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType} resetPage={resetPage}></WTypeDropdown>
                <Form.Control style={{width: '10rem'}} maxLength="70" onChange={filterNameChanged} />
            </InputGroup>
            <Accordion className="accordion">
                <TemplateItems onTestClick={onTestClick} onPageChanged={onPageChanged} startIndex={startIndex} pageSize={pageSize} page={page} weaponType={weaponType} filterName={filterName} setModalTemplate={setModalTemplate} setModalCalculate={setModalCalculate}></TemplateItems>
            </Accordion>
            <FloatButton.BackTop style={{ right: 60 }} duration={100} visibilityHeight={2000} />
        </>
    );
});

export default WeaponTemplates;