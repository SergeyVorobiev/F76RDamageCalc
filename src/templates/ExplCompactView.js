import { idNameRow, buildRow, getEffectButton, buildCurve, buildActor, isEffectIdEmpty, innerObject } from '../helpers/EffectViewHelper';
import { Divider } from 'antd';
import Card from 'react-bootstrap/Card';


function buildDamage(expl) {
    return (
        <>
            <Card className="mt-1 mb-1">
                <Card.Header className='m-0 p-0 ps-2 bg-proj-header'>
                    <small>Special Type Damage</small>
                </Card.Header>
                <Card.Body className="p-1">
                    {buildCurve(expl.d_curv)}
                    {buildActor(expl.d_type, "Damage type")}
                    {buildRow("DValue:", expl.d_value, 'purple', false)}
                </Card.Body>
            </Card>
        </>
    );
}

export default function ExplCompactView(props) {
    const expl = props.expl;
    return (
        <>
            {idNameRow(expl.id, expl.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", expl.full, 'purple', false)}
            {buildDamage(expl)}
            {buildRow("Damage:", expl.damage, 'purple', false, true)}
            {buildRow("Damage Mult:", expl.damage_mult, 'blue', false, true)}
            {buildRow("Force:", expl.force, 'purple', false)}
            {buildRow("Speed:", expl.speed, 'blue', false)}
            {buildCurve(expl.exp_curv)}
            {getEffectButton(expl.enchantment, props.onEffectClick)}
            {getEffectButton(expl.projectile, props.onEffectClick)}
            {innerObject(expl.object, props.onEffectClick)}
        </>
    );
}