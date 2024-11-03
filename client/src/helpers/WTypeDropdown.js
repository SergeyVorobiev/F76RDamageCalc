import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { memo } from 'react';
import { addText, gun, rifle, shotgun, bow, melee, heavy, unarmed, thrown } from '../helpers/Emoji';


const WTypeDropdown = memo(function WTypeDropdown({weaponType, setWeaponType, resetPage=null, onSelect=null, title=null}) {
    function onSelectCustom(e) {
        setWeaponType(e);
        if (resetPage) {
            resetPage();
        }
        if (onSelect) {
            onSelect(e);
        }
    }
    const customTitle = (title) ? title : weaponType;
    return (
        <DropdownButton onSelect={onSelectCustom} id="dropdown-basic-button" title={customTitle}>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Heavy">{addText(heavy, '1.1rem', '0.27rem', "Heavy")}</Dropdown.Item>
            <Dropdown.Item eventKey="Shotgun">{addText(shotgun, '1.1rem', '0.27rem', "Shotgun")}</Dropdown.Item>
            <Dropdown.Item eventKey="Rifle">{addText(rifle, '1.1rem', '0.27rem', "Rifle")}</Dropdown.Item>
            <Dropdown.Item eventKey="Pistol">{addText(gun, '1.1rem', '0.27rem', "Pistol")}</Dropdown.Item>
            <Dropdown.Item eventKey="Bow">{addText(bow, '1.1rem', '0.27rem', "Bow")}</Dropdown.Item>
            <Dropdown.Item eventKey="Melee">{addText(melee, '1.1rem', '0.27rem', "Melee")}</Dropdown.Item>
            <Dropdown.Item eventKey="Unarmed">{addText(unarmed, '1.1rem', '0.27rem', "Unarmed")}</Dropdown.Item>
            <Dropdown.Item eventKey="Thrown">{addText(thrown, '1.1rem', '0.27rem', "Thrown")}</Dropdown.Item>
        </DropdownButton>
    );
});

export default WTypeDropdown;

export function getRowWithImage(name, customName=null, maxHeight='1.1rem', space='0.27rem') {
    if (!customName) {
        customName = name;
    }
    switch(name) {
        case "Heavy":
            return addText(heavy, maxHeight, space, customName);
        case "Shotgun":
            return addText(shotgun, maxHeight, space, customName);
        case "Rifle":
            return addText(rifle, maxHeight, space, customName);
        case "Pistol":
            return addText(gun, maxHeight, space, customName);
        case "Bow":
            return addText(bow, maxHeight, space, customName);
        case "Melee":
            return addText(melee, maxHeight, space, customName);
        case "Unarmed":
            return addText(unarmed, maxHeight, space, customName);
        case "Thrown":
            return addText(thrown, maxHeight, space, customName);
        default:
            return customName;
    }
};

export function getImage(name, maxHeight='1.3rem') {
    switch(name) {
        case "Heavy":
            return heavy(maxHeight);
        case "Shotgun":
            return shotgun(maxHeight);
        case "Rifle":
            return rifle(maxHeight);
        case "Pistol":
            return gun(maxHeight);
        case "Bow":
            return bow(maxHeight);
        case "Melee":
            return melee(maxHeight);
        case "Unarmed":
            return unarmed(maxHeight);
        case "Thrown":
            return thrown(maxHeight);
        default:
            return "";
    }
}