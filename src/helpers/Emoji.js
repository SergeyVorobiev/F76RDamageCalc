const icons = require.context('../resources/icons', true, /\.webp/);

import CachedImage from './views/CachedImage';
import { Ammo } from '../svg/SVGIcons';

function getIcon(name) {
    try {
        return icons('./' + name + '.webp');
    } catch {
        return '';
    }
}

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

function image(maxHeight, imName, altName, className=null) {
    if (!className) {
        className = "mt-auto mb-auto m-0";
    }
    const src = getIcon(imName);
    return (<CachedImage alt={altName} className={className} width='auto' maxHeight={maxHeight} src={src} />);
}

export function bullet(maxHeight) {
    return image(maxHeight, "bullet", "Bullet");
}

export function ammo(maxHeight, className=null) {
    // return image(maxHeight, "ammo", "Ammo");
    return <Ammo width={maxHeight} height={maxHeight} />
}

export function fireRate(maxHeight) {
    return image(maxHeight, "fireRate", "Fire rate");
}

export function tAmmo(maxHeight) {
    return image(maxHeight, "tAmmo", "Ammo");
}

export function gun(maxHeight) {
    return image(maxHeight, "gun", "Gun");
}

export function rifle(maxHeight) {
    return image(maxHeight, "rifle", "Rifle");
}

export function shotgun(maxHeight) {
    return image(maxHeight, "shotgun", "Shotgun");
}

export function bow(maxHeight) {
    return image(maxHeight, "bow", "Bow");
}

export function melee(maxHeight) {
    return image(maxHeight, "melee", "Melee");
}

export function heavy(maxHeight) {
    return image(maxHeight, "heavy", "Heavy");
}

export function unarmed(maxHeight) {
    return image(maxHeight, "unarmed", "Unarmed");
}

export function thrown(maxHeight) {
    return image(maxHeight, "thrown", "Thrown");
}

export function addText(imageF, maxHeight, marginLeft, text) {
    return (<div>{imageF(maxHeight)} <span style={{marginLeft: marginLeft}} />{text}</div>)
}