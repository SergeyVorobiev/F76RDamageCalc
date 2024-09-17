import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';


function buildWarning(message) {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>Warning</strong></Popover.Header>
            <Popover.Body>
                {message}
            </Popover.Body>
        </Popover>
    );
}

export default function WarningPopover({variant, message, sign}) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildWarning(message)}>
            <Badge className="ps-2 pe-2 m-1" bg={variant} pill>{sign}</Badge>
        </OverlayTrigger>
    );
}