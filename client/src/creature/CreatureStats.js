import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { checkLength } from '../helpers/Input';
import BSRadio from '../helpers/views/BSRadio';


function col(name, creatures, setCreatures, creature, res_field, color, min=0, max=9999) {
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
const ballistic = <>&#128165; Physical</>;
const fire = <>&#128293; Fire</>;
const poison = <>☣️ Poison</>;
const cold = <>❄️ Cryo</>;
const rad = <>☢️ Radiation</>;
const health = <>❤️ Health</>;
const reduction = <>🧽 Reduction</>;
const headShot = <>🤕 Head Shot</>;
const creatureTypes = {Normal: 'default', Scorched: 'scorched', Glowing: 'glowing'};


function CreatureStats({creatures, setCreatures, creature}) {
    console.log("CreatureStats");
    function onRadioTypeClick(e) {
        creature.userBody = e.target.value;
        setCreatures({...creatures});
    }

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
                    {col(health, creatures, setCreatures, creature, "h", "bg-health", 1, 1000000)}
                    {col(reduction, creatures, setCreatures, creature, "damageReduction", "bg-reduction", 0, 0.9)}
                </Row>
                <Row>
                    {col(headShot, creatures, setCreatures, creature, "headShot", "bg-head-shot", 1, 2)}
                </Row>
                <Row>
                    <div className="pt-3 pb-1 d-flex justify-content-center">
                        <BSRadio pairs={creatureTypes} selectedValue={creature.userBody} onClick={onRadioTypeClick} />
                    </div>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted"></Card.Footer>
        </Card>

    );
}

export default CreatureStats;