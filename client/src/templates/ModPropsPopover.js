import Popover from 'react-bootstrap/Popover';
import { Tag, Divider } from 'antd';
import Card from 'react-bootstrap/Card';
import { keyValueTag } from '../helpers/RowBuilder';
import { getEffectsForPopover, getSpellHeader } from '../helpers/SpellView';
import getSpell from '../helpers/Spell';
import { weaponPopover } from '../helpers/ViewHelper';


function getFull(spell, color) {
    if (spell.full !== '') {
        return keyValueTag("Name:", spell.full, color);
    }
    return (<></>);
}

function getIf(spell, name, fieldName, color) {
    if (name === "perk") {
        if (spell[name] !== "00000000") {
            throw new Error('Perk exists: ' + spell[name]);
        }
    }
    if (spell[name]) {
        return keyValueTag(name, spell[name], color);
    }
    return (<></>);
}

function buildModCard(mod_e, color) {
    if (mod_e.prop === "Enchantments") {
        const spell = getSpell().get(mod_e.val1);
        const effects = spell.mag_effects;
        return (
            <Card className="mb-1 mt-1">
                {keyValueTag(mod_e.op,  mod_e.prop, color)}
                {getSpellHeader(spell, '100%')}
                {getEffectsForPopover(effects)}
            </Card>
        );
    } else {
        return (
            <Card className="mb-1 mt-1">
                {keyValueTag(mod_e.op,  mod_e.prop, color)}
                {keyValueTag('Val1:',  mod_e.val1, color)}
                {keyValueTag('Val2:',  mod_e.val2, color)}
                {keyValueTag('Curv:',  mod_e.curv, color)}
            </Card>
        );
    }
}

function getMods(mods) {
    let result = []
    let color = 'purple';
    for (let i = 0; i < mods.length; i++) {
        const mod_e = mods[i];
        result.push(buildModCard(mod_e, color));
        if (color === 'purple') {
            color = 'magenta';
        } else {
            color = 'purple';
        }
    }
    return result;
}

export function popoverContent(modData) {
    return (
        <>
            <Tag className="m-1" color={'indigo'}><strong>{modData.id}</strong></Tag>
            <Tag className="m-1" color={'red'}>{modData.codeName}</Tag>
            <Divider className='mt-1 mb-2'></Divider>
            {getMods(modData.modifiers)}
        </>
    );
}