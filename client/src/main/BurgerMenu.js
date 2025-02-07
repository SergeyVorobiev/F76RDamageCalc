import Dropdown from 'react-bootstrap/Dropdown';
import { GitHubIcon, SSIcon } from '../icons/Icons';
import { leftRight } from '../helpers/RowBuilder';


function getNameItem(name) {
    return (<div style={{color: "#525252"}}><b><small>{name}</small></b></div>);
}
export default function BurgerMenu(props) {
    return (
        <Dropdown.Menu className="dropdown-menu-end">
            <Dropdown.Item eventKey="1" href="https://github.com/SergeyVorobiev/F76DamageReact">
                {leftRight(getNameItem("Source code"), <div><GitHubIcon /></div>)}
            </Dropdown.Item>
            <div className="m-2" />
            <Dropdown.Item eventKey="2" href="https://github.com/SergeyVorobiev/F76Damage">
                {leftRight(getNameItem("Data parser"), <div><GitHubIcon /></div>)}
            </Dropdown.Item>
            <div className="m-2" />
            <Dropdown.Item eventKey="3" href="https://docs.google.com/spreadsheets/d/1ww8BxPfFMoS6idciAYDvekcAP9siSKzTDqFFtZ6Gs88">
                {leftRight(getNameItem("Data sheet"), <div><SSIcon /></div>)}
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" href="https://www.flaticon.com">
                {<div style={{color: "#454c46"}}><b><small>Flaticon</small></b></div>}
            </Dropdown.Item>
        </Dropdown.Menu>
    );
}