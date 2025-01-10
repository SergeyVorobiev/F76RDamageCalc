import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Divider } from 'antd';
import UTag from '../viewComponents/tag/UTag';


function getColTagView(red, index, position, onClick) {
    return (
        <Col key={red + index} className={"m-1 ps-0 pe-0 d-flex justify-content-" + position}>
            <UTag title={red} className="m-1 ps-2 pe-2 p-1" bRadius="5px" border={true} color={"orange"} onClick={onClick}>
                {red}
            </UTag>
        </Col>
    );
}

export default function CreatureReductionView(props) {
    const reductions = props.creature.damageReductions;
    function onClick(e) {
        props.creature.damageReduction = e.currentTarget.title;
        props.setCreatures({...props.creatures});
    }
    if (reductions) {
        const result = [];
        for (let i = 0; i < reductions.length; i++) {
            result.push(getColTagView(reductions[i], i, "center", onClick));
        }
        return (
            <>
                <Divider className="p-0 mt-2 mb-1">Damage Reduction</Divider>
                <div className="m-2" />
                <Row className="ps-1 pe-1 pb-2">
                    {result}
                </Row>
            </>
        );
    }
    return (<></>);
}