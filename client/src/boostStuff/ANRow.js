import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import { Checkbox } from 'antd';
import Card from 'react-bootstrap/Card';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';


function buildPopover() {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>Team</strong></Popover.Header>
            <Popover.Body>
                <p>When 'Strange in numbers' is activated the calculator considers that your teammates have mutations you have.</p>

                <p>Mutation bonuses are increased on hardcoded inside of perks / spells values, which can be seen in data sheet.</p>

                <p>Not all effects are presented in consumables, usually only those whose values are important for damage.</p>
            </Popover.Body>
        </Popover>
    );
}

function qa() {
    return (
        <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={buildPopover()}>
            <Button variant="danger">?</Button>
        </OverlayTrigger>
    );
}

function ANRow({player, setPlayer, boostDamage}) {
    function changeTeam(e) {
        player.team = !player.team;
        setPlayer({...player});
    }
    const value = (player.team && boostDamage.strange_in_numbers.is_used) ? 25.0: 0;
    return (
        <div>
            <Row>
                <Card className="mb-2 pt-2 pb-2 ps-3 pe-3">
                <Col>

                    <InputGroup className="mb-1">
                        <InputGroup.Text style={{ width: '2.5rem' }} >
                            <Checkbox onChange={changeTeam} checked={player.team}></Checkbox>
                        </InputGroup.Text>
                        <InputGroup.Text style={{ width: '6.9rem' }}>
                            <strong>👨‍👩‍👧‍👦 Team</strong>
                        </InputGroup.Text>
                        {qa()}
                        <InputGroup.Text style={{width: '4.6rem'}}>
                            <div class="badge bg-info" style={{width: '3rem'}}>{value}</div>
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                </Card>
            </Row>

        </div>
    );
}

export default ANRow;