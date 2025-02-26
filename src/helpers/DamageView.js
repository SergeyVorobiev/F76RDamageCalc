import { getField } from './ViewHelper';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function getDamagesData(damageData, width='20rem') {
    let result = [];
    for (let i = 0; i < damageData.length; i++) {
        result.push(getDamageData(i, damageData[i], width));
    }
    return result;
}

function getDamageData(key, damageData, width='20rem') {
    return (
        <Card className='p-0 m-1' key={key}>
            <Row>
                {getField(damageData, 'Id:', 'type_id', 'default', width)}
                {getField(damageData, 'Code Name:', 'type_name', 'purple', width)}
                {getField(damageData, 'Name:', 'type_full_name', 'purple', width)}
                {getField(damageData, 'DCurv:', 'curv', 'blue', width)}
                {getField(damageData, 'Value:', 'value', 'blue', width)}
                {getField(damageData, 'Magnitude:', 'magnitude', 'blue', width)}
                {getField(damageData, 'Time:', 'time', 'blue', width)}
                {getField(damageData, 'Interval:', 'interval', 'blue', width)}
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