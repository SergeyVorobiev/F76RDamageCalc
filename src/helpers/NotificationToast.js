import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';


export default function NotificationToast({toastState}) {
    const [show, setShow] = useState(toastState);
    return (
        <Row>
            <Col xs={6}>
                <Toast onClose={() => setShow(false)} show={show} delay={2000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Limit</strong>
                    </Toast.Header>
                    <Toast.Body>
                        Damage limit has been achieved
                    </Toast.Body>
                </Toast>
            </Col>
        </Row>
    );
}