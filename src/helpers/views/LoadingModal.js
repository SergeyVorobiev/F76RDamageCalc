import Modal from 'react-bootstrap/Modal';


export default function LoadingModal(props) {
    function onHide(e) {

    }
    return (
        <Modal
            show = {props.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className="modal-scroll-80-60">
                <b>Loading...</b>
            </Modal.Body>
        </Modal>
    );
}
