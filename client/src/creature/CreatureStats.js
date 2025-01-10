import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { checkLength } from '../helpers/Input';
import BSRadio from '../helpers/views/BSRadio';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import CreatureBodyView from './CreatureBodyView';
import CreatureTagsView from './CreatureTagsView';
import CreatureReductionView from './CreatureReductionView';
import { Divider } from 'antd';
import CreatureChooser from './CreatureChooser';
import CreatureInfoButton from './CreatureInfoButton';


function col(name, creatures, setCreatures, creature, res_field, color, canDisable, min=0, max=9999) {
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
            const enabled = (res_field === "p") ? creature.immuneToPoison : creature.immuneToRadiation;
            const result = !enabled
            if (res_field === "p") {
                creature.immuneToPoison = result;
            } else {
                creature.immuneToRadiation = result;
            }
            setCreatures({
                ...creatures,
            });
        }
        if (canDisable) {
            return (
                <InputGroup.Text style={{width: '2.6rem'}}>
                    <UCheckbox checked={!((res_field === "p") ? creature.immuneToPoison : creature.immuneToRadiation)} checkBorderColor={chColor} checkBgColor={chColor} onChange={onChange}></UCheckbox>
                </InputGroup.Text>
            );
        }
        return <></>;
    }
    let disabled = false;
    if (res_field === "p" || res_field === "r") {
        disabled = (res_field === "p") ? creature.immuneToPoison : creature.immuneToRadiation;
    }
    const width = (canDisable) ? '7.4rem' : '10rem';
    const value = creature[res_field];
    return (
        <Col>
            <InputGroup className="mb-1 mt-1 flex-nowrap">
                <InputGroup.Text className={color} style={{ width: width }}>{name}</InputGroup.Text>
                {getCheckbox(canDisable)}
                <Form.Control className='w-auto' disabled={disabled} type="number" min={min} value={value} max={max} maxLength="7" onChange={onChange} />
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
const bodyShot = <>🧍 Body Shot</>;
const creatureTypes = {Normal: 'normal', Scorched: 'scorched', Glowing: 'glowing'};


function CreatureStats({creatureNamesRef, creatures, setCreatures, creature, resultDamage}) {
    console.log("CreatureStats");
    function onRadioTypeClick(e) {
        creature.curBody = e.target.value;
        setCreatures({...creatures});
    }
    return (
        <>
            <div className="d-flex justify-content-end mb-2">
                <CreatureInfoButton creature={creature} resultDamage={resultDamage} />
            </div>
            <div className="text-center mb-3">
                <CreatureChooser creatureNamesRef={creatureNamesRef} creature={creature} creatures={creatures} setCreatures={setCreatures} />
                <div className="m-2" />
                <Row>
                    {col(ballistic, creatures, setCreatures, creature, "b", "bg-ballistic", false)}
                    {col(energy, creatures, setCreatures, creature, "e", "bg-energy", false)}
                </Row>
                <Row>
                    {col(fire, creatures, setCreatures, creature, "f", "bg-fire", false)}
                    {col(poison, creatures, setCreatures, creature, "p", "bg-poison", true)}
                </Row>
                <Row>
                    {col(cold, creatures, setCreatures, creature, "c", "bg-cold", false)}
                    {col(rad, creatures, setCreatures, creature, "r", "bg-rad", true)}
                </Row>
                <Row>
                    {col(health, creatures, setCreatures, creature, "h", "bg-health", false, 1, 999999)}
                    {col(reduction, creatures, setCreatures, creature, "damageReduction", "bg-reduction", false, 0, 0.9)}
                </Row>
                <Row>
                    {col(headShot, creatures, setCreatures, creature, "headShot", "bg-head-shot", false, 1, 2)}
                    {col(bodyShot, creatures, setCreatures, creature, "bodyShot", "bg-body-shot", false, 0.1, 2)}
                </Row>
                <CreatureTagsView creature={creature} />
                <CreatureBodyView creature={creature} creatures={creatures} setCreatures={setCreatures} />
                <CreatureReductionView creature={creature} creatures={creatures} setCreatures={setCreatures} />
                <Divider className="p-0 mt-1 mb-3">Body</Divider>
                <div className="pt-1 pb-1 d-flex justify-content-center">
                    <BSRadio pairs={creatureTypes} selectedValue={creature.curBody} onClick={onRadioTypeClick} />
                </div>
            </div>
        </>
    );
}

export default CreatureStats;