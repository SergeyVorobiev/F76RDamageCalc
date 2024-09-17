import { getField, getResolvedField } from './ViewHelper';
import getPerk from './Perk';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { getSpellHeader, getEffectsForPopover } from './SpellView';
import { getActorData } from '../templates/EffectPopover';
import getSpell from './Spell';


const kind = {1: "Float", 3: "List", 4: "Activate", 5: "Spell", 8: "Actor", 9: "Item"};

export default function perkPopover(perk) {
    return (
        <div>Perk</div>
    );
}

function getEffects(effects, width) {
    const result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        const vType = effect.v_type;
        if (vType === 8) {
            result.push(buildEightEffect(effect, width, kind[vType]));
        } else if (vType === 5) {
            result.push(buildFifthEffect(effect, width, kind[vType]));
        } else if (vType === 1) {
            result.push(buildFirstEffect(effect, width, kind[vType]));
        } else {
            throw new Error("Unsupported vType: " + vType);
        }
    }
    return result;
}

function buildFirstEffect(effect, width, kind) {
    return (
        <Card border="secondary" className="mt-1 mb-1 p-0 m-0">
            <Row className="pt-1 pb-2">
                {getResolvedField('Kind:', kind, 'pink', width)}
                {getField(effect, 'Type:', 'e_type', 'pink', width)}
                {getField(effect, 'Entry:', 'entry', 'pink', width)}
                {getField(effect, 'Operation:', 'op', 'pink', width)}
                {getField(effect, 'Value:', 'value', 'pink', width, false)}
            </Row>
        </Card>
    );
}

function buildFifthEffect(effect, width, kind) {
    let spell = effect.value;
    if (typeof spell === typeof '') {
        spell = getSpell().get(spell);
    }
    return (
        <Card border="secondary" className="mt-1 mb-1 p-0 m-0">
            <Row className="pt-1 pb-2">
                {getResolvedField('Kind:', kind, 'purple', width)}
                {getField(effect, 'Type:', 'e_type', 'purple', width)}
                {getField(effect, 'Entry:', 'entry', 'purple', width)}
                {getField(effect, 'Operation:', 'op', 'purple', width)}
            </Row>
            {getSpellHeader(spell)}
            <div className="pt-1" />
            {getEffectsForPopover(spell.mag_effects)}
        </Card>
    );
}

function buildEightEffect(effect, width, kind) {
    const actor1 = getActorData(effect.value.actor1);
    const actor2 = getActorData(effect.value.actor2);
    return (
        <Card border="secondary" className='mt-1 mb-1 p-0 m-0'>
            <Row className="pt-1 pb-2">
                {getResolvedField('Kind:', kind, 'blue', width)}
                {getField(effect, 'Type:', 'e_type', 'blue', width)}
                {getField(effect, 'Entry:', 'entry', 'blue', width)}
                {getField(effect, 'Operation:', 'op', 'blue', width)}
                {getField(effect.value, 'Value:', 'value', 'blue', width, false, 3)}
                {getResolvedField("Actor1:", actor1, 'blue', width)}
                {getResolvedField("Actor2:", actor2, 'blue', width)}
            </Row>
        </Card>
    );
}

export function getPerkContent(perkId, width='20rem') {
    const perk = getPerk().get(perkId);
    return (
        <Row>
            {getField(perk, 'Id:', 'id', 'default', width)}
            {getField(perk, 'Code Name:', 'name', 'purple', width)}
            {getField(perk, 'Name:', 'full', 'purple', width)}
            {getEffects(perk.effects, width)}
        </Row>
    );
}
