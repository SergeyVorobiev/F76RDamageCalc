import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import DamageTable from "../damage/DamageTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const WeaponSpecs = memo(function WeaponSpecs({damage, setDamage, wSpec, setWSpec, showStat, setShowStat, health}) {
    console.log("WeaponSpecs");
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    return (
        <div class="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            Weapon Specs
                        </InputGroup.Text>
                        <Button style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="p-2">
                    <DamageTable setDamage={setDamage} damage={damage} setWSpec={setWSpec} wSpec={wSpec} health={health}></DamageTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default WeaponSpecs;
