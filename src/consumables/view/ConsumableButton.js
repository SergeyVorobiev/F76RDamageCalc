import Button from 'react-bootstrap/Button';
import ConsumableTools from '../ConsumableTools';
import { leftRight } from '../../helpers/RowBuilder';


function pushNonZeroMagnitudes(magnitudes, data) {
    if (data.curveAltMagnitude !== 0) {
        magnitudes.push(data.curveAltMagnitude);
    }
    if (data.curveMagnitude !== 0) {
        magnitudes.push(data.curveMagnitude);
    }
    if (data.magnitude !== 0) {
        magnitudes.push(data.magnitude);
    }
}

function getEffectValues(tagData) {
    const magnitudes = []
    const durations = []
    for (let i = 0; i < tagData.length; i++) {
        pushNonZeroMagnitudes(magnitudes, tagData[i]);
        durations.push(tagData[i].duration);
    }
    if (magnitudes.length === 0) {
        return (<></>);
    }
    const name = tagData[0].name;
    const max = Math.max(...magnitudes);
    const min = Math.min(...magnitudes);
    const maxText = (+max.toFixed(3)).toString();
    const minText = (+min.toFixed(3)).toString();
    const duration = Math.max(...durations);
    const valueColor = '#fc5972';
    let durationText;
    if (duration > 60) {
        durationText = "(" + duration / 60 + "min)";
    } else {
        durationText = (duration === 0) ? "" : "(" + duration + "sec)";
    }

    if (min === 0 && max === 0) {
        return getEffectFilterInfo(name, durationText, "", valueColor);
    } else if (min === max) {
        return getEffectFilterInfo(name, durationText, maxText, valueColor);
    }
    return getEffectFilterInfo(name, durationText, minText + " ‣‣‣ " + maxText, valueColor);
}

function getEffectFilterInfo(resultName, durationText, max, valueColor) {
    return leftRight(<div className="p-0" style={{wordBreak: "break-all"}}>{resultName} {durationText}</div>, <span style={{color: valueColor}}>{max}</span>, 9, 3, "m-0 p-1");
}

export default function ConsumableButton(props) {
    const typeColor = ConsumableTools.getItemColor(props.type);
    let effectValues = null;
    if (props.effectTag && props.effectTag !== "None") {
        effectValues = getEffectValues(props.item.effectTagsData[props.effectTag]);
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
                <div className="d-flex justify-content-start p-1" style={{fontSize: '0.9rem', backgroundColor: '#f4f4f4', borderRadius: '0.1rem'}}>
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