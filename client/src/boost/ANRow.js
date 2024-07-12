import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import Badge from 'react-bootstrap/Badge';
import { Slider } from 'antd';
import { Checkbox } from 'antd';
import { useEffect } from 'react';


const marks: SliderSingleProps['marks'] = {
    5: '5%',
    20: {
    style: {
      color: '#f50',
    },
    label: <strong>20%</strong>,
    },
    40: '40%',
    60: '60%',
    80: '80%',
    100: '100%',
};

function adrenal(e, team) {
    let ar = 0.0;
    if (e <= 20) {
        ar = (team) ? 63.0 : 50.0;
    } else if (e <= 30) {
        ar = (team) ? 55.0 : 44.0;
    } else if (e <= 40) {
        ar = (team) ? 48.0 : 38.0;
    } else if (e <= 50) {
        ar = (team) ? 39.0 : 31.0;
    } else if (e <= 60) {
        ar = (team) ? 31.0 : 25.0;
    } else if (e <= 70) {
        ar = (team) ? 24.0 : 19.0;
    } else if (e <= 80) {
        ar = (team) ? 16.0 : 13.0;
    } else if (e <= 90) {
        ar = (team) ? 8.0 : 6.0;
    }
    return ar;
}

// Adrenal + Nerd rage
function ANRow({setBoostDamage, boostDamage, setLegendary, legendary}) {
    useEffect(() => {
        legendary.bloodied.value = 100 - boostDamage["health"];
        setLegendary({
            ...legendary,
        });
    }, []);

    function slideFinished(e) {
        const team = boostDamage["team"];
        boostDamage["adrenalreaction"] = adrenal(e, team);
        boostDamage["adrenalreactionr"] = (boostDamage["adrenalreactionn"]) ? boostDamage["adrenalreaction"] : 0.0;
        boostDamage["rage"] = (e <= 20) ? 20.0 : 0.0;
        boostDamage["rager"] = (boostDamage["ragen"]) ? boostDamage["rage"] : 0.0;
        boostDamage["health"] = e;
        legendary.bloodied.value = 100 - e;
        setBoostDamage({
            ...boostDamage,
        });
        setLegendary({
            ...legendary,
        });
    }

    function changeTeam(e) {
        boostDamage["team"] = e.target.checked;
        const health = boostDamage["health"];
        boostDamage["adrenalreaction"] = adrenal(health, e.target.checked);
        boostDamage["adrenalreactionr"] = (boostDamage["adrenalreactionn"]) ? boostDamage["adrenalreaction"] : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    function changeAdrenaline(e) {
        boostDamage["adrenalreactionn"] = e.target.checked;
        boostDamage["adrenalreactionr"] = (e.target.checked) ? boostDamage["adrenalreaction"] : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    function changeNerd(e) {
        boostDamage["ragen"] = e.target.checked;
        boostDamage["rager"] = (e.target.checked) ? boostDamage["rage"] : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    return (
        <div>
        <Row>
            <Col>
                <InputGroup className="mb-2" >
                    <InputGroup.Text>
                        <Checkbox onChange={changeTeam} checked={boostDamage.team}></Checkbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{width: '5.5rem'}} >
                        <Badge bg="warning" text='dark'>Team</Badge>
                    </InputGroup.Text>
                    <InputGroup.Text>
                        <Checkbox onChange={changeAdrenaline} checked={boostDamage.adrenalreactionn}></Checkbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{width: '8rem'}}>
                        <Badge bg="secondary">Adrenaline: {boostDamage.adrenalreactionr}%</Badge>
                    </InputGroup.Text>
                </InputGroup>
            </Col>
        </Row>
        <Row>
            <Col>
                <InputGroup className="mb-1">
                    <InputGroup.Text>
                        <Checkbox onChange={changeNerd} checked={boostDamage.ragen}></Checkbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{width: '8rem'}} >
                        <Badge bg="secondary">Nerd Rage: {boostDamage.rager}%</Badge>
                    </InputGroup.Text>
                    <InputGroup.Text style={{width: '8rem'}} >
                        <Badge bg="info">Health: {boostDamage.health}%</Badge>
                    </InputGroup.Text>
                </InputGroup>
                 <Slider onChange={slideFinished} open={true} marks={marks} min={5} max={100} step={1} value={boostDamage.health} />
            </Col>
        </Row>
        </div>
    );
}

export default ANRow;