import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {keyValueRow} from '../helpers/RowBuilder';
import { memo } from 'react';


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
                    {keyValueRow('Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize, "default", "purple")}
                    {keyValueRow('Crit:', resultDamage.displayedCrit.toFixed(1), "default", "purple")}
                    {keyValueRow('Fire Rate:', resultDamage.fireRate + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec", "default", "purple")}
                    {keyValueRow('Ammo:', resultDamage.ammoCapacity, "default", "purple")}
                    {keyValueRow('Reload Time:', resultDamage.reloadTime.toFixed(1), "default", "purple")}
                    {keyValueRow('Explosive:', resultDamage.explosive.toFixed(0) + "%", "default", "purple")}
                    {keyValueRow('AA:', (resultDamage.bAA * 100.0).toFixed(1) + "%", "default", "purple")}
                    {keyValueRow('Sneak:', resultDamage.displayedSneak.toFixed(1), "default", "purple")}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
});

export default ToastSpecs;