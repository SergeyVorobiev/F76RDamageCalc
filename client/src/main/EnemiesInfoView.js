import Col from 'react-bootstrap/Col';
import { Dropdown } from 'antd';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import CreatureInfoButton from './CreatureInfoButton';
import { keyValueBadge } from '../helpers/RowBuilder';
import { tAmmo } from '../helpers/Emoji';
import { millisToTime } from '../helpers/Time';


 function updateEnemy(name, level, creature, mapCreatures, updateCreatures) {
    let map = mapCreatures.map;
    let data = null;
    try {
        data = map.get(name)[level - 1];
    } catch (error) {
        return;
    }
    creature.name = name;
    creature.level = level;
    creature.b = data[0];
    creature.e = data[1];
    creature.f = data[2];
    creature.p = data[3];
    creature.c = data[4];
    creature.r = data[5];
    creature.h = data[6];
    updateCreatures();
}

function enemyDropdown(name, items, onClick) {
    let capitalized = name;
    if (typeof name === typeof '') {
        capitalized = name.charAt(0).toUpperCase() + name.slice(1);
        capitalized = capitalized.replaceAll("_", " ");
    }
    return (
        <Dropdown menu={{items, onClick}} trigger='click' className="ant-dropdown-menu">
            <small><a className="creature-label-text" style={{textDecoration: 'none', cursor: 'pointer'}} onClick={(e) => e.preventDefault()}><strong>{capitalized}</strong></a></small>
        </Dropdown>
    );
}

function enemyDropdowns(need, name, level, names, levels, enemyClick, levelClick) {
    if (need) {
        return (
            <Stack className='justify-content-center' direction="horizontal" gap={5}>
                <Col xs={2}>
                </Col>
                <Col xs={6} className="d-flex justify-content-center">
                    {enemyDropdown(name, names, enemyClick)}
                </Col>
                <Col xs={2} className="d-flex justify-content-start">
                    {enemyDropdown(level, levels, levelClick)}
                </Col>


            </Stack>);
    }
    return (<small><strong className="creature-label-text">{name}</strong></small>)
}

function enemy(creature, creatureIcon, updateCreatures, resultDamage, weaponName, mapCreatures, dropdown=false) {
    function levelClick(key) {
        updateEnemy(creature.name, parseInt(key.key), creature, mapCreatures, updateCreatures);
    }
    function enemyClick(key) {
        updateEnemy(key.key, creature.level, creature, mapCreatures, updateCreatures);
    }
    return (
        <Card className='pt-0 mt-0 mb-1'>
            <Card.Header className='pt-0 pb-0'>
                {enemyDropdowns(dropdown, creature.name, creature.level, mapCreatures.names, mapCreatures.levels, enemyClick, levelClick)}
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
                ...this.props.creatures,
        });
    }
    return (
        <Card className={props.className}>
            <Card.Body className="pt-2 pb-1 ps-1 pe-1">
                {enemy(props.sbq, "🐲", updateCreatures, props.resultDamage, props.weaponName, props.mapCreatures)}
                {enemy(props.earle, "👹", updateCreatures, props.resultDamage, props.weaponName, props.mapCreatures)}
                {enemy(props.titan, "🐗", updateCreatures, props.resultDamage, props.weaponName, props.mapCreatures)}
                {enemy(props.creature, "🐵", updateCreatures, props.resultDamage, props.weaponName, props.mapCreatures, true)}
            </Card.Body>
        </Card>
    );
}