import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
const { Chart } = await import('chart.js/auto');


function getData(values, label, color) {
    return {
        datasets: [{
            label: label,
            data: values,
            borderColor: color,
            pointRadius: 1.5,
            borderWidth: 2,
            fill: false,
        }],
    };
}

function getConfig(data, titleText) {
    return {
        type: 'line',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: false,
                },
            },
            elements: {
                line: {
                    tension: 0,
                },
            },
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    title: {
                        display: true,
                        text: 'Level',
                        color: 'black', // Customize title color
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: titleText,
                        color: 'black', // Customize title color
                    },
                }
            },
        },
    };
}

function drawChart(config, chartId) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    new Chart(document.getElementById(chartId), config);
}

function getCanvas(id) {
    if (!id) {
        return (<></>);
    }
    return (<canvas id={id}></canvas>);
}

export default function CreatureChartView(props) {
    const titleText = (props.title === "❤️ Health") ? "Health" : "Resistance";
    const config = getConfig(getData(props.values, props.title, props.color), titleText);
    useEffect(() => {
        drawChart(config, props.chartId);
    });
    return (
        <Card className={props.className} style={{minWidth: '18rem'}}>
            <Card.Header className={props.headerClassName}>
                {props.title}
            </Card.Header>
            <Card.Body className="d-flex justify-content-center p-0">
                {getCanvas(props.chartId)}
            </Card.Body>
        </Card>
    );
}