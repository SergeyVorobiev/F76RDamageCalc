import { getField, getResolvedField } from './ViewHelper';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Collapse } from 'antd';
import { buildConditionStrings } from './EffectViewHelper';


function getDamagesData(damageData, width='20rem') {
    let result = [];
    for (let i = 0; i < damageData.length; i++) {
        result.push(getDamageData(i, damageData[i], width));
    }
    return result;
}

function getDamageData(key, damageData, width='20rem') {
    return (
            <Card key={key} className="mt-1 mb-1 bg-lite">
                <Row>
                    {getField(damageData, 'Damage From:', 'directParent', 'default', width, false)}
                    {getField(damageData, 'Damage Type Id:', 'type_id', 'default', width, false)}
                    {getField(damageData, 'Code Name:', 'type_name', 'purple', width, false)}
                    {getField(damageData, 'Name:', 'type_full_name', 'purple', width, false)}
                    {getField(damageData, 'DCurveBase:', 'curve_base_max', 'blue', width, false)}
                    {getField(damageData, 'DCurveAlt:', 'curve_alt_max', 'blue', width, false)}
                    {getField(damageData, 'DValue:', 'value', 'blue', width, false)}
                    {getField(damageData, 'Magnitude:', 'magnitude', 'blue', width, false)}
                    {getField(damageData, 'Time:', 'time', 'blue', width, false)}
                    {getField(damageData, 'Interval:', 'interval', 'blue', width, false, 3)}
                    {getResolvedField('Destructible:', damageData.destructible.toString(), 'blue', width, false)}
                    <div>{buildConditionStrings(damageData.conditions, "m-1 p-1")}</div>
                    {getResolvedField('Parent:', damageData.parent, 'indigo', width, false)}
                </Row>
            </Card>
    )
}

function buildCard(key, damageData, header, className) {
    if (damageData) {
        return (
            <Card key={key} className="mt-1 mb-1">
                <Card.Header className={className}>
                    <small>{header}</small>
                </Card.Header>
                <Card.Body>
                    {getDamagesData(damageData)}
                </Card.Body>
            </Card>
        );
    }
    return (<></>);
}

function getDamageCards(damageData) {
    let result = [];
    let i = 0;
    for (let key in damageData) {
        const damage = damageData[key];
        result.push(buildCard(i++, damage, key, "bg-proj-header m-0 p-1 ps-2"))
    }
    return result;
}

function damageCollapse(damageData) {
    const items = [
        {
            key: '1',
            label: <strong>Damage Overview</strong>,
            children: <>{getDamageCards(damageData)}</>,
        },
    ];

    return (
        <Collapse size='small' items={items} />
    );
}

export default function DamageOverview({damageData}) {
    return (
        <>{damageCollapse(damageData)}</>
    );
}