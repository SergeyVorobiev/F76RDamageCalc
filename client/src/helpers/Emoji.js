import iBullet from '../resources/icons/bullet3.webp';
import iAmmo from '../resources/icons/ammo5.webp';
import iFireRate from '../resources/icons/fireRate.webp';
import iTAmmo from '../resources/icons/tAmmo.webp';
import iGun from '../resources/icons/gun.webp';
import iRifle from '../resources/icons/rifle.webp';
import iShotgun from '../resources/icons/shotgun.webp';
import iBow from '../resources/icons/bow.webp';
import iMelee from '../resources/icons/melee.webp';
import iHeavy from '../resources/icons/heavy.webp';
import iUnarmed from '../resources/icons/unarmed.webp';
import iThrown from '../resources/icons/thrown.webp';
import Image from 'react-bootstrap/Image';


export function getNumberEmoji(number) {
    switch(number) {
        case 0:
            return "0️⃣";
        case 1:
            return "1️⃣";
        case 2:
            return "2️⃣";
        case 3:
            return "3️⃣";
        case 4:
            return "4️⃣";
        case 5:
            return "5️⃣";
        case 6:
            return "6️⃣";
        case 7:
            return "7️⃣";
        case 8:
            return "8️⃣";
        case 9:
            return "9️⃣";
        default:
            return "";
    }
}

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
    return (<Image className="p-0 m-0" style={{ maxHeight: maxHeight }} src={src} fluid />);
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

export function thrown(maxHeight) {
    return image(maxHeight, iThrown);
}

export function addText(imageF, maxHeight, marginLeft, text) {
    return (<>{imageF(maxHeight)} <span style={{marginLeft: marginLeft}}>{text}</span></>)
}