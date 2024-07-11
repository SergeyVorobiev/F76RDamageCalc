import Container from 'react-bootstrap/Container';
import ADRow from "./ADRow";
import Card from 'react-bootstrap/Card';
import { memo } from 'react';


const marks100 = {
    marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100'
    },
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
};

const marks100F = {
    marks: {
        0: '0',
        20: '20',
        40: '40',
        60: '60',
        80: '80',
        100: '100'
    },
    min: 0,
    max: 100,
    step: 0.25,
    defaultValue: 0,
};

const marks100P = {
    marks: {
        0: '0%',
        20: '20%',
        40: '40%',
        60: '60%',
        80: '80%',
        100: '100%'
    },
    min: 0,
    max: 100,
    step: 1,
    defaultValue: 0,
};

const marks50P = {
    marks: {
        0: '0%',
        10: '10%',
        20: '20%',
        30: '30%',
        40: '40%',
        50: '50%'
    },
    min: 0,
    max: 50,
    step: 1,
    defaultValue: 0,
};

const marks200 = {
    marks: {
        0: '0%',
        40: '40%',
        80: '80%',
        120: '120%',
        160: '160%',
        200: '200%',
    },
    min: 0,
    max: 200,
    step: 1,
    defaultValue: 0,
};

const marks300 = {
    marks: {
        0: '0%',
        50: '50%',
        100: '100%',
        150: '150%',
        200: '200%',
        250: '250%',
        300: '300%',
    },
    min: 0,
    max: 300,
    step: 1,
    defaultValue: 0,
};

const marks500 = {
    marks: {
        0: '0%',
        100: '100%',
        200: '200%',
        300: '300%',
        400: '400%',
        500: '500%',
    },
    min: 0,
    max: 500,
    step: 1,
    defaultValue: 0,
};

const qBDB = "This and fields below are used to be able to specify additional damage from things like: mutations, psycho, " +
"food, bubble heads, magazines, specials... For example: psychobuff gives you +25% BDB (Base Damage Boost). Almost all effects in the game are BDB and they stack additively. " +
"BDB increases your base weapon damage (ex. 43 for 50 level 50cal machine gun +50% BDB = 43 + 43 * 0.5).";

const qTDB = "Effect that increases your total damage like (Executioner, Tenderizer, TOFT). For example: a weapon with 43 base damage " +
" and 200 its total damage will be boosted by +50% BDB up to 221.5 whereas +50% TDB gives 300."

const AdditionalTable = memo(function AdditionalTable({additionalDamages, setAdditionalDamages}) {
    console.log("AdditionalTable");
    function updateAdditionalDamages() {
        setAdditionalDamages({
            ...additionalDamages,
        });
    };

    return (
        <Container fluid className="ps-0 pe-0">
            <Card className="text-center mb-2">
                <Card.Header></Card.Header>
                <Card.Body>
                    <ADRow additionalDamage={additionalDamages.tdb} updateAdditionalDamages={updateAdditionalDamages} marks={marks100P} text={qTDB}></ADRow>
                    <ADRow additionalDamage={additionalDamages.bdb} updateAdditionalDamages={updateAdditionalDamages} marks={marks500} text={qBDB}></ADRow>
                    <ADRow additionalDamage={additionalDamages.ballisticBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.energyBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.fireBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.poisonBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.coldBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.radBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.damageToCreature} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.sneak} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.crit} updateAdditionalDamages={updateAdditionalDamages} marks={marks500}></ADRow>
                    <ADRow additionalDamage={additionalDamages.strength} updateAdditionalDamages={updateAdditionalDamages} marks={marks100F}></ADRow>
                    <ADRow additionalDamage={additionalDamages.swift} updateAdditionalDamages={updateAdditionalDamages} marks={marks50P}></ADRow>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    );
});

export default AdditionalTable;