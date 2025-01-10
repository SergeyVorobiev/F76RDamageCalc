import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';
import UTag from '../viewComponents/tag/UTag';
import { numberToString } from '../helpers/StringHelpers';


function getColTagView(tag, index, position, mult, onBodyPartClick) {
    return (
        <Col key={tag + index} className={"m-1 ps-0 pe-0 d-flex justify-content-" + position}>
            <UTag title={mult} style={{cursor: 'pointer'}} className="m-1 ps-2 pe-2 p-2" bRadius="5px" border={true} color={"grey"} onClick={onBodyPartClick}>
                {tag}
            </UTag>
        </Col>
    );
}

export default function CreatureBodyView(props) {
    function onBodyPartClick(e) {
        props.creature.bodyShot = e.currentTarget.title;
        props.setCreatures({...props.creatures});
    }
    const body = props.creature.bodyParts;
    if (body) {
        const result = [];
        let index = 0
        for (const partName in body) {
            index += 1;
            const part = body[partName];
            const partText = part.name + " ‣ " + numberToString(part.damage_mult, 2) + "x"
            result.push(getColTagView(partText, index, "center", part.damage_mult, onBodyPartClick));
        }
        return (
            <>
                <Divider className="p-0 mt-2 mb-1">Body Damage Multipliers</Divider>
                <div className="m-3" />
                <Row className="ps-1 pe-1 pb-2">
                    {result}
                </Row>
            </>
        );
    }
    return (<></>);
}