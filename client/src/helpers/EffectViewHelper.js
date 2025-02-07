import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { leftRightTag, leftRight2 } from './RowBuilder';
import { getEffect, setVMADObject } from './EffectProvider';
import { getItem } from '../consumables/view/ConsumableItems';


const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d',
}

export function getNameByLabel(label) {
    switch(label) {
        case 'SPEL':
            return "Spell";
        case 'PERK':
            return "Perk";
        case 'PCRD':
            return "Card";
        case 'ENCH':
            return "Enchantment";
        case 'MGEF':
            return "Effect";
        case 'ALCH':
            return "Alchemy";
        case 'HZRD':
            return "Hazard";
        case 'QUST':
            return "Quest";
        case 'KYWD':
            return "Tag";
        case 'RACE':
            return "Race";
        default:
            return label;
    }
}

export function getVMADButton(effectId, vmad, onEffectClick, buttonName='VMAD') {
    const id = "vmad" + effectId;
    const vmadObject = {label: "VMAD", vmad: vmad, id: id};
    setVMADObject(id, vmadObject);
    return (
        <Button className="w-100 p-1 mt-1" name={id} variant="blue-white-border" onClick={onEffectClick}>
            {buttonName}
        </Button>
    );
}

export function getEffectButton(effectId, onEffectClick) {
    let effect = getEffect(effectId);
    if (!effect) {
        effect = getItem(effectId);
        if (!effect) {
            return (<>Can not resolve effect: {effectId}</>);
        }

    }
    const name = (effect.full === "") ? effect.name : effect.full;
    return (
        <Button className="w-100 p-0 mt-1" name={effectId} variant="blue-white-border" onClick={onEffectClick}>
            <div><b><small>{name}</small></b></div>
            {leftRight2(<div className="mt-0" style={{fontSize: '.6rem'}}><b>{getNameByLabel(effect.label)}</b></div>,
            <div className="mt-0" style={{fontSize: '.6rem'}}>{effectId}</div>, -1, "w-100 ps-1 pe-1 p-0")}
        </Button>
    );
}

export function vmadView(id, vmad, onEffectClick) {
    if (!vmad || vmad.length === 0) {
        return (<></>);
    }
    return (
        <div className="m-2">
            {getVMADButton(id, vmad, onEffectClick)}
        </div>
    );
}

export function buildRow(left, right, color, border=true, skipZero=false, skipEmpty=true) {
    if (skipEmpty && (right === null || right === "")) {
        return (<></>);
    }
    if (skipZero && right === 0) {
        return (<></>);
    }
    return leftRightTag(<b className="ps-1">{left}</b>, <b className="pe-1">{right}</b>, color, border, -1, "w-100 p-0 mt-1 mb-1")
}

export function buildConditionStrings(conditions, className="mt-1", color='#332500', bgColor='#fffdf6') {
    const conditionStrings = [];
    if (!conditions) {
        return conditionStrings;
    }
    for (let i = 0; i < conditions.length; i++) {
        const cond = conditions[i];
        conditionStrings.push(<div className={className} style={{fontSize: '0.7rem', textAlign: 'center', textWrap: 'balance', backgroundColor: bgColor, color: color}} key={i}><b>{cond}</b></div>);
    }
    return conditionStrings;
}

export function buildTextBlock(text, header=null, footer=null, className="mt-2", color="#003112", borderColor="#effff5", backgroundColor="#effff5") {
    if (!text || text === "") {
        return (<></>);
    }
    if (typeof text === typeof "" && text.trim() === "") {
        return (<></>);
    }
    const headerView = (header) ? (<div className="mb-1"><b>{header}</b></div>) : (<></>);
    return (
        <div className={className} style={{fontSize: '0.7rem', borderWidth: '1px', borderStyle: 'solid', borderColor: borderColor, textAlign: 'center', textWrap: 'balance', backgroundColor: backgroundColor, color: color}}>
            {headerView}
            <div><b>{text}</b></div>
            <div className="mt-1">{footer}</div>
        </div>
    );
}

export function buildActor(actor, header="Actor", footer=null) {
    if (!actor || actor === "" || actor === "00000000") {
        return (<></>);
    }
    const label = actor.label;
    if (label === "AVIF") {
        return (
            <Card className="mt-1 mb-1 m-0">
                <Card.Header className='pt-0 pb-0'>
                    <b><small>{header}</small></b>
                </Card.Header>
                <Card.Body className="p-1">
                    {buildTextBlock(actor.desc, null, null, "p-1")}
                    {buildRow("Id:", actor.id, 'purple')}
                    {buildRow("Name:", actor.name, 'purple')}
                    {buildRow("Full:", actor.full, 'purple')}
                    {buildRow("Default value:", actor.def, 'purple')}
                    {buildRow("Min value:", actor.min, 'purple')}
                    {buildRow("Max value:", actor.max, 'purple')}
                    {footer}
                </Card.Body>
            </Card>
        );
    } else {
        return (<>Unsupported label for actor: {label}</>);
    }
}

export function idNameRow(id, name) {
    return (
        <div className="d-flex flex-nowrap" style={{width: '100%'}}>
            <span className="pe-0 d-flex justify-content-start" style={{width: 'auto'}}>
                <b className="tag">{id}</b>
            </span>
            <div className="d-flex justify-content-end ms-2" style={{width: '100%', textWrap: 'nowrap', overflow: 'hidden'}}>
                <b className="tag" style={darkBlue}>{name}</b>
            </div>
        </div>
    );
}

export function getGlobDuration(effect) {
    return getGlob(effect.glob_duration, "duration");
}

function getGlob(glob, name, footerView=null) {
    const footer = (footerView) ? <Card.Footer className="bg-spell-header p-0 ps-2">{footerView}</Card.Footer> : <></>;
    if (glob !== '') {
        return (
            <Card className='mt-1 mb-1'>
                <Card.Header className="bg-spell-header p-0 ps-2"><small>Glob {name}</small></Card.Header>
                <Card.Body className="p-1">
                    {buildRow("Id:", glob.id, "purple")}
                    {buildRow("Name:", glob.name, "purple")}
                    {buildRow("Value:", glob.value, "purple")}
                </Card.Body>
                {footer}
            </Card>
        );
    }
    return (<></>);
}
export function getGlobMagnitude(effect) {
    return getGlob(effect.glob_magnitude, "magnitude");
}

export function getGlobValue(obj, name="value", footerView=null) {
    return getGlob(obj, name, footerView);
}

export function buildEffect(index, body) {
    return (
        <Card key={index} className="mt-1 mb-1 m-0">
            <Card.Header className='pt-0 pb-0'>
                <b><small>E{index + 1}</small></b>
            </Card.Header>
            <Card.Body className='p-1'>
                {body}
            </Card.Body>
        </Card>
    );
}

export function buildCurve(curve, maxValue, className="mt-1") {
    if (!curve || curve === "") {
        return (<></>);
    }

    const pathCurve = curve.split("\n");
    return (
        <>
            {buildTextBlock(
                <>
                    <div className="pb-1">
                        Curve magnitude
                    </div>
                    <div className="pb-1">
                        {pathCurve[0]}
                    </div>
                    <div>
                        {pathCurve[1]}
                    </div>
                    <div className="pt-1">
                        Curve magnitude max: {maxValue}
                    </div>
                </>, null, null, className, "#7b3b00", "#fff9f3", "#fff9f3"
            )}
        </>
    );
}

export function buildBadge(name, color="#000", backgroundColor="#fff") {
    return (<div className="badge p-1 ps-2 pe-2 bg-lite-shadow2" style={{backgroundColor: backgroundColor, color: color}}>{name}</div>)
}

export function buildBadge2(name, color="#000", backgroundColor="#fff") {
    return (<div className="badge p-1 ps-2 pe-2" style={{borderStyle: 'solid', borderColor: backgroundColor, borderWidth: '0.5px', backgroundColor: backgroundColor, color: color}}>{name}</div>)
}