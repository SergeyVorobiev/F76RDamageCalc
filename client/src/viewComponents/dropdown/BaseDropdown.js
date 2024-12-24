import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function getItems(dict) {
    const result = [];
    for (const name in dict) {
        result.push(<Dropdown.Item key={name} eventKey={name}>{dict[name]}</Dropdown.Item>);
    }
    return result;
}

export default function BaseDropdown(props) {
    let onSelect = props.onSelect;
    if (!onSelect) {
        onSelect = (e) => {
            props.setValue(e);
        };
    }
    return (
        <DropdownButton variant={props.variant} size={props.size} onSelect={onSelect} title={props.title}>
            {getItems(props.dict)}
        </DropdownButton>
    );
}

