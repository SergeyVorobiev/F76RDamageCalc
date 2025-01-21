import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import CreaturesStats from "./CreaturesStats";
import CreatureDataView from "./CreatureDataView";
import { memo, useState } from 'react';
import { defaultCreatures, defaultCreaturesAlt } from '../entities/ECreatures';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import StaticPopoverRenderer from '../viewComponents/popover/StaticPopoverRenderer';
import Global from '../helpers/Global';
import Button from 'react-bootstrap/Button';
import { buildExtraDamageView, buildExtraDamageButtons } from '../main/SummaryView';
import { Divider } from 'antd';


const questionPopoverHeader = (<b>Creatures</b>);

const questionPopoverBody = (
    <>
        <div className="mb-2"><b>Parsed from:</b></div>
        <div><i>{Global.creatureParseVersion}</i></div>
        <div><i>{Global.creatureParseVersionName}</i></div>
    </>
);

const questionPopover = new StaticPopoverRenderer(questionPopoverHeader, questionPopoverBody, 'CreatureViewQuestionPopoverPlace');

const CreaturesView = memo(function CreaturesView({creatureNamesRef, creatures, setCreatures, resultDamage, extraDamage, setExtraDamage}) {
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
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="4">
                <Accordion.Header>
                    <div id="CreatureViewQuestionPopoverPlace"></div>
                    <InputGroup>
                        <InputGroup.Text style={{width: '12rem'}}>
                            <span className="ac-text">Creatures</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '2rem'}} onClick={onQClick}>?</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <div >
                        <InputGroup className="d-flex justify-content-center mt-1 mb-1">
                            <InputGroup.Text>
                                <UCheckbox onChange={checkAlt} checked={alt}><small><b className="ps-1">Alt</b></small></UCheckbox>
                            </InputGroup.Text>
                            <Button size="sm" variant="warning" onClick={resetCreatures}><b>Reset to Bosses</b></Button>
                        </InputGroup>
                    </div>
                    <Divider className="mb-2">Extra Damage</Divider>
                    {buildExtraDamageView(extraDamage, setExtraDamage, false)}
                    <div className="m-2" />
                    {buildExtraDamageButtons(extraDamage, setExtraDamage)}
                    <Divider className="mt-3 mb-3"></Divider>
                    <CreaturesStats creatureNamesRef={creatureNamesRef} creatures={creatures} setCreatures={setCreatures} resultDamage={resultDamage} />
                    <CreatureDataView />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default CreaturesView;