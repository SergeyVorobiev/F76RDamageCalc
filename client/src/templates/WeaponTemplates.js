import { memo, useEffect, useState } from 'react';
import WeaponTemplate from './WeaponTemplate';
import Accordion from 'react-bootstrap/Accordion';
import ModalApplyTemplate from './ModalApplyTemplate';
import getTemplates from '../helpers/TemplatesRegister';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import WTypeDropdown from '../helpers/WTypeDropdown';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';


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

const WeaponTemplates = memo(function WeaponTemplates({setWeaponName, setDamage, setWSpec}) {
    console.log("WeaponTemplates");

    const [templates, setTemplates] = useState([]);
    const [modalTemplate, setModalTemplate] = useState({id: -1, show: false});
    const [filterName, setFilterName] = useState("");
    const [weaponType, setWeaponType] = useState("All");

    useEffect(() => {
        const templates = getTemplates();
        for (let i = 0; i < templates.length; i++) {
            templates[i].index = i;
        }
        setTemplates(templates);
    }, []);

    const filterByName = (item) => {
        if (filterName === "" || filterName === null) {
            return true;
        }
        return item.name.includes(filterName);
    };

    const filterByType = (item) => {
        if (weaponType === "All") {
            return true;
        }
        return item.type.includes(weaponType);
    }

    const items = templates.filter(filterByType).filter(filterByName).map((template) => <WeaponTemplate key={template.index} index={template.index} templates={templates} setTemplates={setTemplates} setModalTemplate={setModalTemplate}></WeaponTemplate>)
    return (
        <>
            <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildLicense()}>
                <Badge className="mb-3 ms-4" variant="black" pill>!</Badge>
            </OverlayTrigger>
            <ModalApplyTemplate modalTemplate={modalTemplate} setModalTemplate={setModalTemplate} templates={templates} setWeaponName={setWeaponName} setDamage={setDamage} setWSpec={setWSpec}></ModalApplyTemplate>
            <InputGroup className="ps-1 pe-1 pb-3 flex-nowrap">
                <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType}></WTypeDropdown>
                <Form.Control style={{width: '10rem'}} maxLength="65" onChange={(e) => setFilterName(e.target.value)} />
            </InputGroup>
            <Accordion class="accordion">
                {items}
            </Accordion>
        </>
    );
});

export default WeaponTemplates;