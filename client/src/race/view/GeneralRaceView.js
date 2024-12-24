import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag } from 'antd';


export default function GeneralRaceView(props) {
    if (!props.race) {
        return (<></>)
    }
    const codeName = props.race.name;
    const id = props.race.id;
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-end p-0 me-1">
                    <Tag bordered={true} color="red" className="shadow-outline m-0"><strong>Id: {id}</strong></Tag>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col className="d-flex justify-content-end p-0 me-1">
                    <Tag bordered={true} color="blue" className="shadow-outline m-0"><strong>Code: {codeName}</strong></Tag>
                </Col>
            </Row>
        </>
    );
}