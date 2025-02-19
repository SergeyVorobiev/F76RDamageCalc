import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { buildItem } from '../helpers/Item';
import { memo, useState } from 'react';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import { getLegendaryNameFromSpec } from '../helpers/LegendaryProvider';


function getLegendaryPrefix(wSpec) {
    let legendaryPrefix = "";
    for (let i = 0; i < wSpec.legendary.length; i++) {
        const curLegPrefix = getLegendaryNameFromSpec(wSpec, i + 1);
        if (curLegPrefix !== "") {
            legendaryPrefix += (curLegPrefix + " ");
        }
    }
    return legendaryPrefix;
}

const ModalNewItem = memo(function ModalNewItem(props) {
    console.log("ModalNewItem");
    const [legPrefixCheck, setLegPrefixCheck] = useState(false);
    if (!props.show) {
        return (<></>);
    }
    let legendaryPrefix = "";
    if (legPrefixCheck) {
        legendaryPrefix = getLegendaryPrefix(props.wSpec);
    }
    const limit = props.items.map.size > 1000;
    function createItem(e, name) {
        if (name === '' || name === null) {
            name = "Weapon";
        }
        const item = buildItem(props.id, name, props.player, props.playerStats, props.creatures, props.boostDamage, props.wSpec, props.extraDamage, props.additionalDamages, props.resultDamage, props.stuffBoost);
        props.items.map.set(props.id, item);
        const nextId = props.id + 1;
        const newItems = {
            map: props.items.map,
        }
        props.setItems(newItems);
        props.setNextId(nextId);
        props.setModalNewItemShow(false);
    };
    function onClick(e) {
        createItem(e, document.getElementById("wName").value);
    };
    function onHide(e) {
        props.setModalNewItemShow(false);
    };
    function onPrefixChange(e) {
        const useLegPrefix = e.target.checked
        setLegPrefixCheck(useLegPrefix);
        const element = document.getElementById("wName");
        let legendaryPrefix = getLegendaryPrefix(props.wSpec);
        if (useLegPrefix) {
            let name = legendaryPrefix + element.value;
            name = name.slice(0, element.maxLength);
            element.value = name;
        } else if (legendaryPrefix !== "" && element.value.startsWith(legendaryPrefix)) {
            let name = element.value.slice(legendaryPrefix.length);
            element.value = name;
        }
    };
    const message = (limit) ? "Limit has been achieved" : "Weapon name";
    return (
        <Modal
            show = {props.show}
            onHide = {onHide}
            size="lg"
            centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    New Weapon
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <InputGroup className="mb-1 mt-1 flex-nowrap justify-content-center">
                    <InputGroup.Text style={{ minWidth: '9rem' }}>{message}</InputGroup.Text>
                    {getInputText(limit, legendaryPrefix + props.wSpec.defaultName)}
                </InputGroup>
            </Modal.Body>
            <Modal.Footer>
                <div style={{width: '100%'}} className="d-flex">
                    <div style={{width: '50%'}} className="center-text">
                        <UCheckbox onChange={onPrefixChange} checked={legPrefixCheck}>Legendary Prefix</UCheckbox>
                    </div>
                    <div className="d-flex justify-content-end" style={{width: '50%'}}>
                        <Button disabled={limit} onClick={onClick}>Add</Button>
                    </div>
                </div>
            </Modal.Footer>
        </Modal>
    );
});

function getInputText(limit, weaponName) {
    if (limit) {
        return (<></>);
    }
    return (
        <Form.Control id='wName' className='w-auto' defaultValue={weaponName} maxLength="70" />
    );
}

export default ModalNewItem;