import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag, Divider } from 'antd';
import { numberToString } from '../../helpers/StringHelpers';


// const colors = ["volcano", "red", "magenta", "blue", "purple"];

function getColTagView(tag, index, position="center") {
    // colors[getRandomNumber(colors.length)]
    return (
        <Col key={tag + index} className={"m-1 ps-0 pe-0 d-flex justify-content-" + position}>
            <Tag className="m-0 shadow-outline" bordered={true} color={"purple"}>
                <b>{tag}</b>
            </Tag>
        </Col>
    );
}

function getTagView(tag, index, position, color) {
    return (
        <div className={"m-0 ps-0 pe-0 d-flex justify-content-" + position}>
            <Tag className="shadow-outline m-1" bordered={true} color={color}>
                <b>{tag}</b>
            </Tag>
        </div>
    );
}

export default function RaceBodyView({bodyData}) {
    const body = bodyData.body;
    if (body) {
        const result = [];
        let index = 0
        for (const partName in body) {
            index += 1;
            const part = body[partName];
            const partText = part.name + " ‣ " + numberToString(part.damage_mult, 2) + "x"
            result.push(getColTagView(partText, index, "center"));
        }
        return (
            <>
                <Divider className="p-0 mt-4 mb-1">Body Damage Multipliers</Divider>
                {getTagView("Id: " + bodyData.id, 0, "end", "red")}
                {getTagView("Id: " + bodyData.name, 0, "end", "blue")}
                <div className="m-3" />
                <Row className="ps-1 pe-1 pb-2">
                    {result}
                </Row>
            </>
        );
    }
    return (<></>);
}