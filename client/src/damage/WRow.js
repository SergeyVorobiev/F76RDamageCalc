import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css'
import { checkLength } from '../helpers/Input';
import { bullet, ammo, fireRate } from '../helpers/Emoji';


function column(wSpec, onChange, icon, name, id, max) {
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '2.58rem' }}>{icon}</InputGroup.Text>
                <InputGroup.Text style={{ width: '10rem' }}>{name}</InputGroup.Text>
                <Form.Control className='w-auto' type="number" min="0" value={wSpec[id]} max={max} maxLength="5" onChange={onChange} id={id} />
            </InputGroup>
        </Col>
    );
}

function WRow({wSpec, setWSpec}) {

    function onChange(e) {
        checkLength(e);
        if ((e.target.id === 'shot_size' || e.target.id === 'fire_rate' || e.target.id === 'ammo_capacity') && e.target.value < 1) {
            e.target.value = 1;
        }
        if (e.target.id === 'accuracy' && e.target.value < 10) {
            e.target.value = 10;
        }
        const val = parseFloat(e.target.value);
        wSpec[e.target.id] = val;
        setWSpec({
            ...wSpec,
        });
    }
    // const shotSize = (<>{bullet("1.1rem")} <div style={{marginLeft: '0.35rem'}}>Shot Size</div></>);
    // const fRate = (<>{fireRate("1.1rem")} <div style={{marginLeft: '0.45rem'}}>Fire Rate</div></>);
    // const iAmmo = (<>{ammo("1.1rem")} <div style={{marginLeft: '0.42rem'}}>Ammo Capacity</div></>);
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
            {column(wSpec, onChange, "🩸", "Bleed", "bleed", 10)}
            {column(wSpec, onChange, "💣", "Explosion", "exp", 100)}
            {column(wSpec, onChange, "🐲", "Damage", "cd", 100)}
            {column(wSpec, onChange, "🎯", "Accuracy", "accuracy", 100)}
        </Row>
    );
}

export default WRow;