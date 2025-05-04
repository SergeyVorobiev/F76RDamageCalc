import { useEffect } from 'react';
import BaseDropdown from '../viewComponents/dropdown/BaseDropdown';
import Badge from 'react-bootstrap/Badge';
const { Chart } = await import('chart.js/auto');
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';


function getConfig(graphValues, xTitle="Resistance") {
    return {
        data: {
            labels: graphValues.xValues,
            datasets: [
                {
                    type: "line",
                    data: graphValues.yValues,
                    borderColor: "red",
                    borderWidth: "2",
                    pointRadius: "1",
                    fill: true
                },
                //{
                //    type: 'scatter',
                //    label: 'test',
                //    data: [{x: 15, y: 10}],
                //    borderColor: '#ff0000',
                //    pointRadius: 2,
                //    borderWidth: 3,
                //    fill: true,
                //},
            ]
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
                        text: xTitle,
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

function drawChart(graphValues, chartId, xTitle) {
    const curChart = Chart.getChart(chartId);
    if (curChart) {
        curChart.destroy();
    }
    if (!xTitle) {
        xTitle = "Resistance";
    }
    new Chart(document.getElementById(chartId), getConfig(graphValues, xTitle));
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

function getPrevNextButton(onClick, isPrev) {
    const symbol = (isPrev) ? "<<" : ">>";
    return (<Button size="sm" variant="blue-white-border" onClick={onClick}>{symbol}</Button>);
}

export default function ResistanceChart(props) {
    useEffect(() => {
        drawChart(props.graphValues, props.chartId, props.xTitle);
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
            <Row className="pt-2 pb-0">
                <div className="col d-flex justify-content-start ms-2">
                    {getPrevNextButton(props.graphTypeOnClickRef.current, true)}
                </div>
                <div className="col d-flex justify-content-center m-0" style={{width: '60%'}}>
                    <BaseDropdown variant='blue-label' size='sm' setValue={props.setCreatureNumber} dict={dict} title={<strong>{creature.capName}</strong>} />
                </div>
                <div className="col d-flex justify-content-end me-2">
                    {getPrevNextButton(props.graphTypeOnClickRef.current, false)}
                </div>
            </Row>
            {getDPS(props.dps, props.graphValues.yValues)}


            <div className="ps-1 pe-1">
                <canvas id={props.chartId}></canvas>
            </div>
        </>
    );
}