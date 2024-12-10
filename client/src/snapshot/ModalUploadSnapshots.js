import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { readSnapshotsFromInput } from '../helpers/FetchSnapshots';
import { memo, useState } from 'react';
import BSRadio from '../helpers/views/BSRadio';


const radio = {Add: '0', Replace: '1'};

const ModalUploadSnapshots = memo(function ModalUploadSnapshots(props) {
    console.log("ModalUploadSnapshots")
    const [addOld, setAddOld] = useState('0');
    if (!props.show) {
        return (<></>);
    }
    function onHide() {
        props.setModalUploadSnapshots(false)
    }
    function readFile() {
        const add = (addOld === '0');
        readSnapshotsFromInput("snapshotsFile", props.setNextId, props.setItems, props.items.map, add);
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
                <div className="mb-3">
                    <label htmlFor="formFile" className="form-label">
                        <p className="mb-1"> Choose a json file with snapshots.</p>
                    </label>
                    <input id="snapshotsFile" className="form-control" type="file" readOnly accept=".json" />
                    <BSRadio className="mt-4 d-flex justify-content-center" pairs={radio} selectedValue={addOld} setSelectedValue={setAddOld} />
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