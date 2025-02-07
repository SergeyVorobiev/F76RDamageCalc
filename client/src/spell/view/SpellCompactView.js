import { idNameRow, buildRow, buildActor, buildConditionStrings, buildCurve, buildEffect, getGlobDuration, getGlobMagnitude, getEffectButton, vmadView } from '../../helpers/EffectViewHelper';
import { Divider } from 'antd';


function getEffects(effects, onEffectClick) {
    const result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        const body = (
            <>
                {buildConditionStrings(effect.conditions, "mt-1 p-1")}
                {buildCurve(effect.d_curv, effect.curve_max_value)}
                {getGlobMagnitude(effect)}
                {buildRow("Magnitude:", effect.magnitude, 'magenta', true, true)}
                {buildRow("Area:", effect.area, 'blue', true, true)}
                {buildActor(effect.actor)}
                {getGlobDuration(effect)}
                {buildRow("Duration:", effect.duration, 'purple', true, true)}
                {getEffectButton(effect.m_effect, onEffectClick)}
            </>
        );
        result.push(buildEffect(i, body));
    }
    return result;
}

function getPerk(perkId, onEffectClick) {
    if (!perkId || perkId === "" || perkId === "00000000") {
        return (<></>);
    }
    return getEffectButton(perkId, onEffectClick);
}

export default function SpellCompactView(props) {
    const spell = props.spell;
    return (
        <>
            {idNameRow(spell.id, spell.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", spell.full, 'purple', false)}
            {buildRow("Type:", spell.type, 'blue', false)}
            {buildRow("Target:", spell.target, 'purple', false)}
            {buildRow("Charge Time:", spell.time, 'blue', false)}
            {buildRow("Range:", spell.range, 'purple', false)}
            {buildRow("Duration:", spell.duration, 'blue', false)}
            {buildRow("Duration type:", spell.e_type, 'purple', false)}
            {vmadView(spell.id, spell.vmad, props.onEffectClick)}
            {getPerk(spell.perk, props.onEffectClick)}
            <Divider className="pt-0 mt-2 mb-2">Effects</Divider>
            {getEffects(spell.mag_effects, props.onEffectClick)}
        </>
    );
}