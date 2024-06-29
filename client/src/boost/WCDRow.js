import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import { Slider } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';


const marks: SliderSingleProps['marks'] = {
    10: '10%',
    20: '20%',
    30: '30%',
    40: '40%',
    50: '50%',
    60: {
    style: {
      color: '#f50',
    },
    label: <strong>60%</strong>,
  },

};

const popover = (
    <Popover style={{ width: '18rem' }} id="popover-basic">
        <Popover.Header as="h3">Weapon Damage</Popover.Header>
        <Popover.Body>
            The damage you get from cards of your weapon
            (ex: 3 Heavy Gunner + 3 Expert Heavy Gunner + 3 Master Heavy Gunner = 60%)
        </Popover.Body>
    </Popover>
);

// Weapon card damage
function WCDRow({setBoostDamage, boostDamage}) {
    function slideChanged(e) {
        boostDamage["wcdamage"] = e;
        boostDamage["wcdamager"] = (boostDamage["wcdamagen"]) ? e : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    function activateDamage(e) {
        boostDamage["wcdamagen"] = e;
        boostDamage["wcdamager"] = (boostDamage["wcdamagen"]) ? boostDamage["wcdamage"] : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    return (
        <Row className='mb-4'>
            <Col>
                <InputGroup className="d-flex justify-content-end mb-1 pe-0 me-0" >
                    <InputGroup.Text>
                        <Switch size="small"
                            checkedChildren={<CheckOutlined />}
                            unCheckedChildren={<CloseOutlined />}
                            value={boostDamage.wcdamagen}
                            onChange={activateDamage} />
                    </InputGroup.Text>
                    <InputGroup.Text style={{width: '15rem'}} className='pe-0 me-0'>
                        <Badge bg="secondary">Weapon Cards Damage: {boostDamage.wcdamager}%</Badge>
                        <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={popover}>
                            <Badge className='ms-4 me-2' bg="danger" pill>?</Badge>
                        </OverlayTrigger>
                    </InputGroup.Text>
                </InputGroup>
                <Slider onChange={slideChanged} marks={marks} min={10} max={60} step={5} keyboard={false} value={boostDamage.wcdamage} />
            </Col>
        </Row>
    );
}

export default WCDRow;