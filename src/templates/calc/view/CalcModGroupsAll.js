import { Divider } from 'antd';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';
import GroupView from '../../../helpers/views/GroupView';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


function buildGroupsView(groups, onGroupChange) {
    let result = [];
    for (const name in groups) {
        result.push(getModItem(name, groups, onGroupChange));
    }
    return result;
}

function getModItem(name, groups, onGroupChange) {
    const checked = groups[name];
    const outline = (checked) ? "shadow-blue" : "";
    return (
        <Col key={name}>
            <GroupView className={outline}>
                <InputGroup className="mb-1 mt-1 flex-nowrap justify-content-center">
                    <InputGroup.Text style={{ width: '2.8rem' }}>
                        <UCheckbox title={name} onChange={onGroupChange} checked={checked}></UCheckbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{ width: '15rem' }}><small>{name}</small></InputGroup.Text>
                </InputGroup>
            </GroupView>
        </Col>
    );
}

export default function CalcModGroupsAll(props) {

    function onGroupChange(e) {
        props.groups[e.target.title] = e.target.checked;
        props.setGroups({...props.groups});
    }
    return (
        <>
            <Divider key={'ModGroups'} className="p-0 mt-3 mb-1">Mod Groups</Divider>
            <Container>
                <Row>
                    {buildGroupsView(props.groups, onGroupChange)}
                </Row>
            </Container>
        </>
    );
}
