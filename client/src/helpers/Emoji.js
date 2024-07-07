import iBullet from '../resources/icons/bullet3.png';
import iAmmo from '../resources/icons/ammo5.png';
import iFireRate from '../resources/icons/fireRate.png';
import iTAmmo from '../resources/icons/tAmmo.png';
import iGun from '../resources/icons/gun.png';
import iRifle from '../resources/icons/rifle.png';
import iShotgun from '../resources/icons/shotgun.png';
import iBow from '../resources/icons/bow.png';
import iMelee from '../resources/icons/melee.png';
import iHeavy from '../resources/icons/heavy.png';
import iUnarmed from '../resources/icons/unarmed.png';
import Image from 'react-bootstrap/Image';


export function getSymbolText(symbol, text) {
    switch (symbol) {
        case "B":
            return <>💥 {text}</>
        case "E":
            return <>⚡ {text}</>
        case "F":
            return <>🔥 {text}</>;
        case "P":
            return <>☣️ {text}</>;
        case "C":
            return <>❄️ {text}</>;
        case "R":
            return <>☢️ {text}</>;
        default:
            return <> {text}</>
    }
}

function image(maxHeight, src, text) {
    return (<Image style={{ maxHeight: maxHeight }} src={src} fluid />);
}

export function bullet(maxHeight) {
    return image(maxHeight, iBullet);
}

export function ammo(maxHeight) {
    return image(maxHeight, iAmmo);
}

export function fireRate(maxHeight) {
    return image(maxHeight, iFireRate);
}

export function tAmmo(maxHeight) {
    return image(maxHeight, iTAmmo);
}

export function gun(maxHeight) {
    return image(maxHeight, iGun);
}

export function rifle(maxHeight) {
    return image(maxHeight, iRifle);
}

export function shotgun(maxHeight) {
    return image(maxHeight, iShotgun);
}

export function bow(maxHeight) {
    return image(maxHeight, iBow);
}

export function melee(maxHeight) {
    return image(maxHeight, iMelee);
}

export function heavy(maxHeight) {
    return image(maxHeight, iHeavy);
}

export function unarmed(maxHeight) {
    return image(maxHeight, iUnarmed);
}

export function addText(imageF, maxHeight, marginLeft, text) {
    return (<>{imageF(maxHeight)} <span style={{marginLeft: marginLeft}}>{text}</span></>)
}