import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {getJsonFileRef} from '../helpers/Files';
import { memo } from 'react';


const ModalDownloadSnapshot = memo (function ModalDownloadSnapshot(props) {
    if (props.modalDownloadSnapshot.id < 0 || !props.modalDownloadSnapshot.show) {
        return (<></>);
    }
    console.log("ModalDownloadSnapshot");
    function onHide(e) {
        props.setModalDownloadSnapshot({id: -1, name: 'none', show: false});
    }
    function downloadName() {
        const name = props.modalDownloadSnapshot.name;
        return (name === null || name === "") ? "snapshot.json" : name + ".json";
    }
    const item = [props.items.map.get(props.modalDownloadSnapshot.id)];
    const fileName = props.modalDownloadSnapshot.name;
    return (
        <Modal
            show = {props.modalDownloadSnapshot.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Download Weapon
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <InputGroup.Text style={{ width: '9rem' }}>File name</InputGroup.Text>
                    <Form.Control id='snapshotName' className='w-auto' defaultValue={fileName} maxLength="120" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
            <a href={getJsonFileRef(item)} download={downloadName()}>
                <Button onClick={onHide}>Download</Button>
            </a>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDownloadSnapshot;