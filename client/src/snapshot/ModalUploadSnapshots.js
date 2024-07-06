import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { readSnapshotsFromInput } from '../helpers/FetchSnapshots';
import { memo } from 'react';


const ModalUploadSnapshots = memo(function ModalUploadSnapshots(props) {
    console.log("ModalUploadSnapshots")
    function onHide() {
        props.setModalUploadSnapshots(false)
    }
    function readFile() {
        readSnapshotsFromInput("snapshotsFile", props.setNextId, props.setItems);
        props.setModalUploadSnapshots(false)
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
                    Load Snapshots
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        <p class="mb-1"> Choose a json file with snapshots.</p>
                        <p><strong>ATTENTION</strong>: This snapshots will replace current in the list.</p>
                    </label>
                    <input id="snapshotsFile" class="form-control" type="file" readOnly accept=".json" />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={readFile} id={props.itemId}>Yes</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalUploadSnapshots;