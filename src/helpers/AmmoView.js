import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { Collapse } from 'antd';
import { getField } from './ViewHelper';
import { buildProjViewById } from './ProjView';
import { getEffect } from '../helpers/EffectProvider';


function buildProj(proj) {
    const result = [];
    if (proj && proj.length > 0) {
        for (let i = 0; i < proj.length; i++) {
            const projId = proj[i];
            result.push(
                <Card key={i} className="m-0 mt-2 p-0 bg-light-pink">
                    <Card.Header className='m-0 p-1 ps-2 bg-proj-header'><small>Projectile</small></Card.Header>
                    <Card.Body className="p-1 m-0">
                        {buildProjViewById(projId)}
                    </Card.Body>
                </Card>
            );
        }
    }
    return result;
}

function buildAmmoView(ammoData, proj) {
    return (
        <>
            <Row className='bg-lite'>
                {getField(ammoData, 'Id:', 'id', 'default', '20rem')}
                {getField(ammoData, 'Code Name:', 'name', 'purple', '20rem')}
                {getField(ammoData, 'Full Name:', 'full', 'purple', '20rem')}
                {getField(ammoData, 'Type:', 'ammo_type', 'blue', '20rem')}
                {getField(ammoData, 'Value:', 'value', 'blue', '20rem')}
                {getField(ammoData, 'Weight:', 'weight', 'blue', '20rem', true, 3)}
                {getField(ammoData, 'Damage:', 'damage', 'blue', '20rem', false)}
                {getField(ammoData, 'Health:', 'health', 'blue', '20rem', false)}
            </Row>
            {buildProj(proj)}
        </>
    );
}

function ammoInfo(className, id, overrideProj) {
    if (id === '') {
        return (<></>);
    }
    const ammoData = getEffect(id);
    let proj = [ammoData['projectile']];
    if (overrideProj && overrideProj.length > 0) {
        proj = overrideProj;
    }

    const items = [
        {
            key: '1',
            label: <strong>Ammo</strong>,
            children: <>{buildAmmoView(ammoData, proj)}</>,
        },
    ];

    return (
        <div className={className}>
            <Collapse size='small' items={items} />
        </div>
    );
}


// overrideProj is deprecated, only Additional projectile seems can be overridden
export default function AmmoView({className, ammoId, overrideProj}) {
    return ammoInfo(className, ammoId, overrideProj);
}