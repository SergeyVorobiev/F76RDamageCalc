import Col from 'react-bootstrap/Col';
import { keyValueTag } from '../helpers/RowBuilder';
import { truncate } from '../helpers/Input';

// TODO: DEPRECATED, HAS TO BE DELETED
export function getField(data, name, id, color, width, hideEmpty=true, round=0, cell=-1, css="") {
    let value = data[id];
    return getResolvedField(name, value, color, width, hideEmpty, round, cell, css);
}

export function getResolvedField(name, value, color, width, hideEmpty=true, round=0, cell=-1, css="") {
    if (cell > -1) {
        value = value[cell];
    }
    if (round > 0) {
        value = value.toFixed(round);
    }
    if (hideEmpty) {
        if (!value || value === 0 || value === '00000000' || value === '') {
            return <></>;
        }
    }
    return getNameValueField(name, value, color, width, css);
}

export function getNameValueField(value1, value2, color, width, css="") {
    if (value2 && typeof value2 === typeof '') {
        value2 = truncate(value2, 30);
    }
    return (
        <Col className={'d-flex justify-content-center ' + css} >
            {keyValueTag(value1,  value2, color, {width: width})}
        </Col>
    );
}


