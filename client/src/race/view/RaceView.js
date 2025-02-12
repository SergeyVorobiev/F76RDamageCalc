import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import ResistanceView from './ResistanceView';
import RaceTagView from './RaceTagView';
import RaceBodyView from './RaceBodyView';
import { memo, useState } from 'react';
import raceItems from '../../resources/race.json';
import RaceDropdown from './RaceDropdown';
import GeneralRaceView from './GeneralRaceView';
import Container from 'react-bootstrap/Container';
import StaticPopoverRenderer from '../../viewComponents/popover/StaticPopoverRenderer';
import Global from '../../helpers/Global';
import Button from 'react-bootstrap/Button';


const questionPopoverHeader = (<b>Races</b>);

const questionPopoverBody = (
    <>
        <div className="mb-2"><b>Parsed from:</b></div>
        <div><i>{Global.raceParseVersion}</i></div>
        <div><i>{Global.raceParseVersionName}</i></div>
    </>
);

const questionPopover = new StaticPopoverRenderer(questionPopoverHeader, questionPopoverBody, 'RaceViewQuestionPopoverPlace');

const raceMap = new Map();
const racePairs = [];

function raceComparator(race1, race2) {
    const name1 = race1.key;
    const name2 = race2.key;
    return name1.localeCompare(name2)
}

for (let i = 0; i < raceItems.length; i++) {
        const item = raceItems[i];
        const it = raceMap.get(item.full);
        if (it) {
            console.log("Same name: " + it.id + " " + item.id);
        }
        raceMap.set(item.full, item);
        racePairs.push({key: item.full, value: item.full});
}

racePairs.sort(raceComparator);

function getRaceTagView(race) {
    if (!race) {
        return (<></>);
    }
    return (
        <RaceTagView tags={race.tags} />
    );
}

function getRaceBodyView(race) {
    if (!race) {
        return (<></>);
    }
    return (
        <RaceBodyView bodyData={race.bodyData} />
    );
}

const RaceView = memo(function RaceView() {
    console.log("RaceView");
    const [raceName, setRaceName] = useState(null);
    let race = null;
    if (raceName) {
        race = raceMap.get(raceName);
    }
    function onQClick(e) {
        questionPopover.renderToggle(e.target);
        e.stopPropagation();
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="5">
                <Accordion.Header>
                    <div id="RaceViewQuestionPopoverPlace"></div>
                    <InputGroup>
                        <InputGroup.Text style={{width: '12rem'}}>
                            <span className="ac-text">Races</span>
                        </InputGroup.Text>
                        <Button className="stats-text" style={{width: '2rem'}} onClick={onQClick}>?</Button>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <Container>
                        <RaceDropdown pairs={racePairs} raceName={raceName} setRaceName={setRaceName} />
                        <GeneralRaceView race={race} />
                        {getRaceTagView(race)}
                        {getRaceBodyView(race)}
                        <ResistanceView race={race} />
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default RaceView;