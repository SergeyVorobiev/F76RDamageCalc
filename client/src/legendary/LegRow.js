
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Radio } from 'antd';
import { Slider } from 'antd';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


function buildPopover(text) {
    return (
    <Popover id="popover-basic" class="popover">
        <Popover.Header as="h3"><strong>How?</strong></Popover.Header>
        <Popover.Body class="my-popover m-2">
            {text}
        </Popover.Body>
    </Popover>);
}

function qa(text) {
    if (text === '' || text === null) {
        return (<></>);
    }
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildPopover(text)}>
            <Button variant="danger">?</Button>
        </OverlayTrigger>
    );
}

function LegRow({marks, perk, setLegendary, legendary, answer=null, disabled=false}) {
    function onChange(e) {
        const index = perk.star - 1;
        const id = legendary.current[index];
        legendary[id].is_used = false;
        legendary.current[index] = perk.id;
        perk.is_used = e.target.checked;
        setLegendary({
            ...legendary,
        });
    }
    function slideFinished(e) {
        perk.value = e;
        setLegendary({
            ...legendary,
        });
    }
    const width = (answer) ? "8rem" : "10rem";
    return (
            <Row>
                <Card className="mb-2 pt-2 pb-2 ps-3 pe-3">
                <Col>
                    <InputGroup className="mb-1">
                        <InputGroup.Text style={{ width: width }} >
                            <Radio onChange={onChange} checked={perk.is_used}><strong>{perk.name}</strong></Radio>
                        </InputGroup.Text>
                        {qa(answer)}
                    </InputGroup>
                    <Slider disabled={disabled} onChange={slideFinished} marks={marks} min={perk.min} max={perk.max} step={perk.step} value={perk.value} />
                </Col>
                </Card>
            </Row>
    );
}

export default LegRow;