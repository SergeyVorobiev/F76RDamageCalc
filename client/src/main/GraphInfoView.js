import { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Progress } from 'antd';
const { Chart } = await import('chart.js/auto');


function drawChart(chartRef, graphValues) {

    // This branch is not used so as chart updating seems not to work no matter what, or to work occasionally.
    if (chartRef.current && 0) {
        // this.chart.data.labels.pop();
        // this.chart.data.labels.push(this.xValues);
        chartRef.current.data.datasets.forEach((dataset) => {
            dataset.data.push(graphValues.yValues);
        });
        chartRef.current.update();
    } else {
        if (chartRef.current) {chartRef.current.destroy();}
        chartRef.current = new Chart(document.getElementById('myChart'), {
            type: "line",
            data: {
            labels: graphValues.xValues,
            datasets: [{
                    data: graphValues.yValues,
                    borderColor: "red",
                    borderWidth: "2",
                    pointRadius: "1",
                    fill: true
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                },
                animation: false,
            }
        });
    }
}

export default function GraphInfoView(props) {
    const chartRef = useRef(null);
    useEffect(() => {
        drawChart(chartRef, props.graphValues);
    });
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
                            percent={props.percent}
                            format={(percent) => percent}
                            size={28}
                            strokeColor={props.colors}
                            trailColor="rgba(0, 0, 0, 0.06)"
                            strokeWidth={20} />
                    </div>
                    <div className="m-auto p-0 w-100 d-flex justify-content-end">
                        <Badge bg="warning" className="bg-orange-outline" text="dark"><strong>DPS / Res</strong></Badge>
                    </div>
                </span>
            </Card.Header>
            <Card.Body>
                <canvas id="myChart"></canvas>
            </Card.Body>
        </Card>
    );
}