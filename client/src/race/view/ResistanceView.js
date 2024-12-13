import ChartView from "./ChartView";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';


function getStyle(rType) {
    switch(rType) {
        case "physical":
            return ["💥 Physical", "small p-1 bg-ballistic", "grey"];
        case "energy":
            return ["⚡ Energy", "small p-1 bg-energy", "purple"];
        case "fire":
            return ["🔥 Fire", "small p-1 bg-fire", "red"];
        case "cold":
            return ["❄️ Cold", "small p-1 bg-cold", "#40aac2"];
        case "poison":
            return ["☣️ Poison", "small p-1 bg-poison", "green"];
        case "radiation":
            return ["☢️ Radiation", "small p-1 bg-rad", "#ccc976"];
        default:
            return ["", ""];
    }
}

function buildResCols(res) {
    const result = [];
    for (const name in res) {
        const cRes = res[name];
        const typeData = getStyle(name);
        result.push(
            <Col className="d-flex justify-content-center" key={name}>
                <ChartView className="d-flex justify-content-center m-1" color={typeData[2]} headerClassName={typeData[1]} title={typeData[0]} chartId={name} values={cRes.curve} />
            </Col>
        );
    }
    return result;
}

export default function ResistanceView(props) {
    if (!props.race || Object.keys(props.race.resistance).length === 0) {
        return (<></>);
    }
    return (
        <>
            <Divider className="p-0 mt-3 mb-2">Resistance</Divider>
            <Row className="d-flex justify-content-center">
                {buildResCols(props.race.resistance)}
            </Row>
        </>
    )
}