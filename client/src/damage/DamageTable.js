import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import DRow from "./DRow";
import WRow from "./WRow";
import { memo } from 'react';


const DamageTable = memo(function DamageTable({setDamage, damage, setWSpec, wSpec}) {
    console.log("DamageTable");
    return (
        <Container fluid>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.ballistic} color="bg-ballistic"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.energy} color="bg-energy"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.fire} color="bg-fire"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.poison} color="bg-poison"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.cold} color="bg-cold"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.rad} color="bg-rad"></DRow>
            <Placeholder xs={12} size="xs" bg="secondary" />
            <WRow wSpec={wSpec} setWSpec={setWSpec}></WRow>
        </Container>
    );
});

export default DamageTable;