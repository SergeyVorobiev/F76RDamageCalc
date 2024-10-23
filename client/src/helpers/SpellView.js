import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Divider } from 'antd';
import { getField } from './ViewHelper';
import getSpell from '../helpers/Spell';
import Button from 'react-bootstrap/Button';
import { getPerkButton, getEffectContent } from '../templates/EffectPopover';
import { WeaponPopoverOverlay, renderWeaponPopover } from '../helpers/WeaponPopoverOverlay';


function getOverlay(effect, buttonStyle, key) {
    const mEffect = effect['m_effect'];
    const overlayButton = (<Button className="d-flex justify-content-center m-1" size='sm' style={buttonStyle}>Effect: {mEffect['id']}</Button>);
    return (
        <WeaponPopoverOverlay key={key} popoverHeader={mEffect.full} popoverContent={getEffectContent(effect)} itemToOverly={overlayButton}></WeaponPopoverOverlay>
    );
}

function getEffectButton(effect, key) {
    function onClick(e) {
        renderWeaponPopover(getEffectContent(effect));
    }
    const mEffect = effect['m_effect'];
    return (
        <Button key={key} className="d-flex justify-content-center mb-1 m-auto" size='sm' onClick={onClick} style={{width: '15rem'}}>Effect: {mEffect['id']}</Button>
    );
}

export function getEffectsForPopover(effects) {
    let result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        result.push(getEffectButton(effect, i));
    }
    return result;
}

export function getEffects(effects, buttonStyle={width: '15rem'}) {
    let result = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        result.push(getOverlay(effect, buttonStyle, i));
    }
    return result;
}

export function getSpellHeader(spell, width='20rem') {
    return (
        <>
            {getField(spell, 'Id:', 'id', 'default', width)}
            {getField(spell, 'Code Name:', 'name', 'purple', width)}
            {getField(spell, 'Name:', 'full', 'purple', width)}
            {getField(spell, 'Type:', 'type', 'blue', width)}
            {getField(spell, 'Activity:', 'e_type', 'blue', width)}
            {getField(spell, 'Target:', 'target', 'blue', width)}
            {getPerkButton(spell.perk)}
        </>
    )
}

function buildSpellView(spell) {
    const effects = spell['mag_effects'];
    return (
        <>
            <Row>
                {getSpellHeader(spell)}
            </Row>
            <Divider className='m-0 pt-2 pb-1 ps-4 pe-4'>Effects</Divider>
            <Row className='d-flex justify-content-center ps-1 pe-1'>
                {getEffects(effects)}
            </Row>
        </>
    );
}

export function getCardSpell(spellId, header) {
    const spell = getSpell().get(spellId);
    if (!spell) {
        return (<></>);
    }
    if (!header) {
        header = "Spell"
    }
    return (
        <Card className="bg-spell-body">
            <Card.Header className="bg-spell-header m-0 ps-2 p-1">
                <small>{header}</small>
            </Card.Header>
            <Card.Body className="p-0 ms-1 me-1">
                {buildSpellView(spell)}
            </Card.Body>
        </Card>
    );
}

export default function SpellView({spellId, header}) {
    return getCardSpell(spellId, header);
}