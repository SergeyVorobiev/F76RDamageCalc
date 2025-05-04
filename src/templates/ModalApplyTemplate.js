import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { convertTemplateToSpecs } from '../entities/EWeaponSpecs';
import { truncateLongWords } from '../helpers/Input';
import LoadingModal from '../loading/LoadingModal';
import { useState } from 'react';


function modalView(show, loading, name, applyTemplate, onHide) {
    if (loading) {
        return (
            <LoadingModal show={show} onHide={onHide} />
        );
    }
    return (
        <Modal
            show = {show}
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

export default function ModalApplyTemplate(props) {
    console.log("ModalApplyTemplate");
    const [loading, setLoading] = useState(false);
    if (!props.modalTemplate.show) {
        return (<></>);
    }
    let name = "";
    if (props.modalTemplate.template) {
        name = props.modalTemplate.template.name;
    }
    name = truncateLongWords(name, 25);
    function onHide(e) {
        setLoading(false);
        props.setModalTemplate({template: null, show: false});
    }

    function applyTemplate(e) {
        setLoading(true);
        setTimeout(() => {
            const template = props.modalTemplate.template;
            const specItem = convertTemplateToSpecs(template, props.alt);
            props.setWSpec(specItem);
            onHide(e);
        }, 100);
    }

    return modalView(props.modalTemplate.show, loading, name, applyTemplate, onHide);
}