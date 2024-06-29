import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css';
import {checkLength} from '../helpers/Input';


function col(name, creatures, setCreatures, creature, res_field, color) {
    function onChange(e) {
        checkLength(e);
        creature[res_field] = parseFloat(e.target.value);
        setCreatures({
            ...creatures,
        });
    }
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text className={color} style={{ width: '9rem' }}>{name}</InputGroup.Text>
                <Form.Control className='w-auto' type="number" min="0" value={creature[res_field]} max="1000" maxLength="7" onChange={onChange} />
            </InputGroup>
        </Col>);
}

function CreatureStats({creatures, setCreatures, creature}) {
    return (
        <Card className="text-center mb-3">
            <Card.Header>{creature.name} {creature.level}</Card.Header>
            <Card.Body>
                <Row>
                    {col("Ballistic", creatures, setCreatures, creature, "b", "bg-ballistic")}
                    {col("Energy", creatures, setCreatures, creature, "e", "bg-energy")}
                </Row>
                <Row>
                    {col("Fire", creatures, setCreatures, creature, "f", "bg-fire")}
                    {col("Poison", creatures, setCreatures, creature, "p", "bg-poison")}
                </Row>
                <Row>
                    {col("Cold", creatures, setCreatures, creature, "c", "bg-cold")}
                    {col("Rad", creatures, setCreatures, creature, "r", "bg-rad")}
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>

    );
}

export default CreatureStats;