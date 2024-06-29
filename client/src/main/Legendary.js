import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import LegendaryTable from "../legendary/LegendaryTable";
import { Button } from 'react-bootstrap';
import { memo } from 'react';


const Legendary = memo(function Legendary({legendary, setLegendary, showStat, setShowStat}) {
    console.log("Legendary");
    const openStat = (e) => {
        setShowStat(!showStat);
        e.stopPropagation();
    }
    return (
        <div class="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="2">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '10rem'}}>
                            Legendary
                        </InputGroup.Text>
                        <Button style={{width: '4rem'}} onClick={openStat}>Stats</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <LegendaryTable setLegendary={setLegendary} legendary={legendary}></LegendaryTable>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default Legendary;
