import CreatureNamesDropdown from './CreatureNamesDropdown';
import CreatureLevelsDropdown from './CreatureLevelsDropdown';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';


export default function CreatureChooser(props) {
    return (
        <Stack className='justify-content-center' direction="horizontal" gap={1}>
            <Col xs={10} className="d-flex justify-content-start">
                <CreatureNamesDropdown creatureNamesRef={props.creatureNamesRef} creature={props.creature} creatures={props.creatures} setCreatures={props.setCreatures} />
            </Col>
            <Col xs={2} className="d-flex justify-content-end">
                <CreatureLevelsDropdown creatureNamesRef={props.creatureNamesRef} creature={props.creature} creatures={props.creatures} setCreatures={props.setCreatures} />
            </Col>
        </Stack>
    );
}