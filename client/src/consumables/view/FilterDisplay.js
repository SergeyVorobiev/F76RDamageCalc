import {keyValueRow} from '../../helpers/RowBuilder';


export default function FilterDisplay(props) {
    const effect = (!props.filterEffect || props.filterEffect === "None") ? "-" : props.filterEffect;
    return (
        <div className="ps-2 pe-2 pb-2">
            {keyValueRow(props.filterType, effect)}
        </div>
    );
}