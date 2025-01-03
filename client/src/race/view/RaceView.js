import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import ResistanceView from './ResistanceView';
import RaceTagView from './RaceTagView';
import { memo, useState } from 'react';
import raceItems from '../../resources/race.json';
import RaceDropdown from './RaceDropdown';
import GeneralRaceView from './GeneralRaceView';
import Container from 'react-bootstrap/Container';


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

const RaceView = memo(function RaceView() {
    const [raceName, setRaceName] = useState(null);
    let race = null;
    if (raceName) {
        race = raceMap.get(raceName);
    }
    return (
        <div className="ps-1 pe-1 pb-2">
            <Accordion.Item eventKey="5">
                <Accordion.Header>
                    <InputGroup>
                        <InputGroup.Text style={{width: '14rem'}}>
                            <span className="ac-text">Races</span>
                        </InputGroup.Text>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <Container>
                        <RaceDropdown pairs={racePairs} raceName={raceName} setRaceName={setRaceName} />
                        <GeneralRaceView race={race} />
                        {getRaceTagView(race)}
                        <ResistanceView race={race} />
                    </Container>
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default RaceView;