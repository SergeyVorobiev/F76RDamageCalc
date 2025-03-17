import getMods from '../helpers/Mods';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag } from 'antd';
import { UCheckbox } from '../viewComponents/checkbox/UCheckbox';
import { WarningPopover } from '../helpers/WarningPopover';
import StackEffectView from '../helpers/views/StackEffectView';


function getModRow(modData, def, isUsed) {
    let color = (modData['useful']) ? 'purple' : 'grey';
    if (def) {
        color = 'blue';
    }
    if (isUsed) {
        color = 'brown';
    }
    return (
        <Tag.CheckableTag style={{width: '100%'}}>
            <strong style={{color: color}}>{modData.name}</strong>
        </Tag.CheckableTag>
    );
}

export default function ModRow({index, weaponId, modsSameType, checkMod, defMods}) {
    const modSameType = modsSameType[index];
    const modData = getMods().get(modSameType[0]);
    if (!modData.label) {
        modData.label = "CMOD";
    }
    let def = defMods.includes(modSameType[0]);
    const isUsed = modSameType[1];
    const modRow = getModRow(modData, def, isUsed);
    const disabled = !modSameType[2];
    if (modData['hide']) {
        return (<></>);
    }
    return (
        <Row className="p-1" key={modData.id} title={modData.codeName} id={modData.id}>
            <Col>
                <WarningPopover element={modRow} message={<StackEffectView item={modData} />} header={modData.name} className="popover-adjustable2" />
            </Col>
            <Col className="col-auto d-flex justify-content-end">
                <UCheckbox onChange={(e) => checkMod(e, weaponId, modData, modSameType, modsSameType)} disabled={disabled} checked={isUsed}></UCheckbox>
            </Col>
        </Row>
    );
}