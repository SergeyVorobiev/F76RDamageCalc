import { idNameRow, buildRow, getEffectButton, isEffectIdEmpty } from '../helpers/EffectViewHelper';
import { Divider } from 'antd';
import Card from 'react-bootstrap/Card';


function getDestructed(destruct, onEffectClick) {
    if (isEffectIdEmpty(destruct)) {
        return (null);
    }
    return (
        <>
            <Card className="mt-1">
                <Card.Header className='m-0 p-0 ps-2 bg-proj-header'>
                    <small>Destructed</small>
                </Card.Header>
                <Card.Body className="p-1">
                    {getEffectButton(destruct, onEffectClick)}
                </Card.Body>
            </Card>
        </>
    );
}

export default function ProjCompactView(props) {
    const proj = props.proj;
    return (
        <>
            {idNameRow(proj.id, proj.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", proj.full, 'purple', false)}
            {buildRow("Gravity:", proj.gravity, 'blue', false)}
            {buildRow("Range:", proj.range, 'purple', false)}
            {buildRow("Relaunch:", proj.relaunch, 'blue', false)}
            {buildRow("Speed:", proj.speed, 'purple', false)}
            {getEffectButton(proj.expl, props.onEffectClick)}
            {getDestructed(proj.expl, props.onEffectClick)}
        </>
    );
}