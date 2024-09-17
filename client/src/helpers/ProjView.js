import getProj from '../helpers/Proj';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Collapse } from 'antd';
import { getField, getResolvedField } from './ViewHelper';
import { getCardSpell } from './SpellView';
import Button from 'react-bootstrap/Button';
import { WeaponPopoverOverlay, renderWeaponPopover } from './WeaponPopoverOverlay';


function getProjectileOverlay(proj) {
    const overlayButton = (<Button className="d-flex justify-content-center mb-1 m-auto" size='sm' style={{width: '15rem'}}>Projectile: {proj['id']}</Button>);
    return (
        <WeaponPopoverOverlay popoverHeader={"Projectile"} popoverContent={buildProjView(proj)} itemToOverly={overlayButton}></WeaponPopoverOverlay>
    );
}

function getHazardOverlay(hazard) {
    const overlayButton = (<Button className="d-flex justify-content-center mt-1 mb-1 m-auto" variant="success" size='sm' style={{width: '15rem'}}>Hazard: {hazard['id']}</Button>);
    return (
        <WeaponPopoverOverlay popoverHeader={"Hazard"} popoverContent={buildHazardView(hazard)} itemToOverly={overlayButton}></WeaponPopoverOverlay>
    );
}

function getProjButton(proj) {
    function onClick(e) {
        renderWeaponPopover(buildProjView(proj, true));
    }
    return (
        <Button className="d-flex justify-content-center mb-1 m-auto" size='sm' onClick={onClick} style={{width: '15rem'}}>Projectile: {proj['id']}</Button>
    );
}

export function getExpView(expl, header="Explosive", popover=false) {
    let projectile = (<></>);
    let hazard = (<></>);
    let objectExplosion = (<></>);
    let placedWeapon = '';
    let combined = (<></>);
    if (expl && expl !== '' && expl !== '00000000') {
        if (expl.projectile !== '00000000') {
            if (expl.projectile === 'Same') {
                projectile = getResolvedField('Projectile:', 'Same', 'default', '20rem');
            } else {
                const proj = getProj().get(expl.projectile);

                // If it is not a popover we need to create a button to open a pover, otherwise we need to create a content for an opened popover
                if (!popover) {
                    projectile = getProjectileOverlay(proj);
                } else {
                    projectile = getProjButton(proj);
                }
            }
        }
        if (expl.object !== '') {
            if (expl.object.type === 'HAZD') {
                hazard = getHazardOverlay(expl.object.value);
            } else if (expl.object.type === 'WEAP') {
                placedWeapon = expl.object.value.id + " / " + expl.object.value.name;
            } else if (expl.object.type === 'EXPL') {
                objectExplosion = getExpView(expl.object.value, "Explosive", true);
            } else if (expl.object.type === 'MSTT') {
                combined = (
                    <>
                        {getExpView(expl.object.value.expl, "Explosive", true)}
                        <div className='pb-2'></div>
                        {getHazardOverlay(expl.object.value.hazd)}
                    </>
                );
            }
        }

        let dType = expl.d_type;
        if (dType && dType !== '' && dType !== '00000000') {
            dType = dType.id + " - " + dType.name + " / " + dType.full;
        }
        return (
            <Card className="m-0 mt-2 p-0">
                <Card.Header className='m-0 p-1 ps-2 bg-proj-header'><small>{header}</small></Card.Header>
                <Card.Body className="p-1">
                    <Row>
                        {getField(expl, 'Id:', 'id', 'default', '20rem')}
                        {getField(expl, 'Name:', 'name', 'purple', '20rem')}
                        {getField(expl, 'Damage:', 'damage', 'blue', '20rem', false)}
                        {getField(expl, 'Force:', 'force', 'blue', '20rem', false)}
                        {getField(expl, 'ExpCurv:', 'exp_curv', 'blue', '20rem', false)}
                        {getResolvedField('DType:', dType, 'blue', '20rem')}
                        {getResolvedField('Placed Weapon:', placedWeapon, 'blue', '20rem')}
                        {getField(expl, 'DValue:', 'd_value', 'blue', '20rem', false)}
                        {getField(expl, 'DCurv:', 'd_curv', 'blue', '20rem', false)}
                    </Row>
                    <div className="m-1" />
                    {projectile}
                    {getCardSpell(expl.enchantment)}
                    {hazard}
                    {objectExplosion}
                    {combined}

                </Card.Body>
            </Card>
        );
    }
    return (<></>);
}

// It should have resolved data object already or '' / '00000000' for empty
export function getExplosiveForPopover(expl, header="Explosive") {
    return getExpView(expl, header, true);
}

export function buildProjViewById(projId) {
    const proj = getProj().get(projId);
    if (!proj || proj === '' || proj === '00000000') {
        return (<></>);
    }
    return buildProjView(proj)
}

function buildProjView(proj, popover=false) {
    return (
        <>
            <Row>
                {getField(proj, 'Id:', 'id', 'default', '20rem')}
                {getField(proj, 'Code Name:', 'name', 'pink', '20rem')}
                {getField(proj, 'Full Name:', 'full', 'pink', '20rem')}
                {getField(proj, 'Gravity:', 'gravity', 'blue', '20rem', true, 3)}
                {getField(proj, 'Range:', 'range', 'blue', '20rem')}
                {getField(proj, 'Relaunch:', 'relaunch', 'blue', '20rem', true, 3)}
                {getField(proj, 'Speed:', 'speed', 'blue', '20rem')}
            </Row>
            {getExpView(proj.expl, "Explosive", popover)}
            {getExpView(proj.destructible, "Destructible", popover)}
        </>
    );
}

function buildHazardView(hazard) {
    return (
        <>
            <Row>
                {getField(hazard, 'Id:', 'id', 'default', '20rem')}
                {getField(hazard, 'Code Name:', 'name', 'pink', '20rem')}
                {getField(hazard, 'Full Name:', 'full', 'pink', '20rem')}
                {getField(hazard, 'Radius:', 'radius', 'blue', '20rem')}
                {getField(hazard, 'Life Time:', 'lifeTime', 'blue', '20rem')}
                {getField(hazard, 'Interval:', 'interval', 'blue', '20rem', true, 3)}
            </Row>
            {getCardSpell(hazard.effect)}
        </>
    );
}

function buildProjViewByIds(ids) {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
        const proj = getProj().get(ids[i]);
        result.push(<Card key={ids[i]} className="p-1 mb-1">{buildProjView(proj)}</Card>);
    }
    return result;
}

function projInfo(className, ids) {
    if (!ids || ids.length === 0) {
        return (<></>);
    }

    const items = [
        {
            key: '1',
            label: <strong>Additional Projectile</strong>,
            children: <>{buildProjViewByIds(ids)}</>,
        },
    ];

    return (
        <div className={className}>
            <Collapse size='small' items={items} />
        </div>
    );
}

export default function ProjView({className, projId}) {
    return projInfo(className, projId);
}