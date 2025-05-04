import InputGroup from 'react-bootstrap/InputGroup';
import BaseDropdown from '../../viewComponents/dropdown/BaseDropdown';
import Form from 'react-bootstrap/Form';
import effectDictJSON from '../../resources/consumable_tags';


const typeDict = {All: 'All', Chem: 'Chem', Food: 'Food', Magazine: 'Magazine', Serum: 'Serum', Drink: 'Drink', Bobblehead: 'Bobblehead', Stimpak: 'Stimpak', BloodPack: 'BloodPack', Other: 'Other'};

const effectDict = effectDictJSON[0];

export default function ConsumableFilter(props) {
    function nameChanged(e) {
        props.setFilterName(e.target.value);
        props.setCurrentPage(1);
    }
    function onSelectType(e) {
        props.setFilterType(e);
        props.setCurrentPage(1);
    }
    function onSelectEffect(e) {
        props.setFilterEffect(e);
        props.setCurrentPage(1);
    }
    return (
        <div>
            <InputGroup className="ps-1 pe-1 pb-2 flex-nowrap">
                <BaseDropdown title={"Type"} dict={typeDict} onSelect={onSelectType}></BaseDropdown>
                <Form.Control placeholder="name / id" style={{width: '10rem'}} maxLength="70" onChange={nameChanged} />
                <BaseDropdown title={"Effect"} dict={effectDict} onSelect={onSelectEffect}></BaseDropdown>
            </InputGroup>
        </div>
    );
}