import { useEffect, useRef } from 'react';
import Card from 'react-bootstrap/Card';
const { Chart } = await import('chart.js/auto');


function getData(values, label, color) {
    return {
        datasets: [{
            label: label,
            data: values,
            borderColor: color,
            borderWidth: 2,
            fill: false,
        }],
    };
}

function getConfig(data) {
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
                        text: 'Resistance',
                        color: 'black', // Customize title color
                    },
                }
            },
        },
    };
}

function drawChart(chartRef, config, chartId) {
    if (chartRef.current) {
        // chartRef.current.update();
        chartRef.current.destroy();
    }
    chartRef.current = new Chart(document.getElementById(chartId), config);
}

export default function ChartView(props) {
    const chartRef = useRef(null);
    const config = getConfig(getData(props.values, "Energy Resistance", props.color));
    useEffect(() => {
        drawChart(chartRef, config, props.chartId);
    });
    return (
        <Card className={props.className} style={{minWidth: '18rem'}}>
            <Card.Header className={props.headerClassName}>
                {props.title}
            </Card.Header>
            <Card.Body className="d-flex justify-content-center p-0">
                <canvas id={props.chartId}></canvas>
            </Card.Body>
        </Card>
    );
}