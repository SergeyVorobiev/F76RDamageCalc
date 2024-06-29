import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


export default function ModalUpdateItem(props) {
    return (
        <Modal
            show = {props.show}
            onHide = {props.onHide}
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
                    <Button className="w-100 me-1" onClick={props.onUpdateItem}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={props.onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}