import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalNewItem from '../snapshot/ModalNewItem';
import ModalDownloadSnapshots from '../snapshot/ModalDownloadSnapshots';
import ModalDownloadSnapshot from '../snapshot/ModalDownloadSnapshot';
import ModalDeleteItem from '../snapshot/ModalDeleteItem';
import ModalDeleteAll from '../snapshot/ModalDeleteAll';
import ModalApplyItem from '../snapshot/ModalApplyItem';
import ModalUploadSnapshots from '../snapshot/ModalUploadSnapshots';
import ModalRenameItem from '../snapshot/ModalRenameItem';
import ModalUpdateItem from '../snapshot/ModalUpdateItem';
import Form from 'react-bootstrap/Form';
import snapshotsFile from '../resources/snapshots.json';
import { readSnapshotsFromResources } from '../helpers/FetchSnapshots';
import InputGroup from 'react-bootstrap/InputGroup';
import SnapshotsHeader from '../snapshot/SnapshotsHeader';
import SnapshotItems from '../snapshot/SnapshotItems';
import '../css/style.css'
import { memo, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import WTypeDropdown from '../helpers/WTypeDropdown';
import { TrashIcon, CollapseIcon, ExpandIcon } from '../icons/Icons';
import { FloatButton } from 'antd';


let id = 0;

function setNextId(nextId) {
    id = nextId;
}

const Snapshots = memo(function Snapshots({player, playerStats, stuffBoost, weaponName, damage, legendary, boostDamage, wSpec, extraDamage, additionalDamages, creatures, resultDamage, applySnapshot}) {

    const [items, setItems] = useState({map: new Map()});

    const [modalNewItemShow, setModalNewItemShow] = useState(false);

    const [modalDeleteAll, setModalDeleteAll] = useState(false);

    const [modalDownloadSnapshots, setModalDownloadSnapshots] = useState(false);

    const [modalDownloadSnapshot, setModalDownloadSnapshot] = useState({id: -1, name: 'none', show: false});

    const [modalRenameItem, setModalRenameItem] = useState({id: -1, show: false});

    const [modalUpdateItem, setModalUpdateItem] = useState({id: -1, name: '', show: false});

    const [filterName, setFilterName] = useState("");

    const [modalUploadSnapshots, setModalUploadSnapshots] = useState(false);

    const [modalDeleteItem, setModalDeleteItem] = useState({id: "-1", name: 'none', show: false});

    const [modalApplyItem, setModalApplyItem] = useState({id: "-1", name: 'none', show: false});

    const [sortId, setSortId] = useState(0);

    const [weaponType, setWeaponType] = useState("All");

    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        readSnapshotsFromResources(snapshotsFile, setNextId, setItems);
    }, []);

    function trashAllButton() {
        if (items === null || items.map === null || items.map.size < 2) {
            return (<></>);
        }
        return (
            <Button variant="outline-danger" className="mb-2 me-0" onClick={() => setModalDeleteAll(true)}>
                <TrashIcon/> All
            </Button>
        );
    };
    const onClickOpen = () => setIsOpen(!isOpen);

    function expandButton() {
        if (items === null || items.map === null || items.map.size === 0) {
            return (<></>);
        }
        if (isOpen) {
            return (
                <Button variant="outline-primary" className="ms-0 mb-2" onClick={onClickOpen}>
                    <><CollapseIcon /> All</>
                </Button>
            );
        } else {
            return (
                <Button variant="outline-primary" className="ms-0 mb-2" onClick={onClickOpen}>
                    <><ExpandIcon /> All</>
                </Button>
            );
        }
    };
    function search() {
        if (items === null || items.map === null || items.map.size < 2) {
            return (<></>);
        }
        return (
            <InputGroup className="pb-2 flex-nowrap">
                <WTypeDropdown weaponType={weaponType} setWeaponType={setWeaponType}></WTypeDropdown>
                <Form.Control maxLength="65" onChange={(e) => setFilterName(e.target.value)} />
            </InputGroup>
        );
    }
    const leg1 = legendary[legendary.current[0]];
    const leg2 = legendary[legendary.current[1]];
    const leg1Name = (leg1.name === "None") ? "" : leg1.name + " ";
    const leg2Name = (leg2.name === "None") ? "" : leg2.name + " ";
    weaponName = leg1Name + leg2Name + wSpec.defaultName;
    // <div class="overflow-auto wrapper"></div>
    return (
        <Container className="p-1">
            <Card className="text-center mb-3">
                <div class='card-header'>
                    <SnapshotsHeader items={items} sortId={sortId} setSortId={setSortId} setModalDownloadSnapshots={setModalDownloadSnapshots} setModalUploadSnapshots={setModalUploadSnapshots} />
                </div>
                <ModalDownloadSnapshots items={items} modalDownloadSnapshots={modalDownloadSnapshots} setModalDownloadSnapshots={setModalDownloadSnapshots}></ModalDownloadSnapshots>
                <ModalDownloadSnapshot items={items} modalDownloadSnapshot={modalDownloadSnapshot} setModalDownloadSnapshot={setModalDownloadSnapshot}></ModalDownloadSnapshot>
                <ModalUploadSnapshots items={items} setItems={setItems} setNextId={setNextId} show={modalUploadSnapshots} setModalUploadSnapshots={setModalUploadSnapshots}></ModalUploadSnapshots>
                <ModalNewItem player={player} playerStats={playerStats} stuffBoost={stuffBoost} weaponName={weaponName} id={id} creatures={creatures} damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} resultDamage={resultDamage} items={items} setItems={setItems} setNextId={setNextId} show={modalNewItemShow} setModalNewItemShow={setModalNewItemShow} />
                <ModalDeleteItem items={items} setItems={setItems} itemId={modalDeleteItem.id} show={modalDeleteItem.show} name={modalDeleteItem.name} setModalDeleteItem={setModalDeleteItem} />
                <ModalDeleteAll items={items} setItems={setItems} modalDeleteAll={modalDeleteAll} setModalDeleteAll={setModalDeleteAll} setNextId={setNextId} />
                <ModalApplyItem applySnapshot={applySnapshot} items={items} itemId={modalApplyItem.id} show={modalApplyItem.show} name={modalApplyItem.name} setModalApplyItem={setModalApplyItem} />
                <ModalRenameItem id={modalRenameItem.id} items={items} setItems={setItems} show={modalRenameItem.show} setModalRenameItem={setModalRenameItem}></ModalRenameItem>
                <ModalUpdateItem player={player} playerStats={playerStats} stuffBoost={stuffBoost} name={modalUpdateItem.name} items={items} setItems={setItems} creatures={creatures} damage={damage} legendary={legendary} boostDamage={boostDamage} wSpec={wSpec} extraDamage={extraDamage} additionalDamages={additionalDamages} resultDamage={resultDamage} modalUpdateItem={modalUpdateItem} setModalUpdateItem={setModalUpdateItem}></ModalUpdateItem>
                <Card.Body className="pt-2 ps-1 pe-1">
                    {search()}
                    <div class="d-flex flex-row mt-1 mb-2">
                        <div class="col w-100 d-flex justify-content-start">
                            {expandButton()}
                        </div>
                        <div class="col w-100">
                            <Button className="mb-2" onClick={() => setModalNewItemShow(true)}>+</Button>
                        </div>
                        <div class="col w-100 d-flex justify-content-end">
                            {trashAllButton()}
                        </div>
                    </div>
                    <SnapshotItems items={items} isOpen={isOpen} sortId={sortId} filterName={filterName} weaponType={weaponType} setModalDownloadSnapshot={setModalDownloadSnapshot} setModalUpdateItem={setModalUpdateItem} setModalRenameItem={setModalRenameItem} setModalDeleteItem={setModalDeleteItem} setModalApplyItem={setModalApplyItem}  />
                </Card.Body>
                <Card.Footer className="text-muted">
                </Card.Footer>
            </Card>
            <FloatButton.BackTop style={{ right: 120 }} duration={100} visibilityHeight={2000} />
        </Container>

    );
});

export default Snapshots;