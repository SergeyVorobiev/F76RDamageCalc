import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';


export default function ModalApplyItem(props) {
    console.log("ModalApplyItem");
    if (!props.show) {
        return (<></>);
    }
    function applyItem(e) {
        const item = props.items.map.get(parseInt(e.target.id));
        const copy = JSON.parse(JSON.stringify(item));
        props.applySnapshot(copy.name, copy.boostDamage, copy.wSpec, copy.extraDamage, copy.additionalDamages, copy.creatures, copy.player, copy.playerStats, copy.stuff);
        props.setModalApplyItem({id: "-1", name: "none", show: false});
    }
    function onHide(e) {
        props.setModalApplyItem({id: -1, name: 'none', show: false});
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
                    Apply Item
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Do you want to apply '{props.name}'? Current settings will be replaced.
            </Modal.Body>
            <Modal.Footer>
                <InputGroup className="mb-1 mt-1 flex-nowrap">
                    <Button className="w-100 me-1" onClick={applyItem} id={props.itemId}>Yes</Button>
                    <Button className="w-100 ms-1" onClick={onHide}>Cancel</Button>
                </InputGroup>
            </Modal.Footer>
        </Modal>
    );
}