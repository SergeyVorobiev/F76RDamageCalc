import WCDRow from "./WCDRow";
import Container from 'react-bootstrap/Container';
import ANRow from "./ANRow";
import {BRow1, BRow2, BRow3, BRow4, BRow5} from "./BRows";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import {aa_cards} from '../helpers/Calc';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { memo } from 'react';


const popover = (
    <Popover style={{width: '19rem'}} id="popover-basic">
        <Popover.Header as="h3">Perks</Popover.Header>
        <Popover.Body>
            Not all of this perks are cards (Syringer).
            'Exterminator' is applied to all creatures because it does not know about creature's type.
            'Incisor' is applied to 'All / Melee / Unarmed' weapon's type.
            'Stabilized' is applied to 'All / Heavy' weapon's type.
            'Tank Killer' is applied to 'All / Pistol / Rifle' weapon's type.
            'Glow Sight' is applied only to creatures with 🐵 (Creature Damage) selected checkbox.
            'TOFT' can reduce ballistic resistance of a creature when it hits back so you have to handle this manually
            under the 'Creature' section if you want to see the exact damage number as in the game.
        </Popover.Body>
    </Popover>
);

function bdb_cards(boostDamage) {
    return boostDamage.bloody_mess.displayed_value + boostDamage.adrenaline.displayed_value
           + boostDamage.glow_sight.displayed_value + boostDamage.gun_foo.displayed_value + boostDamage.science.displayed_value;
}

function tdb_cards(boostDamage) {
    const toft = 1 + boostDamage.toft.displayed_value / 100.0;
    const tend = 1 + boostDamage.tenderizer.displayed_value / 100.0;
    let result = toft * tend;
    return (result > 1.0) ? parseInt(result * 100.0) : 0;
}

function sbdb_cards(boostDamage) {
    let covert = boostDamage.covert_operative.displayed_value * 100.0;
    covert = (covert === 0) ? 200.0 : covert;
    const follow_through = boostDamage.follow_through.displayed_value;
    const sandman = boostDamage.mister_sandman.displayed_value;
    const ninja = boostDamage.ninja.displayed_value;
    return covert + sandman + ninja + follow_through;
}

const BoostTable = memo(function BoostTable({setBoostDamage, boostDamage, setLegendary, legendary}) {
    console.log("BoostTable")
    return (
        <Container className="ps-0 pe-0">
             <Card className="mb-3">
                <Card.Body>
                    <WCDRow setBoostDamage={setBoostDamage} boostDamage={boostDamage}></WCDRow>
                    <ANRow setBoostDamage={setBoostDamage} boostDamage={boostDamage} setLegendary={setLegendary} legendary={legendary}></ANRow>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Badge bg="dark" pill="true">Total BDB: {boostDamage.adrenalreactionr + boostDamage.rager + boostDamage.wcdamager}%</Badge>
                </Card.Footer>
            </Card>

            <Card className="mb-3">
                <Card.Header className='ps-3'>
                    <OverlayTrigger rootClose='true' trigger="click" placement="right" overlay={popover}>
                        <Badge className='ms-0' bg="danger" pill>?</Badge>
                    </OverlayTrigger>
                </Card.Header>
                <Card.Body>
                    <Container>
                        <BRow1 setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BRow1>
                        <BRow2 setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BRow2>
                        <BRow3 setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BRow3>
                        <BRow4 setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BRow4>
                        <BRow5 setBoostDamage={setBoostDamage} boostDamage={boostDamage}></BRow5>
                    </Container>
                </Card.Body>
                <Card.Footer className="text-center">
                    <div class="flex justify-content-center">
                        <Badge className="ms-2 me-2" bg="dark" pill="true">Total BDB: {bdb_cards(boostDamage).toFixed(0)}%</Badge>
                        <Badge className="ms-2 me-2" bg="dark" pill="true">Total TDB: {tdb_cards(boostDamage).toFixed(0)}%</Badge>
                        <Badge className="ms-2 me-2" bg="dark" pill="true">Total AA: {aa_cards(boostDamage)[0].toFixed(0)}%</Badge>
                        <Badge className="ms-2 me-2" bg="dark" pill="true">Total SBDB: {sbdb_cards(boostDamage).toFixed(0)}%</Badge>
                     </div>
                </Card.Footer>
            </Card>
        </Container>
    );
});

export default BoostTable;