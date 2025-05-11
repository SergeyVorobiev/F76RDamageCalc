import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotificationToast from '../helpers/NotificationToast';
import { getDamageTypeFromCellName, buildDamageItem } from '../helpers/mods/DamageSetter';
import { useState } from 'react';
import { notification } from 'antd';
import Global from '../helpers/Global';
import Badge from 'react-bootstrap/Badge';
import Modal from 'react-bootstrap/Modal';

const helpBonus = (
    <>
        <div><small> ƒ Damage: D * (D * 0.15 / ((1 - <span style={{color: 'green'}}>AA</span>) * <span style={{color: 'gray'}}>R</span>))<sup>0.365</sup></small></div>
        <p> </p>
        <div><small>🔫 Damage: <span style={{color: 'black'}}><b>43💥</b></span></small></div>
        <div><small>👹 Resistance: <span style={{color: 'gray'}}><b>200💥</b></span></small></div>
        <div><small>🛡️ Anti armor: <span style={{color: 'green'}}><b>50%</b></span></small></div>

        <p> </p>
        <div><small>⚔️ Attack bonus: <span style={{color: 'magenta'}}>+10%</span></small></div>
        <div><small>🚀 Base bonus: <span style={{color: 'blue'}}>+20%, +20%, +20%</span></small></div>
        <div><small>⏫ Total bonus: <span style={{color: 'indigo'}}>+10%, +40%</span></small></div>
        <div><small>🗡️ Result bonus: <span style={{color: 'brown'}}>1.5x (+150% head), 0.3x (-70% reduction)</span></small></div>
        <p> </p>

        <div><small>&emsp; • 43 * <span style={{color:'magenta'}}>1.1</span> = 47.3</small></div>
        <div><small>&emsp; • 47.3 * <span style={{color:'blue'}}>1.6</span> = 75.68</small></div>
        <div><small>&emsp; • 75.68 * <span style={{color:'indigo'}}>1.1</span> * <span style={{color:'indigo'}}>1.4</span> = 116.55</small></div>
        <div><small>&emsp; • 116.55 * (116.55 * 0.15 / ((1 - <span style={{color: 'green'}}>0.5</span>) * <span style={{color: 'gray'}}>200</span>))<sup>0.365</sup> = 61.67</small></div>
        <div><small>&emsp; • 61.67 * <span style={{color:'brown'}}>1.5</span> * <span style={{color:'brown'}}>0.3</span> = <b>27.75💥</b></small></div>
    </>
);

function getHelpModal(show, setShow) {
    return (
        <Modal
            show = {show}
            onHide = {setShow}
            size="lg"
            centered>
            <Modal.Header className="p-2 ps-3 pe-3" closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <small>Damage Calculation Example</small>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {helpBonus}
            </Modal.Body>
        </Modal>
    );
}

function getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification, modalHelpShow, setModalHelpShow) {
    function onSelectCustom(e) {
        if (wSpec.damages.length >= Global.maxDamageItemCount) {
            openNotification();
            return;
        }
        const type = getDamageTypeFromCellName(e);
        const damageItem = buildDamageItem(true, wSpec.weaponId, "custom", type[0], type[1], type[2], 0, 0, 0, 0, 100, 100, false, null, 1, wSpec.damages.length, true);
        wSpec.damages.push(damageItem);

        // Reindex
        for (let i = 0; i < wSpec.damages.length; i++) {
            wSpec.damages[i].index = i;
        }
        setWSpec({...wSpec});
    }
    function onHelpClick(e) {
        setModalHelpShow(true);
    }
    return (
        <Row className="p-2 mb-2 mt-1">
            <NotificationToast toastState={toastState}></NotificationToast>
            {getHelpModal(modalHelpShow, setModalHelpShow)}
            <Col className="d-flex justify-content-start center-text">
                <Badge className="center-text" onClick={onHelpClick} pill style={{cursor: "pointer"}}>?</Badge>
            </Col>
            <Col className="d-flex justify-content-center">
                <DropdownButton variant='warning' size="sm" onSelect={onSelectCustom} title={<strong>Add Damage</strong>}>
                    <Dropdown.Item eventKey="dtPhysical">💥 Physical</Dropdown.Item>
                    <Dropdown.Item eventKey="bleed">🩸 Bleed</Dropdown.Item>
                    <Dropdown.Item eventKey="projExp">🧨 Explosive</Dropdown.Item>
                    <Dropdown.Item eventKey="dtEnergy">⚡ Energy</Dropdown.Item>
                    <Dropdown.Item eventKey="dtFire">🔥 Fire</Dropdown.Item>
                    <Dropdown.Item eventKey="dtCryo">❄️ Cryo</Dropdown.Item>
                    <Dropdown.Item eventKey="dtPoison">☣️ Poison</Dropdown.Item>
                    <Dropdown.Item eventKey="dtRadiationExposure">☢️ Radiation</Dropdown.Item>
                </DropdownButton>
            </Col>
            <Col className="d-flex justify-content-end">
            </Col>
        </Row>
    );
}


export default function DamageAdd({wSpec, setWSpec}) {
    const [toastState, setToastState] = useState(false);
    const [modalHelpShow, setModalHelpShow] = useState(false);
    const [api, contextHolder] = notification.useNotification();

    const openNotification = () => {
        api.open({
            key: "limit",
            message: 'Warning',
            description: 'Damage limit has been achieved',
            duration: 2,
        });
    };
    return (
        <>
            {contextHolder}
            {getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification, modalHelpShow, setModalHelpShow)}
        </>
    );
}