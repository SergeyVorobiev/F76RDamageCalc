import Container from 'react-bootstrap/Container';
import DRow from "./DRow";
import WRow from "./WRow";
import { memo, useState } from 'react';
import { Divider, Tag } from 'antd';
import Row from 'react-bootstrap/Row';
import WTypeDropdown from '../helpers/WTypeDropdown';
import { getRowWithImage } from '../helpers/WTypeDropdown'


const DamageTable = memo(function DamageTable({setDamage, damage, setWSpec, wSpec}) {
    console.log("DamageTable");
    const [weaponType, setWeaponType] = useState(wSpec.type);
    function onWeaponChange(e) {
        wSpec.type = e;
        setWSpec({...wSpec});
    }

    return (
        <Container fluid>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.ballistic} color="bg-ballistic"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.energy} color="bg-energy"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.fire} color="bg-fire"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.poison} color="bg-poison"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.cold} color="bg-cold"></DRow>
            <DRow damage={damage} setDamage={setDamage} damage_type={damage.rad} color="bg-rad"></DRow>
            <Divider className="p-0 mt-2 mb-2"></Divider>
            <WRow wSpec={wSpec} setWSpec={setWSpec}></WRow>
            <Divider className="p-0 mt-2 mb-2"></Divider>
            <Row>
                <div class="col d-flex justify-content-start">
                    <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType} onSelect={onWeaponChange} title={"Type"}></WTypeDropdown>
                </div>
                 <div class="col d-flex justify-content-end pe-1">
                    <Tag bordered={true} color="volcano" className="pt-2"><h6 className="m-auto p-auto"><strong>{getRowWithImage(wSpec.type)}</strong></h6></Tag>
               </div>
            </Row>
        </Container>
    );
});

export default DamageTable;