import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';


export function getSymbolStyle(dType, kind) {
    switch(dType) {
        case "dtPhysical":
            if (kind === 'bleed') {
                return ["🩸", "badge bg-lite-shadow m-1"];
            } else if (kind === 'explosive') {
                return ["🧨", "badge bg-lite-shadow m-1"];
            }
            return ["💥", "badge bg-ballistic-shadow m-1"];
        case "dtEnergy":
            return ["⚡", "badge bg-energy-shadow m-1"];
        case "dtFire":
            return ["🔥", "badge bg-fire-shadow m-1"];
        case "dtCryo":
            return ["❄️", "badge bg-cold-shadow m-1"];
        case "dtPoison":
            return ["☣️", "badge bg-poison-shadow m-1"];
        case "dtRadiationExposure":
            return ["☢️", "badge bg-rad-shadow m-1"];
        default:
            return ["", ""];
    }
}

function getItems(damages, bonusMult, attackDamage, creatures) {
    let result = [];
    let k = 0;
    for (let i = 0; i < damages.length; i++) {
        const damage = damages[i];
        if (damage.ignored || damage.isCrit) {
            continue;
        }
        const [symbol, style] = getSymbolStyle(damage.type, damage.kind);
        let damageVal = damage.damage;
        if (damage.interval === 0 && damage.time === 0) {
            damageVal *= attackDamage;
        }
        let value = damageVal.toFixed(1);

        if (bonusMult > 0) {
            const bMult = (value * bonusMult).toFixed(1);
            value += " (+" + bMult + ") ";
        } else if (bonusMult < 0) {
            const bMult = (value * bonusMult).toFixed(1);
            value += " (" + bMult + ") ";
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
        result.push(keyValueBadge(style, '10rem', symbol, value, k++));
    }
    for (let i = 0; i < creatures.length; i++) {
        const creature = creatures[i];
        const value = "+" + creature.value + "%";
        const name = "🐵 " + creature.name;
        result.push(keyValueBadge("badge bg-lite-shadow m-1", '10rem', name, value, k++));
    }
    return result;
}

export default function AdditionalDView({template}) {
    const damages = template.damages;
    if (!damages || damages.length === 0) {
        return (<></>);
    }
    let legBonus = 0;
    for (const name in template.legBonusMult) {
        if (name === '007aca07') { // Pin-pointer represents chance value
            continue;
        }
        legBonus += template.legBonusMult[name];
    }
    return (
        <>
            <Divider className='m-1 p-1'>Damage</Divider>
            <Row className="m-1 d-flex justify-content-center">
                {getItems(damages, template.bonusMult[1] + legBonus, template.attackDamage[1], template.creature)}
            </Row>
        </>
    );
}