import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { leftRightTag, leftRight2 } from './RowBuilder';
import { getEffect, setVMADObject } from './EffectProvider';
import { getItem } from '../consumables/view/ConsumableItems';
import { getWeaponNameById } from './TemplatesRegister';


export const blue = {
    backgroundColor: '#f7fbff',
    borderColor: '#0072a3',
    color: '#005691',
}

export const orange = {
    backgroundColor: '#fffaf0',
    borderColor: '#ffa800',
    color: '#b77100',
}

export const magenta = {
    backgroundColor: '#fff1fa',
    borderColor: '#ca007c',
    color: '#830f57',
}

export const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d',
}

export const indigo = {
    backgroundColor: '#fdfaff',
    borderColor: '#5a008a',
    color: '#430067',
}

export const redRounded = {
    backgroundColor: '#fff4f4',
    borderColor: '#890000',
    color: '#c90000',
    borderRadius: '0.5rem',
}

export function getNameByLabel(label) {
    switch(label) {
        case 'SPEL':
            return "Spell";
        case 'PERK':
            return "Perk";
        case 'PCRD':
            return "Perk card";
        case 'ENCH':
            return "Enchantment";
        case 'MGEF':
            return "Effect";
        case 'ALCH':
            return "Alchemy";
        case 'QUST':
            return "Quest";
        case 'KYWD':
            return "Tag";
        case 'RACE':
            return "Race";
        case 'EXPL':
            return "Explosion";
        case 'PROJ':
            return "Projectile";
        case 'HAZD':
            return "Hazard";
        case 'AMMO':
            return "Ammo";
        default:
            return label;
    }
}

export function resolveEffectOrNull(effectId) {
    if (typeof(effectId) === typeof({})) {
        return effectId;
    }
    if (isEffectIdEmpty(effectId)) {
        return null;
    }
    return getEffect(effectId);
}

export function isEffectIdEmpty(effectId) {
    return (!effectId || effectId === "" || effectId === "00000000");
}

export function getVMADButton(effectId, vmad, onEffectClick, buttonName='VMAD') {
    const id = "vmad" + effectId;
    const vmadObject = {label: "VMAD", vmad: vmad, id: id};
    setVMADObject(id, vmadObject);
    return (
        <Button className="w-100 p-1 mt-1" name={id} variant="blue-border" onClick={onEffectClick}>
            {buttonName}
        </Button>
    );
}

export function innerObject(object, onEffectClick) {
    if (isEffectIdEmpty(object)) {
        return (null);
    }
    let objectValue = null;
    if (typeof object === typeof '') {
        objectValue = getEffectButton(object, onEffectClick);
    } else if (object.type === 'MSTT') {
        objectValue = (
            <>
                {getEffectButton(object.value.expl, onEffectClick)}
                {getEffectButton(object.value.hazd, onEffectClick)}
            </>
        );
    } else if (object.type === 'WEAP') {
        objectValue = object.value.id + " / " + object.value.name;
    } else {
        objectValue = getEffectButton(object.value, onEffectClick);
    }
    return (
        <>
            <Card className="mt-1 mb-1">
                <Card.Header className='m-0 p-0 ps-2 bg-proj-header'>
                    <small>Placed Inside</small>
                </Card.Header>
                <Card.Body className="p-1">
                    {objectValue}
                </Card.Body>
            </Card>
        </>
    );
}

export function getEffectButton(effectId, onEffectClick) {
    if (isEffectIdEmpty(effectId)) {
        return (<></>);
    }
    let effect = getEffect(effectId);
    if (!effect) {
        effect = getItem(effectId);
        if (!effect) {
            let result = getWeaponNameById(effectId);
            if (!result && effectId === "0003320a") {
                result = "Bloatfly";
            }
            result = (result) ? result : effectId;
            return (<small><b>{result}</b></small>);
        }
    }
    const name = (effect.full === "") ? effect.name : effect.full;
    return (
        <Button className="w-100 p-0 mt-1" name={effectId} variant="blue-border" onClick={onEffectClick}>
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
    if (skipEmpty && (typeof right === 'undefined' || right === null || right === "")) {
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
    const footerView = (footer) ? (<div className="mt-1">{footer}</div>) : (<></>);
    return (
        <div className={className} style={{fontSize: '0.7rem', borderWidth: '1px', borderStyle: 'solid', borderColor: borderColor, textAlign: 'center', textWrap: 'balance', backgroundColor: backgroundColor, color: color}}>
            {headerView}
            <div><b>{text}</b></div>
            {footerView}
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
    } else if (label === "DMGT") {
        return (
            <Card className="mt-1 mb-1 m-0">
                <Card.Header className='pt-0 pb-0'>
                    <b><small>{header}</small></b>
                </Card.Header>
                <Card.Body className="p-1">
                    {buildRow("Id:", actor.id, 'purple')}
                    {buildRow("Name:", actor.name, 'purple')}
                    {buildRow("Full:", actor.full, 'purple')}
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

export function buildCurve(curve, className="mt-1") {
    if (!curve || curve === "") {
        return (<></>);
    }
    function buildView(curve, maxValue, path, alt) {
        if (!curve || curve === "") {
            return (<></>);
        }
        const data = JSON.stringify(curve.curve);
        const head = (alt) ? "Curve magnitude alt" : "Curve magnitude";
        const val = (alt) ? "Curve magnitude alt max: " + maxValue : "Curve magnitude max: " + maxValue;
        return (
            <>
                {buildTextBlock(
                    <>
                        <div className="pb-1">
                            {head}
                        </div>
                        <div className="pb-1">
                            {path}
                        </div>
                        <div>
                            {data}
                        </div>
                        <div className="pt-1">
                            {val}
                        </div>
                    </>, null, null, className, "#7b3b00", "#fff9f3", "#fff9f3"
                )}
            </>
        );
    }
    return (
        <>
            {buildView(curve.base, curve.maxValue, curve.path, false)}
            {buildView(curve.alt, curve.maxValueAlt, curve.path, true)}
        </>
    );
}

export function buildBadge(name, color="#000", backgroundColor="#fff") {
    return (<div className="badge p-1 ps-2 pe-2 bg-lite-shadow2" style={{backgroundColor: backgroundColor, color: color}}>{name}</div>)
}

export function buildBadge2(name, color="#000", backgroundColor="#fff") {
    return (<div className="badge p-1 ps-2 pe-2" style={{borderStyle: 'solid', borderColor: backgroundColor, borderWidth: '0.5px', backgroundColor: backgroundColor, color: color}}>{name}</div>)
}