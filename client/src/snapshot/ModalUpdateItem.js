import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import {buildItem} from '../helpers/Item';
import { memo } from 'react';


const ModalUpdateItem = memo (function ModalUpdateItem(props) {
    console.log("ModalUpdateItem");

    function onUpdateItem() {
        const oldItem = props.items.map.get(props.modalUpdateItem.id);
        const item = buildItem(oldItem.id, oldItem.name, props.creatures, props.damage, props.legendary, props.boostDamage, props.wSpec, props.extraDamage, props.additionalDamages, props.resultDamage);
        setItem(item);
        props.setModalUpdateItem({id: -1, show: false});
    }

    function setItem(item) {
        props.items.map.set(item.id, item);
        const newItems = {
            map: props.items.map,
        }
        props.setItems(newItems);
    }

    const onHide = () => props.setModalUpdateItem({id: -1, show: false});
    return (
        <Modal
            show = {props.modalUpdateItem.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Update Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to update '{props.name}'?
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={onUpdateItem}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalUpdateItem;