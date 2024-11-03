import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Checkbox } from 'antd';
import { WarningPopover } from '../helpers/WarningPopover';


function getPerkColor(category) {
    return "bg-" + category.toLowerCase() + "-card";
}

function badgeIf(value, condition, onClick, style) {
    if (condition) {
        return (<Button className={"p-1" + style} onClick={onClick} style={{width: '2.5rem'}} variant="warning">{value}</Button>)
    }
    return (<></>)
}

function calculateSpecial(boostDamage) {
    for (let key in boostDamage.special) {
        boostDamage.special[key] = 0;
    }
    for (let key in boostDamage) {
        if (key === "special") {
            continue;
        }
        const card = boostDamage[key];
        const special = boostDamage.special;
        const type = card.category.toLowerCase();
        if (card.is_used) {
            special[type] += card.cost[card.rank - 1];
        }
    }
}

function getItem(card, setBoostDamage, boostDamage, xBadge=false, symbol='%', player=null, setPlayer=null) {
    function onClick(e) {
        changeRank();
        calculateSpecial(boostDamage);
        setBoostDamage({
            ...boostDamage,
        });
    }

    function changeRank() {
        const rank_len = card.rank_values.length;
        card.rank = card.rank % rank_len + 1;
        card.value = card.rank_values[card.rank - 1] * card.x;
        if (card.name === "Nerd Rage") {
            card.displayed_value = (card.is_used && player.health.value <= 20.0) ? card.value : 0.0;
        } else {
            card.displayed_value = (card.is_used) ? card.value : 0.0;
        }
        if (card.name === "Party Girl / Boy") {
            if (card.displayed_value === 0) {
                player.alcoholEffects = 1.0;
            } else {
                player.alcoholEffects = card.displayed_value;
            }
            setPlayer({...player});
        } else if (card.name === "Strange In Nums") {
            player.strange = card.displayed_value;
            setPlayer({...player});
        } else if (card.name === "Class Freak") {
            player.freak = card.displayed_value;
            setPlayer({...player});
        }
    }

    function onClickX(e) {
        card.x = card.x % card.max_x + 1;
        card.value = card.rank_values[card.rank - 1] * card.x;
        card.displayed_value = (card.is_used) ? card.value : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }

    function isUsed(e) {
        card.is_used = e.target.checked;
        if (card.name === "Nerd Rage") {
            card.displayed_value = (card.is_used && player.health.value <= 20.0) ? card.value : 0.0;
        } else {
            card.displayed_value = (card.is_used) ? card.value : 0.0;
        }
        if (card.name === "Party Girl / Boy") {
            if (card.displayed_value === 0) {
                player.alcoholEffects = 1.0;
            } else {
                player.alcoholEffects = card.displayed_value;
            }
            setPlayer({...player});
        } else if (card.name === "Strange In Nums") {
            player.strange = card.displayed_value;
            setPlayer({...player});
        } else if (card.name === "Class Freak") {
            player.freak = card.displayed_value;
            setPlayer({...player});
        }
        calculateSpecial(boostDamage);
        setBoostDamage({
            ...boostDamage,
        });
    }
    const outline = card.is_used ?  " shadow-outline" : "";
    const w = (xBadge) ? '9rem' : '11.5rem';
    const cName = "btn text-start " + getPerkColor(card.category);
    const number = card.rank_values[card.rank - 1];
    let info = card.info.replaceAll("{1}", number).replace("{2}", parseInt(number / 4)).replace("{3}", parseInt(number * 2));
    info = info.replaceAll("{4}", number * 3);
    return (
        <Col className="ps-1 pe-1">
            <InputGroup className="justify-content-center mb-1 mt-1 flex-nowrap">
                <InputGroup.Text className={"ps-2 pe-2" + outline} >
                    <Checkbox onChange={isUsed} checked={card.is_used}></Checkbox>
                </InputGroup.Text>
                <Button className={cName + outline} style={{width: w}} onClick={onClick}>
                    <Badge className="ms-0 me-2" bg="warning">{card.cost[card.rank - 1]}</Badge>
                    {card.name}
                </Button>
                {badgeIf("x" + card.x, xBadge, onClickX, outline)}
                <InputGroup.Text className={"justify-content-center p-0" + outline} style={{width: '3.5rem'}}>
                    <div className="badge bg-fire" style={{width: '2.7rem'}}>{card.displayed_value}{symbol}</div>
                </InputGroup.Text>
                <InputGroup.Text className={"ps-1 pe-1 p-0" + outline}>
                    <WarningPopover element={infoButton()} message={info} header="Description" />
                </InputGroup.Text>
            </InputGroup>
        </Col>
    );
}

