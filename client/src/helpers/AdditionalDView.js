import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import { collectAllDamages } from './mods/DamageSetter';


export function getSymbolStyle(dType, kind) {
    switch(dType) {
        case "dtPhysical":
            if (kind === 'bleed') {
                return ["🩸", "badge bg-lite m-1"];
            } else if (kind === 'explosive') {
                return ["🧨", "badge bg-lite m-1"];
            }
            return ["💥", "badge bg-ballistic m-1"];
        case "dtEnergy":
            return ["⚡", "badge bg-energy m-1"];
        case "dtFire":
            return ["🔥", "badge bg-fire m-1"];
        case "dtCryo":
            return ["❄️", "badge bg-cold m-1"];
        case "dtPoison":
            return ["☣️", "badge bg-poison m-1"];
        case "dtRadiationExposure":
            return ["☢️", "badge bg-rad m-1"];
        default:
            return ["", ""];
    }
}

function getItems(adDamage, bonusMult, creatures) {
    let result = [];
    for (let i = 0; i < adDamage.length; i++) {
        const damage = adDamage[i];
        if (damage.ignore) {
            continue;
        }
        const [symbol, style] = getSymbolStyle(damage.type, damage.kind);
        let value = damage.damage.toFixed(1);
        if (bonusMult > 0) {
            const bMult = (value * bonusMult).toFixed(1);
            value += " (+" + bMult + ") ";
        }
        if (damage.time > 0) {
            value += " - " + damage.time + "s";
        }
        if (damage.interval > 0) {
            value += " (" + damage.interval.toFixed(1) + ")";
        }
        if (damage.area > 0) {
            value += " (" + damage.area.toFixed(0) + " area)";
        }
        result.push(<>{keyValueBadge(style, '10rem', symbol,  value)}</>);
    }
    for (let i = 0; i < creatures.length; i++) {
        const creature = creatures[i];
        const value = "+" + creature.value + "%";
        const name = "🐵 " + creature.name;
        result.push(<>{keyValueBadge("badge bg-lite m-1", '10rem', name, value)}</>);
    }
    return result;
}

export default function AdditionalDView({template}) {
    const adDamage = collectAllDamages(template);

    if (!adDamage || adDamage.length === 0) {
        return (<></>);
    }
    return (
        <>
            <Divider className='m-1 p-1'>Damage</Divider>
            <Row className="m-1 d-flex justify-content-center">
                {getItems(adDamage, template.bonusMult[1], template.creature)}
            </Row>
        </>
    );
}