
import Card from 'react-bootstrap/Card';
import CreatureChooser from './CreatureChooser';
import CreatureParamsLineView from './CreatureParamsLineView';


function enemy(creatureNamesRef, creature, creatures, setCreatures, resultDamage) {
    return (
        <Card className='pt-0 mt-0 mb-1'>
            <Card.Header className='pt-0 pb-0'>
                <CreatureChooser creatureNamesRef={creatureNamesRef} creature={creature} creatures={creatures} setCreatures={setCreatures} />
            </Card.Header>
            <CreatureParamsLineView creature={creature} resultDamage={resultDamage} />
        </Card>
    );
}

export default function CreaturesCardView(props) {
    return (
        <Card className={props.className}>
            <Card.Body className="pt-2 pb-1 ps-1 pe-1">
                {enemy(props.creatureNamesRef, props.creatures.creature1, props.creatures, props.setCreatures, props.resultDamage)}
                {enemy(props.creatureNamesRef, props.creatures.creature2, props.creatures, props.setCreatures, props.resultDamage)}
                {enemy(props.creatureNamesRef, props.creatures.creature3, props.creatures, props.setCreatures, props.resultDamage)}
                {enemy(props.creatureNamesRef, props.creatures.creature4, props.creatures, props.setCreatures, props.resultDamage)}
            </Card.Body>
        </Card>
    );
}