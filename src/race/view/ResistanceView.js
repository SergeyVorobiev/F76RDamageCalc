import ChartView from "./ChartView";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';
import CreatureDataProvider from '../../creature/CreatureDataProvider';


function pushChart(typeData, key, result, cRes, name) {
    const chartData = cRes[name];
    if (!chartData || chartData === "") {
        return;
    }
    result.push(
        <Col className="d-flex justify-content-center" key={key + name}>
            <ChartView className="d-flex justify-content-center m-1" color={typeData[2]} headerClassName={typeData[1]} title={typeData[0] + " (" + name + ")"} chartId={key + name} values={chartData.curve} />
        </Col>
    );
}

function buildResCols(res) {
    const result = [];
    for (const name in res) {
        const cRes = res[name];
        const typeData = CreatureDataProvider.getStyle(name);
        pushChart(typeData, name, result, cRes, "base");
        pushChart(typeData, name, result, cRes, "alt");
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