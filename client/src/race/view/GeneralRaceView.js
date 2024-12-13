import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag } from 'antd';


export default function GeneralRaceView(props) {
    if (!props.race) {
        return (<></>)
    }
    const name = props.race.full;
    const codeName = props.race.name;
    const id = props.race.id;
    return (
        <>
            <Row>
                <Col className="d-flex justify-content-start ms-2">
                    <Tag bordered={true} color="indigo" className="shadow-outline"><h6 className="m-0 p-1"><strong>{name}</strong></h6></Tag>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-end me-1">
                    <Tag bordered={true} color="red" className="shadow-outline"><strong>Id: {id}</strong></Tag>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col className="d-flex justify-content-end me-1">
                    <Tag bordered={true} color="blue" className="shadow-outline"><strong>Code: {codeName}</strong></Tag>
                </Col>
            </Row>
        </>
    );
}