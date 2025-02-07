import { useState } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import Badge from 'react-bootstrap/Badge';


function buildOverlay(show, setShow, target, props) {
    function onHide(e) {
        setShow(false);
    };
    const body = (show) ? props.bodyBuilder(props.id) : (<></>);
    const header = (show) ? props.headerBuilder(props.title) : (<></>);
    return (
        <Overlay
            show={show}
            target={target}
            rootClose='true'
            onHide={onHide}
            placement={props.placement}>
            <Popover id="info-popover" className="popover-adjustable2">
                <Popover.Header>
                    {header}
                </Popover.Header>
                <Popover.Body className="p-2" style={props.popoverBodyStyle}>
                    {body}
                </Popover.Body>
            </Popover>
        </Overlay>
    );

}

export default function InfoPopover(props) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    let sign = "!";
    if (props.sign) {
        sign = props.sign;
    }
    function handleClick(e) {
        setShow(!show);
        setTarget(e.target);
    };
    const overlay = (show) ? buildOverlay(show, setShow, target, props) : (<></>);
    return (
        <div className={props.className}>
            <Badge bg="danger" pill onClick={handleClick} style={{cursor: "pointer"}}>{sign}</Badge>
            {overlay}
        </div>
    );
}