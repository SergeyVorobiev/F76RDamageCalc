import { useEffect } from 'react';
import BaseDropdown from '../viewComponents/dropdown/BaseDropdown';
import Badge from 'react-bootstrap/Badge';
const { Chart } = await import('chart.js/auto');


function getConfig(graphValues) {
    return {
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
                },
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Resistance',
                        color: 'black', // Customize title color
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Damage / sec',
                        color: 'black', // Customize title color
                    },
                }
            },
            animation: false,
        }
    };
}

function drawChart(graphValues, chartId) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    new Chart(document.getElementById(chartId), getConfig(graphValues));
}

function getDPS(need, yValues) {
    if (need) {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <div className="m-auto p-0 ps-2 pt-2 w-100 d-flex justify-content-start">
                    <Badge className="bg-orange-outline" bg="warning" text="dark">
                        <strong>DPS: {yValues[0].toFixed(1)}</strong>
                    </Badge>
                </div>
                <div className="m-auto p-0 pt-2 pe-2 w-100 d-flex justify-content-end">
                    <Badge bg="warning" className="bg-orange-outline" text="dark">
                        <strong>DPS: {yValues[yValues.length - 1].toFixed(1)}</strong>
                    </Badge>
                </div>
            </div>
        );
    }
    return (<></>);
}
export default function ResistanceChart(props) {
    useEffect(() => {
        drawChart(props.graphValues, props.chartId);
    });
    const dict = {};
    let number = 1;
    for (const creatureField in props.creatures) {
        const creature = props.creatures[creatureField];
        dict[number++] = creature.capName;
    }
    const creature = props.creatures["creature" + props.creatureNumber];
    return (
        <>
            {getDPS(props.dps, props.graphValues.yValues)}
            <div className="d-flex justify-content-center p-0 pt-2">
                <BaseDropdown variant='blue-label' size='sm' setValue={props.setCreatureNumber} dict={dict} title={<strong>{creature.capName}</strong>} />
            </div>
            <div className="ps-1 pe-1">
                <canvas id={props.chartId}></canvas>
            </div>
        </>
    );
}