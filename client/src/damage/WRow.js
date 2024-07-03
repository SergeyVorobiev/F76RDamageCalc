import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css'
import {checkLength} from '../helpers/Input';

function column(wSpec, onChange, name, id, max) {
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text style={{ width: '9rem' }}>{name}</InputGroup.Text>
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
        const val = parseFloat(e.target.value);
        wSpec[e.target.id] = val;
        setWSpec({
            ...wSpec,
        });
    }

    return (
        <Row>
            {column(wSpec, onChange, "Shot Size", "shot_size", 16)}
            {column(wSpec, onChange, "Reload Time", "reload_time", 60)}
            {column(wSpec, onChange, "Fire Rate", "fire_rate", 999)}
            {column(wSpec, onChange, "Ammo Capacity", "ammo_capacity", 9999)}
            {column(wSpec, onChange, "Anti Armor", "aa", 40)}
            {column(wSpec, onChange, "Strength Boost", "strength_boost", 25)}
        </Row>
    );
}

export default WRow;