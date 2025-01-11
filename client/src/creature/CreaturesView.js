import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import CreaturesStats from "./CreaturesStats";
import CreatureDataView from "./CreatureDataView";
import { memo, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { defaultCreatures, defaultCreaturesAlt } from '../entities/ECreatures';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';


const CreaturesView = memo(function CreaturesView({creatureNamesRef, creatures, setCreatures, resultDamageRef}) {
    console.log("CreaturesView")
    const [alt, setAlt] = useState(false);
    function resetCreatures(e) {
        if (alt) {
            setCreatures(defaultCreaturesAlt());
        } else {
            setCreatures(defaultCreatures());
        }
    }
    function checkAlt(e) {
        setAlt(!alt);
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '14rem'}}>
                            <span className="ac-text">Creatures</span>
                        </InputGroup.Text>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <div >
                        <InputGroup className="d-flex justify-content-center mt-0 mb-2">
                            <InputGroup.Text>
                                <UCheckbox onChange={checkAlt} checked={alt}><small><b className="ps-1">Alt</b></small></UCheckbox>
                            </InputGroup.Text>
                            <Button size="sm" variant="warning" onClick={resetCreatures}><b>Reset to Bosses</b></Button>
                        </InputGroup>
                    </div>
                    <CreaturesStats creatureNamesRef={creatureNamesRef} creatures={creatures} setCreatures={setCreatures} resultDamage={resultDamageRef.current} />
                    <CreatureDataView />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default CreaturesView;