import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import CreatureStats from "../creature/CreatureStats";
import { memo } from 'react';


const Creature = memo(function Creature({creatures, setCreatures}) {
    console.log("Creature")
    return (
        <div class="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '14rem'}}>
                            Creature
                        </InputGroup.Text>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <CreatureStats creatures={creatures} setCreatures={setCreatures} creature={creatures.creature}></CreatureStats>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default Creature;