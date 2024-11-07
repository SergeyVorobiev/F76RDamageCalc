import Modal from 'react-bootstrap/Modal';
import TestedCarousel from './TestedCarousel';
import { testedWeapons } from './TestedWeapons';


export default function ModalTestedWeapon(props) {
    console.log("ModalTestedWeapon");
    if (!props.modalTested.show) {
        return (<></>);
    }
    function onHide(e) {
        props.setModalTested({data: null, show: false});
    }
    const data = testedWeapons.get(props.modalTested.wId);
    return (
        <Modal
            show = {props.modalTested.show}
            onHide = {onHide}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Tests
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pb-1">
                <TestedCarousel data={data} />
            </Modal.Body>
        </Modal>
    );
}