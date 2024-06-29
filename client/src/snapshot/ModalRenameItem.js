import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { memo } from 'react';


const ModalRenameItem = memo(function ModalRenameItem(props) {
    console.log("ModalRenameItem");
    function setItem(item) {
        props.items.map.set(item.id, item);
        const newItems = {
            map: props.items.map,
        }
        props.setItems(newItems);
    }

    function onRename() {
        let name = "Weapon";
        try {
            name = document.getElementById("weaponNameInput").value;
            name = (name === null || name === '') ? "Weapon" : name;
            let item = props.items.map.get(props.id);
            item.name = name;
            setItem(item);
            onHide();
        } catch {
            // Ok (sometimes can happen on mobile devices if virtual keyboard is covering a dialog but somehow you managed
            // tap Ok button).
        }
    };

    let name = "Weapon";
    try {
        name = props.items.map.get(props.id).name;
    } catch {
        // Ok
    }
    function onHide(e) {
        props.setModalRenameItem({id: -1, show: false});
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
                    Rename Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="pb-2 flex-nowrap">
                    <InputGroup.Text>New name:</InputGroup.Text>
                    <Form.Control id="weaponNameInput" defaultValue={name} maxLength="65" />
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={onRename}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
});

export default ModalRenameItem;