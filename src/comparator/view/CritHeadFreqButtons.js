import Button from 'react-bootstrap/Button';
import { memo } from 'react';


const CritHeadFreqButtons = memo(function CritHeadFreqButtons(props) {
    function crf(e) {
        props.extraDamage.critFreq -= 1;
        if (props.extraDamage.critFreq === 0) {
            props.extraDamage.critFreq = 7;
        }
        props.setFUpdater({...props.fUpdater});
    }

    function hef(e) {
        props.extraDamage.headFreq += 10;
        if (props.extraDamage.headFreq > 100) {
            props.extraDamage.headFreq = 20;
        }
        props.setFUpdater({...props.fUpdater});
    }
    return (
        <div className="mt-2 text-muted d-flex justify-content-between">
            <Button variant="blue-white-border" style={{ width: '6.5rem', height: '1.5rem'}} className="ms-2 me-2" onClick={crf}><strong>☠️ Fr: 1 / {props.extraDamage.critFreq}</strong></Button>
            <Button variant="blue-white-border" style={{ width: '6.5rem', height: '1.5rem'}} className="ms-2 me-2" onClick={hef}><strong>🤕 Fr: {props.extraDamage.headFreq}%</strong></Button>
        </div>
    )
});

export default CritHeadFreqButtons;