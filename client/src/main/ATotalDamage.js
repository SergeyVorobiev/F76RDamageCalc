import React from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css';
import {graphDamage} from '../helpers/Calc';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Checkbox } from 'antd';
import {QuestionOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import { Dropdown } from 'antd';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {millisToTime} from '../helpers/Calc';
import { Divider } from 'antd';
const { Chart } = await import('chart.js/auto');


function help() {
    return (
        <Popover style={{ width: '20rem' }} id="popover-basic" class="popover" >
            <Popover.Header as="h3"><strong>What&How</strong></Popover.Header>
            <Popover.Body class="my-popover ms-2 me-2">
                <p class="m-1"><strong>CRIT</strong> calculates critical damage, <strong>CrF</strong> means crit frequency (2 - every second shot is crit).</p>
                <p class="m-1"><strong>SNEAK</strong> calculates sneak damage.</p>
                <p class="m-1"><strong>HEAD</strong> calculates head shot damage, <strong>HeF</strong> means head shot frequency ( 2 - every second shot is head shot)
                    <strong> HeS</strong> means multiplier (2 = 2x).
                </p>
                <p class="m-1"><strong>RED</strong> means damage reduction (applied only to a chosen creature).</p>
                <p class="m-1"><strong>STR</strong> is additional strength damage (only for melee weapon).</p>
                <p class="m-1"><strong>CD</strong> is used if your weapon has additional damage to a creature (like prime capacitor +65%) and
                you want to apply this damage to it.</p>
                <p class="m-1"><strong>Resistance.</strong> Sometimes rad resistance can be overridden by 'infinity' like for Grafton monster or Super Mutant etc.
                but you will see its actual rad resistance from game files. Therefore calculations for rads will be incorrect but you can override this number by 1000 manually.</p>
                <p class="m-1"><strong>This calculator</strong> does not represent your real game experience, it calculates creature life time
                provided that a creature / boss stands still and it has many limitations. </p>
                <p class="m-1">However when all else being equal you can rely on this numbers to compare effectiveness
                of many weapons with a pretty good accuracy. Go to GitHub page for more details.</p>
            </Popover.Body>
        </Popover>
    );
}

function buildStats(creature, resultDamage, legendary, weaponName) {
    let addDamageInfo = "";
    let addExpDamageInfo = "";
    let addCritDamageInfo = "";
    let addExpCritDamageInfo = creature.critExplosiveDamage.toFixed(2);
    if (legendary.two_shot.is_used) {
        addDamageInfo = "(" + (creature.normalDamage / 2.0).toFixed(1) + " x 2)";
        addExpDamageInfo = "x 2";
        addCritDamageInfo = "(" + (creature.normalDamage / 2.0).toFixed(1) + " + " + (creature.critNormalDamage / 2.0).toFixed(1) + ")";
        addExpCritDamageInfo = "(" + creature.explosiveDamage.toFixed(1) + " + " + creature.critExplosiveDamage.toFixed(1) + ")?";
    } else if (resultDamage.shotSize > 1) {
        addDamageInfo = "(" + (creature.normalDamage / resultDamage.shotSize).toFixed(1) + " x " + resultDamage.shotSize + ")";
        addExpDamageInfo = "(" + (creature.explosiveDamage / resultDamage.shotSize).toFixed(1) + " x " + resultDamage.shotSize + ")";
        addCritDamageInfo = "(" + (creature.critNormalDamage / resultDamage.shotSize).toFixed(1) + " x " + resultDamage.shotSize + ")";
        addExpCritDamageInfo += " (" + (creature.critExplosiveDamage / resultDamage.shotSize).toFixed(1) + " x " + resultDamage.shotSize + ")";
    }
    let addHeadShot = "(" + (creature.normalDamage * creature.headShot).toFixed(1) + " / " + (creature.critNormalDamage * creature.headShot).toFixed(1) + ")";
    return (
        <Popover id="popover-basic" class="popover">
            <Popover.Header as="h3"><strong>{creature.name} (Level: {creature.level})</strong></Popover.Header>
            <Popover.Body class="my-popover ms-2 me-2">
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
                    <span style={{ width: '3rem' }} className="badge bg-ballistic">{(creature.b * (1 - resultDamage.bAA)).toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-energy">{(creature.e * (1 - resultDamage.eAA)).toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-fire">{(creature.f * (1 - resultDamage.fAA)).toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-poison">{(creature.p * (1 - resultDamage.pAA)).toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-cold">{(creature.c * (1 - resultDamage.cAA)).toFixed(1)}</span>
                    <span style={{ width: '3rem' }} className="badge bg-rad">{(creature.r * (1 - resultDamage.rAA)).toFixed(1)}</span>
                </Stack>
                <Stack  className='pb-0' direction="vertical" gap={0}>
                    <strong className='pb-1'>Health: {creature.h.toFixed(2)}</strong>
                    <strong className='pb-1'>Damage Reduction: {creature.damageReduction}</strong>
                    <strong className='pb-1'>Head Shot: {creature.headShot} {addHeadShot}</strong>
                    <strong className='pb-1'>Shot Damage: {creature.shotDamage.toFixed(2)}</strong>
                    <strong className='pb-1'>Normal Damage: {creature.normalDamage.toFixed(2)} {addDamageInfo}</strong>
                    <strong className='pb-1'>Crit Normal Damage: {creature.critNormalDamage.toFixed(2)} {addCritDamageInfo}</strong>
                    <strong className='pb-1'>Explosive Damage: {creature.explosiveDamage.toFixed(2)} {addExpDamageInfo}</strong>
                    <strong className='pb-1'>Crit Explosive Damage: {addExpCritDamageInfo}</strong>
                    <strong className='pb-1'>DPS: {creature.dps.toFixed(0)}</strong>
                    <strong className='pb-1'>Ammo / Hits: {creature.ammo}</strong>
                    <strong className='pb-1'>Reloads: {creature.reloads}</strong>
                    <strong className='pb-1'>Reloads Time: {creature.reloadsTime.toFixed(2)}</strong>
                    <strong className='pb-1'>Life Time: {creature.lifeTime} ms</strong>
                    <Divider className='p-0 m-1'></Divider>
                    <span className="badge bg-warning mb-1 text-dark"> {weaponName}</span>
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
        this.xValues = [];
        for (let i = 0; i <= 50; i++) {
            this.xValues[i] = 20.0 * i;
        }
        this.enemyClick = this.enemyClick.bind(this);
        this.levelClick = this.levelClick.bind(this);

        this.crf = this.crf.bind(this);
        this.hef = this.hef.bind(this);
        this.hes = this.hes.bind(this);
        this.red = this.red.bind(this);

        this.useCrit = this.useCrit.bind(this);
        this.useSneak = this.useSneak.bind(this);
        this.useHead = this.useHead.bind(this);
        this.useStrength = this.useStrength.bind(this);
        this.updateExtraDamage = this.updateExtraDamage.bind(this);
        this.updateCreatures = this.updateCreatures.bind(this);
    }

    drawChart() {
        let data = [];
        for (let i in this.xValues) {
            let armors = [this.xValues[i], this.xValues[i], this.xValues[i], this.xValues[i], this.xValues[i], this.xValues[i]];
            data.push(graphDamage(armors, this.props.resultDamage, this.props.extraDamage, this.props.creatures.creature.damageReduction, this.props.creatures.creature.headShot) * this.props.resultDamage.fireRate / 10.0);
        }

        // This branch is not used so as chart updating seems not to work no matter what, or to work occasionally.
        if (this.chart != null && 0) {
            // this.chart.data.labels.pop();
            // this.chart.data.labels.push(this.xValues);
            this.chart.data.datasets.forEach((dataset) => {
                dataset.data.push(data);
            });
            this.chart.update();
        } else {
            if (this.chart != null) {this.chart.destroy();}
            this.chart = new Chart(document.getElementById('myChart'), {
                type: "line",
                data: {
                labels: this.xValues,
                datasets: [{
                    data: data,
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

    enemy(creature, updateCreatures, resultDamage, legendary, dropdown=false) {
        function checkDC(e) {
            creature.damageToCreature = e.target.checked;
            updateCreatures();
        }
        return (
            <Card className='pt-0 mt-0 mb-2'>
                <Card.Header className='pt-0 pb-0'>
                    {this.enemyDropdowns(dropdown, creature.name, creature.level, this.props.mapCreatures.names, this.props.mapCreatures.levels)}
                </Card.Header>
                <Stack  className='ps-1 pe-1' direction="horizontal" gap={1}>
                    <Checkbox onChange={checkDC} checked={creature.damageToCreature}><strong>CD</strong></Checkbox>
                    <span style={{ width: '6rem' }} className="mt-1 mb-1 badge bg-ammo ms-auto me-auto">Ammo: {creature.ammo}</span>

                    <span className="mt-1 mb-1 badge bg-lifetime ms-auto me-auto">Life Time: {millisToTime(creature.lifeTime)}</span>
                    <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={buildStats(creature, resultDamage, legendary, this.props.weaponName)}>
                        <Button size='small' icon={<QuestionOutlined />} />
                    </OverlayTrigger>
                </Stack>
            </Card>
        );
    }

    resultBadges(label, style, aa, damage, sneak, crit, exp=0.0, expCrit=0.0) {
        return (
            <div>
                <div class="col d-flex justify-content-center">
                    <Stack className='pb-1' direction="horizontal" gap={1}>
                        <span style={{ width: '7rem' }} class={style}>{label}: {damage.toFixed(1)}</span>
                        <span style={{ width: '7rem' }} class={style}>AA: {(aa * 100.0).toFixed(1)}</span>
                        <span style={{ width: '7rem' }} class={style}>Sneak: {sneak.toFixed(1)}</span>
                    </Stack>
                </div>
                <div class="col d-flex justify-content-center">
                    <Stack className='pb-1' direction="horizontal" gap={1}>
                        <span style={{ width: '7rem' }} class={style}>Crit: {crit.toFixed(1)}</span>
                        <span style={{ width: '7rem' }} class={style}>Exp: {exp.toFixed(1)}</span>
                        <span style={{ width: '7rem' }} class={style}>ECrit: {(exp + expCrit).toFixed(1)}</span>
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

    useStrength(e) {
        this.props.extraDamage.useStrength = e.target.checked;
        this.updateExtraDamage();
    }

    render() {
        console.log("Rerender ATotalDamage");
        return (
        <Card style={{ minWidth: '24rem'}} className="d-flex justify-content-center text-center mb-3 ">
            <Card.Header><h3 className="mb-0">{this.props.weaponName} Stats</h3></Card.Header>
            <Card.Body className="pt-2">
                    <Row>
                        <div class="col d-flex justify-content-center mb-2">
                            <Card style={{ minWidth: '23rem', maxWidth: '28rem'}}>
                                <Card.Header>
                                    <Stack  className='pb-0 justify-content-center' direction="horizontal" gap={1}>
                                        <Checkbox className="pe-2" onChange={this.useCrit} checked={this.props.extraDamage.useCrit}><strong>CRIT</strong></Checkbox>
                                        <Checkbox className="pe-2" onChange={this.useSneak} checked={this.props.extraDamage.useSneak}><strong>SNEAK</strong></Checkbox>
                                        <Checkbox className="pe-2" onChange={this.useHead} checked={this.props.extraDamage.useHead}><strong>HEAD</strong></Checkbox>
                                        <Checkbox className="pe-2" onChange={this.useStrength} checked={this.props.extraDamage.useStrength}><strong>STR</strong></Checkbox>
                                        <OverlayTrigger rootClose='true' trigger="click" placement="left" overlay={help()}>
                                            <Badge bg="info">?</Badge>
                                        </OverlayTrigger>
                                    </Stack>
                                </Card.Header>

                                <Card.Body className="pt-1 pb-1">
                                    <h6 className='pt-0'><strong>Damage: {this.props.resultDamage.tDamage.toFixed(1)} x {this.props.resultDamage.shotSize}</strong></h6>
                                    <h6 className='pt-0'><strong>Crit: {this.props.resultDamage.displayedCrit.toFixed(1)}</strong></h6>
                                    <h6 className='pb-0'><strong>Fire Rate: {this.props.resultDamage.fireRate} - {(this.props.resultDamage.fireRate / 10.0).toFixed(1)} shots / sec</strong></h6>
                                    <h6 className='pb-0'><strong>Ammo: {this.props.resultDamage.ammoCapacity}</strong></h6>
                                    <h6 className='pb-0'><strong>Reload Time: {this.props.resultDamage.reloadTime.toFixed(1)}</strong></h6>
                                    <h6 className='pb-0'><strong>Explosive: {this.props.resultDamage.explosive.toFixed(0)}%</strong></h6>
                                </Card.Body>

                                <Card.Footer className="text-muted">
                                    <Button style={{ width: '4rem' }} className="ms-2 me-2" size="sm" onClick={this.crf}><strong>CrF: {this.props.extraDamage.critFreq}</strong></Button>
                                    <Button style={{ width: '4rem' }} className="ms-2 me-2" size="sm" onClick={this.hef}><strong>HeF: {this.props.extraDamage.headFreq}</strong></Button>
                                    <Button style={{ width: '4rem' }} className="ms-2 me-2" size="sm" onClick={this.hes}><strong>HeS: {this.props.creatures.creature.headShot}</strong></Button>
                                    <Button style={{ width: '4rem' }} className="ms-2 me-2" size="sm" onClick={this.red}><strong>RED: {this.props.creatures.creature.damageReduction}</strong></Button>
                                </Card.Footer>
                            </Card>
                        </div>
                        <div class="col d-flex justify-content-center mb-2">
                            <Card style={{ maxWidth: '28rem', minWidth: '23rem', maxHeight: '16.3rem' }}>
                                <Card.Header>
                                    <div class="d-flex">
                                        <div class="p-0">
                                            <Badge bg="warning" text="dark">
                                            <strong>DPS: {(this.props.resultDamage.tDamage * this.props.resultDamage.fireRate / 10.0).toFixed(1)}</strong>
                                            </Badge>
                                        </div>
                                        <div class="ms-auto p-0">
                                            <Badge bg="warning" text="dark"><strong>DPS / Res</strong></Badge>
                                        </div>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <canvas id="myChart"></canvas>
                                </Card.Body>
                            </Card>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <Card style={{ minWidth: '23rem', maxWidth: '28rem', maxHeight: '16.3rem'}}>
                            <Card.Body className="pt-2 pb-1 ps-1 pe-1">
                                {this.enemy(this.props.creatures.sbq, this.updateCreatures, this.props.resultDamage, this.props.legendary)}
                                {this.enemy(this.props.creatures.earle, this.updateCreatures, this.props.resultDamage, this.props.legendary)}
                                {this.enemy(this.props.creatures.titan, this.updateCreatures, this.props.resultDamage, this.props.legendary)}
                                {this.enemy(this.props.creatures.creature, this.updateCreatures, this.props.resultDamage, this.props.legendary, true)}
                            </Card.Body>
                            </Card>
                        </div>
                    </Row>


            </Card.Body>
            <Card.Footer className="text-muted">
                <Row>
                <Col>
                    <Row>
                        {this.resultBadges("B", "badge bg-ballistic", this.props.resultDamage.bAA, this.props.resultDamage.bDamage, this.props.resultDamage.bSneak, this.props.resultDamage.bCrit, this.props.resultDamage.bExpDamage, this.props.resultDamage.bExpCrit)}
                        {this.resultBadges("E", "badge bg-energy", this.props.resultDamage.eAA, this.props.resultDamage.eDamage, this.props.resultDamage.eSneak, this.props.resultDamage.eCrit, this.props.resultDamage.eExpDamage, this.props.resultDamage.eExpCrit)}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {this.resultBadges("F", "badge bg-fire", this.props.resultDamage.fAA, this.props.resultDamage.fDamage, this.props.resultDamage.fSneak, this.props.resultDamage.fCrit)}
                        {this.resultBadges("P", "badge bg-poison", this.props.resultDamage.pAA, this.props.resultDamage.pDamage, this.props.resultDamage.pSneak, this.props.resultDamage.pCrit)}
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {this.resultBadges("C", "badge bg-cold", this.props.resultDamage.cAA, this.props.resultDamage.cDamage, this.props.resultDamage.cSneak, this.props.resultDamage.cCrit)}
                        {this.resultBadges("R", "badge bg-rad", this.props.resultDamage.rAA, this.props.resultDamage.rDamage, this.props.resultDamage.rSneak, this.props.resultDamage.rCrit)}
                    </Row>
                </Col>
                </Row>

            </Card.Footer>
        </Card>);
    }
}
