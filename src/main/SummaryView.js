import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import MainInfoButton from './MainInfoButton';
import { keyValueRow } from '../helpers/RowBuilder';
import { ammo, fireRate, addText } from '../helpers/Emoji';
import Strings from '../helpers/Strings';
import Button from 'react-bootstrap/Button';
import TemplateTools from '../templates/TemplateTools';


export function buildExtraDamageView(extraDamage, setExtraDamage, boostDamageRef, setBoostDamage, info=false) {
    function useCrit(e) {
        extraDamage.useCrit = e.target.checked;
        setExtraDamage({...extraDamage});
    }

    function useSneak(e) {
        extraDamage.useSneak = e.target.checked;
        const card = boostDamageRef.current.follow_through;
        card.displayed_value = (card.is_used && extraDamage.useSneak) ? card.value : 0.0;
        setExtraDamage({...extraDamage});
        setBoostDamage({...boostDamageRef.current});
    }

    function useHead(e) {
        extraDamage.useHead = e.target.checked;
        setExtraDamage({...extraDamage});
    }
    const infoButton = (info) ? (<MainInfoButton />) : (<></>);
    return (
        <Stack className='p-0 m-0 justify-content-evenly' direction="horizontal" gap={1}>
            <UCheckbox onChange={useCrit} checked={extraDamage.useCrit}><strong className="ps-1"><small>☠️ CRIT</small></strong></UCheckbox>
            <UCheckbox onChange={useSneak} checked={extraDamage.useSneak}><strong className="ps-1"><small>🐍 SNEAK</small></strong></UCheckbox>
            <UCheckbox onChange={useHead} checked={extraDamage.useHead}><strong className="ps-1"><small>🤕 HEAD</small></strong></UCheckbox>
            {infoButton}
        </Stack>
    );
}

export function getFireRateLabel(weaponType) {
    const isRanged = TemplateTools.isWeaponRangedByType(weaponType);
    const fireRateLabel = Strings.getFireRate(weaponType) + ":";
    return (isRanged) ? (addText(fireRate, '0.7rem', '0.27rem', fireRateLabel)) : ('👊🏼 ' + fireRateLabel);
}

export function buildExtraDamageButtons(extraDamage, setExtraDamage) {
    function crf(e) {
        extraDamage.critFreq -= 1;
        if (extraDamage.critFreq === 0) {
            extraDamage.critFreq = 7;
        }
        setExtraDamage({...extraDamage});
    }
    function hef(e) {
        extraDamage.headFreq += 10;
        if (extraDamage.headFreq > 100) {
            extraDamage.headFreq = 20;
        }
        setExtraDamage({...extraDamage});
    }
    return (
        <div className="text-muted d-flex justify-content-between">
            <Button variant="blue-white-border" style={{ width: '6.5rem', height: '2rem'}} className="ms-2 me-2" onClick={crf}><strong>☠️ Fr: 1 / {extraDamage.critFreq}</strong></Button>
            <Button variant="blue-white-border" style={{ width: '6.5rem', height: '2rem'}} className="ms-2 me-2" onClick={hef}><strong>🤕 Fr: {extraDamage.headFreq}%</strong></Button>
        </div>
    );
}

export default function SummaryView(props) {
    let damageText = "";
    let fireRateText = "";
    let displayedCrit = 0;
    let displayedSneak = 0;
    let reloadTime = 0;
    let ammoCapacity = 0;
    let tDamage = 0;
    let shotSize = 1;
    let fRate = 10;
    if (props.resultDamage && Object.keys(props.resultDamage).length > 0) {
        reloadTime = props.resultDamage.reloadTime;
        displayedCrit = props.resultDamage.displayedCrit;
        displayedSneak = props.resultDamage.displayedSneak;
        tDamage = props.resultDamage.tDamage;
        shotSize = props.resultDamage.shotSize;
        damageText = tDamage.toFixed(1) + " x " + shotSize;
        fRate = props.resultDamage.fireRate;
        fireRateText = fRate.toFixed(0) + " - " + (fRate / 10.0).toFixed(2) + " shots / sec";
        ammoCapacity = props.resultDamage.ammoCapacity;
    }
    const fireRateLabel = getFireRateLabel(props.resultDamage.weaponType);
    return (
        <Card className={props.className}>
            <Card.Header className="pe-0 ps-0">
                {buildExtraDamageView(props.extraDamage, props.setExtraDamage, props.boostDamageRef, props.setBoostDamage, true)}
            </Card.Header>
            <Card.Body className="pt-0 pb-0">
                {keyValueRow((<span className="pt-0 pb-0"><strong>💥 Damage:</strong></span>), (<span className="pt-0 pb-0"><strong>{damageText}</strong></span>), "default", "red")}
                {keyValueRow((<span className="mt-0 mb-0"><strong>☠️ Crit:</strong></span>), (<span className="mt-1 mb-1"><strong>{"+" + displayedCrit + "%"}</strong></span>), "default", "magenta")}
                {keyValueRow((<span className="mt-0 mb-0"><strong>🐍 Sneak:</strong></span>), (<span className="mt-1 mb-1"><strong>{"+" + displayedSneak + "%"}</strong></span>), "default", "green")}
                {keyValueRow((<span className="mt-0 mb-0"><strong>{fireRateLabel}</strong></span>), (<span className="mt-1 mb-1"><strong>{fireRateText}</strong></span>), "default", "purple")}
                {keyValueRow((<div className="mt-0 mb-0"><strong>{addText(ammo, '0.9rem', '0rem', "Ammo:")}</strong></div>), (<span className="mt-1 mb-1"><strong>{ammoCapacity}</strong></span>), "default", "default")}
                {keyValueRow((<span className="mt-0 mb-0"><strong>⌛ Reload:</strong></span>), (<span className="mt-1 mb-1"><strong>{reloadTime.toFixed(1) + " s"}</strong></span>), "default", "blue")}
            </Card.Body>
            <Card.Footer className="ps-0 pe-0">
                {buildExtraDamageButtons(props.extraDamage, props.setExtraDamage)}
            </Card.Footer>
        </Card>
    );
}