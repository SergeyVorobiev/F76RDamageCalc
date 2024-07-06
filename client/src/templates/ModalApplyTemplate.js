import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { convertTemplate, convertTemplateToSpecs } from '../entities/EWeaponSpecs';


export default function ModalApplyTemplate(props) {
    console.log("ModalApplyTemplate");
    let name = "";
    if (props.modalTemplate.id > -1) {
        name = props.templates[props.modalTemplate.id].name;
    }
    function onHide(e) {
        props.setModalTemplate({id: -1, show: false});
    }

    function applyTemplate(e) {
        const template = props.templates[props.modalTemplate.id];
        const damageItem = convertTemplate(template);
        const specItem = convertTemplateToSpecs(template);
        props.setDamage(damageItem);
        props.setWSpec(specItem);
        props.setWeaponName(template.name);
        onHide(e);
    }

    return (
        <Modal
            show = {props.modalTemplate.show}
            onHide = {onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Apply Template
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to apply '{name}' template? Current weapon properties will be replaced.
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={applyTemplate}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}