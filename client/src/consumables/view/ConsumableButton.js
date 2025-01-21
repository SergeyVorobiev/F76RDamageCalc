import Button from 'react-bootstrap/Button';
import ConsumableTools from '../ConsumableTools';
import { leftRight } from '../../helpers/RowBuilder';


function getDurationValue(effect) {
    let duration = 0;
    if (effect.glob_duration === '') {
        duration = effect.duration;
    } else {
        duration = effect.glob_duration.value;
    }
    return duration;
}

function getEffectValues(effects, tag) {
    const resultValues = [];
    const resultNames = new Set();
    const durations = [];
    for (let i = 0; i < effects.length; i++) {
        const effect = effects[i];
        if (tag === effect.tag) {
            resultNames.add(effect.m_effect.full);
            durations.push(getDurationValue(effect));
            if (effect.curve_max_value) {
                resultValues.push(effect.curve_max_value);
            } else if (effect.glob_magnitude === '') {
                resultValues.push(effect.magnitude);
            } else {
                resultValues.push(effect.glob_magnitude.value)
            }
        }
    }
    const valueColor = '#fc5972';
    if (resultNames.size > 1) {
        return getEffectFilterInfo("Multiple Effects", "", "", valueColor);
    }
    if (resultValues.length === 0 || resultNames.size === 0) {
        return null;
    }
    let resultName = Array.from(resultNames)[0];
    const indSC = resultName.indexOf(":")
    if (indSC > -1) {
        resultName = resultName.substring(indSC + 2);
    }
    const max = (+Math.max(...resultValues).toFixed(3)).toString();
    const min = (+Math.min(...resultValues).toFixed(3)).toString();
    const maxDuration = (+Math.max(...durations).toFixed(1)).toString();
    let durationText = "";
    if (maxDuration > 0) {
        durationText = " (" + maxDuration + ")"
    }
    if (resultValues.length === 1 || min === max) {
        return getEffectFilterInfo(resultName, durationText, max, valueColor);
    } else if (resultValues.length === 2 && min < 0) {
        return  getEffectFilterInfo(resultName, durationText, min + " / " + max, valueColor);
    } else {
        return getEffectFilterInfo(resultName, durationText, "up to " + max, valueColor);
    }
}

function getEffectFilterInfo(resultName, durationText, max, valueColor) {
    if (max === 0 || max === "0") {
        max = "";
    }
    return leftRight(<div style={{wordBreak: "break-all"}}>{resultName} {durationText}</div>, <a style={{color: valueColor}}>{max}</a>, 9, 3, "m-0 p-1");
}

export default function ConsumableButton(props) {
    const typeColor = ConsumableTools.getItemColor(props.type);
    let effectValues = null;
    if (props.effectTag && props.effectTag !== "None") {
        effectValues = getEffectValues(props.item.effects, props.effectTag);
    }
    const textBgColor = ConsumableTools.getItemColorDark(props.type);
    const textStyle = (effectValues) ? {borderRadius: '1px', backgroundColor: textBgColor} : {};
    let itemType = props.type;
    if (!itemType || itemType === "Chemical") {
        itemType = "Other";
    }
    return (
        <div>
            <Button id={props.item['id']} className="lite-shadow" variant="blue-white-border" style={{width: '100%', margin: '0.1rem', paddingTop: '0.2rem', paddingBottom: '0.1rem', padding: "0.3rem"}} onClick={props.onClick}>
                <div className="d-flex justify-content-start p-1" style={{fontSize: '0.9rem', backgroundColor: '#fbfbfb', borderRadius: '0.1rem'}}>
                    <b>{props.item['full']}</b>
                </div>
                <div className="p-0" style={textStyle}>
                    <b className="p-0 bg-text-shadow">{effectValues}</b>
                </div>
                <div className="d-flex pt-2 justify-content-end">
                    <div className="badge bg-lite-shadow2" style={{backgroundColor: typeColor}}>{itemType}</div>
                </div>
            </Button>
        </div>
    );
}