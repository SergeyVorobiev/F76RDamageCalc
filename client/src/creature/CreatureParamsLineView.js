import Stack from 'react-bootstrap/Stack';
import CreatureInfoButton from './CreatureInfoButton';
import { keyValueBadge } from '../helpers/RowBuilder';
import { tAmmo } from '../helpers/Emoji';
import { millisToTime } from '../helpers/Time';
import { numberToString } from '../helpers/StringHelpers';


export default function CreatureParamsLineView(props) {
    return (
        <Stack className='ps-0 pe-1' direction="horizontal" gap={1}>
            {keyValueBadge("mt-1 mb-1 badge p-1 ms-1 me-0 bg-health-outline", '5.5rem', '❤️', numberToString(props.creature.h, 2))}
            {keyValueBadge("mt-1 mb-1 p-1 badge bg-ammo-outline ms-auto me-auto", '7rem', tAmmo("0.5rem"), props.creature.ammo)}
            {keyValueBadge("mt-1 mb-1 p-1 badge bg-lifetime-outline ms-auto me-auto", '7rem', (<small>⌛</small>), millisToTime(props.creature.lifeTime))}
            <CreatureInfoButton creature={props.creature} resultDamage={props.resultDamage} />
        </Stack>
    );
}