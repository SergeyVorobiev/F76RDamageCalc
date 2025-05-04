import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { checkLength } from '../helpers/Input';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { memo } from 'react';
import { WarningPopover } from '../helpers/WarningPopover';
import Strings from '../helpers/Strings';
import TemplateTools from '../templates/TemplateTools';


function column2(wSpec, onChange1, onChange2, icon, name, id1, id2, step, max1, max2, message) {
    const value1 = wSpec[id1];
    const value2 = wSpec[id2];
    let header = name;
    if (header === "P Attack") {
        header = "Power Attack";
    }
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <WarningPopover message={message} header={header} element={<InputGroup.Text color='red' style={{ width: '2.58rem', backgroundColor: '#ff5795', cursor: 'pointer' }}>{icon}</InputGroup.Text>} />
                <InputGroup.Text style={{ width: '6rem' }}>{name}</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" min="0" step={step} value={value1} max={max1} maxLength="5" onChange={onChange1} id={id1} />
                <InputGroup.Text style={{ width: '2rem' }}>/</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" min="0" step={step} value={value2} max={max2} maxLength="5" onChange={onChange2} id={id2} />
            </InputGroup>
        </Col>
    );
}

function column3(wSpec, onChange, icon, name, id, step, max, min, message) {
    let value = 0;
    if (id.includes("creature")) {
        const index = parseInt(id.split("_")[1]);
        value = wSpec["creature"][index].value;
    } else {
        value = wSpec[id];
    }
    return (
        <Col key={id}>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <WarningPopover message={message} header={name} element={<InputGroup.Text color='red' style={{ width: '2.58rem', backgroundColor: '#ff5795', cursor: 'pointer' }}>{icon}</InputGroup.Text>} />
                <InputGroup.Text style={{ width: '10rem' }}>{name}</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" step={step} min={min} value={value} max={max} maxLength="5" onChange={onChange} id={id} />
            </InputGroup>
        </Col>
    );
}

function column(wSpec, onChange, icon, name, id, step, max, min=0) {
    let value = 0;
    if (id.includes("creature")) {
        const index = parseInt(id.split("_")[1]);
        value = wSpec["creature"][index].value;
    } else {
        value = wSpec[id];
    }
    return (
        <Col key={id}>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '2.58rem' }}>{icon}</InputGroup.Text>
                <InputGroup.Text style={{ width: '10rem' }}>{name}</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" step={step} min={min} value={value} max={max} maxLength="5" onChange={onChange} id={id} />
            </InputGroup>
        </Col>
    );
}

const WRow = memo(function WRow({wSpec, setWSpec}) {

    function onChange(e) {
        const allowNegatives = (e.target.id === "bonus");
        checkLength(e, allowNegatives);
        let value = parseFloat(e.target.value);
        let min = parseFloat(e.target.min);
        if (value < min) {
            value = min;
        }
        let creatureIndex = -1;
        if (e.target.id.includes("creature")) {
            creatureIndex = parseInt(e.target.id.split("_")[1]);
        } else if (e.target.id === 'shot_size' || e.target.id === 'ammoCapacity') {
            value = parseInt(value);
        }
        if (creatureIndex > -1) {
            wSpec["creature"][creatureIndex].value = value;
        } else {
            wSpec[e.target.id] = value;
        }
        setWSpec({
            ...wSpec,
        });
    }
    // const shotSize = (<>{bullet("1.1rem")} <div style={{marginLeft: '0.35rem'}}>Shot Size</div></>);
    // const fRate = (<>{fireRate("1.1rem")} <div style={{marginLeft: '0.45rem'}}>Fire Rate</div></>);
    // const iAmmo = (<>{ammo("1.1rem")} <div style={{marginLeft: '0.42rem'}}>Ammo Capacity</div></>);
    let creatureViews = [];
    for (let i = 0; i < wSpec.creature.length; i++) {
        const creature = wSpec.creature[i];
        creatureViews.push(column(wSpec, onChange, "🐵", creature.name, "creature_" + i, 500));
    }
    const isRanged = TemplateTools.isWeaponRangedByType(wSpec.type);
    const fireRateIcon = (isRanged) ? (fireRate("1.1rem")) : ('🏏');
    const bulletIcon = (isRanged) ? (bullet("1.1rem")) : ('👊🏼');
    const hitSizeName = (isRanged) ? "Shot Size" : "Hit Size";

    return (
        <Row>
            {column(wSpec, onChange, bulletIcon, hitSizeName, "shot_size", 1, 16, 1)}
            {column(wSpec, onChange, '⌛', "Reload Time", "defReloadTime", 0.1, 10, 0)}
            {column(wSpec, onChange, '⌛', "Trigger Delay", "triggerDelay", 0.1, 3, 0.1)}
            {column(wSpec, onChange, '⌛', "Auto Delay", "autoDelay", 0.1, 3, 0.1)}
            {column(wSpec, onChange, '⌛', "Attack Delay", "attackDelay", 0.1, 3, 0.1)}
            {column(wSpec, onChange, ammo("1.1rem"), "Ammo Capacity", "ammoCapacity", 1, 9999, 0)}
            {column(wSpec, onChange, "🛡️", "Anti Armor", "aa", 1, 100, 0)}
            {column(wSpec, onChange, "💪", "Strength Boost", "strengthBoost", 1, 20, 0)}
            {column(wSpec, onChange, "☠️", "Crit", "crit", 1, 999, 0)}
            {column(wSpec, onChange, "🐍", "Sneak", "sneak", 1, 999, 0)}
            {column(wSpec, onChange, "🌪️", "Bash", "bash", 1, 200, 0)}
            {column(wSpec, onChange, "⚔️", "Attack Damage", "attackDamage", 0.1, 5, 0.1)}
            {column(wSpec, onChange, "💣", "Explosive", "exp", 1, 100, 0)}
            {creatureViews}
            {column(wSpec, onChange, "🚀", "Bonus Damage", "bonus", 1, 500, -99)}
            {column(wSpec, onChange, "☄️", "Weapon Speed", "speed", 0.1, 3, 0.1)}
            {column(wSpec, onChange, "💨", "Reload Speed", "reloadSpeed", 0.1, 5, 0.1)}
            {column3(wSpec, onChange, "⏱️", "Attack Delay", "startAttackDelay", 0.1, 5, 0, "Delay before starting to shoot / hit after clicking an attack button, for an automatic weapon - every reloading, for a non-automatic - every shot")}
            {column3(wSpec, onChange, "🎯", "Accuracy", "accuracy", 1, 100, 5, "General accuracy of a weapon: accuracy * damage accuracy * damage chance. (Usually you don't need to change damage accuracy)")}
            {column2(wSpec, onChange, onChange, "🪓", "P Attack", "powerAttack", "powerAttackChance", 1, 200, 100, "% Base Damage Boost / Chance.")}
            {column2(wSpec, onChange, onChange, "🦵", "Cripple", "cripple", "crippleChance", 1, 200, 100, "% Base Damage Boost / Chance.")}
            {column2(wSpec, onChange, onChange, "🔋", "Charge", "chargeTime", "maxChargeTime", 0.1, 5, 5, "Charge Time / Max Charge Time.")}
            {column2(wSpec, onChange, onChange, "🔋", "Power", "minPowerMult", "maxPowerMult", 0.1, 0.9, 5, "Min Charge Power / Max Charge Power.")}
        </Row>
    );
});

export default WRow;