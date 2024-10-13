import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ADRow from "./ADRow";
import { memo } from 'react';


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
                <Card.Body>
                    <ADRow additionalDamage={additionalDamages.tdb} updateAdditionalDamages={updateAdditionalDamages} marks={marks100P} text={qTDB}></ADRow>
                    <ADRow additionalDamage={additionalDamages.ballisticBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.energyBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.fireBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.poisonBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.coldBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.radBDB} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                    <ADRow additionalDamage={additionalDamages.damageToCreature} updateAdditionalDamages={updateAdditionalDamages} marks={marks200}></ADRow>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default AdditionalTable;