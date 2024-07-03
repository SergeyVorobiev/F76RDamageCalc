import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import '../css/style.css';
import {checkLength} from '../helpers/Input';


function col(name, creatures, setCreatures, creature, res_field, color, min=0, max=1000) {
    function onChange(e) {
        checkLength(e);
        if (e.target.value < min) {
            e.target.value = min;
        }
        creature[res_field] = parseFloat(e.target.value);
        setCreatures({
            ...creatures,
        });
    }
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text className={color} style={{ width: '9rem' }}>{name}</InputGroup.Text>
                <Form.Control className='w-auto' type="number" min={min} value={creature[res_field]} max={max} maxLength="7" onChange={onChange} />
            </InputGroup>
        </Col>);
}

const energy = <>&#9889; Energy</>;
const ballistic = <>&#128165; Ballistic</>;
const fire = <>&#128293; Fire</>;
const poison = <>☣️ Poison</>;
const cold = <>❄️ Cold</>;
const rad = <>☢️ Rad</>;
const health = <>❤️ Health</>;
const reduction = <>🧽 Reduction</>;

function CreatureStats({creatures, setCreatures, creature}) {
    console.log("CreatureStats");


    return (
        <Card className="text-center mb-3">
            <Card.Header>{creature.name} {creature.level}</Card.Header>
            <Card.Body>
                <Row>
                    {col(ballistic, creatures, setCreatures, creature, "b", "bg-ballistic")}
                    {col(energy, creatures, setCreatures, creature, "e", "bg-energy")}
                </Row>
                <Row>
                    {col(fire, creatures, setCreatures, creature, "f", "bg-fire")}
                    {col(poison, creatures, setCreatures, creature, "p", "bg-poison")}
                </Row>
                <Row>
                    {col(cold, creatures, setCreatures, creature, "c", "bg-cold")}
                    {col(rad, creatures, setCreatures, creature, "r", "bg-rad")}
                </Row>
                <Row>
                    {col(health, creatures, setCreatures, creature, "h", "bg-health", 1, 32767)}
                    {col(reduction, creatures, setCreatures, creature, "damageReduction", "bg-reduction", 0, 0.99)}
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>

    );
}

export default CreatureStats;