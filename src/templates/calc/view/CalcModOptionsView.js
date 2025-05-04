import {checkLength} from '../../../helpers/Input';
import { Divider } from 'antd';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';
import GroupView from '../../../helpers/views/GroupView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { WarningPopover } from '../../../helpers/WarningPopover';
import Form from 'react-bootstrap/Form';


function getInfo(name, infos) {
    const info = infos[name];
    if (info) {
        return (
            <WarningPopover element={infoButton()} message={info} header="Description" />
        );
    }
    return (<></>);
}

function infoButton() {
    return (
        <Button style={{ width: '2rem' }} variant="warning"><strong>?</strong></Button>
    );
}

function headButton(name, frHead, setFrHead) {
    if (name !== "Head Shot") {
        return (<></>);
    }
    function onClick(e) {
        frHead += 20;
        if (frHead > 100) {
            frHead = 20;
        }
        setFrHead(frHead);
    }
    return (
        <Button className={"ps-0 pe-0 "} style={{ width: '3rem' }} variant="secondary" onClick={onClick}><strong><small>{frHead}%</small></strong></Button>
    );
}

function buildView(items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos) {
    const result = [];
    function onChange(e) {
        items[e.target.title] = e.target.checked;
        setItems({...items});
    }
    for (const opt in items) {
        result.push(getItem(opt, onChange, items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos));
    }
    return result;
}

function critButton(name, frCrit, setFrCrit) {
    if (name !== "Crit") {
        return (<></>);
    }
    function onClick(e) {
        frCrit -= 1;
        if (frCrit < 1) {
            frCrit = 7;
        }
        setFrCrit(frCrit);
    }
    return (
        <Button className="ps-0 pe-0" style={{ width: '3rem' }} variant="secondary" onClick={onClick}><strong><small>1 / {frCrit}</small></strong></Button>
    );
}

function getItem(name, onChange, items, setItems, frHead, setFrHead, frCrit, setFrCrit, infos) {
    let width = (infos[name]) ? '13rem' : '15rem';
    width = (name === "Head Shot" || name === "Crit") ? "12rem" : width;
    width = (name === "Strength") ? "11rem" : width;
    const dis = (name === "Strength" || name === "Legendary5");
    const checked = (dis && name === "Strength") ? true : items[name];
    const outline = (checked) ? "shadow-blue" : "";
    return (
        <Col key={name}>
            <GroupView className={outline}>
                <InputGroup className="mb-1 mt-1 flex-nowrap justify-content-center">
                    <InputGroup.Text style={{ width: '2.8rem'}}>
                        <UCheckbox disabled={dis} title={name} onChange={onChange} checked={checked}></UCheckbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{ width: width }}><small>{name}</small></InputGroup.Text>
                    {getInfo(name, infos)}
                    {headButton(name, frHead, setFrHead)}
                    {strengthField(name, items, setItems)}
                    {critButton(name, frCrit, setFrCrit)}
                </InputGroup>
            </GroupView>
        </Col>
    );
}

function strengthField(name, items, setItems) {
    if (name !== "Strength") {
        return (<></>);
    }
    function onChange(e) {
        checkLength(e);
        let value = parseInt(e.target.value);
        let min = parseInt(e.target.min);
        if (value < min) {
            value = min;
        }
        items.Strength = value;
        setItems({
            ...items,
        });
    }
    return (
        <Form.Control className={"pe-1"} style={{ minWidth: '4rem', maxWidth: '4rem'}} type="number" min="5" value={items.Strength} max={"100"} maxLength="3" onChange={onChange} />
    );
}

export default function CalcModOptionsView(props) {
    return (
        <>
            <Divider key={props.header} className="p-0 mt-3 mb-1">{props.header}</Divider>
            <Container>
                <Row>
                    {buildView(props.items, props.setItems, props.frHead, props.setFrHead, props.frCrit, props.setFrCrit, props.infos)}
                </Row>
            </Container>
        </>
    );

}