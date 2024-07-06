import Accordion from 'react-bootstrap/Accordion';
import Stack from 'react-bootstrap/Stack';
import '../css/style.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { getSymbolText } from '../helpers/Emoji';
import {Tag, Divider, Checkbox, Collapse } from 'antd';
import Button from 'react-bootstrap/Button';


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

    function resultBadges(style, text1, text2, text3) {
        return (
            <div class="col d-flex justify-content-center">
                <Stack className='pb-1' direction="horizontal" gap={1}>
                    <span style={{ width: '7rem' }} class={style}>{text1}</span>
                    <span style={{ width: '7rem' }} class={style}>{text2}</span>
                    <span style={{ width: '7rem' }} class={style}>{text3}</span>
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
    const fireRate = (template.isAuto[1]) ? template.autoRate[1] : (10 / template.manualRate[1]).toFixed(2);
    return (
        <div className="ps-1 pe-1 pb-2" key={index}>
            <Accordion.Item key={index} eventKey={index}>
                <Accordion.Header key={index}>
                    <strong>{template.name}</strong>
                </Accordion.Header>
                <Accordion.Body>
                    <Row>
                        <div class="col d-flex justify-content-start mb-2">
                            <Tag bordered={true} color="default"><h6 className="m-0 p-1"><strong>Level: {template.level}</strong></h6></Tag>
                        </div>
                         <div class="col d-flex justify-content-end mb-2 pe-1">
                            <Tag bordered={true} color="volcano"><h6 className="m-0 p-1"><strong>{template.type}</strong></h6></Tag>
                       </div>
                    </Row>
                    <Divider className='mt-1 mb-2'></Divider>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-ballistic", getSymbolText("B", "B: " + template.bbDamage[1].toFixed(2)), getSymbolText("B", "M: " + template.bmDamage[1].toFixed(2)), getSymbolText("B", "T: " + template.btDamage[1].toFixed(2)))}
                                {resultBadges("badge bg-energy", getSymbolText("E", "B: " + template.ebDamage[1].toFixed(2)), getSymbolText("E", "M: " + template.emDamage[1].toFixed(2)), getSymbolText("E", "T: " + template.etDamage[1].toFixed(2)))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-fire", getSymbolText("F", "B: " + template.fbDamage[1].toFixed(2)), getSymbolText("F", "M: " + template.fmDamage[1].toFixed(2)), getSymbolText("F", "T: " + template.ftDamage[1].toFixed(2)))}
                                {resultBadges("badge bg-poison", getSymbolText("P", "B: " + template.pbDamage[1].toFixed(2)), getSymbolText("P", "M: " + template.pmDamage[1].toFixed(2)), getSymbolText("P", "T: " + template.ptDamage[1].toFixed(2)))}
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-cold", getSymbolText("C", "B: " + template.cbDamage[1].toFixed(2)), getSymbolText("C", "M: " + template.cmDamage[1].toFixed(2)), getSymbolText("C", "T: " + template.ctDamage[1].toFixed(2)))}
                                {resultBadges("badge bg-rad", getSymbolText("R", "B: " + template.rbDamage[1].toFixed(2)), getSymbolText("R", "M: " + template.rmDamage[1].toFixed(2)), getSymbolText("R", "T: " + template.rtDamage[1].toFixed(2)))}
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                {resultBadges("badge bg-lite", "S Size: " + template.shotSize[1].toFixed(0), "R Time: " + template.reloadTime[1].toFixed(2), "F Rate: " + fireRate)}
                                {resultBadges("badge bg-lite", "Ammo: " + template.ammo[1].toFixed(0), "AA: " + template.antiArmor[1].toFixed(2), "Str: " + template.strengthBoost[1].toFixed(2))}
                                {resultBadges("badge bg-lite", "Crit: " + template.crit[1].toFixed(2), "Exp: " + template.exp[1].toFixed(2), "CD: " + template.cd[1].toFixed(2))}
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