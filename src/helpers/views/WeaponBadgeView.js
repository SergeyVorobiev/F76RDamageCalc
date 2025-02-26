import { bullet, ammo, fireRate } from '../Emoji';
import { getSymbolStyle } from '../../damage/DamageItem';
import { Divider } from 'antd';
import Stack from 'react-bootstrap/Stack';


function getColTag(key, value, keyId, minWidth) {
    if (!minWidth) {
        minWidth = '1rem';
    }
    return (
        <div key={keyId} className="ps-1 pe-1 m-1 shadow-outline5" style={{width: 'fit-content', borderStyle: 'solid', backgroundColor: '#f5f5f1', borderColor: '#87836c', borderRadius: '5px', borderWidth: '1px'}}>
            <Stack direction="horizontal" gap={0}>
                <div>{key}</div><div style={{minWidth: minWidth}}></div><b style={{fontSize: '0.7rem'}}>{value}</b>
            </Stack>
        </div>
    );
}

function getAmmoCapacity(weapon) {
    if (weapon.getAmmoCapacity() === 0) {
        return (<></>);
    }
    return getColTag(ammo("0.7rem", "m-1"), weapon.getAmmoCapacity());
}

function getBulletSize(weapon) {
    if (!weapon.isRanged()) {
        return (<></>);
    }
    return getColTag(bullet("0.7rem", "m-1"), weapon.getShotSize());
}

function getFireRate(weapon) {
    const range = weapon.isRanged();
    const key = (range) ? fireRate("0.7rem", "m-1") : <span style={{fontSize: '0.7rem'}}>👊🏼</span>;
    return getColTag(key, weapon.getFireRate().toFixed(0));
}

function getReload(weapon) {
    if (weapon.getReloadTime() === 0) {
        return (<></>);
    }
    return getColTag(<span style={{fontSize: '0.7rem'}}>⌛</span>, weapon.getReloadTime().toFixed(1));
}

function getCrit(weapon) {
    return getColTag(<span style={{fontSize: '0.7rem'}}>☠️</span>, weapon.getCritBonus().toFixed(0));
}

function getSneak(weapon) {
    return getColTag(<span style={{fontSize: '0.7rem'}}>🐍</span>, weapon.getSneakBonus().toFixed(0));
}

function getHealth(player) {
    return getColTag(<span style={{fontSize: '0.7rem'}}>❤️</span>, player.health.value.toFixed(0));
}

function getTeam(player) {
    if (!player.team) {
        return (<></>);
    }
    return getColTag(<span style={{fontSize: '0.7rem'}}>👨‍👩‍👧‍👦</span>, "", null, "0rem");
}

function getStrength(playerStats, weapon) {
    if (weapon.isRanged()) {
        return (<></>);
    }
    return getColTag(<span style={{fontSize: '0.7rem'}}>💪</span>, playerStats.strength.value);
}

function buildChanceAccuracyString(damage) {
    const chance = damage.chance;
    const accuracy = damage.finalAccuracy;
    if (chance === 100 && accuracy === 100) {
        return "";
    } else if (accuracy === 100 && chance < 100) {
        return " (🎲" + chance + "%)";
    } else if (accuracy < 100 && chance === 100) {
        return " (🎯" + accuracy + "%)";
    } else {
        return " (🎲" + chance + "% | 🎯" + accuracy + "%)";
    }
}

function getDamages(weapon) {
    const result = [];
    for (let i = 0; i < weapon.damages.length; i++) {
        const damage = weapon.damages[i];
        if (!damage.isUsed) {
            continue;
        }
        const accuracyString = buildChanceAccuracyString(damage);
        let value = (damage.time === 0) ? damage.damage + accuracyString : damage.damage + " - " + damage.time + "s" + accuracyString;

        const icon = getSymbolStyle(damage.kind)[0];
        result.push(getColTag(<span style={{fontSize: '0.7rem'}}>{icon}</span>, value, i));
    }
    return result;
}

export default function WeaponBadgeView(props) {
    return (
        <>
            <Divider className="p-0 mt-3 mb-0">Specs</Divider>
            <div className="m-0" />
            <div className="row p-1 justify-content-center mb-2">
                {getDamages(props.weapon)}
                {getAmmoCapacity(props.weapon)}
                {getBulletSize(props.weapon)}
                {getFireRate(props.weapon)}
                {getReload(props.weapon)}
                {getCrit(props.weapon)}
                {getSneak(props.weapon)}
                {getHealth(props.player)}
                {getTeam(props.player)}
                {getStrength(props.playerStats, props.weapon)}
            </div>
        </>
    );
}