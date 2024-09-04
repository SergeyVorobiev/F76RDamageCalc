import getMods from '../helpers/Mods';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tag, Checkbox } from 'antd';
import { popoverContent } from './ModPropsPopover';
import { WeaponPopoverOverlay } from '../helpers/WeaponPopoverOverlay';


function getModRow(modData) {
    const color = (modData['useful']) ? 'purple' : 'grey';
    return (
        <Tag.CheckableTag style={{width: '100%'}}>
            <strong style={{color: color}}>{modData.name}</strong>
        </Tag.CheckableTag>
    );
}

export default function ModRow({index, weaponId, modsSameType, checkMod}) {
    const modSameType = modsSameType[index];
    const modData = getMods().get(modSameType[0]);
    const modRow = getModRow(modData);
    const disabled = !modData['canSelect'];
    const isUsed = modSameType[1];
    if (modData['hide']) {
        return (<></>);
    }
    return (
        <Row className="p-1">
            <Col>
                <WeaponPopoverOverlay popoverHeader={modData.name} popoverContent={popoverContent(modData)} itemToOverly={modRow}></WeaponPopoverOverlay>
            </Col>
            <Col className="col-auto d-flex justify-content-end">
                <Checkbox onChange={(e) => checkMod(e, weaponId, modData, modSameType, modsSameType)} disabled={disabled} checked={isUsed}></Checkbox>
            </Col>
        </Row>
    );
}