import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';
import UTag from '../viewComponents/tag/UTag';


function getColTagView(tag, index, position) {
    return (
        <Col key={tag + index} className={"m-1 ps-0 pe-0 d-flex justify-content-" + position}>
            <UTag className="m-1 ps-2 pe-2 p-1" bRadius="5px" border={true} color={"indigo"}>
                {tag}
            </UTag>
        </Col>
    );
}

export default function CreatureBodyView(props) {
    const tags = props.creature.tags;
    if (tags) {
        const result = [];
        for (let i = 0; i < tags.length; i++) {
            result.push(getColTagView(tags[i], i, "center"));
        }
        return (
            <>
                <Divider className="p-0 mt-4 mb-1">Tags</Divider>
                <div className="m-3" />
                <Row className="ps-1 pe-1 pb-2">
                    {result}
                </Row>
            </>
        );
    }
    return (<></>);
}