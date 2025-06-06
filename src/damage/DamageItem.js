import { memo } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import { TrashIcon } from '../svg/SVGIcons';
import Button from 'react-bootstrap/Button';
import { checkLength } from '../helpers/Input';
import { buildConditionStrings } from '../helpers/EffectViewHelper';


export function getSymbolStyle(dType) {
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
    function onBonusChange(e) {
        dItem.bonuses.isBonusMult = !dItem.bonuses.isBonusMult;
        setWSpec({...wSpec});
    }
    function onSneakBonusChange(e) {
        dItem.bonuses.isBonusSneak = !dItem.bonuses.isBonusSneak;
        setWSpec({...wSpec});
    }
    function onCritBonusChange(e) {
         dItem.bonuses.isBonusCrit = !dItem.bonuses.isBonusCrit;
         setWSpec({...wSpec});
    }
    function onAttackBonusChange(e) {
        dItem.bonuses.isBonusAttack = !dItem.bonuses.isBonusAttack;
        setWSpec({...wSpec});
    }
    function onOutgoingBonusChange(e) {
        dItem.bonuses.isBonusOutgoing = !dItem.bonuses.isBonusOutgoing;
        setWSpec({...wSpec});
    }
    function onExpBonusChange(e) {
        dItem.bonuses.isBonusExp = !dItem.bonuses.isBonusExp;
        setWSpec({...wSpec});
    }
    let modifiedAttack = dItem["damage"];
    if (dItem.bonuses.isBonusAttack) {
        modifiedAttack *= wSpec.attackDamage;
    }
    return (
        <div>
            <Row>
                <Col>
                    <div>{buildConditionStrings([dItem.damageId], "m-1 p-1")}</div>
                </Col>
            </Row>
            <Row className="ps-1 pe-1">
                <Col>
                    <InputGroup size="sm" className="mb-1 mt-1 flex-nowrap">
                        <InputGroup.Text style={{ width: 'auto'}}>
                            <UCheckbox onChange={onCheck} checked={dItem.isUsed}></UCheckbox>
                        </InputGroup.Text>
                        <InputGroup.Text style={{ width: 'auto' }} className={style}>{"💢"}</InputGroup.Text>
                        <Form.Control disabled className="pe-1" style={{ minWidth: '4rem'}} type="number" min="0" value={modifiedAttack} max={"999"} maxLength="6" />
                        <Form.Control className="pe-1" style={{ minWidth: '4rem'}} type="number" min="0" value={dItem["damage"]} max={"999"} maxLength="6" onChange={onDamageChange} />
                        <InputGroup.Text style={{ width: 'auto' }} className={style}>{"🎯"}</InputGroup.Text>
                        <Form.Control className="pe-1" style={{ minWidth: '4rem' }} type="number" min="0" value={dItem["accuracy"]} max={"100"} maxLength="5" onChange={onAccuracyChange} />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup size="sm" className="mb-1 mt-1 flex-nowrap">
                        <InputGroup.Text style={{ width: 'auto' }} className={style}>{"🎲"}</InputGroup.Text>
                        <Form.Control className="pe-1" style={{ minWidth: '4rem' }} type="number" min="0" value={dItem["chance"]} max={"100"} maxLength="5" onChange={onChanceChange} />
                        <InputGroup.Text>
                            <UCheckbox className="me-1" onChange={onStackCheck} checked={dItem.stack}><small>Stack</small></UCheckbox>
                        </InputGroup.Text>
                        <InputGroup.Text style={{ width: 'auto' }} className={style}>{"⌛"}</InputGroup.Text>
                        <Form.Control className="pe-1" style={{ width: '4rem' }} type="number" min="0" value={dItem["time"]} max={"60"} maxLength="4" onChange={onTimeChange} />
                    </InputGroup>
                </Col>
            </Row>
            <div className="d-flex justify-content-between p-1 m-1 ps-2 pe-2" style={{borderRadius: '5px', borderWidth: '1px', borderStyle: 'solid', borderColor: "#ddd"}}>
                <UCheckbox onChange={onBonusChange} checked={dItem.bonuses.isBonusMult} checkBgColor={'#00b6ff'}><small>x 🚀</small></UCheckbox>
                <UCheckbox onChange={onCritBonusChange} checked={dItem.bonuses.isBonusCrit} checkBgColor={'#00b6ff'}><small>x ☠️</small></UCheckbox>
                <UCheckbox onChange={onSneakBonusChange} checked={dItem.bonuses.isBonusSneak} checkBgColor={'#00b6ff'}><small>x 🐍</small></UCheckbox>
            </div>
            <div className="d-flex justify-content-between p-1 m-1 ps-2 pe-2" style={{borderRadius: '5px', borderWidth: '1px', borderStyle: 'solid', borderColor: "#ddd"}}>
                <UCheckbox onChange={onAttackBonusChange} checked={dItem.bonuses.isBonusAttack} checkBgColor={'#00b6ff'}><small>x ⚔️</small></UCheckbox>
                <UCheckbox onChange={onExpBonusChange} checked={dItem.bonuses.isBonusExp} checkBgColor={'#00b6ff'}><small>x 💣</small></UCheckbox>
                <UCheckbox onChange={onOutgoingBonusChange} checked={dItem.bonuses.isBonusOutgoing} checkBgColor={'#00b6ff'}><small>x 🗡️</small></UCheckbox>
            </div>
            <Row>
                <Col>
                    <div>{buildConditionStrings(dItem.conditions, "m-1 p-1")}</div>
                </Col>
            </Row>
        </div>
    );
}
const DamageItem = memo(function DamageItem({item, wSpec, setWSpec, modalDeleteDamage, setModalDeleteDamage}) {
    const [symbol, style] = getSymbolStyle(item.kind);
    function onTrashClick(e) {
        setModalDeleteDamage({id: item.index, name: item.name, show: true});
    }
    function useCrit(e) {
        item.isCrit = !item.isCrit;
        setWSpec({...wSpec});
    }
    return (
        <Card className="mt-2 mb-2 shadow-outline4">
            <Card.Header size="small" className={style}>
                <Row>
                    <Col className="ms-3 m-auto p-0 d-flex justify-content-start">
                        {symbol + " " + item.name}
                    </Col>
                        <Col className="m-auto d-flex justify-content-center">
                        <UCheckbox onChange={useCrit} checked={item.isCrit}><b>☠️ Crit</b></UCheckbox>
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