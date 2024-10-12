import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';


function buildWarning(message, header='Warning') {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>{header}</strong></Popover.Header>
            <Popover.Body>
                {message}
            </Popover.Body>
        </Popover>
    );
}

export function WarningPopover({element, message, header='Warning', placement='top'}) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement={placement} overlay={buildWarning(message, header)}>
            {element}
        </OverlayTrigger>
    );
}

export function WarningPopoverBadge({variant, message, sign}) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildWarning(message)}>
            <Badge className="ps-2 pe-2 m-1" bg={variant} pill>{sign}</Badge>
        </OverlayTrigger>
    );
}

export function CustomPopover({variant, popoverBuilder, sign}) {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={popoverBuilder}>
            <Badge className="ps-2 pe-2 mb-auto mt-auto" bg={variant} pill>{sign}</Badge>
        </OverlayTrigger>
    );
}