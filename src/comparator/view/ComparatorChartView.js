import { useEffect } from 'react';
const { Chart } = await import('chart.js/auto');


function getData(values, label, color) {
    return {
        labels: values.xValues,
        datasets: [
            {
                type: 'line',
                label: label,
                data: values.yValuesRed,
                borderColor: "#db0076",
                pointRadius: 1,
                borderWidth: 1,
                fill: false,
            },
            {
                type: 'line',
                label: label,
                data: values.yValuesBlue,
                borderColor: "#0072db",
                pointRadius: 1,
                borderWidth: 1,
                fill: false,
            },
            {
                type: 'scatter',
                label: values.resPoints.b.label,
                data: values.resPoints.b.values,
                borderColor: values.resPoints.b.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
            {
                type: 'scatter',
                label: values.resPoints.e.label,
                data: values.resPoints.e.values,
                borderColor: values.resPoints.e.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
            {
                type: 'scatter',
                label: values.resPoints.f.label,
                data: values.resPoints.f.values,
                borderColor: values.resPoints.f.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
            {
                type: 'scatter',
                label: values.resPoints.c.label,
                data: values.resPoints.c.values,
                borderColor: values.resPoints.c.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
            {
                type: 'scatter',
                label: values.resPoints.p.label,
                data: values.resPoints.p.values,
                borderColor: values.resPoints.p.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
            {
                type: 'scatter',
                label: values.resPoints.r.label,
                data: values.resPoints.r.values,
                borderColor: values.resPoints.r.color,
                pointRadius: 2,
                borderWidth: 3,
                fill: true,
            },
        ],
    };
}

function getConfig(data) {
    return {
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
                        text: 'Resistance',
                        color: 'black', // Customize title color
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'DPS',
                        color: 'black', // Customize title color
                    },
                }
            },
            animation: false,
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
    return (
        <div className="d-flex justify-content-center">
            <canvas className="p-0 pe-2" style={{maxWidth: '60rem', maxHeight: '30rem'}} id={id}></canvas>
        </div>
    );
}

export default function ComparatorChartView(props) {
    let values = props.values;
    if (!values) {
        values = {xValues: [], yValuesRed: [], yValuesBlue: [], resPoints: []};
    }
    const config = getConfig(getData(values, "", props.color));
    useEffect(() => {
        drawChart(config, props.chartId);
    });
    return getCanvas(props.chartId);
}