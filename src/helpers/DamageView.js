import { getField } from './ViewHelper';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import DamageExtractor from './mods/DamageExtractor';


function getDamagesData(damageData, width='20rem') {
    let result = [];
    for (let i = 0; i < damageData.length; i++) {
        result.push(getDamageData(i, damageData[i], width));
    }
    return result;
}

function getDamageType(damageType, width) {
    if (!damageType) {
        return (<></>);
    }
    return (
        <>
            {getField(damageType, 'Type Id:', 'id', 'purple', width, false)}
            {getField(damageType, 'Code Name:', 'name', 'purple', width, false)}
            {getField(damageType, 'Name:', 'full', 'purple', width, false)}
        </>
    );
}

function getDamageData(key, damageObj, width='20rem') {
    const damageData = damageObj.damageData;
    const damageType = DamageExtractor.damageTypes[damageData.typeName];
    return (
        <Card className='p-0 m-1' key={key}>
            <Row>
                {getDamageType(damageType, width)}
                {getField(damageData, 'DCurveBase:', 'curveBase', 'blue', width)}
                {getField(damageData, 'DCurveAlt:', 'curveAlt', 'blue', width)}
                {getField(damageData, 'Value:', 'value', 'blue', width)}
                {getField(damageData, 'Magnitude:', 'magnitude', 'blue', width)}
                {getField(damageData, 'Time:', 'time', 'blue', width)}
                {getField(damageData, 'Interval:', 'interval', 'blue', width)}
                {getField(damageData, 'Chance:', 'chance', 'blue', width)}
            </Row>
        </Card>
    )
}

function buildCard(damageData, header, className) {
    if (damageData) {
        return (
            <Card className="bg-light-pink">
                <Card.Header className={className}>
                    <small>{header}</small>
                </Card.Header>
                <Card.Body className="p-0 m-0">
                    {getDamagesData(damageData)}
                </Card.Body>
            </Card>
        );
    }
    return (<></>);
}

export default function DamageView({damageData}) {
    return (
        <>
            {buildCard(damageData.Base, "Damage", "bg-damage-header m-0 p-1 ps-2")}
        </>
    );
}