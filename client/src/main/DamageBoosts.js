import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import BoostTable from "../boost/BoostTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const DamageBoosts = memo(function DamageBoosts({player, setPlayer, boostDamage, setBoostDamage, showStat, setShowStat}) {
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    return (
        <div class="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            Cards
                        </InputGroup.Text>
                        <Button style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <BoostTable player={player} setPlayer={setPlayer} setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BoostTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default DamageBoosts;
