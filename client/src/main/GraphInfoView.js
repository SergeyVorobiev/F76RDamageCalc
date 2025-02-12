import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Progress } from 'antd';
import ResistanceChart from './ResistanceChart';
import { timeToPercent } from '../helpers/Item';


export default function GraphInfoView(props) {
    const creature = props.creatures["creature" + props.creatureChartNumber];
    const cPercent = timeToPercent(creature.lifeTime);
    return (
        <Card className={props.className}>
            <Card.Header>
                <span className="d-flex m-0 p-0 w-100">
                    <div className="m-auto p-0 w-100 d-flex justify-content-start">
                        <Badge className="bg-orange-outline" bg="warning" text="dark">
                            <strong>DPS: {props.graphValues.yValues[0].toFixed(1)}</strong>
                        </Badge>
                    </div>
                    <div className="m-0 p-0 w-100">
                        <Progress
                            type="dashboard"
                            steps={50}
                            percent={cPercent}
                            format={(percent) => percent}
                            size={28}
                            strokeColor={props.colors}
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20} />
                    </div>
                    <div className="m-auto p-0 w-100 d-flex justify-content-end">
                        <Badge bg="warning" className="bg-orange-outline" text="dark">
                            <strong>DPS: {props.graphValues.yValues[props.graphValues.yValues.length - 1].toFixed(1)}</strong>
                        </Badge>
                    </div>
                </span>
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-center p-1 pt-0">
                <ResistanceChart graphValues={props.graphValues} chartId={"mainResChart"} creatures={props.creatures} creatureNumber={props.creatureChartNumber} setCreatureNumber={props.setCreatureChartNumber} />
            </Card.Body>
        </Card>
    );
}