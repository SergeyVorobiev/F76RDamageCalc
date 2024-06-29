import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {buildItem} from '../helpers/Item';
import { memo } from 'react';


const ModalNewItem = memo (function ModalNewItem(props) {
    console.log("ModalNewItem");
    function createItem(e, name) {
        if (name === '' || name === null) {
            name = "Weapon"
        }
        const item = buildItem(props.id, name, props.creatures, props.damage, props.legendary, props.boostDamage, props.wSpec, props.extraDamage, props.additionalDamages, props.resultDamage)
        props.items.map.set(props.id, item);
        const nextId = props.id + 1;
        const newItems = {
            map: props.items.map,
        }
        props.setItems(newItems);
        props.setNextId(nextId);
        props.setModalNewItemShow(false);
    }
    function onClick(e) {
        createItem(e, document.getElementById("wName").value);
    }
    function onHide(e) {
        props.setModalNewItemShow(false);
    }
    return (
        <Modal
            show = {props.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Current Weapon
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <InputGroup.Text style={{ width: '9rem' }}>Weapon name</InputGroup.Text>
                    <Form.Control id='wName' className='w-auto' defaultValue={"Weapon"} maxLength="65" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onClick}>Add</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalNewItem;