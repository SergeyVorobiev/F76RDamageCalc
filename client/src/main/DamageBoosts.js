import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import BoostTable from "../boost/BoostTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const DamageBoosts = memo(function DamageBoosts({boostDamage, setBoostDamage, legendary, setLegendary, showStat, setShowStat}) {
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
                            Damage Boosts
                        </InputGroup.Text>
                        <Button style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <BoostTable setBoostDamage={setBoostDamage} boostDamage={boostDamage} setLegendary={setLegendary} legendary={legendary}></BoostTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default DamageBoosts;