function infoButton() {
    return (
        <Button className="p-1" variant="white">
            <strong><small>❗</small></strong>
        </Button>
    );
}

function BRow1({setBoostDamage, boostDamage}) {
    return (
        <Row>
            {getItem(boostDamage.incisor, setBoostDamage, boostDamage)}
            {getItem(boostDamage.lock_and_load, setBoostDamage, boostDamage)}
            {getItem(boostDamage.martial_artist, setBoostDamage, boostDamage)}
            {getItem(boostDamage.scattershot, setBoostDamage, boostDamage)}
        </Row>
    );
};

function BRow2({setBoostDamage, boostDamage}) {
    return (
        <Row>
            {getItem(boostDamage.gladiator, setBoostDamage, boostDamage)}
            {getItem(boostDamage.heavy_gunner, setBoostDamage, boostDamage)}
            {getItem(boostDamage.shotgunner, setBoostDamage, boostDamage)}
            {getItem(boostDamage.slugger, setBoostDamage, boostDamage)}
        </Row>
    );
};

function BRow3({setBoostDamage, boostDamage}) {
    return (
        <Row>
            {getItem(boostDamage.iron_fist, setBoostDamage, boostDamage)}
            {getItem(boostDamage.archer, setBoostDamage, boostDamage)}
            {getItem(boostDamage.commando, setBoostDamage, boostDamage)}
            {getItem(boostDamage.rifleman, setBoostDamage, boostDamage)}
        </Row>
    );
};

function BRow4({setBoostDamage, boostDamage}) {
    return (
        <Row>
            {getItem(boostDamage.glow_sight, setBoostDamage, boostDamage)}
            {getItem(boostDamage.bow_before_me, setBoostDamage, boostDamage)}
            {getItem(boostDamage.exterminator, setBoostDamage, boostDamage)}
            {getItem(boostDamage.tank_killer, setBoostDamage, boostDamage)}
        </Row>
    );
};

function BRow5({setBoostDamage, boostDamage, player, setPlayer}) {
    return (
        <Row>
            {getItem(boostDamage.ground_pounder, setBoostDamage, boostDamage)}
            {getItem(boostDamage.tenderizer, setBoostDamage, boostDamage, true)}
            {getItem(boostDamage.party_girl_boy, setBoostDamage, boostDamage, false, "x", player, setPlayer)}
            {getItem(boostDamage.strange_in_numbers, setBoostDamage, boostDamage, false, "%", player, setPlayer)}
        </Row>
    );
};

function BRow6({setBoostDamage, boostDamage, player}) {
    return (
        <Row>
            {getItem(boostDamage.stabilized, setBoostDamage, boostDamage)}
            {getItem(boostDamage.demolition_expert, setBoostDamage, boostDamage)}
            {getItem(boostDamage.science, setBoostDamage, boostDamage)}
            {getItem(boostDamage.nerd_rage, setBoostDamage, boostDamage, false, "%", player)}
        </Row>
    );
};

function BRow7({setBoostDamage, boostDamage, player}) {
    return (
        <Row>
            {getItem(boostDamage.power_user, setBoostDamage, boostDamage)}
            {getItem(boostDamage.adrenaline, setBoostDamage, boostDamage, true)}
            {getItem(boostDamage.gun_fu, setBoostDamage, boostDamage)}
            {getItem(boostDamage.covert_operative, setBoostDamage, boostDamage, false, 'x')}
        </Row>
    );
}

function BRow8({setBoostDamage, boostDamage, player}) {
    return (
        <Row>
            {getItem(boostDamage.mister_sandman, setBoostDamage, boostDamage)}
            {getItem(boostDamage.ninja, setBoostDamage, boostDamage)}
            {getItem(boostDamage.guerrilla, setBoostDamage, boostDamage)}
            {getItem(boostDamage.gunslinger, setBoostDamage, boostDamage)}
        </Row>
    );
}

function BRow9({setBoostDamage, boostDamage, player, setPlayer}) {
    return (
        <Row>
            {getItem(boostDamage.bloody_mess, setBoostDamage, boostDamage)}
            {getItem(boostDamage.better_criticals, setBoostDamage, boostDamage)}
            {getItem(boostDamage.class_freak, setBoostDamage, boostDamage, false, "%", player, setPlayer)}
            {getItem(boostDamage.toft, setBoostDamage, boostDamage)}
        </Row>
    );
}

function BRow10({setBoostDamage, boostDamage}) {
    return (
        <Row>
            {getItem(boostDamage.follow_through, setBoostDamage, boostDamage)}
        </Row>
    );
}

export {BRow1, BRow2, BRow3, BRow4, BRow5, BRow6, BRow7, BRow8, BRow9, BRow10};