import { idNameRow, buildRow, getEffectButton, isEffectIdEmpty } from '../helpers/EffectViewHelper';
import { Divider } from 'antd';
import Card from 'react-bootstrap/Card';


export default function AmmoCompactView(props) {
    const ammo = props.ammo;
    return (
        <>
            {idNameRow(ammo.id, ammo.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", ammo.full, 'purple', false)}
            {buildRow("Type:", ammo.ammo_type, 'blue', false)}
            {buildRow("Value:", ammo.value, 'purple', false)}
            {buildRow("Weight:", ammo.weight, 'blue', false)}
            {buildRow("Damage:", ammo.damage, 'purple', false)}
            {buildRow("Health:", ammo.health, 'blue', false)}
            {getEffectButton(ammo.projectile, props.onEffectClick)}
        </>
    );
}