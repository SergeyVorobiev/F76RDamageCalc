import { idNameRow, buildRow, buildActor, buildConditionStrings, buildTextBlock, getEffectButton, vmadView, isEffectIdEmpty } from '../../helpers/EffectViewHelper';
import { Divider } from 'antd';


function getDamageType(damageType) {
    if (isEffectIdEmpty(damageType)) {
        return (<></>);
    }
    if (typeof damageType === typeof "") {
        return buildRow("Value:", damageType, 'purple', false);
    }
    return buildActor(damageType, "Damage type");
}

export default function EffectCompactView(props) {
    const effect = props.effect;
    return (
        <>
            {idNameRow(effect.id, effect.name)}
            {vmadView(effect.id, effect.vmad, props.onEffectClick)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildTextBlock(effect.desc, null, null, "mt-1 p-1")}
            {buildConditionStrings(effect.conditions, "mt-1 p-1")}
            {buildRow("Name:", effect.full, 'purple', false)}
            {buildRow("Type:", effect.a_type, 'blue', false)}
            {buildRow("Duration type:", effect.e_type, 'purple', false)}
            {buildRow("Target:", effect.target, "blue", false)}
            {buildActor(effect.actor_value1)}
            {buildActor(effect.actor_value2)}
            {getEffectButton(effect.ability, props.onEffectClick)}
            {getDamageType(effect.d_type)}
            {buildActor(effect.resist, "Resistance")}
            {getEffectButton(effect.perk, props.onEffectClick)}
            {getEffectButton(effect.explosion, props.onEffectClick)}
            {getEffectButton(effect.projectile, props.onEffectClick)}
        </>
    );
}