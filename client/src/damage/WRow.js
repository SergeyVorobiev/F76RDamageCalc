import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css'
import { checkLength } from '../helpers/Input';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { memo } from 'react';
import { WarningPopover } from '../helpers/WarningPopover';


function column2(wSpec, onChange1, onChange2, icon, name, id1, id2, max1, max2, message) {
    const value1 = wSpec[id1];
    const value2 = wSpec[id2];
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <WarningPopover message={message} header={name} element={<InputGroup.Text color='red' style={{ width: '2.58rem', backgroundColor: '#ff5795' }}>{icon}</InputGroup.Text>} />
                <InputGroup.Text style={{ width: '6rem' }}>{name}</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" min="0" value={value1} max={max1} maxLength="5" onChange={onChange1} id={id1} />
                <InputGroup.Text style={{ width: '2rem' }}>/</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" min="0" value={value2} max={max2} maxLength="5" onChange={onChange2} id={id2} />
            </InputGroup>
        </Col>
    );
}

function column(wSpec, onChange, icon, name, id, max) {
    let value = 0;
    if (id.includes("creature")) {
        const index = parseInt(id.split("_")[1]);
        value = wSpec["creature"][index].value;
    } else {
        value = wSpec[id];
    }
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '2.58rem' }}>{icon}</InputGroup.Text>
                <InputGroup.Text style={{ width: '10rem' }}>{name}</InputGroup.Text>
                <Form.Control style={{ minWidth: '4rem' }} type="number" min="0" value={value} max={max} maxLength="5" onChange={onChange} id={id} />
            </InputGroup>
        </Col>
    );
}

const WRow = memo(function WRow({wSpec, setWSpec}) {

    function onChange(e) {
        checkLength(e);
        let creatureIndex = -1;
        if (e.target.id.includes("creature")) {
            creatureIndex = parseInt(e.target.id.split("_")[1]);
        } else if ((e.target.id === 'shot_size' || e.target.id === 'fireRate' || e.target.id === 'ammoCapacity') && e.target.value < 1) {
            e.target.value = 1;
        } else if (e.target.id === 'accuracy' && e.target.value < 10) {
            e.target.value = 10;
        } else if ((e.target.id === 'speed' || e.target.id === 'reloadSpeed') && e.target.value < 0.1) {
            e.target.value = 0.1;
        }
        const val = parseFloat(e.target.value);
        if (creatureIndex > -1) {
            wSpec["creature"][creatureIndex].value = val;
        } else {
            wSpec[e.target.id] = val;
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
        creatureViews.push(<>{column(wSpec, onChange, "🐵", creature.name, "creature_" + i, 500)}</>)
    }
    return (
        <Row>
            {column(wSpec, onChange, bullet("1.1rem"), "Shot Size", "shot_size", 16)}
            {column(wSpec, onChange, '⌛', "Def Reload Time", "defReloadTime", 60)}
            {column(wSpec, onChange, fireRate("1.1rem"), "Def Fire Rate", "fireRate", 199)}
            {column(wSpec, onChange, ammo("1.1rem"), "Ammo Capacity", "ammoCapacity", 9999)}
            {column(wSpec, onChange, "🛡️", "Anti Armor", "aa", 40)}
            {column(wSpec, onChange, "💪", "Strength Boost", "strengthBoost", 25)}
            {column(wSpec, onChange, "☠️", "Crit", "crit", 200)}
            {column(wSpec, onChange, "🐍", "Sneak", "sneak", 100)}
            {column(wSpec, onChange, "🌪️", "Bash", "bash", 200)}
            {column(wSpec, onChange, "💣", "Explosive", "exp", 100)}
            {creatureViews}
            {column(wSpec, onChange, "🚀", "Damage Bonus", "bonus", 500)}
            {column(wSpec, onChange, "☄️", "Weapon Speed", "speed", 5)}
            {column(wSpec, onChange, "💨", "Reload Speed", "reloadSpeed", 5)}
            {column(wSpec, onChange, "🪓", "Power Attack", "powerAttack", 200)}
            {column2(wSpec, onChange, onChange, "🦵", "Cripple", "cripple", "crippleChance", 100, 100, "% Damage Boost / Chance (100% if headshot)")}
            {column2(wSpec, onChange, onChange, "🔋", "Charge", "chargeTime", "maxChargeTime", 5, 5, "Charge Time / Max Charge Time")}
        </Row>
    );
});

export default WRow;