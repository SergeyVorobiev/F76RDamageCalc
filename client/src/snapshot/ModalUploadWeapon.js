import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import {readWeaponsFromInput} from '../helpers/FetchWeapons';
import { memo } from 'react';


const ModalUploadWeapon = memo(function ModalUploadWeapon(props) {
    console.log("ModalUploadWeapon")
    function onHide() {
        props.setModalUploadWeapon(false)
    }
    function readFile() {
        readWeaponsFromInput("weaponFile", props.setNextId, props.setItems);
        props.setModalUploadWeapon(false)
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
                    Load Weapons
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="mb-3">
                    <label for="formFile" class="form-label">
                        <p class="mb-1"> Choose a json file with weapons.</p>
                        <p><strong>ATTENTION</strong>: This weapons will replace current in the list.</p>
                    </label>
                    <input id="weaponFile" class="form-control" type="file" readOnly accept=".json" />
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

export default ModalUploadWeapon;