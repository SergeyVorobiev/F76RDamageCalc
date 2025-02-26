import CreatureChartView from "./CreatureChartView";
import CreatureDataProvider from './CreatureDataProvider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function buildResCols(creatureName) {
    const result = [];
    let data = CreatureDataProvider.getCreatureData(creatureName);
    if (data) {
        data = data['curve'];
    }
    for (const name in data) {
        const cRes = data[name];
        const typeData = CreatureDataProvider.getStyle(name);
        result.push(
            <Col className="d-flex justify-content-center" key={name}>
                <CreatureChartView className="d-flex justify-content-center m-1" color={typeData[2]} headerClassName={typeData[1]} title={typeData[0]} chartId={name + "Creature"} values={cRes} />
            </Col>
        );
    }
    return result;
}

export default function CreatureResHealthChartsView(props) {
    return (
        <Row className="d-flex justify-content-center">
            {buildResCols(props.creatureName)}
        </Row>
    )
}