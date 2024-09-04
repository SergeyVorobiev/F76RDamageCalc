import { getField } from './ViewHelper';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function getDamagesData(damageData, width='20rem') {
    let result = [];
    for (let i = 0; i < damageData.length; i++) {
        result.push(getDamageData(damageData[i], width));
    }
    return result;
}

function getDamageData(damageData, width='20rem') {
    return (
        <Card className='p-0 m-1'>
        <Row>
            {getField(damageData.type, 'Id:', 'id', 'default', width)}
            {getField(damageData.type, 'Code Name:', 'name', 'purple', width)}
            {getField(damageData.type, 'Name:', 'full', 'purple', width)}
            {getField(damageData, 'DCurv:', 'curv', 'blue', width)}
            {getField(damageData, 'Value:', 'value', 'blue', width)}
        </Row>
        </Card>
    )
}


export default function DamageView({damageData}) {
    if (!damageData || damageData == '') {
        return (<></>);
    }
    return (
        <Card>
            <Card.Header className="bg-damage-header m-0 p-1 ps-2 ">
                <small>Damage</small>
            </Card.Header>
            <Card.Body className="p-0 m-0">
                {getDamagesData(damageData)}
            </Card.Body>
        </Card>
    );
}