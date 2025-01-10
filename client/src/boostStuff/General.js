import Accordion from 'react-bootstrap/Accordion';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ANRow from "./ANRow";
import ADRow from "../additional/ADRow";

/*
const marks100 = {
    marks: {
        5: '5',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100'
    },
    min: 5,
    max: 100,
    step: 0.25,
    defaultValue: 5,
};
*/

const marks50 = {
    marks: {
        5: '5',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
    },
    min: 5,
    max: 50,
    step: 0.25,
    defaultValue: 5,
};

const marksH = {
    marks: {
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
        100: '100%'
    },
    min: 5,
    max: 100,
    step: 1,
    defaultValue: 100,
};

const General = function General({eventKey, categoryName, showStat, setShowStat, player, setPlayer, boostDamage, setBoostDamage, playerStats, setPlayerStats}) {
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    function updateAdditionalDamages() {
        setPlayerStats({
            ...playerStats,
        });
    };

    function changeHealth() {
        boostDamage.nerd_rage.displayed_value = (boostDamage.nerd_rage.is_used && player.health.value <= 20.0) ? boostDamage.nerd_rage.value : 0.0;
        setPlayer({...player});
        setBoostDamage({...boostDamage});
    };

    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey={eventKey}>
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">{categoryName}</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1 pb-1">
                    <Container fluid className="ps-0 pe-0">
                        <Card className="text-center mb-2">
                            <Card.Body className="pb-2">
                                <ANRow player={player} setPlayer={setPlayer} boostDamage={boostDamage}></ANRow>
                                <ADRow additionalDamage={player.health} updateAdditionalDamages={changeHealth} marks={marksH}></ADRow>
                                <ADRow additionalDamage={playerStats.strength} updateAdditionalDamages={updateAdditionalDamages} marks={marks50}></ADRow>
                            </Card.Body>
                        </Card>
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
}

export default General;