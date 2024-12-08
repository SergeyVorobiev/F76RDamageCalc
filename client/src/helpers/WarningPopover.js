import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';


function buildWarning(message, header, className=null) {
    if (!className) {
        className = "popover-adjustable";
    }
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>{header}</strong></Popover.Header>
            <Popover.Body className="popover-body3">
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

export function WarningPopoverBadge({className, variant, message, sign, header, placement='top'}) {
    if (!variant) {
        variant = "primary";
    }
    if (!sign) {
        sign = "!";
    }
    if (!header) {
        header='Warning';
    }
    if (!className) {
        className = "ps-2 pe-2 m-1";
    }
    return (
        <OverlayTrigger className={className} rootClose='true' trigger="click" placement={placement} overlay={buildWarning(message, header)}>
            <Badge className={className} bg={variant} pill>{sign}</Badge>
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