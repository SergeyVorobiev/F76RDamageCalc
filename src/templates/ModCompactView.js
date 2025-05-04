import { Tag, Divider } from 'antd';
import Card from 'react-bootstrap/Card';
import { keyValueTag } from '../helpers/RowBuilder';
import { truncate } from '../helpers/Input';
import { getEffectButton } from '../helpers/EffectViewHelper';


function buildModCard(key, mod_e, color, onEffectClick) {
    if (mod_e.prop === "Enchantments") {
        return (
            <Card key={key} className="mb-1 mt-1">
                {keyValueTag(mod_e.op, mod_e.prop, color)}
                <div className="pb-1 ps-1 pe-1 pt-0">
                    {getEffectButton(mod_e.val1, onEffectClick)}
                </div>
            </Card>
        );
    } else {
        const val1 = truncate(mod_e.val1, 30);
        const val2 = truncate(mod_e.val2, 30);
        return (
            <Card key={key} className="mb-1 mt-1">
                {keyValueTag('Id:', mod_e.id, color)}
                {keyValueTag(mod_e.op, mod_e.prop, color)}
                {keyValueTag('Val1:', val1, color)}
                {keyValueTag('Val2:', val2, color)}
                {keyValueTag('Curve:', mod_e.curv, color)}
                {keyValueTag('CurveAlt:', mod_e.curvAlt, color)}
            </Card>
        );
    }
}

function getMods(mods, onEffectClick) {
    let result = []
    let color = 'purple';
    for (let i = 0; i < mods.length; i++) {
        const mod_e = mods[i];
        result.push(buildModCard(i, mod_e, color, onEffectClick));
        if (color === 'purple') {
            color = 'magenta';
        } else {
            color = 'purple';
        }
    }
    return result;
}

export default function ModCompactView(props) {
    const modData = props.mod;
    return (
        <>
            <Tag className="m-1" color={'indigo'}><strong>{modData.id}</strong></Tag>
            <Tag className="m-1" color={'red'}>{modData.codeName}</Tag>
            <Divider className='mt-1 mb-2'></Divider>
            {getMods(modData.modifiers, props.onEffectClick)}
        </>
    );
}