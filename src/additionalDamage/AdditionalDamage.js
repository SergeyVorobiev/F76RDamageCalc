import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import AdditionalTable from "./AdditionalTable";
import Button from 'react-bootstrap/Button';
import { memo } from 'react';


const AdditionalDamage = memo(function AdditionalDamage({additionalDamages, setAdditionalDamages, showStatRef, setShowStat}) {
    console.log("AdditionalDamage");
    const openStat = (e) => {
        setShowStat(!showStatRef.current);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            <span className="ac-text">Bonus Damage</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="p-auto">
                    <AdditionalTable additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages}></AdditionalTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default AdditionalDamage;
