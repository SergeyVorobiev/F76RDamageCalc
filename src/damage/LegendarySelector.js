import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Badge from 'react-bootstrap/Badge';
import { useEffect } from 'react';
import LegSlider from './LegSlider';
import { Collapse } from 'antd';
import { getLegendaryByStar, getLegendary } from '../helpers/LegendaryProvider';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import getMods from '../helpers/Mods';
import { ModParser } from '../helpers/mods/ModParser';
import { Tag } from 'antd';
import { WarningPopover } from '../helpers/WarningPopover';
import StackEffectView from '../helpers/views/StackEffectView';
import  { getWeaponNameById } from '../helpers/TemplatesRegister';


const legendaryItems = getLegendaryByStar();

const modParser = new ModParser(false);

function getQuestionMark() {
    return (
        <Badge className="ps-2 pe-2 mb-auto mt-auto" bg={"danger"} style={{cursor: 'pointer'}} pill>?</Badge>
    );
}

function updateLegendary(wSpec, setWSpec, health) {
    for (let i = 0; i < wSpec.legendary.length; i++) {
        const legendary = wSpec.legendary[i];
        modParser.setAlt(wSpec.alt);
        modParser.applyLegendaryModToWSpec(legendary[0], wSpec, i, health, true, true);
    }
    setWSpec({...wSpec});
}

// In case if use changes damage or weapon type
function recalculateLegendary(wSpec, setWSpec, health) {
    const curLegIds = [];
    for (let i = 0; i < wSpec.legendary.length; i++) {
        curLegIds.push(wSpec.legendary[i][0]);
    }
    for (let i = 0; i < wSpec.legendary.length; i++) {
        modParser.applyLegendaryModToWSpec(wSpec.legendary[i][0], wSpec, i, health, false, false);
        wSpec.legendary[i][0] = curLegIds[i];
        modParser.applyLegendaryModToWSpec(curLegIds[i], wSpec, i, health, false, true);
    }
    setWSpec({...wSpec});
}

// health, important if a value of a legendary effect depends on health
function getLegendaryDropdown(legendaryInfo, wSpec, setWSpec, health, index) {
    function onSelectCustom(e) {
        modParser.setAlt(wSpec.alt);
        modParser.applyLegendaryModToWSpec(wSpec.legendary[index][0], wSpec, index, health, false, false);
        wSpec.legendary[index][0] = e;
        modParser.applyLegendaryModToWSpec(e, wSpec, index, health, false, true);
        setWSpec({...wSpec});
    }
    let result = [];
    const legs = legendaryItems[index];
    legs.sort((leg1, leg2) => {
        if (leg1.name === "None") {
            return -1;
        }
        if (leg2.name === "None") {
            return 1;
        }
        if (leg1.name < leg2.name) {
          return -1;
        }
        if (leg1.name > leg2.name) {
          return 1;
        }

      // names must be equal
      return 0;
    });
    for (let i = 0; i < legs.length; i++) {
        const legName = legs[i].name;
        const legId = legs[i].id;
        result.push(<Dropdown.Item key={i} eventKey={legId}>{legName}</Dropdown.Item>);
    }
    const title = (legendaryInfo) ? legendaryInfo.name : "Legendary";
    const mod = (legendaryInfo) ? getMods().get(legendaryInfo.id) : null;
    function getQM(mod) {
        if (mod) {
            return (
                <Col className="d-flex justify-content-end">
                    <WarningPopover element={getQuestionMark()} message={<StackEffectView item={mod} />} header={mod.name} className="popover-adjustable2" />
                </Col>
            );
        }
        return (<></>);
    };
    return (
        <Row>
            <Col className="d-flex justify-content-start">
                <DropdownButton variant='warning' size="sm" onSelect={onSelectCustom} title={<strong>{title}</strong>}>
                    {result}
                </DropdownButton>
            </Col>
            {getQM(mod)}
        </Row>
    );
}

function getEffectTag(effect) {
    return (
        <div className="mt-2">
            <strong>
                <Tag bordered={false} color={"indigo"}>{effect}</Tag>
            </strong>
        </div>
    );
}

function getLegendaryAdjust(legendaryInfo, wSpec, setWSpec) {
    if (legendaryInfo && legendaryInfo.type !== "Not affect" && legendaryInfo.type !== "Not affect (not tested)") {
        let marksName = "marks" + legendaryInfo.max;
        if (legendaryInfo.id === '007acbf4') {
            marksName = "marks12H";
        }
        let wType = legendaryInfo.wType;
        const wName = getWeaponNameById(wType);
        if (wName) {
            wType = wName;
        }
        return (
            <>
                <LegSlider legendaryInfo={legendaryInfo} marksName={marksName} wSpec={wSpec} setWSpec={setWSpec}></LegSlider>
                <div className="text-muted d-flex justify-content-between">
                    {getEffectTag(wType)}
                    {getEffectTag(legendaryInfo.type)}
                </div>
            </>
        );
    } else if (legendaryInfo) {
        return (
            <div className="text-muted d-flex justify-content-end">
                {getEffectTag(legendaryInfo.type)}
            </div>
        );
    }
    return (<></>);
}

function getLegendaryDetails(legendaryInfo) {
    if (legendaryInfo) {
        return (
            <>
                <div className="pt-3 m-3"><strong>{legendaryInfo.description}</strong></div>
                <div className="pt-3 m-3"><small>{legendaryInfo.notes}</small></div>
            </>
        );
    }
    return (<></>);
}

function legBody(legendaryInfo, wSpec, setWSpec, health, index) {
    return (
        <>
            {getLegendaryDropdown(legendaryInfo, wSpec, setWSpec, health, index)}
            {getLegendaryDetails(legendaryInfo)}
            {getLegendaryAdjust(legendaryInfo, wSpec, setWSpec)}
        </>
    );
}

function getCollapse(header, legendaryInfo, wSpec, setWSpec, health, index) {
    const legName = (legendaryInfo) ? legendaryInfo.name : "";
    const headerName = header + " " + legName;
    const items = [
        {
            key: '1',
            label: <strong>{headerName}</strong>,
            children: <>{legBody(legendaryInfo, wSpec, setWSpec, health, index)}</>,
        },
    ];

    return (
        <div className="mt-2 mb-2">
            <Collapse items={items} />
        </div>
    );
}

export default function LegendarySelector({header, wSpec, setWSpec, health, index}) {
    useEffect(() => {
        if (!wSpec.legendaryHealthUpdated) {
            wSpec.legendaryHealthUpdated = true;
            updateLegendary(wSpec, setWSpec, health);
        }
    }, [wSpec, health]);
    useEffect(() => {
        recalculateLegendary(wSpec, setWSpec, health);
    }, [wSpec.type]);
    useEffect(() => {
        updateLegendary(wSpec, setWSpec, health);
    }, [health]);
    let legendaryInfo = null;
    if (wSpec.legendary[index]) {
        legendaryInfo = getLegendary(wSpec.legendary[index][0]);
    }
    return (
        <>{getCollapse(header, legendaryInfo, wSpec, setWSpec, health, index)}</>
    );
}