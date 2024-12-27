import Dropdown from 'react-bootstrap/Dropdown';


export function getUniqueDropdownItemsByNames(names) {
    const result = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        result.push(<Dropdown.Item key={name} eventKey={name}>{name}</Dropdown.Item>)
    }
    return result;
}