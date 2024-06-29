import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import {Slider, Checkbox} from 'antd';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


function buildPopover(text) {
    return (
    <Popover id="popover-basic" class="popover">
        <Popover.Header as="h3"><strong>Why?</strong></Popover.Header>
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

function ADRow({additionalDamage, updateAdditionalDamages, marks, text=''}) {
    const width = (text === '' || text === null) ? '12rem' : '10rem';
    function slideChanged(e) {
        additionalDamage.value = e;
        updateAdditionalDamages();
    }

    function onChange(e) {
        additionalDamage.is_used = e.target.checked;
        updateAdditionalDamages();
    }

    return (
        <Row>
            <Card className="mb-2 pt-2 pb-2 ps-3 pe-3">
            <Col>
                <InputGroup className="mb-1">
                    <InputGroup.Text style={{ width: width }} >
                        <Checkbox onChange={onChange} checked={additionalDamage.is_used}><strong>{additionalDamage.name}</strong></Checkbox>
                    </InputGroup.Text>
                    {qa(text)}
                </InputGroup>
                <Slider onChange={slideChanged} marks={marks.marks} min={marks.min} max={marks.max} step={marks.step} value={additionalDamage.value} />
            </Col>
            </Card>
        </Row>
    );
}

export default ADRow;