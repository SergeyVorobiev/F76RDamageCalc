import { idNameRow, buildRow, buildActor, buildConditionStrings, buildCurve, buildEffect, getGlobDuration, getGlobMagnitude, getEffectButton, vmadView } from '../../helpers/EffectViewHelper';
import { Divider } from 'antd';


export function getEffects(effects, onEffectClick) {
    const result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        const body = (
            <>
                {getEffectButton(effect.m_effect, onEffectClick)}
                <div className="m-1" />
                {buildConditionStrings(effect.conditions, "mt-1 p-1")}
                {buildCurve(effect.d_curv)}
                {buildRow("Magnitude:", effect.magnitude, 'magenta', true, true)}
                {getGlobMagnitude(effect)}
                {buildRow("Duration:", effect.duration, 'purple', true, true)}
                {getGlobDuration(effect)}
                {buildRow("Area:", effect.area, 'blue', true, true)}
                {buildActor(effect.actor)}
            </>
        );
        result.push(buildEffect(i, body));
    }
    return result;
}

export default function EnchCompactView(props) {
    const ench = props.ench;
    return (
        <>
            {idNameRow(ench.id, ench.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", ench.full, 'purple', false)}
            {buildRow("Type:", ench.type, 'blue', false)}
            {buildRow("Target:", ench.target, 'purple', false)}
            {buildRow("Duration type:", ench.e_type, 'purple', false)}
            <Divider className="pt-0 mt-2 mb-2">Effects</Divider>
            {getEffects(ench.mag_effects, props.onEffectClick)}
        </>
    );
}