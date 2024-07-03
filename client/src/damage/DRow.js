import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css';
import {checkLength} from '../helpers/Input';
import { Checkbox } from 'antd';


function getSymbolText(symbol, text) {
    switch (symbol) {
        case "B":
            return <>&#128165; {text}</>
        case "E":
            return <>&#9889; {text}</>
        case "F":
            return <>&#128293; {text}</>;
        case "P":
            return <>☣️ {text}</>;
        case "C":
            return <>❄️ {text}</>;
        case "R":
            return <>☢️ {text}</>;
        default:
            return <>☢️ {text}</>
    }
}

function column(damage, setDamage, damage_type, damage_name, used_damage_name, use_damage_name, color, name) {
    function onCheck(e) {
        damage_type[use_damage_name] = e.target.checked;
        damage_type[used_damage_name] = (e.target.checked) ? damage_type[damage_name] : 0.0;
        setDamage({
            ...damage,
        });
    }

    function onChange(e) {
        checkLength(e);
        const val = parseFloat(e.target.value);
        damage_type[damage_name] = val;
        damage_type[used_damage_name] = (damage_type[use_damage_name]) ? damage_type[damage_name] : 0.0;
        setDamage({
            ...damage,
        });
    }

    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text>
                    <Checkbox onChange={onCheck} checked={damage_type[use_damage_name]}></Checkbox>
                </InputGroup.Text>
                <InputGroup.Text style={{ width: '10rem' }} className={color}>{name}</InputGroup.Text>
                <Form.Control className='w-auto' type="number" min="0" value={damage_type[damage_name]} max="99999" maxLength="7" onChange={onChange} />
            </InputGroup>
        </Col>
    );
}

function DRow({damage, setDamage, damage_type, color}) {
    return (
        <Row>
            {column(damage, setDamage, damage_type, "damage", "used_damage", "use_damage", color, getSymbolText(damage_type["symbol"], "Damage"))}
            {column(damage, setDamage, damage_type, "mod_damage", "used_mod_damage", "use_mod_damage", color, getSymbolText(damage_type["symbol"], "Mod Damage"))}
            {column(damage, setDamage, damage_type, "time_damage", "used_time_damage", "use_time_damage", color, getSymbolText(damage_type["symbol"], "Time Damage"))}
        </Row>
    );
}

export default DRow;