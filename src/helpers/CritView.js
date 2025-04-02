import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import { getSymbolStyle } from './AdditionalDView';
import { getCurveValueFromDamageItem } from './mods/DamageSetter';


// It does not handle possible crit damages from enchantments (seems we do not have them)
export default function CritView({damageExtractor, crits, weapId}) {
    if (!crits || crits.length === 0) {
        return (<></>);
    }
    let allItems = getCritDamages(damageExtractor, crits, weapId, true);
    if (allItems.length === 0) {
        return (<></>);
    }
    return (
        <>
            <Divider className='m-1 p-1'>Critical Hit</Divider>
            <Row className="m-1 d-flex justify-content-center">
                {allItems}
            </Row>
        </>
    );
}

export function getCritDamages(damageExtractor, crits, weapId, visual=false) {
    let allItems = [];
    if (!crits) {
        return allItems;
    }
    for (let i = 0; i < crits.length; i++) {
        let result = {};
        const ench = crits[i];
        damageExtractor.extractEnch(ench, result, "Base Crit", false, weapId);
        for (const property in result) {
            const spells = result[property];
            if (visual) {
                allItems.push(getItems(spells, damageExtractor.alt));

            } else {
                allItems.push(spells);
            }
        }
    }
    return allItems;
}

function getItems(crits, alt) {
    let result = [];
    for (let i = 0; i < crits.length; i++) {
        const damage = crits[i];
        const [symbol, style] = getSymbolStyle(damage.type_name);
        let value = getCurveValueFromDamageItem(damage, alt);
        if (value === 0) {
            value = damage.value;
            if (value === 0) {
                value = damage.magnitude;
            }
        }
        if (damage.time > 0) {
            value += " - " + damage.time + "s";
        }
        if (damage.interval > 0) {
            value += " (" + damage.interval.toFixed(1) + ")";
        }
        result.push(keyValueBadge(style, '10rem', symbol,  value, i));
    }
    return result;
}