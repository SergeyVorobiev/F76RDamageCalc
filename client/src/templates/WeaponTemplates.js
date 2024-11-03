import { memo, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ModalApplyTemplate from './ModalApplyTemplate';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import WTypeDropdown from '../helpers/WTypeDropdown';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';
import TemplateItems from './TemplateItems';
import { FloatButton } from 'antd';


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

const WeaponTemplates = memo(function WeaponTemplates({setWeaponName, setWSpec}) {
    console.log("WeaponTemplates");
    const [modalTemplate, setModalTemplate] = useState({template: null, show: false});
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
    // const key = (modalTemplate.template) ? modalTemplate.template.name : "";
    return (
        <>
            <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                <Badge className="mb-3 ms-4" variant="black" pill>!</Badge>
            </OverlayTrigger>
            <ModalApplyTemplate modalTemplate={modalTemplate} setModalTemplate={setModalTemplate} setWeaponName={setWeaponName} setWSpec={setWSpec}></ModalApplyTemplate>
            <InputGroup className="ps-1 pe-1 pb-3 flex-nowrap">
                <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType} resetPage={resetPage}></WTypeDropdown>
                <Form.Control style={{width: '10rem'}} maxLength="70" onChange={filterNameChanged} />
            </InputGroup>
            <Accordion className="accordion">
                <TemplateItems onPageChanged={onPageChanged} startIndex={startIndex} pageSize={pageSize} page={page} weaponType={weaponType} filterName={filterName} setModalTemplate={setModalTemplate}></TemplateItems>
            </Accordion>
            <FloatButton.BackTop style={{ right: 60 }} duration={100} visibilityHeight={2000} />
        </>
    );
});

export default WeaponTemplates;