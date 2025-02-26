import { buildCreature, buildCreatureNames } from '../entities/ECreatures';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';


const names = CreatureDataProvider.getCreatureNames();

export default function CreatureNamesDropdown(props) {
    function onSelect(e) {
        props.creatures[props.creature.fieldName] = buildCreature(e, props.creature.level, props.creature.fieldName);
        props.creatureNamesRef.current = buildCreatureNames(props.creatures);
        props.setCreatures({
            ...props.creatures,
        });
    }
    return (
        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onSelect} names={names} title={<strong>{props.creature.capName}</strong>} />
    );
}