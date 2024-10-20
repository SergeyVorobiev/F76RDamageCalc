import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Checkbox } from 'antd';
import { QuestionOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Dropdown } from 'antd';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { millisToTime } from '../helpers/Time';
import { Divider } from 'antd';
import { keyValueRow } from '../helpers/RowBuilder';
import { Progress } from 'antd';
import Accordion from 'react-bootstrap/Accordion';
import HotMeter from './HotMeter';
import { getColorsForHotMeter } from '../helpers/Colors';
import { getHotPercentage } from '../helpers/Item';
import { keyValueBadge } from '../helpers/RowBuilder';
import { tAmmo, ammo, fireRate, addText } from '../helpers/Emoji';
import DamageDetails from '../damage/DamageDetails';
import { getImageElement } from '../helpers/WeaponImages';
const { Chart } = await import('chart.js/auto');


const colors = getColorsForHotMeter();


function help() {
    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>What&How</strong></Popover.Header>
                <Popover.Body className="my-popover ms-2 me-2">
                <p className="m-1"><strong>CRIT</strong> calculates critical damage, <strong>☠️ Fr:</strong> means crit frequency (1 / 2 - every second shot is crit).</p>
                <p className="m-1"><strong>SNEAK</strong> calculates sneak damage.</p>
                <p className="m-1"><strong>HEAD</strong> calculates head shot damage, <strong>🤕 Fr</strong> means head shot frequency ( 1 / 2 - every second shot is head shot)</p>
                <p className="m-1"><strong>Rad resistance</strong>. Some monsters can have rad resistance overridden by 'infinity' like Grafton monster or Super Mutant etc.</p>
                <p className="m-1"><strong>This calculator</strong> does not represent your real game experience, it has some limitations and it calculates creature's life time
                provided that a creature is standing still under the fire until death. </p>
                <p className="m-1">However when all else being equal you can rely on this numbers to compare efficiency
                of weapons with a pretty good accuracy. Go to the GitHub page via white cat icon for details.</p>
            </Popover.Body>
        </Popover>
    );
}

