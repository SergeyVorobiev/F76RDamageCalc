import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Slider } from 'antd';
import Card from 'react-bootstrap/Card';
import { checkLegendaryAppropriate } from '../helpers/LegendaryProvider';


const allMarks = {

    marks3: {
        0: '0',
        1: '1',
        2: '2',
        3: '3',
    },

    marks25: {
        0: '0%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%',
        25: '25%',
    },

    marks40: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
    },

    marks50: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%',
    },

    marks95: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        95: '95%',
    },

    marks100: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        100: '100%',
    },

    marks20: {
        0: '0%',
        5: '5%',
        10: '10%',
        15: '15%',
        20: '20%',
    },

    marks24: {
        0: '0%',
        6: '6%',
        12: '12%',
        18: '18%',
        24: '24%',
    },

    marks300: {
        0: '0%',
        50: '50%',
        100: '100%',
        150: '150%',
        200: '200%',
        250: '250%',
        300: '300%',
    },

    marks60: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%',
        60: '60%',
    },

    marks12H: {
        0: '0%',
        12.5: '12.5%',
        25: '25%',
        37.5: '37.5%',
        50: '50%',
    },

    marks15: {
        0: '0%',
        3: '3%',
        6: '6%',
        9: '9%',
        12: '12%',
        15: '15%',
    },
};

function LegSlider({legendaryInfo, marksName, wSpec, setWSpec, disabled=false}) {
    const marks = allMarks[marksName];
    const wSpecLeg = wSpec.legendary[legendaryInfo.star - 1];
    const [redraw, setRedraw] = useState(false);

    let value = legendaryInfo.value;

    // Use adjustable value instead of default max
    if (wSpecLeg[1] !== null) {
        value = wSpecLeg[1];
    }

    function slideChanged(e) {
        wSpecLeg[1] = e;
        setRedraw(!redraw);
    }

    function slideFinished(e) {
        setWSpec({...wSpec});
    }
    let disableSlider = !legendaryInfo.adjustable;
    if (!disableSlider) {
        disableSlider = !checkLegendaryAppropriate(legendaryInfo.id, wSpec.weaponId, wSpec.type);
    }
    return (
        <Row>
            <Card className="mt-3 mb-2 pt-2 pb-2 ps-3 pe-3">
            <Col className="pt-2">
                <Slider disabled={disableSlider} open={true} onChangeComplete={slideFinished} onChange={slideChanged} marks={marks} min={legendaryInfo.min} max={legendaryInfo.max} step={legendaryInfo.step} value={value} />
            </Col>
            </Card>
        </Row>
    );
}

export default LegSlider;