import Card from 'react-bootstrap/Card';
import { keyValueTag } from '../helpers/RowBuilder';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { getPerkContent } from '../helpers/PerkPopover';
import { renderWeaponPopover } from '../helpers/WeaponPopoverOverlay';
import { getNameValueField } from '../helpers/ViewHelper';
import { getExplosiveForPopover } from '../helpers/ProjView';
import { truncate } from '../helpers/Input';


function getField(lValue, rValue, color) {
    if (rValue && typeof rValue === typeof '') {
        rValue = rValue.toString();
        rValue = truncate(rValue, 30);
    }
    return (
        <Row className="d-flex justify-content-center ps-1 pe-1">
            {keyValueTag(lValue, rValue, color)}
        </Row>
    );
}

export function getActorData(actor) {
    if (actor === "" || actor === '00000000' || actor === '00000392') {
        return '';
    }
    return actor.id + " / " + actor.name;
}

export function getActor(name, actor, color, width, under_row=true) {
    const actorData = getActorData(actor);
    if (actorData === '') {
        return (<></>);
    }
    if (under_row) {
        return getField(name, actorData, color);
    }
    return getNameValueField(name, actorData, color);
}

export function getPerkButton(perkId) {
    if (!perkId || perkId === '00000000') {
        return (<></>)
    }
    function onClick(e) {
        renderWeaponPopover(getPerkContent(perkId));
    }
    return (
        <Row className="d-flex justify-content-center ps-1 pe-1">
            <Button size='sm' onClick={onClick} style={{width: '15rem'}}>Perk: {perkId}</Button>
        </Row>
    );
}

function getGlobDuration(effect) {
    const dur = effect.glob_duration;
    if (dur !== '') {
        return (
            <Card className='mt-1 mb-1'>
                <Card.Header className="bg-spell-header p-0 ps-2">Glob Duration</Card.Header>
                <Card.Body>
                    {getField("Id:", dur.id, "purple")}
                    {getField("Name:", dur.name, "purple")}
                    {getField("Value:", dur.value, "purple")}
                </Card.Body>
            </Card>
        );
    }
    return getField("GlobDuration:", "0", "purple")
}

function getGlobMagnitude(effect) {
    const mag = effect.glob_magnitude;
    if (mag !== '') {
        return (
            <Card className='mt-1 mb-1'>
                <Card.Header className="bg-spell-header p-0 ps-2">Glob Magnitude</Card.Header>
                <Card.Body>
                    {getField("Id:", mag.id, "purple")}
                    {getField("Name:", mag.name, "purple")}
                    {getField("Value:", mag.value, "purple")}
                </Card.Body>
            </Card>
        );
    }
    return getField("GlobMagnitude:", "0", "purple");
}

export function getEffectContent(effect) {
    const mEffect = effect['m_effect'];
    const id = mEffect.id;
    if (mEffect.projectile !== '00000000')
        throw new Error('Projectile Found in spell: ' + id);
    if (mEffect.ability !== '00000000')
        throw new Error('Ability Found in spell: ' + id);
    const resist = (mEffect.resist === '00000000') ? mEffect.resist : mEffect.resist.full;
    return (
        <>
            {getField("Id:", mEffect.id, 'indigo')}
            {getField("Name:", mEffect.full, "purple")}
            {getField("CodeName:", mEffect.name, "purple")}
            {getActor("SpellActor:", effect.actor, "purple")}
            {getField("Type:", mEffect.a_type, "purple")}
            {getField("Ability:", mEffect.ability, "purple")}
            {getField("Resistance:", resist, "purple")}
            {getField("Target:", mEffect.target, "purple")}
            {getField("Activity:", mEffect.e_type, "purple")}
            {getField("Magnitude:", effect.magnitude, "purple")}
            {getField("Area:", effect.area, "purple")}
            {getField("OnlyForPlayer:", effect.only_player, "purple")}
            {getField("Duration:", effect.duration, "purple")}
            {getField("DCurv:", effect.d_curv, "purple")}
            {getExplosiveForPopover(mEffect.explosion)}
            {getField("Projectile:", mEffect.projectile, "purple")}
            {getActor("Actor1:", mEffect.actor_value1, "purple")}
            {getActor("Actor2:", mEffect.actor_value2, "purple")}
            {getGlobDuration(effect)}
            {getGlobMagnitude(effect)}
            {getPerkButton(mEffect.perk)}
        </>
    );
}
