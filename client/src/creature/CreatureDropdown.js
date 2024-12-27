import { getUniqueDropdownItemsByNames } from '../helpers/DropdownHelpers';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { memo } from 'react';


const CreatureDropdown = memo(function RaceDropdown(props) {
    let title = "Choose a creature";
    if (props.title) {
        title = props.title;
    }
    function onSelect(e) {
        props.setCreatureName(e);
    }
    return (
        <Row className="p-1 mb-2 mt-0">
            <Col className="d-flex justify-content-center">
                <DropdownButton variant="warning" size="sm" onSelect={onSelect} title={<strong>{title}</strong>}>
                    {getUniqueDropdownItemsByNames(props.names)}
                </DropdownButton>
            </Col>
        </Row>
    );
});

export default CreatureDropdown;

