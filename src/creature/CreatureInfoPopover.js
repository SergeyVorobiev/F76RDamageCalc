import Popover from 'react-bootstrap/Popover';
import Stack from 'react-bootstrap/Stack';
import { Divider } from 'antd';
import { keyValueRow } from '../helpers/RowBuilder';
import { truncate } from '../helpers/Input';
import { tAmmo, addText } from '../helpers/Emoji';
import { millisToTime } from '../helpers/Time';
import CreatureDataProvider from '../creature/CreatureDataProvider';
import { Tag } from 'antd';


function getResBadge(className, value, immune) {
    const result = (immune) ? "Infinity" : value.toFixed(1);
    return (
        <span style={{ width: '2.7rem' }} className={className}><small>{result}</small></span>
    );
}

function prepareTags(creature) {
    const tags3 = [];
    let tags;
    for (let i = 0; i < creature.tags.length; i++) {
        if (i % 3 === 0) {
            tags = [];
            tags3.push(tags);
        }
        tags.push(creature.tags[i]);
    }
    const result = [];
    for (let i = 0; i < tags3.length; i++) {
        const curTags = tags3[i];
        result.push(<div key={curTags.toString()} className="mt-1 mb-1 p-0 d-flex justify-content-center"><Tag className="m-0" color="purple"><b>{curTags.join(" ∙ ")}</b></Tag></div>);
    }
    return result;
}

function showDamageIf(what, damageLine, notShow=false) {
    if (notShow || !damageLine || damageLine === "" || damageLine === 0 || damageLine.includes("0.0 - ↑0.0")) {
        return (<></>);
    }
    return what;
}

