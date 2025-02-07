import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { memo } from 'react';


const ModalDeleteDamage = memo(function ModalDeleteDamage(props) {
    console.log("ModalDeleteDamage");
    if (!props.modalDeleteDamage.show) {
        return (<></>);
    }
    function onHide(e) {
        props.setModalDeleteDamage({id: -1, name: 'none', show:  false});
    }
    function removeItem(e) {
        try {
            const index = props.modalDeleteDamage.id;
            props.wSpec.damages.splice(index, 1);

            // Reindex
            for (let i = 0; i < props.wSpec.damages.length; i++) {
                props.wSpec.damages[i].index = i;
            }
            props.setWSpec({...props.wSpec});
        } catch {}
        props.setModalDeleteDamage({id: -1, name: "none", show: false});
    }
    return (
        <Modal
            show = {props.modalDeleteDamage.show}
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
                Do you want to delete '{props.modalDeleteDamage.name}' damage?
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={removeItem}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDeleteDamage;