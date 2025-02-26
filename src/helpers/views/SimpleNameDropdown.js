import { getUniqueDropdownItemsByNames } from '../DropdownHelpers';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function SimpleNameDropdown(props) {
    return (
        <DropdownButton variant={props.variant} size={props.size} onSelect={props.onSelect} title={props.title}>
            {getUniqueDropdownItemsByNames(props.names)}
        </DropdownButton>
    );
}
