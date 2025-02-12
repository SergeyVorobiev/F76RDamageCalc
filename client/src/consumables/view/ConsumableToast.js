import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import StackEffectView from '../../helpers/views/StackEffectView';


export default function ConsumableToast(props) {
    if (!props.showToast || !props.item) {
        return (<></>);
    }
    return (
        <ToastContainer
            className="p-3 position-fixed p-3"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 10 }}>
            <Toast bg="light" onClose={(e) => props.setShowToast(false)} show={props.showToast} animation={false}>
                <Toast.Header className="pe-3">
                    <strong className="ms-2 mt-auto mb-auto p-auto me-auto">{props.item['full']}</strong>
                </Toast.Header>
                <Toast.Body className={"pt-1 pb-2 modal-scroll-60 p-2"}>
                    <StackEffectView item={props.item} />
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}