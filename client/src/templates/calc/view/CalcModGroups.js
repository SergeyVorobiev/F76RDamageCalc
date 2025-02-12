import { useState } from 'react';
import { Divider } from 'antd';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';
import GroupView from '../../../helpers/views/GroupView';
import PickedGroups from './PickedGroups';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


function getDefaultModGroups(template) {
    let result = {};
    if (template) {
        for (const name in template.allMods) {
            if (!PickedGroups.excluded(name)) {
                 result[name] = true;
            }
        }
    }
    return result;
}

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
        <div key={name} className="col">
            <GroupView className={outline}>
                <InputGroup className="mb-1 mt-1 p-0 m-0 flex-nowrap justify-content-center">
                    <InputGroup.Text style={{ width: '2.8rem'}}>
                        <UCheckbox title={name} onChange={onGroupChange} checked={checked}></UCheckbox>
                    </InputGroup.Text>
                    <InputGroup.Text style={{ width: '15rem' }}><small>{name}</small></InputGroup.Text>
                </InputGroup>
            </GroupView>
        </div>
    );
}

export default function CalcModGroups(props) {
    const [groups, setGroups] = useState(getDefaultModGroups(props.template));
    function onGroupChange(e) {
        groups[e.target.title] = e.target.checked;
        PickedGroups.clear();
        for (const name in groups) {
            if (groups[name]) {
                PickedGroups.push(name);
            }
        }
        setGroups({...groups});
    }
    return (
        <>
            <Divider key={'ModGroups'} className="p-0 mt-3 mb-1">Mod Groups</Divider>
            <Container>
                <Row>
                    {buildGroupsView(groups, onGroupChange)}
                </Row>
            </Container>
        </>
    );
}
