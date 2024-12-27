import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import ConsumableTagsView from './ConsumableTagsView';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const darkBlue = {
    backgroundColor: '#e6f7ff',
    borderColor: '#0085c6',
    color: '#003e5d',
}

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

function mainView(item) {
    return (
        <>
            <div className="d-flex flex-nowrap" style={{width: '100%'}}>
                <span className="pe-0 d-flex justify-content-start" style={{width: 'auto'}}>
                    <b className="tag">{item.id}</b>
                </span>
                <div className="d-flex justify-content-end ms-2" style={{width: '100%', textWrap: 'nowrap', overflow: 'hidden'}}>
                    <b className="tag" style={darkBlue}>{item.name}</b>
                </div>
            </div>
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
                Area: <a style={{color: 'red'}}>{effect.area}</a>
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
    return (
        <div style={{width: '100%'}} className="mt-3 mb-0 d-flex justify-content-center">
        <div className="tag mt-1" style={redRounded}>
            <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                {addictionChance}
            </div>
        </div>
        </div>
    );
}

function getDuration(effect) {
    let duration = 0;
    let durationName = "";
    if (effect.glob_duration === '') {
        duration = effect.duration;
    } else {
        duration = effect.glob_duration.value;
        durationName = "(" + effect.glob_duration.name + ")";
    }
    if (duration === 0) {
        return (<></>);
    }
    return (
        <div className="tag mt-1">
            <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                Duration: <a style={{color: 'red'}}>{duration.toFixed(1)}</a> {durationName}
            </div>
        </div>
    );
}

function getMagnitude(effect) {
    let magnitude = 0;
    let magnitudeName = "";
    if (effect.curve_max_value) {
        magnitude = effect.curve_max_value;
        magnitudeName = "(" + effect.d_curv.split("\n")[0] + ")";
    } else if (effect.glob_magnitude === '') {
        magnitude = effect.magnitude;
    } else {
        magnitude = effect.glob_magnitude.value;
        magnitudeName = "(" + effect.glob_magnitude.name + ")";
    }
    if (magnitude === 0) {
        return (<></>);
    }
    return (
        <div className="tag mt-1">
            <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                Magnitude: <a style={{color: 'red'}}>{magnitude.toFixed(3)}</a> {magnitudeName}
            </div>
        </div>
    );
}

function getParent(effect) {
    const id = effect.m_effect.spell_id;
    let parent;
    if (id && id !== '') {
        parent = "(" + id + ") " + effect.m_effect.spell_full;
        return (
            <div className="tag mt-1" style={indigo}>
                <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {parent}
                </div>
            </div>
        );
    }
    return (<></>);
}

function getProperty(effect) {
    const name = effect.m_effect.parent_name
    if (name !== '') {
        return (
            <div className="tag mt-1" style={indigo}>
                <div style={{textWrap: 'nowrap', overflow: "hidden", textOverflow: 'ellipsis'}}>
                    {name}
                </div>
            </div>
        );
    }
    return (<></>);
}

function getEffectView(effect, ind) {
    const mEffect = effect.m_effect;
    const borderColor = (ind % 2 === 0) ? '#a392a8' : '#929da9';
    const fontColor = (ind % 2 === 0) ? '#581e4e' : '#1e3a59';
    const backgroundColor = (ind % 2 === 0) ? '#fefbff' : '#fafcff';
    const conditions = (effect.conditions || effect.m_effect.conditions) ? <b className="tag" style={{height: '1.15rem', fontSize: '0.6rem', color: '#c7005f', borderRadius: '10px'}}>Conditional</b> : <></>;
    const addicted = (effect.if_addicted) ? <b className="tag" style={{height: '1.15rem', fontSize: '0.6rem', color: '#c7005f', borderRadius: '10px'}}>Addicted</b> : <></>;
    return (
        <Card key={mEffect.id + ind} className="lite-shadow m-1" style={{borderColor: borderColor}}>
            <Card.Header className="p-1 ps-2" style={{backgroundColor: backgroundColor}}>
                <div style={{color: fontColor}}>
                    <b>{mEffect.full}</b>
                </div>
            </Card.Header>
            <div className="p-1 pb-2">
                <div className="tag mt-1" style={blue}>
                    {mEffect.name}
                </div>
                {getMagnitude(effect)}
                {getDuration(effect)}
                {getArea(effect)}
                {getParent(effect)}
                {getProperty(effect)}
            </div>
            <Card.Footer className="p-0">
                <Container className='p-1'>
                    <Row>
                        <div className="d-flex col justify-content-start" style={{alignItems: 'center'}}>
                            {conditions}
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

function detailsView(item) {
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