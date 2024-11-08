import { memo } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Checkbox } from 'antd';
import { TrashIcon } from '../icons/Icons';
import Button from 'react-bootstrap/Button';
import { checkLength } from '../helpers/Input';


function getSymbolStyle(dType) {
    switch(dType) {
        case "physical":
            return ["💥", "small p-1 bg-ballistic"];
        case "bleed":
            return ["🩸", "small p-1 bg-bleed"];
        case "explosive":
            return ["🧨", "small p-1 bg-exp"];
        case "energy":
            return ["⚡", "small p-1 bg-energy"];
        case "fire":
            return ["🔥", "small p-1 bg-fire"];
        case "cryo":
            return ["❄️", "small p-1 bg-cold"];
        case "poison":
            return ["☣️", "small p-1 bg-poison"];
        case "radiation":
            return ["☢️", "small p-1 bg-rad"];
        default:
            return ["", ""];
    }
}

function getInputItem(dItem, wSpec, setWSpec, style) {
    function onCheck(e) {
        dItem.isUsed = e.target.checked;
        setWSpec({...wSpec});
    }
    function onDamageChange(e) {
        checkLength(e);
        dItem.damage = parseInt(e.target.value);
        setWSpec({...wSpec});
    }
    function onAccuracyChange(e) {
        checkLength(e);
        dItem.accuracy = parseInt(e.target.value);
        setWSpec({...wSpec});
    }
    function onChanceChange(e) {
        checkLength(e);
        dItem.chance = parseInt(e.target.value);
        setWSpec({...wSpec});
    }
    function onStackCheck(e) {
        dItem.stack = e.target.checked;
        setWSpec({...wSpec});
    }
    function onTimeChange(e) {
        checkLength(e);
        dItem.time = parseInt(e.target.value);
        setWSpec({...wSpec});
    }
    return (
    <>
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '2.8rem'}}>
                    <Checkbox onChange={onCheck} checked={dItem.isUsed}></Checkbox>
                </InputGroup.Text>
                <InputGroup.Text style={{ width: 'auto' }} className={style}>{"💢"}</InputGroup.Text>
                <Form.Control className="pe-1" style={{ minWidth: '4rem'}} type="number" min="0" value={dItem["damage"]} max={"999"} maxLength="6" onChange={onDamageChange} />
                <InputGroup.Text style={{ width: '2.8rem' }} className={style}>{"🎯"}</InputGroup.Text>
                <Form.Control className="pe-1" style={{ minWidth: '4rem' }} type="number" min="0" value={dItem["accuracy"]} max={"100"} maxLength="5" onChange={onAccuracyChange} />
            </InputGroup>
        </Col>
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '2.8rem' }} className={style}>{"🎲"}</InputGroup.Text>
                <Form.Control className="pe-1" style={{ minWidth: '4rem' }} type="number" min="0" value={dItem["chance"]} max={"100"} maxLength="5" onChange={onChanceChange} />
                <InputGroup.Text>
                    <Checkbox onChange={onStackCheck} checked={dItem.stack}>Stack</Checkbox>
                </InputGroup.Text>
                <InputGroup.Text style={{ width: '2.8rem' }} className={style}>{"⌛"}</InputGroup.Text>
                <Form.Control className="pe-1" style={{ width: '4rem' }} type="number" min="0" value={dItem["time"]} max={"60"} maxLength="4" onChange={onTimeChange} />
            </InputGroup>
        </Col>
        </>
    );
}
const DamageItem = memo(function DamageItem({item, wSpec, setWSpec, modalDeleteDamage, setModalDeleteDamage}) {
    const [symbol, style] = getSymbolStyle(item.kind);
    function onTrashClick(e) {
        setModalDeleteDamage({id: item.index, name: item.name, show: true});
    }
    return (
        <Card className="mt-2 mb-2 shadow-outline4">
            <Card.Header size="small" className={style}>
                <Row>
                    <Col className="ms-3 m-auto p-0 d-flex justify-content-start">
                        {symbol + " " + item.name}
                    </Col>
                    <Col className="me-3 mt-0 mb-0 p-0 d-flex justify-content-end">
                        <Button className="ms-1 pb-auto" size="sm" id={item.id} name={item.name} onClick={onTrashClick} variant="white">
                            <TrashIcon />
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body className="p-1">
                <Row>
                    {getInputItem(item, wSpec, setWSpec, "bg-lite")}
                </Row>
            </Card.Body>
        </Card>
    );
});

export default DamageItem;