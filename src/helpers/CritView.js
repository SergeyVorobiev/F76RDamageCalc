import { keyValueBadge } from './RowBuilder';
import {  Divider } from 'antd';
import Row from 'react-bootstrap/Row';
import { getSymbolStyle } from './AdditionalDView';


// It does not handle possible crit damages from other damage buffs (enchantments) (seems we do not have them)
export default function CritView(props) {
    const damages = props.template.damages;
    if (!damages || damages.length === 0) {
        return (<></>);
    }
    const critDamages = [];
    for (let i = 0; i < damages.length; i++) {
        const damage = damages[i];
        if (damage.ignored || !damage.isCrit) {
            continue;
        }
        critDamages.push(damage);
    }
    if (critDamages.length === 0) {
        return (<></>);
    }
    let allItems = getItems(critDamages);
    return (
        <>
            <Divider className='m-1 p-1'>Critical Hit</Divider>
            <Row className="m-1 d-flex justify-content-center">
                {allItems}
            </Row>
        </>
    );
}

function getItems(critDamages) {
    let result = [];
    for (let i = 0; i < critDamages.length; i++) {
        const damage = critDamages[i];
        const [symbol, style] = getSymbolStyle(damage.type, damage.kind);
        let value = damage.damage.toFixed(1);
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