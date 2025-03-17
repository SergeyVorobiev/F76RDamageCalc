import { Collapse } from 'antd';
import { getEffect } from '../helpers/EffectProvider';
import StackEffectView from '../helpers/views/StackEffectView';


export function buildProjViewById(projId) {
    if (!projId || projId === '' || projId === '00000000') {
        return (<></>);
    }
    return buildProjViewByIds([projId]);
}

function buildProjViewByIds(ids) {
    const result = [];
    for (let i = 0; i < ids.length; i++) {
        const proj = getEffect(ids[i]);
        result.push(<div key={ids[i]}><StackEffectView item={proj} /></div>);
    }
    return result;
}

export default function ProjView({className, projIds}) {
    if (!projIds || projIds.length === 0) {
        return (<></>);
    }

    const items = [
        {
            key: '1',
            label: <strong>Additional Projectile</strong>,
            children: <>{buildProjViewByIds(projIds)}</>,
        },
    ];

    return (
        <div className={className}>
            <Collapse size='small' items={items} />
        </div>
    );
}