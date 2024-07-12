import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { bullet, ammo, fireRate } from '../helpers/Emoji';
import { Tag, Divider, Checkbox, Collapse } from 'antd';
import Button from 'react-bootstrap/Button';
import { keyValueBadge } from '../helpers/RowBuilder';
import { getRowWithImage } from '../helpers/WTypeDropdown'
import { getImageElement } from '../helpers/WeaponImages'


export default function WeaponTemplate({index, templates, setTemplates, setModalTemplate}) {
    const template = templates[index];
    function modRow(modSameType, modsSameType, checkMod, bordered=true, colorNotUsed="default", colorUsed="purple") {
        const color = (modSameType.isUsed) ? colorUsed : colorNotUsed;
        return (
            <Row>
                <div class="col d-flex justify-content-start mb-2">
                    <Tag style={{ width: '16rem' }} bordered={bordered} color={color}><div className="m-0 p-1"><strong>{modSameType.name}</strong></div></Tag>
                </div>
                 <div class="col d-flex justify-content-end mb-2 me-2 pe-1">
                    <Checkbox onChange={(e) => checkMod(e, modSameType, modsSameType)} checked={modSameType.isUsed}></Checkbox>
               </div>
            </Row>
        );
    };

    function resultBadges(style, left1, right1, left2, right2, left3, right3) {
        return (
            <div class="col d-flex justify-content-center">
                <Stack className='pb-1' direction="horizontal" gap={1}>
                    {keyValueBadge(style, '7rem', left1,  right1)}
                    {keyValueBadge(style, '7rem', left2,  right2)}
                    {keyValueBadge(style, '7rem', left3,  right3)}
                </Stack>
            </div>
        );
    };

    function applyEffects(effects, isUsed) {
        for (let i = 0; i < effects.length; i++) {
            const effect = effects[i];
            const fieldName = effect[0];
            const coef = effect[1];
            const resultName = effect[2];
            const op = effect[3];
            if (isUsed) {
                if (op === "mulAdd") {
                    template[resultName][1] += (template[fieldName][0] * coef);
                } else if (op === "mulSet") {
                    template[resultName][1] = (template[fieldName][0] * coef);
                } else if (op === "add") {
                    template[resultName][1] += coef;
                } else if (op === "set") {
                    template[resultName][1] = coef;
                }
            } else {
                if (op === "mulAdd") {
                    template[resultName][1] -= (template[fieldName][0] * coef);
                } else if (op === "mulSet") {
                    template[resultName][1] = template[resultName][0];
                } else if (op === "add") {
                    template[resultName][1] -= coef;
                } else if (op === "set") {
                    template[resultName][1] = template[resultName][0];
                }
            }
        }
    }

    function checkMod(e, modSameType, modsSameType) {
        const check = !modSameType.isUsed;

        // Disable mods because only one mod of the same type can be selected at the same time.
        for (let i = 0; i < modsSameType.length; i++) {
            const modSameTypeC = modsSameType[i];
            if (modSameTypeC.isUsed) {
                modSameTypeC.isUsed = false;
                applyEffects(modSameTypeC.effects, false);
            }
        }
        if (check) {
            modSameType.isUsed = check;
            applyEffects(modSameType.effects, check);
        }
        setTemplates([...templates]);
    }

    let result = [];
    let items = [];
    // All mods
    let k = 0;
    for (let i = 0; i < template.mods.length; i++) {
        const modsSameType = template.mods[i].categoryMods;
        let children = [];

        // Modes of one type
        for (let j = 0; j < modsSameType.length; j++) {
            const modSameType = modsSameType[j];
            children.push(<div key={k}>{modRow(modSameType, modsSameType, checkMod)}</div>);
            k += 1;
        }
        const item = {
                key: i,
                label: template.mods[i].categoryName,
                children: children,
        }
        items.push(item);
    }
    result.push(<Collapse items={items} />)
    const fireRateText = (template.isAuto[1]) ? template.autoRate[1].toFixed(2) : (10 / template.manualRate[1]).toFixed(2);
    const iSize = '0.75rem';
    return (
        <div className="ps-1 pe-1 pb-2" key={index}>
            <Accordion.Item key={index} eventKey={index} className="p-0 m-0">
                <Accordion.Header key={index}>
                    <Col className="col-1 d-flex justify-content-start">
                        {getImageElement(template.name.toLowerCase().replaceAll(" ", "_"))}
                    </Col>
                    <Col className="col-10 ms-2">
                        <strong>{template.name}</strong>
                    </Col>
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <div class="col d-flex justify-content-start mb-2">
                            <Tag bordered={true} color="default"><h6 className="m-0 p-1"><strong>Level: {template.level}</strong></h6></Tag>
                        </div>
                         <div class="col d-flex justify-content-end mb-2 pe-1">
                            <Tag bordered={true} color="volcano"><h6 className="m-0 p-1"><strong>{getRowWithImage(template.type)}</strong></h6></Tag>
                       </div>
                    </Row>
                    <Divider className='mt-1 mb-2'></Divider>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-ballistic", '💥 B', template.bbDamage[1].toFixed(2), '💥 M', template.bmDamage[1].toFixed(2), '💥 T', template.btDamage[1].toFixed(2))}
                                {resultBadges("badge bg-energy", '⚡ B', template.ebDamage[1].toFixed(2), '⚡ M', template.emDamage[1].toFixed(2),  '⚡ T', template.etDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-fire", '🔥 B', template.fbDamage[1].toFixed(2), '🔥 M', template.fmDamage[1].toFixed(2), '🔥 T', template.ftDamage[1].toFixed(2))}
                                {resultBadges("badge bg-poison", '☣️ B', template.pbDamage[1].toFixed(2), '☣️ M', template.pmDamage[1].toFixed(2), '☣️ T', template.ptDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-cold", '❄️️ B', template.cbDamage[1].toFixed(2), '❄️ M', template.cmDamage[1].toFixed(2), '❄️ T', template.ctDamage[1].toFixed(2))}
                                {resultBadges("badge bg-rad", '☢️ B', template.rbDamage[1].toFixed(2), '☢️️ M', template.rmDamage[1].toFixed(2), '☢️ T', template.rtDamage[1].toFixed(2))}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-lite", bullet(iSize), template.shotSize[1].toFixed(0), "⌛", template.reloadTime[1].toFixed(2), fireRate(iSize), fireRateText)}
                                {resultBadges("badge bg-lite", ammo(iSize), template.ammo[1].toFixed(0), "🛡️", template.antiArmor[1].toFixed(2), "💪", template.strengthBoost[1].toFixed(2))}
                                {resultBadges("badge bg-lite", "☠️", template.crit[1].toFixed(2), "💣", template.exp[1].toFixed(2), "🐲", template.cd[1].toFixed(2))}
                            </Row>
                        </Col>
                    </Row>
                    <Divider className='mt-2 mb-2'></Divider>
                    {result}
                    <span className='d-flex justify-content-center'>
                        <Button className='ms-0 mt-3 mb-0' onClick={(e) => setModalTemplate({id: index, show: true})}>Apply</Button>
                    </span>
                </Accordion.Body>

            </Accordion.Item>
        </div>
    );
};