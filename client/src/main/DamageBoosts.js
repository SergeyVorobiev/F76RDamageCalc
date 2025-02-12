import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import BoostTable from "../perkCardBoosts/BoostTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const DamageBoosts = memo(function DamageBoosts({player, setPlayer, boostDamage, extraDamage, setBoostDamage, showStatRef, setShowStat}) {
    console.log("DamageBoosts")
    const openStat = (e) => {
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="1">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">Card Boosts</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <BoostTable player={player} setPlayer={setPlayer} extraDamage={extraDamage} setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BoostTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default DamageBoosts;
