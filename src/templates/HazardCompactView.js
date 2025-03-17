import { idNameRow, buildRow, innerObject } from '../helpers/EffectViewHelper';
import { Divider } from 'antd';


export default function HazardCompactView(props) {
    const hazard = props.hazard;
    return (
        <>
            {idNameRow(hazard.id, hazard.name)}
            <Divider className="pt-0 mt-2 mb-2">Properties</Divider>
            {buildRow("Name:", hazard.full, 'purple', false)}
            {buildRow("Lifetime:", hazard.lifeTime, 'blue', false, true)}
            {buildRow("Radius:", hazard.radius, 'blue', false)}
            {buildRow("Interval:", hazard.interval, 'purple', false)}
            {innerObject(hazard.effect, props.onEffectClick)}
        </>
    );
}