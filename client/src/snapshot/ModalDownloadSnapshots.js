import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import {getJsonFileRef} from '../helpers/Files';
import { memo } from 'react';


const ModalDownloadSnapshots = memo (function ModalDownloadSnapshots(props) {
    console.log("ModalDownloadSnapshots");
    if (!props.modalDownloadSnapshots) {
        return (<></>);
    }
    function onHide(e) {
        props.setModalDownloadSnapshots(false);
    }
    function downloadName() {
        let name = "snapshots";
        try {
            name = document.getElementById("dName").value;
        } catch {
            return name;
        }
        return (name === null || name === "") ? "snapshots" : name;
    }
    return (
        <Modal
            show = {props.modalDownloadSnapshots}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Download Snapshots
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <InputGroup.Text style={{ width: '9rem' }}>File name</InputGroup.Text>
                    <Form.Control id='dName' className='w-auto' defaultValue={"snapshots"} maxLength="120" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
            <a href={getJsonFileRef(props.items.map.values())} download={downloadName()}>
                <Button onClick={onHide}>Download</Button>
            </a>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalDownloadSnapshots;