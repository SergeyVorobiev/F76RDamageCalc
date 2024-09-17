import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';


export function getSymbolStyle(dType) {
    switch(dType) {
        case "dtPhysical":
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

function getItems(adDamage) {
    let result = [];
    for (let i = 0; i < adDamage.length; i++) {
        const damage = adDamage[i];
        const [symbol, style] = getSymbolStyle(damage.type);
        let value = damage.value;
        if (damage.time > 0) {
            value += " - " + damage.time + "s";
        }
        if (damage.interval > 0) {
            value += " (" + damage.interval.toFixed(1) + ")";
        }
        result.push(<>{keyValueBadge(style, '8rem', symbol,  value)}</>);
    }
    return result;
}

export default function AdditionalDView({adDamage}) {
    if (!adDamage || adDamage.length === 0) {
        return (<></>);
    }
    return (
        <>
            <Divider className='m-1 p-1'>Additional</Divider>
            <Row className="m-1 d-flex justify-content-center">
                {getItems(adDamage)}
            </Row>
        </>
    );
}