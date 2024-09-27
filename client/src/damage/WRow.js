import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css'
import { checkLength } from '../helpers/Input';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { memo } from 'react';


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
        }
        if ((e.target.id === 'shot_size' || e.target.id === 'fire_rate' || e.target.id === 'ammo_capacity') && e.target.value < 1) {
            e.target.value = 1;
        }
        if (e.target.id === 'accuracy' && e.target.value < 10) {
            e.target.value = 10;
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
            {column(wSpec, onChange, '⌛', "Reload Time", "reload_time", 60)}
            {column(wSpec, onChange, fireRate("1.1rem"), "Fire Rate", "fire_rate", 999)}
            {column(wSpec, onChange, ammo("1.1rem"), "Ammo Capacity", "ammo_capacity", 9999)}
            {column(wSpec, onChange, "🛡️", "Anti Armor", "aa", 40)}
            {column(wSpec, onChange, "💪", "Strength Boost", "strength_boost", 25)}
            {column(wSpec, onChange, "☠️", "Crit", "crit", 200)}
            {column(wSpec, onChange, "🐍", "Sneak", "sneak", 100)}
            {column(wSpec, onChange, "🦵", "Cripple", "cripple", 100)}
            {column(wSpec, onChange, "🌪️", "Bash", "bash", 0)}
            {column(wSpec, onChange, "💣", "Explosion", "exp", 100)}
            {creatureViews}
            {column(wSpec, onChange, "🎯", "Accuracy", "accuracy", 100)}
            {column(wSpec, onChange, "🚀", "Damage Bonus", "bonus", 1000)}
        </Row>
    );
});

export default WRow;