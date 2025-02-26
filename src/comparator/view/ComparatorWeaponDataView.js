import { Collapse, Divider, ConfigProvider } from 'antd';
import Button from 'react-bootstrap/Button';
import { getImageElement } from '../../helpers/WeaponImages';
import BoostRowView from '../../snapshot/BoostRowView';
import { getUsedPerks } from '../../snapshot/BoostRowView';
import ModView from '../../snapshot/ModView';
import { getLegendaryBoxView } from '../../helpers/LegendaryView';
import { getLegendaryNameFromSpec } from '../../helpers/LegendaryProvider';
import Row from 'react-bootstrap/Row';
import { Arrow } from '../../svg/SVGIcons';
import { convertStuffBoost } from "../../entities/EStuffBoost";
import { leftRight2 } from "../../helpers/RowBuilder";
import ParametersApplier from '../../templates/calc/ParametersApplier';
import WeaponBadgeView from '../../helpers/views/WeaponBadgeView';
import WeaponFactory from '../../damage/weapon/WeaponFactory';
import ConsumablesBuilder from '../../consumables/ConsumablesBuilder';
import Stack from 'react-bootstrap/Stack';
import { UCheckbox } from '../../viewComponents/checkbox/UCheckbox';
import { Slider } from 'antd';


const marks100 = {
    5: <small>5%</small>,
    20: <small>20%</small>,
    40: <small>40%</small>,
    60: <small>60%</small>,
    80: <small>80%</small>,
    100: <small>100%</small>,
};

function getLabel(defTitle, color, weaponData) {
    const left = (weaponData) ? weaponData.wSpec.defaultName : defTitle;
    const right = (weaponData && weaponData.wSpec.iconName !== "") ? getImageElement(weaponData.wSpec.iconName, '2rem') : (<div style={{height: '2rem'}} />);
    return (
        <div style={{display: 'flex', 'flexDirection': 'row'}}>
            <div className="comparator-title">
                <b style={{color: color}}>{left}</b>
            </div>
            <div className="w-100 d-flex justify-content-end">
                {right}
            </div>
        </div>
    );
}

function getApplyButton(props, data) {
    function onClick(e) {
        props.setLoading(true);
        setTimeout(() => {
            ParametersApplier.applyCalculatedParameters(data, props);
            props.setLoading(false);
        }, 100);
    }
    if (!data) {
        return (<></>);
    }
    return (<Button size="sm" variant="warning" onClick={onClick}><b><small>Apply</small></b></Button>);
}

function getContent(props) {
    const data = props.data;
    function onClick(e) {
        const dataRef = props.weaponDataRef.current;
        const setData = props.setData;
        const newData = {
            player: dataRef.playerRef.current,
            playerStats: dataRef.playerStatsRef.current,
            boostDamage: dataRef.boostDamageRef.current,
            wSpec: dataRef.wSpecRef.current,
            extraDamage: dataRef.extraDamageRef.current,
            additionalDamages: dataRef.additionalDamagesRef.current,
            consumableList: convertStuffBoost(dataRef.stuffBoostRef.current),
            accuracy: 100,
        }
        const copyData = JSON.parse(JSON.stringify(newData));
        setData(copyData);
    }
    return (
        <>
            {weaponItemView(data, props.setData)}
            <div className="m-3" />
            {leftRight2(getApplyButton(props, data), <Button size="sm" variant="warning" onClick={onClick}><b><small>Set</small></b></Button>)}
        </>
    );
}

function weaponView(weapon, player, playerStats) {
    return (
        <>
            <WeaponBadgeView weapon={weapon} player={player} playerStats={playerStats} />
        </>
    );
}

function weaponItemView(data, setData) {
    if (!data) {
        return (<></>);
    }
    const [, allStuffBoosts,] = ConsumablesBuilder.buildFromList(data.consumableList, data.player);
    const weapon = new WeaponFactory(data.wSpec, data.boostDamage, data.extraDamage, data.additionalDamages, allStuffBoosts, data.playerStats).build();
    const wSpec = data.wSpec;
    const boostDamage = data.boostDamage;
    const stuff = data.consumableList;
    const modTitle = (!wSpec.mods || wSpec.mods.length === 0) ? null : (<Divider className="p-0 mt-3 mb-1">Mods</Divider>);
    const usedPerks = getUsedPerks(boostDamage);
    const boostTitle = (stuff.length === 0 && usedPerks.length === 0) ? null : (<Divider className="p-0 mt-3 mb-1">Boosts</Divider>);
    return (
        <>
            <div className="pb-2" style={{backgroundColor: '#fafafa', borderRadius: '5px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#cfcfcf'}}>
                <Divider className="mt-1 mb-1">Settings</Divider>
                {extraDamageView(data, setData)}
            </div>
            {weaponView(weapon, data.player, data.playerStats)}
            {getLegendary(wSpec)}
            {modTitle}
            <ModView mods={wSpec.mods} fontSize='0.75rem' />
            {boostTitle}
            <BoostRowView boostDamage={boostDamage} stuff={stuff} />
        </>
    );
}

