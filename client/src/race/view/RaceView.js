import InputGroup from 'react-bootstrap/InputGroup';
import Accordion from 'react-bootstrap/Accordion';
import ResistanceView from './ResistanceView';
import RaceTagView from './RaceTagView';
import { memo, useState } from 'react';
import raceItems from '../../resources/race.json';
import RaceDropdown from './RaceDropdown';
import GeneralRaceView from './GeneralRaceView';


const raceMap = new Map();
const racePairs = [];

for (let i = 0; i < raceItems.length; i++) {
        const item = raceItems[i];
        raceMap.set(item.name, item);
        racePairs.push({key: item.name, value: item.name});
}

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
                            Race
                        </InputGroup.Text>
                    </InputGroup>
                </Accordion.Header>
                <Accordion.Body className="ps-1 pe-1">
                    <RaceDropdown pairs={racePairs} raceName={raceName} setRaceName={setRaceName} />
                    <GeneralRaceView race={race} />
                    {getRaceTagView(race)}
                    <ResistanceView race={race} />
                </Accordion.Body>
            </Accordion.Item>
        </div>
    );
});

export default RaceView;