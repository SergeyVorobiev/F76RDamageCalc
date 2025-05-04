import { getField, getResolvedField } from './ViewHelper';
import { keyValueTag } from './RowBuilder';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Collapse } from 'antd';
import { buildConditionStrings } from './EffectViewHelper';
import { getEffect } from './EffectProvider';
import { WarningPopover } from './WarningPopover';
import StackEffectView from './views/StackEffectView';
import Button from 'react-bootstrap/Button';
import getMods from './Mods';
import DamageExtractor from './mods/DamageExtractor';


function getDamagesData(damageObj, width='20rem') {
    let result = [];
    for (let i = 0; i < damageObj.length; i++) {
        result.push(getDamageData(i, damageObj[i], width));
    }
    return result;
}

function infoButton(name) {
     return (
        <span className="d-flex justify-content-center">
            <Button className="mt-1 mb-2 p-1" style={{minWidth: '10rem'}}  variant="blue-border"><small><b>{name}</b></small></Button>
        </span>
        );
}

function getParentButton(name) {
    if (name.length >= 8) {
        const id = name.substr(name.length - 8);
        let spell = getEffect(id);
        if (!spell) {
            spell = getMods().get(id);
        }
        if (spell) {
            return (<WarningPopover element={infoButton(name)} message={<StackEffectView item={spell} />} header={'Item'} className="popover-adjustable2" />);
        }
    }
    return (<></>);
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
            <Card key={key} className="mt-1 mb-1 bg-lite">
                <Row>
                    {getField(damageObj, 'Damage From:', 'id', 'default', width, false)}
                    {getDamageType(damageType, width)}
                    {getField(damageData, 'DCurveBase:', 'curveBase', 'blue', width, false)}
                    {getField(damageData, 'DCurveAlt:', 'curveAlt', 'blue', width, false)}
                    {getField(damageData, 'DValue:', 'value', 'blue', width, false)}
                    {getField(damageData, 'Magnitude:', 'magnitude', 'blue', width, false)}
                    {getField(damageData, 'Time:', 'time', 'blue', width, false)}
                    {getField(damageData, 'Interval:', 'interval', 'blue', width, false, 3)}
                    {getField(damageData, 'Area:', 'area', 'blue', width, false, 3)}
                    {getField(damageData, 'Chance:', 'chance', 'blue', width, false, 3)}
                    {getResolvedField('Destructible:', damageObj.destructible.toString(), 'blue', width, false)}
                    <div>{buildConditionStrings(damageObj.conditions, "m-1 p-1")}</div>
                    {getParentButton(damageObj.source + " " + damageObj.parentId)}
                </Row>
            </Card>
    );
}

function buildCard(key, damageObj, header, className) {
    if (damageObj) {
        return (
            <Card key={key} className="mt-1 mb-1">
                <Card.Header className={className}>
                    <small>{header}</small>
                </Card.Header>
                <Card.Body>
                    {getDamagesData(damageObj)}
                </Card.Body>
            </Card>
        );
    }
    return (<></>);
}

function getDamageCards(damageObj) {
    let result = [];
    let i = 0;
    for (let key in damageObj) {
        const damage = damageObj[key];
        result.push(buildCard(i++, damage, key, "bg-proj-header m-0 p-1 ps-2"))
    }
    return result;
}

function damageCollapse(damageObj) {
    const items = [
        {
            key: '1',
            label: <strong>Damage Overview</strong>,
            children: <>{getDamageCards(damageObj)}</>,
        },
    ];

    return (
        <Collapse size='small' items={items} />
    );
}

export default function DamageOverview({damageObj}) {
    return (
        <>{damageCollapse(damageObj)}</>
    );
}