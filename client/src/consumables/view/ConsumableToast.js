import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ConsumableTagsView from './ConsumableTagsView';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { numberToString } from '../../helpers/StringHelpers';
import { buildConditionStrings, buildTextBlock, idNameRow } from '../../helpers/EffectViewHelper';


// TODO: Move styles to EffectViewHelper
const blue = {
    backgroundColor: '#f7fbff',
    borderColor: '#0072a3',
    color: '#005691',
}

const indigo = {
    backgroundColor: '#fdfaff',
    borderColor: '#5a008a',
    color: '#430067',
}

const redRounded = {
    backgroundColor: '#fff4f4',
    borderColor: '#890000',
    color: '#c90000',
    borderRadius: '0.5rem',
}

const orange = {
    backgroundColor: '#fffaf0',
    borderColor: '#ffa800',
    color: '#b77100',
}

const magenta = {
    backgroundColor: '#fff1fa',
    borderColor: '#ca007c',
    color: '#830f57',
}

export function mainView(item) {
    return (
        <>
            {idNameRow(item.id, item.name)}
            {getItemDescription(item)}
            {getWeight(item)}
            <ConsumableTagsView className="pt-2" tags={item.tags} color='blue' title="Tags" />
            <ConsumableTagsView className="pt-2" color='magenta' tags={item.effectTags} title="Effect Tags" />
            {getAddictionPercent(item)}

        </>
    );
}

function getArea(effect) {
    if (effect.area === 0) {
        return (<></>);
    }
    return (
        <div className="tag mt-1">
            <div>
                Area: <span style={{color: 'red'}}>{effect.area}</span>
            </div>
        </div>
    );
}

function getTag3(value, style, mt, mb) {
    return (
        <div style={{width: '100%'}} className={"mt-" + mt + " mb-" + mb + " d-flex justify-content-center"}>
            <div className="tag mt-1" style={style}>
                <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {value}
                </div>
            </div>
        </div>
    );
}

function getAddictionPercent(item) {
    let addictionChance = "";
    if (item.addiction_chance > 0) {
        addictionChance = "Addiction chance: " + (item.addiction_chance * 100).toFixed(1) + "%";
    }
    if (addictionChance === "") {
        return (<></>);
    }
    return getTag3(addictionChance, redRounded, 3, 1)
}

function getWeight(item) {
    const weight = "Weight: " + numberToString(item.weight, 3);
    return getTag3(weight, indigo, 1, 0)
}

function getItemDescription(item) {
    const desc = item.desc
    if (!desc || desc === "") {
        return (<></>);
    }
    const mt = 2;
    const mb = 2;
    return (
        <div style={{width: '100%', backgroundColor: '#fffaf0'}} className={"mt-" + mt + " mb-" + mb + " d-flex justify-content-center"}>
            <div style={{padding: '0.3rem'}}>
                <small><b style={{color: '#bf6400'}}>{desc}</b></small>
            </div>
        </div>
    );
}

function getDuration(effect) {
    let duration = 0;
    let durationName = "";
    if (!effect.glob_duration || effect.glob_duration === '') {
        duration = effect.duration ? effect.duration : 0;
    } else {
        duration = effect.glob_duration.value;
        durationName = "(" + effect.glob_duration.name + ")";
    }
    if (duration === 0) {
        return (<></>);
    }
    return getTag("Duration", duration, durationName);
}

function getTag(title, value, name) {
    return (
         <div key={value + name} className="tag mt-1">
            <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                {title}: <span style={{fontSize: '0.80rem', color: 'red'}}>{numberToString(value, 3)}</span> {name}
            </div>
        </div>
    );
}

function getTag2(value, style, fullLength=false) {
    const full = (fullLength) ? "w-100" : "";
    return (
         <div className={"tag mt-1 " + full} style={style}>
            <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                {value}
            </div>
        </div>
    );
}

function getDescription(effect) {
    return buildTagBlock(effect.m_effect.desc);
}

export function buildTagBlock(desc, fullLength=false, center=false, style=null, containerClassName="") {
    if (!desc) {
        return (<></>);
    }
    if (!style) {
        style = orange;
    }
    desc = desc.trim();
    if (desc === "") {
        return (<></>);
    }
    if (center) {
        return (<div className={"d-flex justify-content-center " + containerClassName}>{getTag2(desc, style, fullLength)}</div>);
    }
    return (<div className={containerClassName}>{getTag2(desc, style, fullLength)}</div>);
}

function getActor(effect) {
    const actor = effect.m_effect.actor_value1;
    if (!actor || typeof actor === typeof '') {
        return (<></>);
    }
    return getTag2(actor.name, orange);
}

function getActorDesc(effect) {
    const actor = effect.m_effect.actor_value1;
    if (!actor || typeof actor === typeof '' ) {
        return (<></>);
    }
    let desc = actor.desc;
    if (desc) {
        desc = desc.trim();
    }
    if (!desc || desc === "") {
        return (<></>);
    }
    return buildTextBlock(desc, "Description");
}

function getParentPerkName(effect) {
    const perk_name = effect.m_effect.parent_perk_name;
    if (!perk_name || perk_name === '') {
        return (<></>);
    }
    return getTag2(perk_name, orange);
}

function getParentPerkDesc(effect) {
    const perk_desc = effect.m_effect.parent_perk_desc;
    if (!perk_desc || perk_desc === '') {
        return (<></>);
    }
    return getTag2(perk_desc, orange);
}

function getSource(effect) {
    if (!effect.source || effect.source === '') {
        return (<></>);
    }
    return getTag2("Src: " + effect.source, indigo);
}

