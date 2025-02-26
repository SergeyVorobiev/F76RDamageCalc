import { mainInfoPopover } from './MainInfoPopover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


export default function MainInfoButton(props) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={mainInfoPopover}>
            <Button variant="white-blue-border" style={{cursor: 'help'}}><small><b>?</b></small></Button>
        </OverlayTrigger>
    );
}