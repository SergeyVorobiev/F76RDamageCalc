import { idNameRow, buildRow, buildActor, buildConditionStrings, buildTextBlock, getEffectButton, vmadView } from '../../helpers/EffectViewHelper';
import { Divider } from 'antd';
import { getExpView } from '../../helpers/ProjView';


function checkEmpty(obj) {
    return (!obj || obj === "" || obj === "00000000");
}

function getPerk(perkId, onEffectClick) {
    if (checkEmpty(perkId)) {
        return (<></>);
    }
    return getEffectButton(perkId, onEffectClick);
}

function getAbility(spellId, onEffectClick) {
    if (checkEmpty(spellId)) {
        return (<></>);
    }
    return getEffectButton(spellId, onEffectClick);
}

function getDamageType(damageType) {
    if (checkEmpty(damageType)) {
        return (<></>);
    }
    if (typeof damageType === typeof "") {
        return buildRow("Value:", damageType, 'purple', false);
    }
    return buildActor(damageType, "Damage type");
}

function getExplosion(explosion) {
    if (checkEmpty(explosion)) {
        return (<></>);
    }
    return getExpView(explosion);
}

function getProjectile(projectile) {
    if (checkEmpty(projectile)) {
        return (<></>);
    }
    return (<>View for projectile is not implemented</>);
}

function getResistance(resistance) {
    return buildActor(resistance, "Resistance");
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
            {getAbility(effect.ability, props.onEffectClick)}
            {getPerk(effect.perk, props.onEffectClick)}
            {getDamageType(effect.d_type)}
            {getExplosion(effect.explosion)}
            {getProjectile(effect.projectile)}
            {getResistance(effect.resist)}
        </>
    );
}