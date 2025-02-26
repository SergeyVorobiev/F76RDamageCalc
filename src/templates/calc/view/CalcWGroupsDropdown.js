import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getRowWithImage } from '../../../helpers/WTypeDropdown';


export default function CalcWGroupsDropdown({type, setType}) {
    function onSelect(e) {
        setType(e);
    };
    return (
        <Row className="p-2 mb-2 mt-1">
            <Col className="d-flex justify-content-center">
                <DropdownButton size="sm" variant="info" onSelect={onSelect} id="dropdown-basic-button" title={getRowWithImage(type)}>
                    <Dropdown.Item eventKey="All">All</Dropdown.Item>
                    <Dropdown.Item eventKey="Heavy">{getRowWithImage("Heavy")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Shotgun">{getRowWithImage("Shotgun")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Rifle">{getRowWithImage("Rifle")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Pistol">{getRowWithImage("Pistol")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Bow">{getRowWithImage("Bow")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Melee">{getRowWithImage("Melee")}</Dropdown.Item>
                    <Dropdown.Item eventKey="Unarmed">{getRowWithImage("Unarmed")}</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
    );
}