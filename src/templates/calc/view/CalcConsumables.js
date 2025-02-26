import CalcModOptionsView from './CalcModOptionsView';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';


function buildNameFromItemId(fName, cutTail) {
    let name = fName.slice(0, fName.length - cutTail);
    name = name.replaceAll("_", " ");
    name = name.charAt(0).toUpperCase() + name.substring(1);
    return name;
}

function getCheckbox(type, cons, setCons, header=null) {
    const result = [];
    function onChange(e) {
        cons[e.target.id][0] = !cons[e.target.id][0];
        setCons({...cons});
    }
    for (const fName in cons) {
        const array = cons[fName];
        const used = array[0];
        let name = array[1];
        if (type === "Magazines") {
            name = buildNameFromItemId(fName, 9);
        } else if (type === "Bobble Heads") {
            name = buildNameFromItemId(fName, 7);
        } else if (type === "Serums") {
            name = buildNameFromItemId(fName, 6);
        }
        result.push(<div  key={fName} className="m-1"><UCheckbox id={fName} onChange={onChange} checked={used}><strong className="ps-1"><small>{name}</small></strong></UCheckbox></div>);
    }
    return (
        <>
            {header}
            {result}
            <div className="m-1" />
        </>
    )
}

const header = (<p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#fff', backgroundColor: '#81007a'}}><small>Only items below are used to reduce the number of useless combinations:</small></p>);

export default function CalcConsumables(props) {
    const infos = {
        "Magazines": getCheckbox("Magazines", props.magazines, props.setMagazines),
        "Bobble Heads": getCheckbox("Bobble Heads", props.bobbleHeads, props.setBobbleHeads),
        "Drink": getCheckbox("Drink", props.drink, props.setDrink, header),
        "Food": getCheckbox("Food", props.food, props.setFood, header),
        "Chemicals": getCheckbox("Chemicals", props.chemo, props.setChemo, header),
        "Serums": getCheckbox("Serums", props.serums, props.setSerums),
    }
    return (
        <CalcModOptionsView header={"Consumables"} items={props.stuff} setItems={props.setStuff} infos={infos}></CalcModOptionsView>
    );
}