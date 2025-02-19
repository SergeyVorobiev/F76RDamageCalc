import { getUniqueDropdownItemsByNames } from '../helpers/DropdownHelpers';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { memo } from 'react';


export function CreatureDropdownButton(props) {
    let title = "Choose a creature";
    if (props.title) {
        title = props.title;
    }
    const onSelect = getOnSelect(props.onSelect, props.setCreatureName); // One of them must be specified.
    return (
        <DropdownButton variant="warning" size="sm" onSelect={onSelect} title={<strong>{title}</strong>}>
            {getUniqueDropdownItemsByNames(props.names)}
        </DropdownButton>
    );
}

function getOnSelect(onSelect, setCreatureName) {
    let result = onSelect;
    if (!result) {
        result = (e) => {
            setCreatureName(e);
        };
    }
    return result;
}
const CreatureDropdown = memo(function CreatureDropdown(props) {
    let title = "Choose a creature";
    if (props.title) {
        title = props.title;
    }
    const onSelect = getOnSelect(props.onSelect, props.setCreatureName); // One of them must be specified.
    let className = "p-1 mb-2 mt-0";
    if (props.className) {
        className = props.className;
    }
    return (
        <Row className={className}>
            <Col className="d-flex justify-content-center">
                <DropdownButton variant="warning" size="sm" onSelect={onSelect} title={<strong>{title}</strong>}>
                    {getUniqueDropdownItemsByNames(props.names)}
                </DropdownButton>
            </Col>
        </Row>
    );
});

export default CreatureDropdown;

