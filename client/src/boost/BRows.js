import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import '../css/style.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Checkbox } from 'antd';


function badgeIf(value, condition, onClick) {
    if (condition) {
        return (<Button onClick={onClick} style={{width: '3rem'}} variant="warning">{value}</Button>)
    }
    return (<></>)
}

function changeRank(card) {
    const rank_len = card.rank_values.length;
    card.rank = card.rank % rank_len + 1;
    card.value = card.rank_values[card.rank - 1] * card.x;
    card.displayed_value = (card.is_used) ? card.value : 0.0;
}

function getItem(card, setBoostDamage, boostDamage, xBadge=false, symbol='%') {
    function onClick(e) {
        changeRank(card);
        setBoostDamage({
            ...boostDamage,
        });
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
        card.displayed_value = (card.is_used) ? card.value : 0.0;
        setBoostDamage({
            ...boostDamage,
        });
    }
    const w = (xBadge) ? '9rem' : '12rem';
    return (
        <Col>
            <InputGroup className="justify-content-center mb-1 mt-1 flex-nowrap">
                <InputGroup.Text>
                    <Checkbox onChange={isUsed} checked={card.is_used}></Checkbox>
                </InputGroup.Text>
                <Button className="btn text-start" style={{width: w}} onClick={onClick} variant="secondary">
                    <Badge className="ms-0 me-2" bg="warning">{card.rank}</Badge>
                    {card.name}
                </Button>
                {badgeIf("x" + card.x, xBadge, onClickX)}
                <InputGroup.Text style={{width: '4rem'}}>
                    <div class="badge bg-fire">{card.displayed_value}{symbol}</div>
                </InputGroup.Text>
            </InputGroup>
        </Col>
    )
}

function BRow1({setBoostDamage, boostDamage}) {
    return (
            <Row>
                {getItem(boostDamage.bloody_mess, setBoostDamage, boostDamage)}
                {getItem(boostDamage.adrenaline, setBoostDamage, boostDamage, true)}
                {getItem(boostDamage.toft, setBoostDamage, boostDamage)}
                {getItem(boostDamage.tenderizer, setBoostDamage, boostDamage, true)}
            </Row>
    );
};

function BRow2({setBoostDamage, boostDamage}) {
    return (
            <Row>
                {getItem(boostDamage.glow_sight, setBoostDamage, boostDamage)}
                {getItem(boostDamage.gun_foo, setBoostDamage, boostDamage)}
                {getItem(boostDamage.syringer, setBoostDamage, boostDamage)}
                {getItem(boostDamage.incisor, setBoostDamage, boostDamage)}
            </Row>
    );
};

function BRow3({setBoostDamage, boostDamage}) {
    return (
            <Row>
                {getItem(boostDamage.bow_before_me, setBoostDamage, boostDamage)}
                {getItem(boostDamage.exterminator, setBoostDamage, boostDamage)}
                {getItem(boostDamage.tank_killer, setBoostDamage, boostDamage)}
                {getItem(boostDamage.stabilized, setBoostDamage, boostDamage)}
            </Row>
    );
};

function BRow4({setBoostDamage, boostDamage}) {
    return (
            <Row>
                {getItem(boostDamage.covert_operative, setBoostDamage, boostDamage, false, 'x')}
                {getItem(boostDamage.mister_sandman, setBoostDamage, boostDamage)}
                {getItem(boostDamage.ninja, setBoostDamage, boostDamage)}
                {getItem(boostDamage.follow_through, setBoostDamage, boostDamage)}
            </Row>
    );
};

function BRow5({setBoostDamage, boostDamage}) {
    return (
            <Row>
                {getItem(boostDamage.demolition_expert, setBoostDamage, boostDamage)}
                {getItem(boostDamage.science, setBoostDamage, boostDamage)}
                {getItem(boostDamage.better_criticals, setBoostDamage, boostDamage)}
            </Row>
    );
}

export {BRow1, BRow2, BRow3, BRow4, BRow5};