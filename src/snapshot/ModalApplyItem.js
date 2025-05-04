import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import { truncateLongWords } from '../helpers/Input';
import LoadingModal from '../loading/LoadingModal';
import { useState } from 'react';


function modalView(show, loading, name, applyItem, onHide, itemId) {
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
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Apply Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to apply '{name}'? Current settings will be replaced.
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={applyItem} id={itemId}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}

export default function ModalApplyItem(props) {
    console.log("ModalApplyItem");
    const [loading, setLoading] = useState(false);
    if (!props.show) {
        return (<></>);
    }
    function onHide(e) {
        setLoading(false);
        props.setModalApplyItem({id: -1, name: 'none', show: false});
    }
    function applyItem(e) {
        setLoading(true);
        setTimeout(() => {
            const item = props.items.map.get(parseInt(e.target.id));
            const copy = JSON.parse(JSON.stringify(item));
            props.applySnapshot(copy.boostDamage, copy.wSpec, copy.extraDamage, copy.additionalDamages, copy.creatures, copy.player, copy.playerStats, copy.stuff);
            onHide(null);
        }, 100);
    }

    const name = truncateLongWords(props.name, 25);
    return modalView(props.show, loading, name, applyItem, onHide, props.itemId);
}