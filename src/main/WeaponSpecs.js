import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import DamageTable from "../damage/DamageTable";
import Button from 'react-bootstrap/Button';
import { memo } from 'react';


const WeaponSpecs = memo(function WeaponSpecs({wSpec, setWSpec, showStatRef, setShowStat, health}) {
    console.log("WeaponSpecs");
    const openStat = (e) => {
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">Weapon Specs</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="p-2">
                    <DamageTable setWSpec={setWSpec} wSpec={wSpec} health={health}></DamageTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default WeaponSpecs;
