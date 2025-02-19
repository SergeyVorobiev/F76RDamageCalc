import { creatureInfoPopover, creatureShortInfoPopover } from './CreatureInfoPopover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


export default function CreatureInfoButton(props) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={creatureInfoPopover(props.creature, props.resultDamage, props.resultDamage.weaponName)}>
            <Button variant="blue-white-border m-0" style={{cursor: 'pointer'}}><b style={{fontSize: 'auto'}}>?</b></Button>
        </OverlayTrigger>
    );
}

export function CreatureShortInfoButton(props) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={creatureShortInfoPopover(props.creature)}>
            <Button variant="blue-white-border m-0" style={{cursor: 'pointer'}}><b style={{fontSize: 'auto'}}>?</b></Button>
        </OverlayTrigger>
    );
}