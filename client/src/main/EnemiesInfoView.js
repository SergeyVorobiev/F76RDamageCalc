import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import CreatureInfoButton from './CreatureInfoButton';
import { keyValueBadge } from '../helpers/RowBuilder';
import { tAmmo } from '../helpers/Emoji';
import { millisToTime } from '../helpers/Time';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import SimpleNameDropdown from '../helpers/views/SimpleNameDropdown';


 function updateEnemy(name, level, creature, updateCreatures) {
    const result = CreatureDataProvider.getCreatureParametersByName(name, level);
    creature.name = name;
    creature.level = level;
    if (result.physical) {
        creature.b = result.physical;
        creature.e = result.energy;
        creature.f = result.fire;
        creature.p = result.poison;
        creature.c = result.cold;
        creature.r = result.radiation;
        creature.h = result.health;
    }
    updateCreatures();
}

function enemyDropdown(name, items, onSelect) {
    let capitalized = name;
    if (typeof name === typeof '') {
        capitalized = CreatureDataProvider.capitalizeCreatureName(name);
    }
    return (
        <SimpleNameDropdown variant='blue-label' size='sm' onSelect={onSelect} names={items} title={<strong>{capitalized}</strong>} />
    );
}

function enemyDropdowns(need, name, level, names, levels, enemyClick, levelClick) {
    if (need) {
        return (
            <Stack className='justify-content-center' direction="horizontal" gap={1}>
                <Col xs={10} className="d-flex justify-content-start">
                    {enemyDropdown(name, names, enemyClick)}
                </Col>
                <Col xs={2} className="d-flex justify-content-end">
                    {enemyDropdown(level, levels, levelClick)}
                </Col>
            </Stack>);
    }
    return (<small><strong className="d-flex justify-content-center creature-label-text" style={{marginTop: '0.1rem', marginBottom: '0.1rem', marginLeft: '0.55rem'}}>{name}</strong></small>)
}

function enemy(creature, creatureIcon, updateCreatures, resultDamage, weaponName, dropdown=false) {
    function levelClick(key) {
        updateEnemy(creature.name, parseInt(key), creature, updateCreatures);
    }
    function enemyClick(key) {
        updateEnemy(key, creature.level, creature, updateCreatures);
    }
    const names = CreatureDataProvider.getCreatureNames();
    const levels = CreatureDataProvider.getCreatureLevels();
    return (
        <Card className='pt-0 mt-0 mb-1'>
            <Card.Header className='pt-0 pb-0'>
                {enemyDropdowns(dropdown, creature.name, creature.level, names, levels, enemyClick, levelClick)}
            </Card.Header>
            <Stack className='ps-0 pe-1' direction="horizontal" gap={1}>
                {keyValueBadge("mt-1 mb-1 badge p-1 ms-1 me-0 bg-health-outline", '5.5rem', '❤️', creature.h)}
                {keyValueBadge("mt-1 mb-1 p-1 badge bg-ammo-outline ms-auto me-auto", '7rem', tAmmo("0.5rem"), creature.ammo)}
                {keyValueBadge("mt-1 mb-1 p-1 badge bg-lifetime-outline ms-auto me-auto", '7rem', (<small>⌛</small>), millisToTime(creature.lifeTime))}
                <CreatureInfoButton creature={creature} resultDamage={resultDamage} weaponName={weaponName} />
            </Stack>
        </Card>
    );
}

export default function EnemiesInfoView(props) {
    function updateCreatures() {
        props.setCreatures({
            ...props.creatures,
        });
    }
    return (
        <Card className={props.className}>
            <Card.Body className="pt-2 pb-1 ps-1 pe-1">
                {enemy(props.creatures.sbq, "🐲", updateCreatures, props.resultDamage, props.weaponName)}
                {enemy(props.creatures.earle, "👹", updateCreatures, props.resultDamage, props.weaponName)}
                {enemy(props.creatures.titan, "🐗", updateCreatures, props.resultDamage, props.weaponName)}
                {enemy(props.creatures.creature, "🐵", updateCreatures, props.resultDamage, props.weaponName, true)}
            </Card.Body>
        </Card>
    );
}