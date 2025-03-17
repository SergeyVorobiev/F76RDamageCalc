import { idNameRow, buildConditionStrings, buildRow, getEffectButton, buildActor, buildTextBlock, buildEffect, vmadView } from '../../helpers/EffectViewHelper';
import { Divider } from 'antd';
import Card from 'react-bootstrap/Card';


const kind = {1: "Float", 3: "List", 4: "Activate", 5: "Spell", 8: "Actor", 9: "Item"};

function buildPerkEffect(effect, key, onEffectClick) {
    const rows = getRows(effect, onEffectClick);
    const conditions = buildConditionStrings(effect.conditions, "mt-1 p-1");
    const indent = (conditions.length > 0) ? (<div className="m-1" />) : null;
    const body = (
        <>
            {conditions}
            {indent}
            {buildRow("Type:", effect.e_type, 'blue')}
            {rows}
        </>
    );
    return buildEffect(key, body);
}

function getRows(effect, onEffectClick) {
    const vType = effect.v_type;
    if (vType === 0 && effect.e_type === "Ability") {
        return (
            <>
                {getEffectButton(effect.spell, onEffectClick)}
            </>
        );
    } else if (vType === 1) {
        return (
            <>
                {buildRow("Name:", effect.entry, 'blue')}
                {buildRow("Operation:", effect.op, 'blue')}
                {buildRow("Value:", effect.value, 'blue')}
            </>
        );
    } else if (vType === 4) {
        return (
            <>
                {buildRow("Name:", effect.entry, 'blue')}
                {buildRow("Operation:", effect.op, 'blue')}
            </>
        )
    } else if (vType === 5) {
        return (
            <>
                {buildRow("Name:", effect.entry, 'blue')}
                {buildRow("Operation:", effect.op, 'blue')}
                {getEffectButton(effect.value, onEffectClick)}
            </>
        );
    } else if (vType === 8) {
        return (
            <>
                {buildRow("Name:", effect.entry, 'blue')}
                {buildRow("Operation:", effect.op, 'blue')}
                {buildActors(effect.value)}
            </>
        );
    } else {
        return (
            <div className="d-flex justify-content-center">
                <b><small>Does not have a view for type: {vType}</small></b>
            </div>
        );
    }
}

function buildActors(value) {
    const actor1 = value.actor1;
    const actor2 = value.actor2;
    const val = value.value;
    return (
        <Card className="mt-1 mb-1 p-1 m-0">
            {buildActor(actor1)}
            {buildActor(actor2)}
            {buildRow("Value:", val, 'blue')}
        </Card>
    );
}

function getEffects(effects, onEffectClick) {
    const result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        result.push(buildPerkEffect(effect, i, onEffectClick));
    }
    return result;
}

export default function PerkCompactView(props) {
    const perk = props.perk;
    return (
        <>
            {idNameRow(perk.id, perk.name)}
            {buildTextBlock(perk.desc, null, null, "mt-2 p-1")}
            {buildConditionStrings(perk.conditions, "mt-2 p-1")}
            {vmadView(perk.id, perk.vmad, props.onEffectClick)}
            <Divider className="pt-0 mt-2 mb-2">Effects</Divider>
            {getEffects(perk.effects, props.onEffectClick)}
        </>
    );
}