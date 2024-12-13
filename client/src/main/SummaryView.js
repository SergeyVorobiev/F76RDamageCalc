import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import MainInfoButton from './MainInfoButton';
import { keyValueRow } from '../helpers/RowBuilder';
import { ammo, fireRate, addText } from '../helpers/Emoji';
import Button from 'react-bootstrap/Button';


export default function SummaryView(props) {
    function updateExtraDamage() {
        props.setExtraDamage({
            ...props.extraDamage,
        });
    }

    function useCrit(e) {
        props.extraDamage.useCrit = e.target.checked;
        updateExtraDamage();
    }

    function useSneak(e) {
        props.extraDamage.useSneak = e.target.checked;
        updateExtraDamage();
    }

    function useHead(e) {
        props.extraDamage.useHead = e.target.checked;
        updateExtraDamage();
    }

    function crf(e) {
        props.extraDamage.critFreq -= 1;
        if (props.extraDamage.critFreq === 0) {
            props.extraDamage.critFreq = 7;
        }
        updateExtraDamage();
    }

    function hef(e) {
        props.extraDamage.headFreq += 10;
        if (props.extraDamage.headFreq > 100) {
            props.extraDamage.headFreq = 20;
        }
        updateExtraDamage();
    }

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
    return (
        <Card className={props.className}>
            <Card.Header className="pe-0 ps-0">
                <Stack className='p-0 m-0 justify-content-evenly' direction="horizontal" gap={1}>
                    <UCheckbox onChange={useCrit} checked={props.extraDamage.useCrit}><strong className="ps-1"><small>☠️ CRIT</small></strong></UCheckbox>
                    <UCheckbox onChange={useSneak} checked={props.extraDamage.useSneak}><strong className="ps-1"><small>🐍 SNEAK</small></strong></UCheckbox>
                    <UCheckbox onChange={useHead} checked={props.extraDamage.useHead}><strong className="ps-1"><small>🤕 HEAD</small></strong></UCheckbox>
                    <MainInfoButton />
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
                <Button variant="blue-white-border" style={{ width: '6.5rem', height: '2rem'}} className="ms-2 me-2" onClick={crf}><strong>☠️ Fr: 1 / {props.extraDamage.critFreq}</strong></Button>
                <Button variant="blue-white-border" style={{ width: '6.5rem', height: '2rem'}} className="ms-2 me-2" onClick={hef}><strong>🤕 Fr: {props.extraDamage.headFreq}%</strong></Button>
            </Card.Footer>
        </Card>
    );
}