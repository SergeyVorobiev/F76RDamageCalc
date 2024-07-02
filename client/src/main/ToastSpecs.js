import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Tag} from 'antd';
import { memo } from 'react';


function row(name, value, colorName="purple", colorValue="red") {
    return (
       <Row className="flex-nowrap">
          <Col className="text-start text-nowrap">
            <strong>
                 <Tag bordered={false} color={colorName}>{name}</Tag>
            </strong>
          </Col>

          <Col className="text-end text-nowrap pb-1">
              <strong >
                <Tag color={colorValue}>{value}</Tag>
              </strong>
          </Col>
       </Row>
    );
}

const ToastSpecs = memo(function ToastSpecs({resultDamage, showStat, setShowStat}) {
    return (
        <ToastContainer
            className="p-3 position-fixed p-3"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 10 }}>
            <Toast bg="light" onClose={(e) => setShowStat(false)} show={showStat} animation={false}>
                <Toast.Header>
                    <strong className="me-auto">Weapon Stats</strong>
                    <small></small>
                </Toast.Header>
                <Toast.Body>
                    {row('Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize)}
                    {row('Crit:', resultDamage.displayedCrit.toFixed(1))}
                    {row('Fire Rate:', resultDamage.fireRate + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec")}
                    {row('Ammo:', resultDamage.ammoCapacity)}
                    {row('Reload Time:', resultDamage.reloadTime.toFixed(1))}
                    {row('Explosive:', resultDamage.explosive.toFixed(0) + "%")}
                    {row('AA:', (resultDamage.bAA * 100.0).toFixed(1))}
                    {row('Sneak:', resultDamage.displayedSneak.toFixed(1))}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
});

export default ToastSpecs;