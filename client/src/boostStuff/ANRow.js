import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import Badge from 'react-bootstrap/Badge';
import { Checkbox } from 'antd';
import Card from 'react-bootstrap/Card';


function ANRow({player, setPlayer}) {
    function changeTeam(e) {
        player.team = !player.team;
        setPlayer({...player});
    }
    return (
        <div>
            <Row>
                <Card className="mb-2 pt-2 pb-2 ps-3 pe-3">
                <Col>
                    <InputGroup className="ms-0 mt-1 mb-1" >
                        <InputGroup.Text>
                            <Checkbox onChange={changeTeam} checked={player.team}></Checkbox>
                        </InputGroup.Text>
                        <InputGroup.Text style={{width: '4.5rem'}} >
                            <Badge bg="warning" text='dark'>Team</Badge>
                        </InputGroup.Text>
                    </InputGroup>
                </Col>
                </Card>
            </Row>

        </div>
    );
}

export default ANRow;