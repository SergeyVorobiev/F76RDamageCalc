import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import {keyValueRow} from '../helpers/RowBuilder';
import { getHotPercentage } from '../helpers/Item';
import { Progress } from 'antd';
import { memo } from 'react';
import { ammo, fireRate, addText } from '../helpers/Emoji';
import { getImageElement } from '../helpers/WeaponImages'


const ToastSpecs = memo(function ToastSpecs({creatures, legendary, weaponName, resultDamage, showStat, setShowStat}) {
    const strength = (resultDamage.strength > 0) ? resultDamage.strength.toFixed(2) : "-";
    return (
        <ToastContainer
            className="p-3 position-fixed p-3"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 10 }}>
            <Toast bg="light" onClose={(e) => setShowStat(false)} show={showStat} animation={false}>
                <Toast.Header className="pe-3">
                    {getImageElement(weaponName.toLowerCase().replaceAll(" ", "_"), "1.5rem")}
                    <strong className="ms-2 mt-auto mb-auto p-auto me-auto">{weaponName}</strong>
                    <small className="me-2">
                        <Progress
                            type="dashboard"
                            steps={50}
                            percent={getHotPercentage(creatures)}
                            format={(percent) => percent}
                            size={[28, 28]}
                            strokeColor="rgb(64, 255, 255)"
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20} />
                    </small>
                </Toast.Header>
                <Toast.Body>
                    {keyValueRow('💥 Damage:', resultDamage.tDamage.toFixed(1) + ' x ' + resultDamage.shotSize, "default", "purple")}
                    {keyValueRow('☠️ Crit:', resultDamage.displayedCrit.toFixed(1), "default", "purple")}
                    {keyValueRow(addText(fireRate, '0.7rem', '0.27rem', "Fire Rate:"), resultDamage.fireRate.toFixed(2) + " - " + (resultDamage.fireRate / 10.0).toFixed(1) + " shots / sec", "default", "purple")}
                    {keyValueRow(addText(ammo, '0.7rem', '0.27rem', "Ammo:"), resultDamage.ammoCapacity, "default", "purple")}
                    {keyValueRow('⌛ Reload:', resultDamage.reloadTime.toFixed(1) + ' s', "default", "purple")}
                    {keyValueRow('💣 Explosive:', resultDamage.explosive.toFixed(0) + "%", "default", "purple")}
                    {keyValueRow('🛡️ Anti Armor:', (resultDamage.bAA * 100.0).toFixed(1) + "%", "default", "purple")}
                    {keyValueRow('🐍 Sneak:', resultDamage.displayedSneak.toFixed(1), "default", "purple")}
                    {keyValueRow('💪 Strength:', strength, "default", "purple")}
                    {keyValueRow('⭐', legendary[legendary.current[0]].name, "default", "gold")}
                    {keyValueRow('⭐⭐', legendary[legendary.current[1]].name, "default", "gold")}
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
});

export default ToastSpecs;