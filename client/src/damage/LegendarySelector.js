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
import { setCurrentLegendaryIds } from '../helpers/Global';
import { popoverContent } from '../templates/ModPropsPopover';
import { WeaponPopoverOverlay } from '../helpers/WeaponPopoverOverlay';
import { ModParser } from '../helpers/mods/ModParser';
import { Tag } from 'antd';


const legendaryItems = getLegendaryByStar();

const modParser = new ModParser();

function getQuestionMark() {
    return (
        <Badge className="ps-2 pe-2 mb-auto mt-auto" bg={"danger"} style={{cursor: 'point'}} pill>?</Badge>
    );
}

function updateLegendary(wSpec, setWSpec, health) {
    for (let i = 0; i < wSpec.legendary.length; i++) {
        const legendary = wSpec.legendary[i];
        modParser.applyLegendaryModToWSpec(legendary[0], wSpec, i, health, true, true);
    }
    setWSpec({...wSpec});
}

// health, important if a value of a legendary effect depends on health
function getLegendaryDropdown(legendaryInfo, wSpec, setWSpec, health, index) {
    function onSelectCustom(e) {
        modParser.applyLegendaryModToWSpec(wSpec.legendary[index][0], wSpec, index, health, false, false);
        modParser.applyLegendaryModToWSpec(e, wSpec, index, health, false, true);
        wSpec.legendary[index][0] = e;
        setWSpec({...wSpec});
    }
    let result = [];
    const legs = legendaryItems[index];
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
                    <WeaponPopoverOverlay popoverHeader={mod.name} popoverContent={popoverContent(mod)} itemToOverly={getQuestionMark()}></WeaponPopoverOverlay>
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
        <div className="mt-2 d-flex justify-content-end">
            <strong>
                <Tag bordered={false} color={"indigo"}>{effect}</Tag>
            </strong>
        </div>
    );
}

function getLegendaryAdjust(legendaryInfo, wSpec, setWSpec) {
    if (legendaryInfo && legendaryInfo.type !== "Not affect" && legendaryInfo.type !== "Not affect (not tested)") {
        const marksName = "marks" + legendaryInfo.max;
        const effect = legendaryInfo.type;
        return (
            <>
                <LegSlider legendaryInfo={legendaryInfo} marksName={marksName} wSpec={wSpec} setWSpec={setWSpec}></LegSlider>
                {getEffectTag(effect)}
            </>
        );
    } else if (legendaryInfo) {
        return (<>{getEffectTag(legendaryInfo.type)}</>);
    }
    return (<></>);
}

function getLegendaryDetails(legendaryInfo) {
    if (legendaryInfo) {
        return (
            <div className="pt-3 m-3"><strong>{legendaryInfo.description}</strong></div>
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
        setCurrentLegendaryIds(wSpec);
        if (!wSpec.legendaryHealthUpdated) {
            wSpec.legendaryHealthUpdated = true;
            updateLegendary(wSpec, setWSpec, health);
        }
    }, [wSpec, health]);
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