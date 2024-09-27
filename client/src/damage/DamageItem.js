import { memo } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { Checkbox } from 'antd';
import { TrashIcon } from '../icons/Icons';
import Button from 'react-bootstrap/Button';


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

function getInputItem(dItem, style) {
    function onCheck(e) {

    }
    function onDamageChange(e) {

    }
    return (
    <>
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text>
                    <Checkbox onChange={onCheck} checked={dItem.isUsed}></Checkbox>
                </InputGroup.Text>
                <InputGroup.Text style={{ width: 'auto' }} className={style}>{"💢"}</InputGroup.Text>
                <Form.Control style={{ width: '6rem' }} type="number" min="0" value={dItem["damage"]} max={"99999"} maxLength="7" onChange={onDamageChange} />
                <InputGroup.Text style={{ width: 'auto' }} className={style}>{"🎲"}</InputGroup.Text>
                <Form.Control style={{ width: '3rem' }} type="number" min="0" value={dItem["chance"]} max={"100"} maxLength="7" onChange={onDamageChange} />
            </InputGroup>
        </Col>
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text>
                    <Checkbox onChange={onCheck} checked={dItem.stack}>Stack</Checkbox>
                </InputGroup.Text>

                <InputGroup.Text style={{ width: 'auto' }} className={style}>{"⌛"}</InputGroup.Text>
                <Form.Control style={{ width: '6rem' }} type="number" min="0" value={dItem["time"]} max={"60"} maxLength="2" onChange={onDamageChange} />
            </InputGroup>
        </Col>
        </>
    );
}
const DamageItem = memo(function DamageItem({item, modalDeleteDamage, setModalDeleteDamage}) {
    const [symbol, style] = getSymbolStyle(item.kind);
    function onTrashClick(e) {
        setModalDeleteDamage({id: item.index, name: item.name, show: true});
    }
    return (
        <Card className="mt-2 mb-2">
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
            <Card.Body>
                <Row>
                    {getInputItem(item, "bg-lite")}
                </Row>
            </Card.Body>
        </Card>
    );
});

export default DamageItem;