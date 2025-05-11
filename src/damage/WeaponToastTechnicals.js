import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import WeaponTechnicals from './WeaponTechnicals';
import { getImageElement } from '../helpers/WeaponImages';


export default function WeaponToastTechnicals(props) {
    const iconName = props.template.iconName[props.template.type[1]];
    return (
        <ToastContainer
            className="position-fixed p-1"
            position={"top-center"}
            role="alert" aria-live="assertive" aria-atomic="true"
            style={{ zIndex: 5 }}>
            <Toast bg="light" onClose={(e) => props.setShow(false)} show={props.show} animation={false}>
                <Toast.Header className="pe-3">
                    {getImageElement(iconName, "1.5rem")}
                    <strong className="ms-2 mt-auto mb-auto p-auto me-auto">{props.template.name}</strong>
                </Toast.Header>
                <Toast.Body className="p-2">
                   <WeaponTechnicals template={props.template} />
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}