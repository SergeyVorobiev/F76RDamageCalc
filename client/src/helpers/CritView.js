import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import DamageExtractor from './mods/DamageExtractor';
import { getSymbolStyle } from './AdditionalDView';


const damageExtractor = new DamageExtractor();


// It does not handle possible crit damages from enchantments (seems we do not have them)
export default function CritView({crits, weapId}) {
    if (!crits || crits.length === 0) {
        return (<></>);
    }
    let allItems = [];
    for (let i = 0; i < crits.length; i++) {
        let result = {};
        const ench = crits[i];
        damageExtractor.extractEnch(ench, result, "Base Crit", false, weapId);
        for (const property in result) {
            const spells = result[property];
            allItems.push(getItems(spells));
        }
    }
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

function getItems(crits) {
    let result = [];
    for (let i = 0; i < crits.length; i++) {
        const damage = crits[i];
        const [symbol, style] = getSymbolStyle(damage.type_name);
        let value = damage.curv;
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
        result.push(<>{keyValueBadge(style, '8rem', symbol,  value)}</>);
    }
    return result;
}