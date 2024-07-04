import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalNewItem from '../snapshot/ModalNewItem';
import ModalDeleteItem from '../snapshot/ModalDeleteItem';
import ModalApplyItem from '../snapshot/ModalApplyItem';
import ModalUploadWeapon from '../snapshot/ModalUploadWeapon';
import ModalRenameItem from '../snapshot/ModalRenameItem';
import ModalUpdateItem from '../snapshot/ModalUpdateItem';
import Form from 'react-bootstrap/Form';
import weaponsFile from '../resources/weapons.json';
import {readWeaponsFromResources} from '../helpers/FetchWeapons';
import InputGroup from 'react-bootstrap/InputGroup';
import SnapshotsHeader from '../snapshot/SnapshotsHeader';
import SnapshotItems from '../snapshot/SnapshotItems';
import '../css/style.css'
import { memo, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';


let id = 0;

function setNextId(nextId) {
    id = nextId;
}

const Snapshots = memo(function Snapshots({weaponName, damage, legendary, boostDamage, wSpec, extraDamage, additionalDamages, creatures, resultDamage, applySnapshot}) {

    const [items, setItems] = useState({map: new Map()});

    const [modalNewItemShow, setModalNewItemShow] = useState(false);

    const [modalRenameItem, setModalRenameItem] = useState({id: -1, show: false});

    const [modalUpdateItem, setModalUpdateItem] = useState({id: -1, name: '', show: false});

    const [filterName, setFilterName] = useState("");

    const [modalUploadWeapon, setModalUploadWeapon] = useState(false);

    const [modalDeleteItem, setModalDeleteItem] = useState({id: "-1", name: 'none', show: false});

    const [modalApplyItem, setModalApplyItem] = useState({id: "-1", name: 'none', show: false});

    const [sortId, setSortId] = useState(0);

    useEffect(() => {
        readWeaponsFromResources(weaponsFile, setNextId, setItems);
    }, []);

    // <div class="overflow-auto wrapper"></div>
    return (
        <Container className="p-1">
            <Card className="text-center mb-3">
                <div class='card-header'>
                    <SnapshotsHeader items={items} sortId={sortId} setSortId={setSortId} setModalUploadWeapon={setModalUploadWeapon} />
                </div>
                <ModalUploadWeapon setItems={setItems} setNextId={setNextId} show={modalUploadWeapon} setModalUploadWeapon={setModalUploadWeapon}></ModalUploadWeapon>
                <ModalNewItem weaponName={weaponName} id={id} creatures={creatures} damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} resultDamage={resultDamage} items={items} setItems={setItems} setNextId={setNextId} show={modalNewItemShow} setModalNewItemShow={setModalNewItemShow} />
                <ModalDeleteItem items={items} setItems={setItems} itemId={modalDeleteItem.id} show={modalDeleteItem.show} name={modalDeleteItem.name} setModalDeleteItem={setModalDeleteItem} />
                <ModalApplyItem applySnapshot={applySnapshot} items={items} itemId={modalApplyItem.id} show={modalApplyItem.show} name={modalApplyItem.name} setModalApplyItem={setModalApplyItem} />
                <ModalRenameItem id={modalRenameItem.id} items={items} setItems={setItems} show={modalRenameItem.show} setModalRenameItem={setModalRenameItem}></ModalRenameItem>
                <ModalUpdateItem name={modalUpdateItem.name} items={items} creatures={creatures} damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} resultDamage={resultDamage} modalUpdateItem={modalUpdateItem} setModalUpdateItem={setModalUpdateItem}></ModalUpdateItem>
                <Card.Body className="pt-2 ps-1 pe-1">
                    <InputGroup className="pb-2 flex-nowrap">
                        <InputGroup.Text>Filtered by:</InputGroup.Text>
                        <Form.Control maxLength="65" onChange={(e) => setFilterName(e.target.value)} />
                    </InputGroup>
                    <Button className="mb-2" onClick={() => setModalNewItemShow(true)}>+</Button>
                    <SnapshotItems items={items} sortId={sortId} filterName={filterName} setModalUpdateItem={setModalUpdateItem} setModalRenameItem={setModalRenameItem} setModalDeleteItem={setModalDeleteItem} setModalApplyItem={setModalApplyItem}  />
                </Card.Body>
                <Card.Footer className="text-muted">
                </Card.Footer>
            </Card>
        </Container>
    );
});

export default Snapshots;