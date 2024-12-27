import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { checkLength } from '../helpers/Input';
import BSRadio from '../helpers/views/BSRadio';
import { leftRight } from '../helpers/RowBuilder';
import CreatureDataProvider from './CreatureDataProvider';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import { useState } from 'react';


function col(name, creatures, setCreatures, creature, res_field, color, canDisable, enabled, setEnabled, min=0, max=9999) {
    function onChange(e) {
        checkLength(e);
        if (e.target.value < min) {
            e.target.value = min;
        }
        creature[res_field] = parseFloat(e.target.value);
        setCreatures({
            ...creatures,
        });
    }
    function getCheckbox(canDisable) {
        const chColor = (res_field === "p") ? "#237504" : "#a4aa04";
        function onChange(e) {
            const result = !enabled
            setEnabled(result);
            if (res_field === "p") {
                creature.immuneToPoison = !result;
            } else {
                creature.immuneToRadiation = !result;
            }
            setCreatures({
                ...creatures,
            });
        }
        if (canDisable) {
            return (
                <InputGroup.Text style={{width: '2.6rem'}}>
                    <UCheckbox checked={enabled} checkBorderColor={chColor} checkBgColor={chColor} onChange={onChange}></UCheckbox>
                </InputGroup.Text>
            );
        }
        return <></>;
    }
    const width = (canDisable) ? '7.4rem' : '10rem';
    const value = (enabled) ? creature[res_field] : "Inf";
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                {getCheckbox(canDisable)}
                <InputGroup.Text className={color} style={{ width: width }}>{name}</InputGroup.Text>
                <Form.Control className='w-auto' disabled={!enabled} type="number" min={min} value={value} max={max} maxLength="7" onChange={onChange} />
            </InputGroup>
        </Col>);
}

const energy = <>&#9889; Energy</>;
const ballistic = <>&#128165; Physical</>;
const fire = <>&#128293; Fire</>;
const poison = <>☣️ Poison</>;
const cold = <>❄️ Cryo</>;
const rad = <>☢️ Radiation</>;
const health = <>❤️ Health</>;
const reduction = <>🧽 Reduction</>;
const headShot = <>🤕 Head Shot</>;
const creatureTypes = {Normal: 'default', Scorched: 'scorched', Glowing: 'glowing'};


function CreatureStats({creatures, setCreatures, creature}) {
    const [poisonEnabled, setPoisonEnabled] = useState(true);
    const [radiationEnabled, setRadiationEnabled] = useState(true);
    console.log("CreatureStats");
    function onRadioTypeClick(e) {
        creature.userBody = e.target.value;
        setCreatures({...creatures});
    }
    let name = CreatureDataProvider.capitalizeCreatureName(creature.name);
    return (
        <Card className="text-center mb-3">
            <Card.Header>
                {leftRight(<b className="ps-1 creature-label-text" style={{display: 'flex', alignItems: 'center', fontSize: '1.0rem'}}>{name}</b>, <span><b style={{color: '#091503'}}>Lvl:</b> <b style={{fontSize: '1.1rem', color: '#bb0000'}}>{creature.level}</b></span>, 9, 3)}
            </Card.Header>
            <Card.Body>
                <Row>
                    {col(ballistic, creatures, setCreatures, creature, "b", "bg-ballistic", false, true, null)}
                    {col(energy, creatures, setCreatures, creature, "e", "bg-energy", false, true, null)}
                </Row>
                <Row>
                    {col(fire, creatures, setCreatures, creature, "f", "bg-fire", false, true, null)}
                    {col(poison, creatures, setCreatures, creature, "p", "bg-poison", true, poisonEnabled, setPoisonEnabled)}
                </Row>
                <Row>
                    {col(cold, creatures, setCreatures, creature, "c", "bg-cold", false, true, null)}
                    {col(rad, creatures, setCreatures, creature, "r", "bg-rad", true, radiationEnabled, setRadiationEnabled)}
                </Row>
                <Row>
                    {col(health, creatures, setCreatures, creature, "h", "bg-health", false, true, null, 1, 999999)}
                    {col(reduction, creatures, setCreatures, creature, "damageReduction", "bg-reduction", false, true, null, 0, 0.9)}
                </Row>
                <Row>
                    {col(headShot, creatures, setCreatures, creature, "headShot", "bg-head-shot", false, true, null, 1, 2)}
                </Row>

            </Card.Body>
            <Card.Footer className="text-muted">
                <Row>
                    <div className="pt-1 pb-1 d-flex justify-content-center">
                        <BSRadio pairs={creatureTypes} selectedValue={creature.userBody} onClick={onRadioTypeClick} />
                    </div>
                </Row>
            </Card.Footer>
        </Card>

    );
}

export default CreatureStats;