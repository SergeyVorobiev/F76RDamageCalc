import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { memo } from 'react';


const WTypeDropdown = memo(function WTypeDropdown({weaponType, setWeaponType, onSelect=null, title=null}) {
    function onSelectCustom(e) {
        setWeaponType(e);
        if (onSelect != null) {
            onSelect(e);
        }
    }
    const customTitle = (title == null) ? weaponType : title;
    return (
        <DropdownButton onSelect={onSelectCustom} id="dropdown-basic-button" title={customTitle}>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Heavy">Heavy</Dropdown.Item>
            <Dropdown.Item eventKey="Shotgun">Shotgun</Dropdown.Item>
            <Dropdown.Item eventKey="Rifle">Rifle</Dropdown.Item>
            <Dropdown.Item eventKey="Pistol">Pistol</Dropdown.Item>
            <Dropdown.Item eventKey="Bow">Bow</Dropdown.Item>
            <Dropdown.Item eventKey="Melee">Melee</Dropdown.Item>
            <Dropdown.Item eventKey="Unarmed">Unarmed</Dropdown.Item>
        </DropdownButton>
    );
});

export default WTypeDropdown;