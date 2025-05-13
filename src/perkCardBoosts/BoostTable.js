import Container from 'react-bootstrap/Container';
import {BRow1, BRow2, BRow3, BRow4, BRow5, BRow6, BRow7, BRow8, BRow9, BRow10} from "./BRows";
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { memo } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { getRowWithImage } from '../helpers/WTypeDropdown';
import PerkCardBuilder from './PerkCardBuilder';
import { useState } from 'react';
import LoadingModal from '../loading/LoadingModal';


const popover = (
    <Popover className="popover-adjustable">
        <Popover.Header as="h3">Perks</Popover.Header>
        <Popover.Body>
            'Incisor' is applied to 'All / Melee / Unarmed' weapon's type.
            'Stabilized' is applied to 'All / Heavy' weapon's type.
            'Tank Killer' is applied to 'All / Pistol / Rifle' weapon's type.
            'TOFT' can reduce ballistic resistance of a creature when it hits back so you have to handle this manually
            under the 'Creature' section if you want to see the exact damage number as in the game.
        </Popover.Body>
    </Popover>
);

function getStatBadge(name, value) {
    const cParams = 'ms-1 me-1 mt-0 mb-0 pt-1 pb-1 bg-' + name + "-card shadow-outline";
    const letter = name.charAt(0).toUpperCase();
    const color = (value > 15) ? "red" : "black";
    return (
        <Badge className={cParams} style={{width: '2.5rem'}}><div style={{fontSize: '1rem' , fontWeight: 'bold'}}>{letter}</div>
            <Badge className="mt-1 p-auto" bg="white" text="black"><div style={{fontSize: '0.75rem' , fontWeight: 'bold', color: color}}>{value}</div></Badge>
        </Badge>
    );
}

function getDropdown(setBoostDamage, player, setPlayer, setLoading) {
    function onSelect(e) {
        setLoading(true);
        setTimeout(() => {
            PerkCardBuilder.build(e, setBoostDamage, player, setPlayer);
            setLoading(false);
        }, 200);
    }
    return (
        <DropdownButton className="d-flex justify-content-center mb-3" onSelect={onSelect} title={<small><b>Choose a build</b></small>} variant="warning">
        <Dropdown.Item eventKey="Reset">{getRowWithImage("Reset")}</Dropdown.Item>
            <Dropdown.Item eventKey="Heavy">{getRowWithImage("Heavy")}</Dropdown.Item>
            <Dropdown.Item eventKey="Heavy Explosive">{getRowWithImage("Heavy", "Heavy Explosive")}</Dropdown.Item>
            <Dropdown.Item eventKey="Heavy FullHouse">{getRowWithImage("Heavy", "Heavy FullHouse")}</Dropdown.Item>
            <Dropdown.Item eventKey="Shotgun">{getRowWithImage("Shotgun")}</Dropdown.Item>
            <Dropdown.Item eventKey="Automatic Rifle">{getRowWithImage("Rifle", "Automatic Rifle")}</Dropdown.Item>
            <Dropdown.Item eventKey="Non-Automatic Rifle">{getRowWithImage("Rifle", "Non-Automatic Rifle")}</Dropdown.Item>
            <Dropdown.Item eventKey="Automatic Pistol">{getRowWithImage("Pistol", "Automatic Pistol")}</Dropdown.Item>
            <Dropdown.Item eventKey="Non-Automatic Pistol">{getRowWithImage("Pistol", "Non-Automatic Pistol")}</Dropdown.Item>
            <Dropdown.Item eventKey="Bow">{getRowWithImage("Bow")}</Dropdown.Item>
            <Dropdown.Item eventKey="Melee One-Handed">{getRowWithImage("Melee", "Melee One-Handed")}</Dropdown.Item>
            <Dropdown.Item eventKey="Melee Two-Handed">{getRowWithImage("Melee", "Melee Two-Handed")}</Dropdown.Item>
            <Dropdown.Item eventKey="Unarmed">{getRowWithImage("Unarmed")}</Dropdown.Item>
        </DropdownButton>
    );
}

const BoostTable = memo(function BoostTable({player, setPlayer, setBoostDamage, boostDamage, extraDamage}) {
    console.log("BoostTable");
    const [cardType, setCardType] = useState(0); // Basic Expert Master
    const [loading, setLoading] = useState(false);
    return (
        <Container className="ps-0 pe-0">
            <LoadingModal show={loading} />
            {getDropdown(setBoostDamage, player, setPlayer, setLoading)}
            <Card className="mb-3">
                <Card.Header className='ps-3'>
                    <div className="d-flex justify-content-center">
                        {getStatBadge("strength", boostDamage.special.strength)}
                        {getStatBadge("perception", boostDamage.special.perception)}
                        {getStatBadge("endurance", boostDamage.special.endurance)}
                        {getStatBadge("charisma", boostDamage.special.charisma)}
                        {getStatBadge("intelligence", boostDamage.special.intelligence)}
                        {getStatBadge("agility", boostDamage.special.agility)}
                        {getStatBadge("luck", boostDamage.special.luck)}
                    </div>
                </Card.Header>

                <Card.Body className="bg-lite p-1 m-0">
                    <Container className="p-0 m-0">
                        <BRow1 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow1>
                        <BRow2 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow2>
                        <BRow3 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow3>
                        <BRow4 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow4>
                        <BRow5 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow5>
                        <BRow6 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow6>
                        <BRow7 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow7>
                        <BRow8 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow8>
                        <BRow9 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType}></BRow9>
                        <BRow10 setBoostDamage={setBoostDamage} boostDamage={boostDamage} player={player} setPlayer={setPlayer} cardType={cardType} setCardType={setCardType} extraDamage={extraDamage}></BRow10>
                    </Container>
                </Card.Body>
                <Card.Footer>
                    <OverlayTrigger rootClose='true' trigger="click" placement="top" overlay={popover}>
                        <Badge className='ms-3 mt-0 mb-1 p-auto' bg="danger" style={{cursor: 'pointer'}} pill>?</Badge>
                    </OverlayTrigger>
                </Card.Footer>
            </Card>

        </Container>
    );
});

export default BoostTable;