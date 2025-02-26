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
import Image from "next/image";


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

function image(maxHeight, src, altName, className=null) {
    if (!className) {
        className = "mt-auto mb-auto m-0";
    }
    return (<Image priority alt={altName} className={className} style={{ width: 'auto', maxHeight: maxHeight }} src={src} />);
}

export function bullet(maxHeight) {
    return image(maxHeight, iBullet, "Bullet");
}

export function ammo(maxHeight, className=null) {
    return image(maxHeight, iAmmo, "Ammo", className);
}

export function fireRate(maxHeight) {
    return image(maxHeight, iFireRate, "Fire rate");
}

export function tAmmo(maxHeight) {
    return image(maxHeight, iTAmmo, "Ammo");
}

export function gun(maxHeight) {
    return image(maxHeight, iGun, "Gun");
}

export function rifle(maxHeight) {
    return image(maxHeight, iRifle, "Rifle");
}

export function shotgun(maxHeight) {
    return image(maxHeight, iShotgun, "Shotgun");
}

export function bow(maxHeight) {
    return image(maxHeight, iBow, "Bow");
}

export function melee(maxHeight) {
    return image(maxHeight, iMelee, "Melee");
}

export function heavy(maxHeight) {
    return image(maxHeight, iHeavy, "Heavy");
}

export function unarmed(maxHeight) {
    return image(maxHeight, iUnarmed, "Unarmed");
}

export function thrown(maxHeight) {
    return image(maxHeight, iThrown, "Thrown");
}

export function addText(imageF, maxHeight, marginLeft, text) {
    return (<>{imageF(maxHeight)} <span style={{marginLeft: marginLeft}}>{text}</span></>)
}