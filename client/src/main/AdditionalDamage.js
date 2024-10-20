import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import AdditionalTable from "../additional/AdditionalTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const AdditionalDamage = memo(function AdditionalDamage({additionalDamages, setAdditionalDamages, showStat, setShowStat}) {
    console.log("AdditionalDamage");
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="3">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            Additional Damage
                        </InputGroup.Text>
                        <Button style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <AdditionalTable additionalDamages={additionalDamages} setAdditionalDamages={setAdditionalDamages}></AdditionalTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default AdditionalDamage;