export function buildCreatureInfo2(creature, resultDamage) {
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
    }
    const showHeadExp = (creature.explosiveDamage === creature.headExpShotDamage);
    const showCritHeadExp = (creature.critExplosiveDamage === creature.critExplosiveHeadDamage);
    let capitalized = CreatureDataProvider.capitalizeCreatureName(creature.name);
    return (
        <div>
            <div className='d-flex pb-2 justify-content-center'><b>{capitalized} (Lvl: {creature.level})</b></div>
            <Stack className='pt-0 pb-2 justify-content-center' direction="horizontal" gap={1}>
                {getResBadge("badge bg-ballistic-shadow", armor[0], false)}
                {getResBadge("badge bg-energy-shadow", armor[1], false)}
                {getResBadge("badge bg-fire-shadow", armor[2], false)}
                {getResBadge("badge bg-poison-shadow", armor[3], creature.immuneToPoison)}
                {getResBadge("badge bg-cold-shadow", armor[4], false)}
                {getResBadge("badge bg-rad-shadow", armor[5], creature.immuneToRadiation)}
            </Stack>
            <Stack className='pb-0' direction="vertical" gap={0}>
                {keyValueRow("❤️ Health:", creature.h.toFixed(2), "default", "red")}
                {keyValueRow("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange")}
                {showDamageIf(keyValueRow("🐍 Sneak:", creature.sneak, "default", "green"), creature.sneak)}
                {showDamageIf(keyValueRow("☠️ Crit:", creature.crit, "default", "magenta"), creature.crit)}
                {keyValueRow("💥 Total Damage:", creature.totalDamage, "default", "blue")}
                {showDamageIf(keyValueRow("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage)}
                {showDamageIf(keyValueRow("🤕 HShot (" + creature.headShot.toFixed(2) + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage)}
                {showDamageIf(keyValueRow("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage)}
                {showDamageIf(keyValueRow("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage, showHeadExp)}
                {showDamageIf(keyValueRow("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage, showCritHeadExp)}
                {keyValueRow(addText(tAmmo, '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink")}
                {keyValueRow("Reloads:", creature.reloads, "default", "green")}
                {keyValueRow("Reloads Time:", millisToTime(creature.reloadsTime * 1000), "default", "green")}
                {keyValueRow("Life Time:", millisToTime(creature.lifeTime), "default", "brown")}
            </Stack>
        </div>
    );
}
export function buildCreatureInfo(creature, resultDamage, showDefaultResistance, weaponName=null) {
    let weaponSection;
    let wNameTrunc = "";
    if (!weaponName) {
        weaponSection = (<></>);
    } else {
        wNameTrunc = truncate(weaponName, 55);
        weaponSection = (
            <>
                <Divider className='p-0 m-1 mb-3'></Divider>
                <span className="badge bg-warning mb-0 text-dark p-2 shadow-outline-unselected"><small>{wNameTrunc}</small></span>
            </>
        );
    }
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
    }
    const showHeadExp = (creature.explosiveDamage === creature.headExpShotDamage);
    const showCritHeadExp = (creature.critExplosiveDamage === creature.critExplosiveHeadDamage);
    let defaultResistance = (<></>);
    if (showDefaultResistance) {
        defaultResistance = (
            <>
                <Stack className='pt-0 pb-0 d-flex justify-content-center' direction="horizontal" gap={1}>
                    {getResBadge("badge bg-ballistic-shadow", creature.b, false)}
                    {getResBadge("badge bg-energy-shadow", creature.e, false)}
                    {getResBadge("badge bg-fire-shadow", creature.f, false)}
                    {getResBadge("badge bg-poison-shadow", creature.p, creature.immuneToPoison)}
                    {getResBadge("badge bg-cold-shadow", creature.c, false)}
                    {getResBadge("badge bg-rad-shadow", creature.r, creature.immuneToRadiation)}
                </Stack>
                <Divider className='p-0 m-0'>v</Divider>
            </>
        );
    }
    return (
        <div>
            {defaultResistance}
            <Stack className='pt-0 pb-2 d-flex justify-content-center' direction="horizontal" gap={1}>
                {getResBadge("badge bg-ballistic-shadow", armor[0], false)}
                {getResBadge("badge bg-energy-shadow", armor[1], false)}
                {getResBadge("badge bg-fire-shadow", armor[2], false)}
                {getResBadge("badge bg-poison-shadow", armor[3], creature.immuneToPoison)}
                {getResBadge("badge bg-cold-shadow", armor[4], false)}
                {getResBadge("badge bg-rad-shadow", armor[5], creature.immuneToRadiation)}
            </Stack>
            {prepareTags(creature)}
            <Stack className='pb-0' direction="vertical" gap={0}>
                {keyValueRow(" Body:", creature.curBody, "default", "default")}
                {keyValueRow("❤️ Health:", creature.h.toFixed(2), "default", "red")}
                {keyValueRow("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange")}
                {showDamageIf(keyValueRow("🐍 Sneak:", creature.sneak, "default", "green"), creature.sneak)}
                {showDamageIf(keyValueRow("☠️ Crit:", creature.crit, "default", "magenta"), creature.crit)}
                {keyValueRow("💥 Total Damage:", creature.totalDamage, "default", "blue")}
                {showDamageIf(keyValueRow("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage)}
                {showDamageIf(keyValueRow("🤕 HShot (" + creature.headShot.toFixed(2) + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage)}
                {showDamageIf(keyValueRow("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage)}
                {showDamageIf(keyValueRow("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage, showHeadExp)}
                {showDamageIf(keyValueRow("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage)}
                {showDamageIf(keyValueRow("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage, showCritHeadExp)}
                {keyValueRow(addText(tAmmo, '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink")}
                {keyValueRow("Reloads:", creature.reloads, "default", "green")}
                {keyValueRow("Reloads Time:", millisToTime(creature.reloadsTime * 1000), "default", "green")}
                {keyValueRow("Life Time:", millisToTime(creature.lifeTime), "default", "brown")}
                {weaponSection}
            </Stack>
        </div>
    );
}

export const creatureInfoPopover = (creature, resultDamage, weaponName) => {
    let capitalized = CreatureDataProvider.capitalizeCreatureName(creature.name);
    return (
        <Popover title="CreatureInfoPopover" className="popover-adjustable">
            <Popover.Header className="d-flex justify-content-center"><strong style={{fontSize: '0.9rem'}}>{capitalized} (Level: {creature.level})</strong></Popover.Header>
            <Popover.Body className="popover-body3">
                {buildCreatureInfo(creature, resultDamage, true, weaponName)}
            </Popover.Body>
        </Popover>
    );
};

export function buildCreatureSnortInfo(creature) {
    return (
        <div>
            <Stack className='pt-0 pb-2 justify-content-center' direction="horizontal" gap={1}>
                {getResBadge("badge bg-ballistic-shadow", creature.b, false)}
                {getResBadge("badge bg-energy-shadow", creature.e, false)}
                {getResBadge("badge bg-fire-shadow", creature.f, false)}
                {getResBadge("badge bg-poison-shadow", creature.p, creature.immuneToPoison)}
                {getResBadge("badge bg-cold-shadow", creature.c, false)}
                {getResBadge("badge bg-rad-shadow", creature.r, creature.immuneToRadiation)}
            </Stack>
            {prepareTags(creature)}
            <Stack className='pb-0' direction="vertical" gap={0}>
                {keyValueRow("❤️ Health:", creature.h.toFixed(2), "default", "red")}
                {keyValueRow("🧽 Damage Reduction:", (creature.damageReduction * 100).toFixed(0) + "%", "default", "orange")}
            </Stack>
        </div>
    );
}

export const creatureShortInfoPopover = (creature, resultDamage, weaponName) => {
    let capitalized = CreatureDataProvider.capitalizeCreatureName(creature.name);
    return (
        <Popover title="CreatureInfoPopover" className="popover-adjustable">
            <Popover.Header className="d-flex justify-content-center"><strong style={{fontSize: '0.9rem'}}>{capitalized} (Level: {creature.level})</strong></Popover.Header>
            <Popover.Body className="popover-body3 ms-1">
                {buildCreatureSnortInfo(creature)}
            </Popover.Body>
        </Popover>
    );
};