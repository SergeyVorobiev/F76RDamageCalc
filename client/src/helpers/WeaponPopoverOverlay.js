import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import { LeftOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import ReactDOM from 'react-dom/client';
import Row from 'react-bootstrap/Row';


let number = 0;
let popoverContent = [];

export function WeaponPopoverOverlay({popoverHeader, popoverContent, itemToOverly}) {
    const popover = weaponPopover(popoverHeader, popoverContent);
    function openPopover(e) {
        if (e) {
            initWeaponPopover(popoverContent);
        }
    }
    return (
        <OverlayTrigger onToggle={openPopover} trigger="click" placement="top" rootClose='true' overlay={popover}>
            {itemToOverly}
        </OverlayTrigger>
    );
}

function weaponPopover(header, content) {
    return (
        <Popover className="popover-adjustable2">
            <Popover.Header>
                <Row style={{minHeight: '2rem'}}>
                    <Col className="col-10 d-flex justify-content-start">
                        <strong className="m-auto ms-2">{header}</strong>
                    </Col>
                    <Col>
                        <Button className="m-auto" shape="circle" icon={getIcon()} style={{display: 'none'}} id="WeaponDetailsPopoverBackButton" onClick={popoverBack}></Button>
                    </Col>
                </Row>
            </Popover.Header>
            <Popover.Body className="popover-body2">
                <div id="WeaponDetailsPopover">
                    {content}
                </div>
            </Popover.Body>
        </Popover>
    );
}

function initWeaponPopover(content) {
    number = 0;
    popoverContent = [content];
}

// Use this method if you want to render specific content in the popover (after tap on button for example)
// content - a batch of html tags which will be rendered by ReactDom.render
export function renderWeaponPopover(content) {
    number += 1;
    popoverContent[number] = content;
    document.getElementById("WeaponDetailsPopoverBackButton").style.display = 'inline';
    ReactDOM.createRoot(document.getElementById("WeaponDetailsPopover")).render(content);
}

function popoverBack(e) {
    number -= 1;
    if (number < 1) {
        document.getElementById("WeaponDetailsPopoverBackButton").style.display = 'none';
    }
    ReactDOM.createRoot(document.getElementById("WeaponDetailsPopover")).render(popoverContent[number]);
}

function getIcon() {
    return (
        <div style={{padding: '0.21rem 0.1rem 0rem 0rem'}}>
            <LeftOutlined />
        </div>
    );
}