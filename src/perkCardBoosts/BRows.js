import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { WarningPopover } from '../helpers/WarningPopover';
import GroupView from '../helpers/views/GroupView';
import { calculateSpecial } from './BoostHelpers';
import getPerkImage from './PerkImageProvider';
import { getMark } from '../templates/calc/view/EmblemCalcRowView';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import StackEffectView from '../helpers/views/StackEffectView';
import { getPerkCard } from '../perkCard/PerkCardProvider';
import BSRadio from '../helpers/views/BSRadio';


function getPerkColor(category) {
    return "bg-" + category.toLowerCase() + "-card";
}

function getPerkOutline(category) {
    return category.toLowerCase() + "-outline-card";
}

function badgeIf(value, condition, onClick) {
    if (condition) {
        return (<Button className={"p-1"} onClick={onClick} style={{width: '2.5rem'}} variant="warning">{value}</Button>)
    }
    return (<></>)
}

function checkCardConditions(card, player, setPlayer, extraDamage) {
    if (card.name === "Nerd Rage") {
        card.displayed_value = (card.is_used && player.health.value <= 20.0) ? card.value : 0.0;
    } else if (card.name === "TOFT") {
        card.displayed_value = (card.is_used && player.team) ? card.value : 0.0;
    } else if (card.name === "Follow Through") {
        card.displayed_value = (card.is_used && extraDamage.useSneak) ? card.value : 0.0;
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

function getItem(card, setBoostDamage, boostDamage, cardType, setCardType, xBadge=false, symbol='%', player=null, setPlayer=null, extraDamage=null) {
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
        checkCardConditions(card, player, setPlayer, extraDamage);
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
        checkCardConditions(card, player, setPlayer, extraDamage);
        calculateSpecial(boostDamage);
        setBoostDamage({
            ...boostDamage,
        });
    }
    function getInfo() {
        // let info = card.info.replaceAll("{1}", number).replace("{2}", parseInt(number / 4)).replace("{3}", parseInt(number * 2));
        // info = info.replaceAll("{4}", number * 3);
        function onRadioClick(e) {
            console.log(e);
            setCardType(parseInt(e.target.value));
        }
        function getTypeRadio() {
            if (card.id.length > 1) {
                return (
                    <div className="pt-0 pb-2 d-flex justify-content-center">
                        <BSRadio small='true' pairs={{Basic: 0, Expert: 1, Master: 2}} selectedValue={cardType} onClick={onRadioClick} />
                    </div>
                );
            } else {
                return (<></>);
            }
        }
        const index = (card.id.length > 1) ? cardType : 0;
        return (
            <>
                {getTypeRadio()}
                <StackEffectView item={getPerkCard(card.id[index])} />
            </>
        );
    }
    const outline = card.is_used ?  getPerkOutline(card.category) : "";
    const w = (xBadge) ? '9rem' : '11.5rem';
    const perkColor = getPerkColor(card.category);
    const cName = "btn text-start " + perkColor;
    const filter = card.is_used ? "grayscale(0%) contrast(1.1)" : "grayscale(90%) contrast(1.1)";
    const imagePath = getPerkImage(card.im_name);
    const header = <div className="d-flex center-text">{getMark(card.im_name, imagePath, "mt-0 mb-0 ms-0 me-3 shadow-outline-gold2", '2rem', '1.8rem', '4px')}{card.name}</div>
    const bgCardColor = getComputedStyle(document.documentElement).getPropertyValue("--" + perkColor + "-color");
    return (
        <Col className="ps-1 pe-1">
            <GroupView className={outline}>
                <InputGroup className="justify-content-center mb-1 mt-1 flex-nowrap" style={{filter: filter}}>
                    <InputGroup.Text className={"ps-2 pe-2"} >
                        <UCheckbox onChange={isUsed} checked={card.is_used} checkBorderColor={bgCardColor} checkBgColor={bgCardColor}></UCheckbox>
                    </InputGroup.Text>
                    <Button className={cName} style={{width: w}} onClick={onClick}>
                        <Badge className="ms-0 me-2" bg="warning">{card.cost[card.rank - 1]}</Badge>
                        {card.name}
                    </Button>
                    {badgeIf("x" + card.x, xBadge, onClickX)}
                    <InputGroup.Text className={"justify-content-center p-0"} style={{width: '3.5rem'}}>
                        <div className={"badge " + perkColor} style={{width: '2.7rem'}}>{card.displayed_value}{symbol}</div>
                    </InputGroup.Text>
                    <InputGroup.Text className={"ps-1 pe-1 p-0"}>
                        <WarningPopover element={infoButton()} message={getInfo()} header={header} className="popover-adjustable2" />
                    </InputGroup.Text>
                </InputGroup>
            </GroupView>
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

function BRow1({setBoostDamage, boostDamage, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.incisor, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.lock_and_load, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.martial_artist, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.scattershot, setBoostDamage, boostDamage, cardType, setCardType)}
        </Row>
    );
};

function BRow2({setBoostDamage, boostDamage, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.gladiator, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.heavy_gunner, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.shotgunner, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.slugger, setBoostDamage, boostDamage, cardType, setCardType)}
        </Row>
    );
};

function BRow3({setBoostDamage, boostDamage, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.iron_fist, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.archer, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.commando, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.rifleman, setBoostDamage, boostDamage, cardType, setCardType)}
        </Row>
    );
};

function BRow4({setBoostDamage, boostDamage, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.glow_sight, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.bow_before_me, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.exterminator, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.tank_killer, setBoostDamage, boostDamage, cardType, setCardType)}
        </Row>
    );
};

function BRow5({setBoostDamage, boostDamage, player, setPlayer, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.ground_pounder, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.tenderizer, setBoostDamage, boostDamage, cardType, setCardType, true)}
            {getItem(boostDamage.party_girl_boy, setBoostDamage, boostDamage, cardType, setCardType, false, "x", player, setPlayer)}
            {getItem(boostDamage.strange_in_numbers, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer)}
        </Row>
    );
};

function BRow6({setBoostDamage, boostDamage, player, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.stabilized, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.demolition_expert, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.science, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.nerd_rage, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player)}
        </Row>
    );
};

function BRow7({setBoostDamage, boostDamage, player, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.power_user, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.adrenaline, setBoostDamage, boostDamage, cardType, setCardType, true)}
            {getItem(boostDamage.gun_fu, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.covert_operative, setBoostDamage, boostDamage, cardType, setCardType, false, 'x')}
        </Row>
    );
}

function BRow8({setBoostDamage, boostDamage, player, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.mister_sandman, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.ninja, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.guerrilla, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.gunslinger, setBoostDamage, boostDamage, cardType, setCardType)}
        </Row>
    );
}

function BRow9({setBoostDamage, boostDamage, player, setPlayer, cardType, setCardType}) {
    return (
        <Row>
            {getItem(boostDamage.bloody_mess, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.better_criticals, setBoostDamage, boostDamage, cardType, setCardType)}
            {getItem(boostDamage.class_freak, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer)}
            {getItem(boostDamage.toft, setBoostDamage, boostDamage, cardType, setCardType, false, "%", player, setPlayer)}
        </Row>
    );
}

function BRow10({setBoostDamage, boostDamage, cardType, setCardType, extraDamage}) {
    return (
        <Row>
            {getItem(boostDamage.follow_through, setBoostDamage, boostDamage, cardType, setCardType, false, "%", null, null, extraDamage)}
        </Row>
    );
}

export {BRow1, BRow2, BRow3, BRow4, BRow5, BRow6, BRow7, BRow8, BRow9, BRow10};