function getMagnitude(effect) {
    let magnitude = (effect.magnitude ? effect.magnitude : 0);
    let magnitudeName = "";
    let curveMagnitude = 0;
    let curveMagnitudeName = "";
    let globMagnitude = 0;
    let globMagnitudeName = "";
    if (effect.curve_max_value) {
        curveMagnitude = effect.curve_max_value;
        curveMagnitudeName = "(" + effect.d_curv.split("\n")[0] + ")";
    }
    if (effect.glob_magnitude && effect.glob_magnitude !== '') {
        globMagnitude = effect.glob_magnitude.value;
        globMagnitudeName = "(" + effect.glob_magnitude.name + ")";
    }
    if (magnitude === 0 && curveMagnitude === 0 && globMagnitude === 0) {
        return (<></>);
    }
    const result = [];
    if (magnitude !== 0) {
        result.push(getTag("Magnitude", magnitude, magnitudeName));
    }
    if (curveMagnitude !== 0) {
        result.push(getTag("Magnitude", curveMagnitude, curveMagnitudeName));
    }
    if (globMagnitude !== 0) {
        result.push(getTag("Magnitude", globMagnitude, globMagnitudeName));
    }
    return result;
}

function getParent(effect) {
    const id = effect.m_effect.spell_id;
    let parent;
    if (id && id !== '') {
        parent = "(" + id + ") " + effect.m_effect.spell_full;
        return getTag2(parent, indigo);
    }
    return (<></>);
}

function getProperty(effect) {
    const name = effect.m_effect.parent_name
    if (name && name !== '') {
        return getTag2(name, indigo);
    }
    return (<></>);
}

function getEffectTagNameView(effect) {
    if (!effect.tag || effect.tag === "") {
        return (<></>);
    }
    return (
        <div className="d-flex justify-content-end">
            <div className="tag mt-1" style={magenta}>
                {effect.tag}
            </div>
        </div>
    );
}

function getEffectView(effect, ind) {
    const mEffect = effect.m_effect;
    const borderColor = (ind % 2 === 0) ? '#a392a8' : '#929da9';
    const fontColor = (ind % 2 === 0) ? '#581e4e' : '#1e3a59';
    const backgroundColor = (ind % 2 === 0) ? '#fefbff' : '#fafcff';
    const conditionStrings = buildConditionStrings(effect.conditions, "mt-1", '#7a0450', '#ffedf9');
    const mConditionStrings = buildConditionStrings(mEffect.conditions, "mt-1", '#00301a', '#edfff6');
    const perkConditionStrings = buildConditionStrings(effect.perk_spell_conditions, "mt-1", '#a36400', '#fff8df');

    //const conditions = (effect.conditions || effect.m_effect.conditions) ? <b className="tag" style={{height: '1.15rem', fontSize: '0.6rem', color: '#c7005f', borderRadius: '10px'}}>Conditional</b> : <></>;
    const addicted = (effect.if_addicted) ? <b className="tag" style={{height: '1.15rem', fontSize: '0.6rem', color: '#c7005f', borderRadius: '10px'}}>Addicted</b> : <></>;
    return (
        <Card key={mEffect.id + ind} className="lite-shadow m-1" style={{borderColor: borderColor}}>
            <Card.Header className="p-1 ps-2" style={{backgroundColor: backgroundColor}}>
                <div style={{color: fontColor}}>
                    <b>{mEffect.full}</b>
                </div>
            </Card.Header>
            <div className="p-1 pb-2">
                {getEffectTagNameView(effect)}
                <div className="tag mt-1" style={blue}>
                    {mEffect.name}
                </div>
                {getMagnitude(effect)}
                {getDuration(effect)}
                {getArea(effect)}
                {getParent(effect)}
                {getSource(effect)}
                {getProperty(effect)}
                {getDescription(effect)}
                {getActor(effect)}
                {getActorDesc(effect)}
                {getParentPerkName(effect)}
                {getParentPerkDesc(effect)}
                {conditionStrings}
                {mConditionStrings}
                {perkConditionStrings}
            </div>
            <Card.Footer className="p-0">
                <Container className='p-1'>
                    <Row>
                        <div className="d-flex col justify-content-start" style={{alignItems: 'center'}}>
                            {addicted}
                        </div>
                        <Col className="d-flex justify-content-end" style={{alignItems: 'center'}}>
                            <b><small>{mEffect.id}</small></b>
                        </Col>
                    </Row>
                </Container>
            </Card.Footer>
        </Card>
    );
}

export function detailsView(item) {
    const effects = item.effects;
    const result = [];
    for (let i = 0; i < effects.length; i++) {
        result.push(getEffectView(effects[i], i));
    }
    return (
        <>
            {result}
        </>
    );
}

export default function ConsumableToast(props) {
    const [main, setMain] = useState(true);
    if (!props.showToast || !props.item) {
        return (<></>);
    }
    const view = (main) ? mainView(props.item) : detailsView(props.item);
    const buttonName = (main) ? "Details" : "Main";
    const padding = (main) ? "2" : "1";
    function onClick(e) {
        setMain(!main);
    }
    return (
        <ToastContainer
            className="p-3 position-fixed p-3"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 10 }}>
            <Toast bg="light" onClose={(e) => props.setShowToast(false)} show={props.showToast} animation={false}>
                <Toast.Header className="pe-3">
                    <strong className="ms-2 mt-auto mb-auto p-auto me-auto">{props.item['full']}</strong>
                </Toast.Header>
                <Toast.Body className={"pt-1 pb-2 modal-scroll-60 p-" + padding}>
                    {view}
                </Toast.Body>
                <div className="d-flex justify-content-center">
                    <Button size="sm" variant="blue-white-border ps-3 pe-3 p-1 mt-2 mb-2" onClick={onClick}>{buttonName}</Button>
                </div>
            </Toast>
        </ToastContainer>
    );
}