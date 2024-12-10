import { memo } from 'react';
import BSRadio from '../helpers/views/BSRadio';


function empty() {
    return (
        <></>
    );
}

const autoW = {"Non Automatic": 0, "Automatic": 1};
const handW = {"One Handed": 0, "TwoHanded": 1};

function auto(wSpec, setWSpec) {
    const onClick = (e) => {
        wSpec.is_auto = parseInt(e.target.value);
        setWSpec({...wSpec});
    };
    return (
        <BSRadio className="pt-2 pb-2 d-flex justify-content-center" pairs={autoW} selectedValue={wSpec.is_auto} onClick={onClick} />
    );
}

function hand(wSpec, setWSpec) {
    const onClick = (e) => {
        wSpec.hand = parseInt(e.target.value);
        setWSpec({...wSpec});
    };
    return (
        <BSRadio className="pt-2 pb-2 d-flex justify-content-center" pairs={handW} selectedValue={wSpec.hand} onClick={onClick} />
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