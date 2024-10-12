import { memo } from 'react';
import { Divider } from 'antd';
import Row from 'react-bootstrap/Row';


import DamageDetailsCard from './DamageDetailsCard';
import AAView from './AAView';


function getDamageViews(resultDamage) {
    let damageViews = [];
    if (!resultDamage.damageDetails) {
        return (<></>);
    }
    for (let i = 0; i < resultDamage.damageDetails.length; i++) {
        damageViews.push(<DamageDetailsCard resultDamage={resultDamage} damageData={resultDamage.damageDetails[i]} />);
    }
    if (damageViews.length === 0) {
        return (<></>);
    }
    return (
        <>
            <Divider className='mt-3 mb-2'>💢 Damage</Divider>
            <Row>
                {damageViews}
            </Row>
        </>
    );
}


const DamageDetails = memo(function DamageDetails({resultDamage}) {
    if (!resultDamage) {
        return (<></>);
    }
    return (
        <>
            <AAView resultDamage={resultDamage} />
            {getDamageViews(resultDamage)}
        </>
    );
});

export default DamageDetails;