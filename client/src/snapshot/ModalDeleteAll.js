import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { memo } from 'react';


const ModalDeleteAll = memo(function ModalDeleteAll(props) {
    console.log("ModalDeleteAll");
    if (!props.modalDeleteAll) {
        return (<></>);
    }
    function onHide(e) {
        props.setModalDeleteAll(false);
    }

    function removeAll(e) {
        try {
            props.items.map.clear();
            const newItems = {
                map: props.items.map,
            }
            props.setItems(newItems);
            props.setNextId(0);
        } catch {}
        onHide();
    }

    return (
        <Modal
            show = {props.modalDeleteAll}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete All Snapshots
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to delete all snapshots?
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={removeAll}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDeleteAll;