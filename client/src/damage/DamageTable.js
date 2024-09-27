import Container from 'react-bootstrap/Container';
import WRow from "./WRow";
import LegendarySelector from "./LegendarySelector";
import { memo, useState } from 'react';
import { Divider, Tag } from 'antd';
import Row from 'react-bootstrap/Row';
import WTypeDropdown from '../helpers/WTypeDropdown';
import { getRowWithImage } from '../helpers/WTypeDropdown'
import InputGroup from 'react-bootstrap/InputGroup';
import AutoHandSelector from '../damage/AutoHandSelector';
import DamageItem from './DamageItem';
import DamageAdd from './DamageAdd';
import ModalDeleteDamage from './ModalDeleteDamage';


function modElement(mod) {
    return (
         <div class="col d-flex">
            <InputGroup className="mb-1 mt-1 flex-nowrap justify-content-center">
                <InputGroup.Text className='bg-mod-cat' style={{ width: '8rem' }}>{mod.group}</InputGroup.Text>
                <InputGroup.Text className='bg-mod-name' style={{ minWidth: '12rem' }}>{mod.name}</InputGroup.Text>
            </InputGroup>
        </div>
    );
}

const DamageTable = memo(function DamageTable({setDamage, damage, setWSpec, wSpec, health}) {
    console.log("DamageTable");
    const [weaponType, setWeaponType] = useState(wSpec.type);
    const [modalDeleteDamage, setModalDeleteDamage] = useState({id: -1, name: 'none', show: false});
    function onWeaponChange(e) {
        wSpec.type = e;
        setWSpec({...wSpec});
    }
    const mods = wSpec.mods.map((mod) => (modElement(mod)));
    let dItems = [];
    for (let i = 0; i < wSpec.damages.length; i++) {
        dItems.push(<DamageItem item={wSpec.damages[i]} setModalDeleteDamage={setModalDeleteDamage}></DamageItem>);
    }
    return (
        <Container fluid className="p-0">
            <ModalDeleteDamage wSpec={wSpec} setWSpec={setWSpec} modalDeleteDamage={modalDeleteDamage} setModalDeleteDamage={setModalDeleteDamage}></ModalDeleteDamage>
            <DamageAdd wSpec={wSpec} setWSpec={setWSpec}></DamageAdd>
            {dItems}
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
            <Divider className="p-0 mt-2 mb-2"></Divider>
            <AutoHandSelector wSpec={wSpec} setWSpec={setWSpec}></AutoHandSelector>
            <Divider className="p-0 mt-2 mb-2">Legendary Effects</Divider>
            <LegendarySelector index={0} header={"⭐"} wSpec={wSpec} setWSpec={setWSpec} health={health}></LegendarySelector>
            <LegendarySelector index={1} header={"⭐⭐"} wSpec={wSpec} setWSpec={setWSpec} health={health}></LegendarySelector>
            <LegendarySelector index={2} header={"⭐⭐⭐"} wSpec={wSpec} setWSpec={setWSpec} health={health}></LegendarySelector>
            <LegendarySelector index={3} header={"⭐⭐⭐⭐"} wSpec={wSpec} setWSpec={setWSpec} health={health}></LegendarySelector>
            <LegendarySelector index={4} header={"⭐⭐⭐⭐⭐"} wSpec={wSpec} setWSpec={setWSpec} health={health}></LegendarySelector>
            <Divider className="p-0 mt-2 mb-2">Modifications</Divider>
            <Row className="d-flex">
                {mods}
            </Row>
        </Container>
    );
});

export default DamageTable;