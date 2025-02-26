import { buildCreature, buildCreatureNames } from '../entities/ECreatures';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';


const levels = CreatureDataProvider.getCreatureLevels(true);

export default function CreatureLevelsDropdown(props) {
    function onSelect(e) {
        props.creatures[props.creature.fieldName] = buildCreature(props.creature.name, e, props.creature.fieldName);
        props.creatureNamesRef.current = buildCreatureNames(props.creatures);
        props.setCreatures({
            ...props.creatures,
        });
    }
    return (
        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onSelect} names={levels} title={<strong>{props.creature.level}</strong>} />
    );
}