import { buildTextBlock, getEffectButton, getNameByLabel, buildActor, getVMADButton, getGlobValue } from '../../helpers/EffectViewHelper';
import Card from 'react-bootstrap/Card';

// float, bool, int, string, object, array_obj, array_int, struct, struct_array
function buildBody(vmad, id, onEffectClick) {
    const result = [];
    for (let i = 0; i < vmad.length; i++) {
        const obj = vmad[i];
        const type = obj.type;
        const vmadId = obj.name + i + id;
        if (type === "float" || type === "bool" || type === "int" || type === "string") {
            result.push(<div key={i}>{textBlock(obj.name, obj.value, obj.script_name)}</div>);
        } else if (type === "obj") {
            result.push(<div key={i}>{objView(obj, onEffectClick)}</div>);
        } else if (type === "struct") {
            result.push(<div key={i}><b>{obj.name} {obj.type}</b></div>);
        } else if (type === "struct_array") {
            result.push(<div key={i}>{structArrayView(obj, vmadId, onEffectClick)}</div>);
        } else {
            result.push(<div key={i}><b>{obj.name} {obj.type}</b></div>);
        }
    }
    return result;
}

function textBlock(header, text, footer) {
    return buildTextBlock(text, header, <div className="d-flex justify-content-end pe-1">{footer}</div>, "mt-1 mb-1", "#003112", "#c8ffdc");
}

/* TODO: Integrate Struct View
function vmadStruct(obj, vmad, id, onEffectClick) {
    return (
        <div key={id} className="mt-1 mb-1 p-1" style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffd560', backgroundColor: '#fff4d7'}}>
            <div className="d-flex justify-content-center"><small><b style={{color: '#5e4500'}}>{obj.name}</b></small></div>
            {getVMADButton(id, vmad, onEffectClick)}
        </div>
    )
}*/

function structArrayView(obj, id, onEffectClick) {
    const result = [];
    const vmads = obj.value;
    for (let i = 0; i < vmads.length; i++) {
        const vmad = vmads[i];
        const key = id + i;
        result.push(<div key={key}>{getVMADButton(key, vmad, onEffectClick, "VMAD " + (i + 1))}</div>);
    }
    return (
        <div className="mt-1 mb-1 p-1 pb-0" style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#61faff', backgroundColor: '#eafdff'}}>
            <div className="d-flex justify-content-center"><small><b style={{color: '#003e3e'}}>{obj.name}</b></small></div>
            {result}
            <div style={{fontSize: '0.7rem'}} className="d-flex justify-content-end pt-1">{obj.script_name}</div>
        </div>
    );
}

function effectButtonView(obj, value, onEffectClick) {
    return (
        <div className="mt-1 mb-1 p-1 pb-0" style={{borderWidth: '1px', borderStyle: 'solid', borderColor: '#ffd560', backgroundColor: '#fff4d7'}}>
            <div className="d-flex justify-content-center"><small><b style={{color: '#5e4500'}}>{obj.name}</b></small></div>
            {getEffectButton(value.id, onEffectClick)}
            {getScriptName(obj)}
        </div>
    );
}

function getScriptName(obj) {
    return (<div style={{fontSize: '0.7rem'}} className="d-flex justify-content-end pt-1">{obj.script_name}</div>);
}
function objView(obj, onEffectClick) {
    const value = obj.value;
    if (value.label === 'SPEL' || value.label === 'MGEF' || value.label === 'PERK' || value.label === 'ALCH') {
        return effectButtonView(obj, value, onEffectClick);
    } else if (value.label === 'AVIF') {
        return buildActor(value, obj.name, getScriptName(obj));
    } else if (value.label === 'GLOB') {
        return getGlobValue(obj.value, obj.name,<div className="d-flex justify-content-end pe-1"><small>{obj.script_name}</small></div>);
    }
    return textBlock(obj.name, getNameByLabel(value.label) + " - (" + value.name + " / " + value.id + ")", obj.script_name);
}

function buildView(vmad, id, onEffectClick) {
    return (
        <Card className="mt-1 mb-1 m-0">
            <Card.Header className='pt-0 pb-0'>
                <b><small>VMAD</small></b>
            </Card.Header>
            <Card.Body className='p-1'>
                {buildBody(vmad, id, onEffectClick)}
            </Card.Body>
        </Card>
    );
}

export default function VMADCompactView(props) {
    const vmad = props.vmad.vmad;
    const id = props.vmad.id;
    return (
        <>
            {buildView(vmad, id, props.onEffectClick)}
        </>
    );
}