function buildStats(creature, resultDamage, weaponName) {
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
    }
    function showDamageIf(what, damageLine) {
        if (damageLine === 0 || damageLine.includes("0.0 - ↑0.0")) {
            return (<></>);
        }
        return what;
    }

    return (
        <Popover className="popover-adjustable">
            <Popover.Header as="h3"><strong>{creature.name} (Level: {creature.level})</strong></Popover.Header>
            <Popover.Body className="my-popover ms-1 me-1">
                <Stack  className='pt-2 pb-0' direction="horizontal" gap={1}>
                    <span style={{ width: '3rem' }} className="badge bg-ballistic">{creature.b.toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-energy">{creature.e.toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-fire">{creature.f.toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-poison">{creature.p.toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-cold">{creature.c.toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-rad">{creature.r.toFixed(1)}</span>
                </Stack>
                <Divider className='p-0 m-0'>v</Divider>
                <Stack  className='pt-0 pb-2' direction="horizontal" gap={1}>
                    <span style={{ width: '3rem' }} className="badge bg-ballistic">{armor[0].toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-energy">{armor[1].toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-fire">{armor[2].toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-poison">{armor[3].toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-cold">{armor[4].toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-rad">{armor[5].toFixed(1)}</span>
                </Stack>
                <Stack  className='pb-0' direction="vertical" gap={0}>
                    {keyValueRow(" Body:", creature.body, "default", "default")}
                    {keyValueRow(" Type:", creature.type, "default", "default")}
                    {keyValueRow("❤️ Health:", creature.h.toFixed(2), "default", "red")}
                    {keyValueRow("🧽 Damage Reduction:", creature.damageReduction, "default", "orange")}
                    {keyValueRow("💥 Total Damage:", creature.totalDamage, "default", "blue")}
                    {showDamageIf(keyValueRow("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage)}
                    {showDamageIf(keyValueRow("🤕 Head Shot (" + creature.headShot + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage)}
                    {showDamageIf(keyValueRow("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage)}
                    {showDamageIf(keyValueRow("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage)}
                    {keyValueRow(addText(tAmmo, '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink")}
                    {keyValueRow("Reloads:", creature.reloads, "default", "green")}
                    {keyValueRow("Reloads Time:", creature.reloadsTime.toFixed(2) + " s", "default", "green")}
                    {keyValueRow("Life Time:", creature.lifeTime + " ms", "default", "brown")}
                    <Divider className='p-0 m-1 mb-3'></Divider>
                    <span className="badge bg-warning mb-0 text-dark p-2"><small>{weaponName}</small></span>
                </Stack>
            </Popover.Body>
        </Popover>
    );
}

export default class ATotalDamage extends React.PureComponent {

    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.chart = null;
        this.enemyClick = this.enemyClick.bind(this);
        this.levelClick = this.levelClick.bind(this);

        this.crf = this.crf.bind(this);
        this.hef = this.hef.bind(this);
        this.hes = this.hes.bind(this);
        this.red = this.red.bind(this);

        this.useCrit = this.useCrit.bind(this);
        this.useSneak = this.useSneak.bind(this);
        this.useHead = this.useHead.bind(this);
        this.updateExtraDamage = this.updateExtraDamage.bind(this);
        this.updateCreatures = this.updateCreatures.bind(this);
    }

    drawChart() {

        // This branch is not used so as chart updating seems not to work no matter what, or to work occasionally.
        if (this.chart != null && 0) {
            // this.chart.data.labels.pop();
            // this.chart.data.labels.push(this.xValues);
            this.chart.data.datasets.forEach((dataset) => {
                dataset.data.push(this.props.graphValues.yValues);
            });
            this.chart.update();
        } else {
            if (this.chart != null) {this.chart.destroy();}
            this.chart = new Chart(document.getElementById('myChart'), {
                type: "line",
                data: {
                labels: this.props.graphValues.xValues,
                datasets: [{
                    data: this.props.graphValues.yValues,
                    borderColor: "red",
                    borderWidth: "2",
                    pointRadius: "1",
                    fill: true
                    }]
                },
                options: {
                     plugins: {
                                legend: {
                                            display: false
                                        }
                                    },
                    animation: false,
                }
            });
        }
    }

    componentDidMount() {
        this.drawChart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.drawChart();
    }

    enemyClick(key) {
        this.updateEnemy(key.key, this.props.creatures.creature.level);
    }

    updateEnemy(name, level) {
        let map = this.props.mapCreatures.map;
        let data = null;
        try {
            data = map.get(name)[level - 1];
        } catch (error) {
            return;
        }

        let creature = this.props.creatures.creature;
        creature.name = name;
        creature.level = level;
        creature.b = data[0];
        creature.e = data[1];
        creature.f = data[2];
        creature.p = data[3];
        creature.c = data[4];
        creature.r = data[5];
        creature.h = data[6];
        this.updateCreatures();
    }

    levelClick(key) {
        this.updateEnemy(this.props.creatures.creature.name, parseInt(key.key));
    }

    enemyDropdown(name, items, onClick) {
        return (
            <Dropdown menu={{items, onClick}} trigger='click' className="ant-dropdown-menu">
                <Button type='link' size="small" onClick={(e) => e.preventDefault()}><strong>{name}</strong></Button>
            </Dropdown>
        );
    }

    enemyDropdowns(need, name, level, names, levels) {
        if (need) {
            return (
                <Stack className='justify-content-center' direction="horizontal" gap={5}>
                    {this.enemyDropdown(name, names, this.enemyClick)}
                    {this.enemyDropdown(level, levels, this.levelClick)}
                </Stack>);
        }
        return (<strong>{name}</strong>)
    }

    enemy(creature, creatureIcon, updateCreatures, resultDamage, dropdown=false) {
        return (
            <Card className='pt-0 mt-0 mb-1'>
                <Card.Header className='pt-0 pb-0'>
                    {this.enemyDropdowns(dropdown, creature.name, creature.level, this.props.mapCreatures.names, this.props.mapCreatures.levels)}
                </Card.Header>
                <Stack className='ps-0 pe-1' direction="horizontal" gap={1}>
                    {keyValueBadge("mt-1 mb-1 badge p-1 ms-1 me-0 bg-health", '5.5rem', '❤️', creature.h)}
                    {keyValueBadge("mt-1 mb-1 p-1 badge bg-ammo ms-auto me-auto", '7rem', tAmmo("0.5rem"), creature.ammo)}
                    <div style={{width: '6.9rem'}} className="mt-1 mb-1 m-0 badge p-1 bg-lifetime ms-0 me-auto">⌛ {millisToTime(creature.lifeTime)}</div>
                    <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={buildStats(creature, resultDamage, this.props.weaponName)}>
                        <Button size='small' icon={<QuestionOutlined />} />
                    </OverlayTrigger>
                </Stack>
            </Card>
        );
    }

    resultBadges(label, style, aa, damage, sneak, crit, exp=0.0, expCrit=0.0) {
        return (
            <div>
                <div className="col d-flex justify-content-center">
                    <Stack className='pb-1' direction="horizontal" gap={1}>
                        {keyValueBadge(style, '6.5rem', label + " D", damage.toFixed(1))}
                        {keyValueBadge(style, '6.5rem', "🛡️ A", (aa * 100.0).toFixed(1))}
                        {keyValueBadge(style, '6.5rem', "🐍 S", sneak.toFixed(1))}
                    </Stack>
                </div>
                <div className="col d-flex justify-content-center">
                    <Stack className='pb-1' direction="horizontal" gap={1}>
                        {keyValueBadge(style, '6.5rem', "☠️ C", crit)}
                        {keyValueBadge(style, '6.5rem', "💣 E", exp.toFixed(1))}
                        {keyValueBadge(style, '6.5rem', "💣☠️", (exp + expCrit).toFixed(1))}
                    </Stack>
                </div>
            </div>
        );
    }

    updateExtraDamage() {
        this.props.setExtraDamage({
            ...this.props.extraDamage,
        });
    }

    updateCreatures() {
        this.props.setCreatures({
            ...this.props.creatures,
        });
    }

    crf(e) {
        this.props.extraDamage.critFreq = this.props.extraDamage.critFreq % 9 + 1;
        this.updateExtraDamage();
    }

    hef(e) {
        this.props.extraDamage.headFreq = this.props.extraDamage.headFreq % 9 + 1;
        this.updateExtraDamage();
    }

    hes(e) {
        let headMult = this.props.creatures.creature.headShot;
        if (headMult === 2.0) {
            headMult = 1.3;
        } else if (headMult === 1.3) {
            headMult = 1.5;
        } else if (headMult === 1.5) {
            headMult = 2.0;
        }
        this.props.creatures.creature.headShot = headMult;
        this.updateCreatures();
    }

    red(e) {
        let reduction = this.props.creatures.creature.damageReduction;
        reduction += 0.1;
        reduction = parseFloat(reduction.toFixed(1));
        if (reduction > 0.9) {
            reduction = 0.0;
        }
        this.props.creatures.creature.damageReduction = reduction;
        this.updateCreatures();
    }

    useCrit(e) {
        this.props.extraDamage.useCrit = e.target.checked;
        this.updateExtraDamage();
    }

    useSneak(e) {
        this.props.extraDamage.useSneak = e.target.checked;
        this.updateExtraDamage();
    }

    useHead(e) {
        this.props.extraDamage.useHead = e.target.checked;
        this.updateExtraDamage();
    }

    render() {
        let weaponIcon = this.props.iconName;
        if (!weaponIcon) {
            weaponIcon = "default";
        }
        const mWidth = "21rem";
        console.log("ATotalDamage");
        let damageText = "";
        let fireRateText = "";
        let displayedCrit = 0;
        let displayedSneak = 0;
        let reloadTime = 0;
        let ammoCapacity = 0;
        let tDamage = 0;
        let shotSize = 1;
        let fRate = 10;
        if (this.props.resultDamage && Object.keys(this.props.resultDamage).length > 0) {
            reloadTime = this.props.resultDamage.reloadTime;
            displayedCrit = this.props.resultDamage.displayedCrit;
            displayedSneak = this.props.resultDamage.displayedSneak;
            tDamage = this.props.resultDamage.tDamage;
            shotSize = this.props.resultDamage.shotSize;
            damageText = tDamage.toFixed(1) + " x " + shotSize;
            fRate = this.props.resultDamage.fireRate;
            fireRateText = fRate.toFixed(0) + " - " + (fRate / 10.0).toFixed(2) + " shots / sec";
            ammoCapacity = this.props.resultDamage.ammoCapacity;
        }

        const percentC = getHotPercentage(this.props.creatures);
        return (
        <Card style={{ minWidth: mWidth}} className="d-flex justify-content-center text-center mb-0">
            <Card.Header className='p-0 m-0'>
                <Row className='p-0 m-0'>
                    <Col className="col-2 d-flex justify-content-start p-0 m-0 ms-3">
                        {getImageElement(weaponIcon, "5rem")}
                    </Col>
                    <Col className="col-7 d-flex justify-content-center">
                       <h5 className="m-auto p-auto"> {this.props.weaponName} </h5>
                    </Col>
                    <Col className="col-3 d-flex justify-content-end"></Col>
                </Row>
            </Card.Header>
            <Card.Body className="pt-2">
                <Row>
                    <div className="col d-flex justify-content-center mb-2">
                        <Card className="main-display-adjustable">
                            <Card.Header className="pe-0 ps-0">
                                <Stack  className='p-0 m-0 justify-content-evenly' direction="horizontal" gap={1}>
                                    <Checkbox className="pe-1" onChange={this.useCrit} checked={this.props.extraDamage.useCrit}><strong>☠️ CRIT</strong></Checkbox>
                                    <Checkbox className="pe-1" onChange={this.useSneak} checked={this.props.extraDamage.useSneak}><strong>🐍 SNEAK</strong></Checkbox>
                                    <Checkbox className="pe-1" onChange={this.useHead} checked={this.props.extraDamage.useHead}><strong>🤕 HEAD</strong></Checkbox>
                                    <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={help()}>
                                        <Badge bg="info">?</Badge>
                                    </OverlayTrigger>
                                </Stack>
                            </Card.Header>
                            <Card.Body className="pt-0 pb-0">
                                {keyValueRow((<span className="pt-0 pb-0"><strong>💥 Damage:</strong></span>), (<span className="pt-0 pb-0"><strong>{damageText}</strong></span>), "default", "red")}
                                {keyValueRow((<span className="mt-0 mb-0"><strong>☠️ Crit:</strong></span>), (<span className="mt-1 mb-1"><strong>{"+" + displayedCrit + "%"}</strong></span>), "default", "magenta")}
                                {keyValueRow((<span className="mt-0 mb-0"><strong>🐍 Sneak:</strong></span>), (<span className="mt-1 mb-1"><strong>{"+" + displayedSneak + "%"}</strong></span>), "default", "green")}
                                {keyValueRow((<span className="mt-0 mb-0"><strong>{addText(fireRate, '0.7rem', '0.27rem', "Fire Rate:")}</strong></span>), (<span className="mt-1 mb-1"><strong>{fireRateText}</strong></span>), "default", "purple")}
                                {keyValueRow((<div className="mt-0 mb-0"><strong>{addText(ammo, '0.7rem', '0.27rem', "Ammo:")}</strong></div>), (<span className="mt-1 mb-1"><strong>{ammoCapacity}</strong></span>), "default", "default")}
                                {keyValueRow((<span className="mt-0 mb-0"><strong>⌛ Reload:</strong></span>), (<span className="mt-1 mb-1"><strong>{reloadTime.toFixed(1) + " s"}</strong></span>), "default", "blue")}
                            </Card.Body>
                            <Card.Footer className="ps-0 pe-0 text-muted d-flex justify-content-between">
                                <Button style={{ width: '6rem' }} className="ms-2 me-2" size="sm" onClick={this.crf}><strong>☠️ Fr: 1 / {this.props.extraDamage.critFreq}</strong></Button>
                                <Button style={{ width: '6rem' }} className="ms-2 me-2" size="sm" onClick={this.hef}><strong>🤕 Fr: 1 / {this.props.extraDamage.headFreq}</strong></Button>
                            </Card.Footer>
                        </Card>
                    </div>
                    <div className="col d-flex justify-content-center mb-2">
                        <Card className="main-display-adjustable">
                            <Card.Header>
                                <span className="d-flex m-0 p-0 w-100">
                                    <div className="m-auto p-0 w-100 d-flex justify-content-start">
                                        <Badge bg="warning" text="dark">
                                        <strong>DPS: {this.props.graphValues.yValues[0].toFixed(1)}</strong>
                                        </Badge>
                                    </div>
                                    <div className="m-0 p-0 w-100">
                                        <Progress
                                            type="dashboard"
                                            steps={50}
                                            percent={percentC}
                                            format={(percent) => percent}
                                            size={28}
                                            strokeColor={colors}
                                            trailColor="rgba(0, 0, 0, 0.06)"
                                            strokeWidth={20} />
                                    </div>
                                    <div className="m-auto p-0 w-100 d-flex justify-content-end">
                                        <Badge bg="warning" text="dark"><strong>DPS / Res</strong></Badge>
                                    </div>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <canvas id="myChart"></canvas>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col d-flex justify-content-center mb-2">
                        <Card className="main-display-adjustable">
                            <Card.Body className="pt-2 pb-1 ps-1 pe-1">
                                {this.enemy(this.props.creatures.sbq, "🐲", this.updateCreatures, this.props.resultDamage)}
                                {this.enemy(this.props.creatures.earle, "👹", this.updateCreatures, this.props.resultDamage)}
                                {this.enemy(this.props.creatures.titan, "🐗", this.updateCreatures, this.props.resultDamage)}
                                {this.enemy(this.props.creatures.creature, "🐵", this.updateCreatures, this.props.resultDamage, true)}
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted p-1">
                <Accordion className="accordion p-0 m-0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="m-0 p-0">
                            <HotMeter creatures={this.props.creatures} steps={50} colors={colors} />
                        </Accordion.Header>
                        <Accordion.Body>
                            <DamageDetails resultDamage={this.props.resultDamage}></DamageDetails>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card.Footer>
        </Card>);
    }
}
