import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { memo } from 'react';


const ModalDeleteItem = memo(function ModalDeleteItem(props) {
    console.log("ModalDeleteItem");
    if (!props.show) {
        return (<></>);
    }
    function onHide(e) {
        props.setModalDeleteItem({id: -1, name: 'none', show:  false});
    }
    function removeItem(e) {
        try {
            props.items.map.delete(parseInt(e.target.id));
            const newItems = {
                map: props.items.map,
            }
            props.setItems(newItems);
        } catch {}
        props.setModalDeleteItem({id: "-1", name: "none", show: false});
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
                    Delete Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to delete '{props.name}'?
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={removeItem} id={props.itemId}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDeleteItem;