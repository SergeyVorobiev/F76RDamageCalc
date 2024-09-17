import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { readSnapshotsFromInput } from '../helpers/FetchSnapshots';
import { memo, useState } from 'react';
import { Radio } from 'antd';


const ModalUploadSnapshots = memo(function ModalUploadSnapshots(props) {
    console.log("ModalUploadSnapshots")
    const [addOld, setAddOld] = useState("0");
 
    function onHide() {
        props.setModalUploadSnapshots(false)
    }
    function readFile() {
        const add = (addOld === "0") ? true : false;
        readSnapshotsFromInput("snapshotsFile", props.setNextId, props.setItems, props.items.map, add);
        props.setModalUploadSnapshots(false)
    }
    const onChange = (e) => {
        setAddOld(e.target.value);
    };
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
                    </label>
                    <input id="snapshotsFile" class="form-control" type="file" readOnly accept=".json" />
                    <Radio.Group className="mt-4 d-flex justify-content-center" value={addOld} onChange={onChange}>
                        <Radio.Button value="0">Add</Radio.Button>
                        <Radio.Button value="1">Replace</Radio.Button>
                    </Radio.Group>
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