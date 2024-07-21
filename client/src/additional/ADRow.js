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
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>Why?</strong></Popover.Header>
            <Popover.Body>
                {text}
            </Popover.Body>
        </Popover>
    );
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

function addIconName(name) {
    switch(name) {
        case "Ballistic BDB":
            return "💥 BDB";
        case "Energy BDB":
            return "⚡ BDB";
        case "Fire BDB":
            return "🔥 BDB";
        case "Poison BDB":
            return "☣️ BDB";
        case "Cold BDB":
            return "❄️ BDB";
        case "Rad BDB":
            return "☢️ BDB";
        case "Damage To Creature":
            return "🐵 Damage";
        case "Sneak":
            return "🐍 Sneak";
        case "Crit":
            return "☠️ Crit";
        case "Strength":
            return "💪 Strength";
        case "Swift":
            return "💨 Swift";
        case "Health":
            return "❤️ Health";
        default:
            return name;
    }
}
function ADRow({additionalDamage, updateAdditionalDamages, marks, text=''}) {
    const width = (text === '' || text === null) ? '8.9rem' : '7rem';
    function slideChanged(e) {
        additionalDamage.value = e;
        updateAdditionalDamages();
    }

    function onChange(e) {
        additionalDamage.is_used = e.target.checked;
        updateAdditionalDamages();
    }
    let isUsed = false;
    let disabled = false;
    if (typeof additionalDamage.is_used === "undefined") {
        isUsed = true;
        disabled = true;
    } else {
        isUsed = additionalDamage.is_used;
    }
    return (
        <Row>
            <Card className="mb-2 pt-2 pb-2 ps-3 pe-3">
                <Col>
                    <InputGroup className="mb-1">
                        <InputGroup.Text style={{ width: '2.5rem' }} >
                            <Checkbox onChange={onChange} checked={isUsed} disabled={disabled} ></Checkbox>
                        </InputGroup.Text>
                        <InputGroup.Text style={{ width: width }}>
                            <strong>{addIconName(additionalDamage.name)}</strong>
                        </InputGroup.Text>
                        {qa(text)}
                        <InputGroup.Text style={{width: '4.6rem'}}>
                            <div class="badge bg-info" style={{width: '3rem'}}>{additionalDamage.value}</div>
                        </InputGroup.Text>
                    </InputGroup>
                    <Slider onChange={slideChanged} tooltip={{ open: false }} marks={marks.marks} min={marks.min} max={marks.max} step={marks.step} value={additionalDamage.value} />
                </Col>
            </Card>
        </Row>
    );
}

export default ADRow;