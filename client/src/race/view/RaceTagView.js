import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag, Divider } from 'antd';


function getTagView(tag) {
    return (
        <Col key={tag} className="m-1 ps-0 pe-0 d-flex justify-content-center">
            <Tag className="m-1 shadow-outline" bordered={true} color="default">
                <b>{tag}</b>
            </Tag>
        </Col>
    );
}

export default function RaceTagView({tags}) {
    if (tags && tags.length > 0) {
        const result = [];
        for (let i = 0; i < tags.length; i++) {
            result.push(getTagView(tags[i]));
        }
        return (
            <>
                <Divider className="p-0 mt-3 mb-2">Tags</Divider>
                <Row className="ps-1 pe-1">
                    {result}
                </Row>
            </>
        );
    }
    return (<></>);
}