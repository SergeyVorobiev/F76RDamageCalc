import Popover from 'react-bootstrap/Popover';
import Stack from 'react-bootstrap/Stack';
import { Divider } from 'antd';
import { keyValueRow } from '../helpers/RowBuilder';
import { truncate } from '../helpers/Input';
import { tAmmo, addText } from '../helpers/Emoji';


function getResBadge(className, value) {
    return (
        <span style={{ width: '2.7rem' }} className={className}><small>{value.toFixed(1)}</small></span>
    );
}

export const creatureInfoPopover = (creature, resultDamage, weaponName) => {
    let armor = null;
    if (resultDamage && Object.keys(resultDamage).length > 0) {
        armor = resultDamage.resultArmor.get(creature.name);
    }
    if (!armor) {
        armor = [creature.b, creature.e, creature.f, creature.p, creature.c, creature.r];
    }
    function showDamageIf(what, damageLine, notShow=false) {
        if (notShow || !damageLine || damageLine === "" || damageLine === 0 || damageLine.includes("0.0 - ↑0.0")) {
            return (<></>);
        }
        return what;
    }
    const wNameTrunc = truncate(weaponName, 55);
    const showHeadExp = (creature.explosiveDamage === creature.headExpShotDamage);
    const showCritHeadExp = (creature.critExplosiveDamage === creature.critExplosiveHeadDamage);
    let capitalized = creature.name.charAt(0).toUpperCase() + creature.name.slice(1);
    capitalized = capitalized.replaceAll("_", " ");
    return (
        <Popover title="CreatureInfoPopover" className="popover-adjustable">
            <Popover.Header className="d-flex justify-content-center"><strong style={{fontSize: '0.9rem'}}>{capitalized} (Level: {creature.level})</strong></Popover.Header>
            <Popover.Body className="popover-body3 ms-1 me-1">
                <Stack className='pt-0 pb-0 d-flex jufstify-content-center' direction="horizontal" gap={1}>
                    {getResBadge("badge bg-ballistic-shadow", creature.b)}
                    {getResBadge("badge bg-energy-shadow", creature.e)}
                    {getResBadge("badge bg-fire-shadow", creature.f)}
                    {getResBadge("badge bg-poison-shadow", creature.p)}
                    {getResBadge("badge bg-cold-shadow", creature.c)}
                    {getResBadge("badge bg-rad-shadow", creature.r)}
                </Stack>
                <Divider className='p-0 m-0'>v</Divider>
                <Stack  className='pt-0 pb-2' direction="horizontal" gap={1}>
                    {getResBadge("badge bg-ballistic-shadow", armor[0])}
                    {getResBadge("badge bg-energy-shadow", armor[1])}
                    {getResBadge("badge bg-fire-shadow", armor[2])}
                    {getResBadge("badge bg-poison-shadow", armor[3])}
                    {getResBadge("badge bg-cold-shadow", armor[4])}
                    {getResBadge("badge bg-rad-shadow", armor[5])}
                </Stack>
                <Stack  className='pb-0' direction="vertical" gap={0}>
                    {keyValueRow(" Body:", creature.body, "default", "default")}
                    {keyValueRow(" Type:", creature.type, "default", "default")}
                    {keyValueRow("❤️ Health:", creature.h.toFixed(2), "default", "red")}
                    {keyValueRow("🧽 Damage Reduction:", creature.damageReduction, "default", "orange")}
                    {showDamageIf(keyValueRow("🐍 Sneak:", creature.sneak, "default", "green"), creature.sneak)}
                    {showDamageIf(keyValueRow("☠️ Crit:", creature.crit, "default", "magenta"), creature.crit)}
                    {keyValueRow("💥 Total Damage:", creature.totalDamage, "default", "blue")}
                    {showDamageIf(keyValueRow("💥 Normal Damage:", creature.normalDamage, "default", "blue"), creature.normalDamage)}
                    {showDamageIf(keyValueRow("🤕 Head Shot (" + creature.headShot + "x):", creature.headShotDamage, "default", "blue"), creature.headShotDamage)}
                    {showDamageIf(keyValueRow("💣 Explosive:", creature.explosiveDamage, "default", "blue"), creature.explosiveDamage)}
                    {showDamageIf(keyValueRow("💣 Explosive Head:", creature.headExpShotDamage, "default", "blue"), creature.headExpShotDamage, showHeadExp)}
                    {showDamageIf(keyValueRow("☠️ Crit:", creature.critNormalDamage, "default", "blue"), creature.critNormalDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Head:", creature.critHeadNormalDamage, "default", "blue"), creature.critHeadNormalDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Explosive:", creature.critExplosiveDamage, "default", "blue"), creature.critExplosiveDamage)}
                    {showDamageIf(keyValueRow("☠️ Crit Head Explosive:", creature.critExplosiveHeadDamage, "default", "blue"), creature.critExplosiveHeadDamage, showCritHeadExp)}
                    {keyValueRow(addText(tAmmo, '0.7rem', '0.27rem', "Ammo / Hits:"), creature.ammo, "default", "pink")}
                    {keyValueRow("Reloads:", creature.reloads, "default", "green")}
                    {keyValueRow("Reloads Time:", creature.reloadsTime.toFixed(2) + " s", "default", "green")}
                    {keyValueRow("Life Time:", creature.lifeTime + " ms", "default", "brown")}
                    <Divider className='p-0 m-1 mb-3'></Divider>
                    <span className="badge bg-warning mb-0 text-dark p-2 shadow-outline-unselected"><small>{wNameTrunc}</small></span>
                </Stack>
            </Popover.Body>
        </Popover>
    );
};