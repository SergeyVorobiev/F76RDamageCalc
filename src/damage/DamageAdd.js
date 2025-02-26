import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NotificationToast from '../helpers/NotificationToast';
import { getDamageTypeFromCellName, buildDamageItem } from '../helpers/mods/DamageSetter';
import { useState } from 'react';
import { notification } from 'antd';


function getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification) {
    function onSelectCustom(e) {
        if (wSpec.damages.length >= 6) {
            openNotification();
            return;
        }
        const type = getDamageTypeFromCellName(e);
        const damageItem = buildDamageItem(wSpec.weaponId, "custom", type[0], type[1], type[2], 0, 0, 0, 0, 100, 100, false, wSpec.damages.length, true);
        wSpec.damages.push(damageItem);

        // Reindex
        for (let i = 0; i < wSpec.damages.length; i++) {
            wSpec.damages[i].index = i;
        }
        setWSpec({...wSpec});
    }
    return (
        <Row className="p-2 mb-2 mt-1">
            <NotificationToast toastState={toastState}></NotificationToast>
            <Col className="d-flex justify-content-center">
                <DropdownButton variant='warning' size="sm" onSelect={onSelectCustom} title={<strong>Add Damage</strong>}>
                    <Dropdown.Item eventKey="bbDamage">💥 Physical</Dropdown.Item>
                    <Dropdown.Item eventKey="bleed">🩸 Bleed</Dropdown.Item>
                    <Dropdown.Item eventKey="projExp">🧨 Explosive</Dropdown.Item>
                    <Dropdown.Item eventKey="ebDamage">⚡ Energy</Dropdown.Item>
                    <Dropdown.Item eventKey="fbDamage">🔥 Fire</Dropdown.Item>
                    <Dropdown.Item eventKey="cbDamage">❄️ Cryo</Dropdown.Item>
                    <Dropdown.Item eventKey="pbDamage">☣️ Poison</Dropdown.Item>
                    <Dropdown.Item eventKey="rbDamage">☢️ Radiation</Dropdown.Item>
                </DropdownButton>
            </Col>
        </Row>
    );
}


export default function DamageAdd({wSpec, setWSpec}) {
    const [toastState, setToastState] = useState(false);
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
            {getDropdown(wSpec, setWSpec, toastState, setToastState, openNotification)}
        </>
    );
}