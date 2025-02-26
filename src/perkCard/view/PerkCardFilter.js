import InputGroup from 'react-bootstrap/InputGroup';
import BaseDropdown from '../../viewComponents/dropdown/BaseDropdown';
import Form from 'react-bootstrap/Form';


const typeDict = {All: 'All', Strength: 'Strength', Perception: 'Perception', Endurance: 'Endurance', Charisma: 'Charisma', Intelligence: 'Intelligence', Agility: 'Agility', Luck: 'Luck'};
const statusDict = {All: 'All', Legendary: 'Legendary', Ordinary: 'Ordinary'};

export default function PerkCardFilter(props) {
    function nameChanged(e) {
        props.setFilterName(e.target.value);
        props.setCurrentPage(1);
    }
    function onSelectType(e) {
        props.setFilterType(e);
        props.setCurrentPage(1);
    }
    function onSelectStatus(e) {
        props.setFilterStatus(e);
        props.setCurrentPage(1);
    }
    return (
        <div>
            <InputGroup className="ps-1 pe-1 pb-2 flex-nowrap">
                <BaseDropdown title={'Type'} dict={typeDict} onSelect={onSelectType}></BaseDropdown>
                <Form.Control style={{width: '10rem'}} maxLength="70" onChange={nameChanged} />
                <BaseDropdown title={'Status'} dict={statusDict} onSelect={onSelectStatus}></BaseDropdown>
            </InputGroup>
        </div>
    );
}