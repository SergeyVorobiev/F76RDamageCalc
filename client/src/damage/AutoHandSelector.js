import { Radio } from 'antd';
import { memo } from 'react';


function empty() {
    return (
        <></>
    );
}

function auto(wSpec, setWSpec) {
    const onChange = (e) => {
        wSpec.is_auto = parseInt(e.target.value);
        setWSpec({...wSpec});
    };

    return (
        <div className="pt-2 pb-2 d-flex justify-content-center">
            <Radio.Group value={wSpec.is_auto.toFixed(0)} onChange={onChange}>
                <Radio.Button value="0">Non Automatic</Radio.Button>
                <Radio.Button value="1">Automatic</Radio.Button>
            </Radio.Group>
        </div>
    );
}

function hand(wSpec, setWSpec) {
    const onChange = (e) => {
        wSpec.hand = parseInt(e.target.value);
        setWSpec({...wSpec});
    };

    return (
        <div className="pt-2 pb-2 d-flex justify-content-center">
            <Radio.Group value={wSpec.hand.toFixed(0)} onChange={onChange}>
                <Radio.Button value="1">One Handed</Radio.Button>
                <Radio.Button value="2">Two Handed</Radio.Button>
            </Radio.Group>
        </div>
    );
}

function content(wSpec, setWSpec) {
    if (wSpec.type === "Melee") {
        return hand(wSpec, setWSpec);
    } else if (wSpec.type === "Heavy" || wSpec.type === "Rifle" || wSpec.type ==="Shotgun" || wSpec.type === "Pistol") {
        return auto(wSpec, setWSpec);
    }
    return empty();
}

const AutoHandSelector = memo(function AutoHandSelector({wSpec, setWSpec}) {
    return (
       <>{content(wSpec, setWSpec)}</>
    );
});

export default AutoHandSelector;