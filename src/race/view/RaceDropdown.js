import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RaceTools from '../RaceTools';
import { memo } from 'react';


function getItems(pairs) {
    const result = [];
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i];
        const value = RaceTools.prepareRaceName(pair.value);
        result.push(<Dropdown.Item key={pair.key} eventKey={pair.key}>{value}</Dropdown.Item>)
    }
    return result;
}

const RaceDropdown = memo(function RaceDropdown(props) {
    let raceName = "Choose a race";
    if (props.raceName) {
        raceName = RaceTools.prepareRaceName(props.raceName);
    }
    function onSelect(e) {
        props.setRaceName(e);
    }
    return (
        <Row className="p-1 mb-2 mt-0">
            <Col className="d-flex justify-content-center">
                <DropdownButton variant='warning' size="sm" onSelect={onSelect} title={<strong>{raceName}</strong>}>
                    {getItems(props.pairs)}
                </DropdownButton>
            </Col>
        </Row>
    );
});

export default RaceDropdown;