function extraDamageView(data, setData) {
    function useCritChanged(e) {
        data.extraDamage.useCrit = e.target.checked;
        setData({...data});
    }

    function useSneakChanged(e) {
        data.extraDamage.useSneak = e.target.checked;
        const card = data.boostDamage.follow_through;
        card.displayed_value = (card.is_used && data.extraDamage.useSneak) ? card.value : 0.0;
        setData({...data});
    }

    function useHeadChanged(e) {
        data.extraDamage.useHead = e.target.checked;
        setData({...data});
    }

    function crf(e) {
        data.extraDamage.critFreq -= 1;
        if (data.extraDamage.critFreq === 0) {
            data.extraDamage.critFreq = 7;
        }
        setData({...data});
    }

    function hef(e) {
        data.extraDamage.headFreq += 10;
        if (data.extraDamage.headFreq > 100) {
            data.extraDamage.headFreq = 20;
        }
        setData({...data});
    }
    function accuracyChanged(e) {
        data.accuracy = e;
        setData({...data});
    }
    return (
        <>
            <Stack className='p-0 m-0 justify-content-evenly' direction="horizontal" gap={1}>
                <UCheckbox onChange={useCritChanged} checked={data.extraDamage.useCrit}><strong className="ps-1"><small>☠️ CRIT</small></strong></UCheckbox>
                <UCheckbox onChange={useSneakChanged} checked={data.extraDamage.useSneak}><strong className="ps-1"><small>🐍 SNEAK</small></strong></UCheckbox>
                <UCheckbox onChange={useHeadChanged} checked={data.extraDamage.useHead}><strong className="ps-1"><small>🤕 HEAD</small></strong></UCheckbox>
            </Stack>
            <div className="mt-3 text-muted d-flex justify-content-between">
                <Button variant="blue-white-border" style={{ width: '6.5rem', height: '1.5rem'}} className="ms-2 me-2" onClick={crf}><strong>☠️ Fr: 1 / {data.extraDamage.critFreq}</strong></Button>
                <Button variant="blue-white-border" style={{ width: '6.5rem', height: '1.5rem'}} className="ms-2 me-2" onClick={hef}><strong>🤕 Fr: {data.extraDamage.headFreq}%</strong></Button>
            </div>
            <div className="pb-0 pt-1 ps-3 pe-3">
                <b style={{fontSize: '0.65rem'}}>Accuracy</b>
                <Slider open={true} onChange={accuracyChanged} marks={marks100} min={5} max={100} step={1} value={data.accuracy} />
            </div>
        </>
    );
}

function getLegendary(wSpec) {
    const leg1 = getLegendaryNameFromSpec(wSpec, 1);
    const leg2 = getLegendaryNameFromSpec(wSpec, 2);
    const leg3 = getLegendaryNameFromSpec(wSpec, 3);
    const leg4 = getLegendaryNameFromSpec(wSpec, 4);
    const leg5 = getLegendaryNameFromSpec(wSpec, 5);
    const title = ((!leg1 || leg1 === "") && (!leg2 || leg2 === "") && (!leg3 || leg3 === "") && (!leg4 || leg4 === "") && (!leg5 || leg5 === "")) ? null : (<Divider className="p-0 mt-0 mb-1">Legendary</Divider>);
    return (
        <>
            {title}
            <Row className="m-1 d-flex justify-content-center">
                {getLegendaryBoxView(leg1, 1)}
                {getLegendaryBoxView(leg2, 2)}
                {getLegendaryBoxView(leg3, 3)}
                {getLegendaryBoxView(leg4, 4)}
                {getLegendaryBoxView(leg5, 5)}
            </Row>
        </>
    );
}

function getExpandIcon(isActive) {
    const rotate = (isActive) ? "rotate(180deg)" : "rotate(90deg)";
    return (
        <div style={{transform: "translate(0, 5px) " + rotate}}>
            <Arrow />
        </div>
    );
}

export default function ComparatorWeaponDataView(props) {
    const items = [
        {
            key: '1',
            label: getLabel(props.defTitle, props.color, props.data),
            children: getContent(props),
        },
    ];

    return (
        <div className="mt-2">
            <ConfigProvider
                theme={
                    {
                        components: {
                            Collapse: {
                                headerPadding: "2px 8px",
                                contentPadding: '8px',
                            },
                        },
                        token: {
                            fontSizeIcon: "36px",
                        },
                    }
                }>
                <Collapse accordion expandIcon={({ isActive }) => getExpandIcon(isActive)} items={items} />
            </ConfigProvider>
        </div>
    );
}