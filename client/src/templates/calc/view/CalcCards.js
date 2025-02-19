import CalcModOptionsView from './CalcModOptionsView';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';


function buildNameFromItemId(fName) {
    if (fName === 'toft') {
        return 'TOFT';
    }
    let name = fName.replaceAll("_", " ");
    name = name.charAt(0).toUpperCase() + name.substring(1);
    return name;
}

function getCheckbox(cards, setCards, header=null) {
    const result = [];
    function onChange(e) {
        cards[e.target.id] = !cards[e.target.id];
        setCards({...cards});
    }
    for (const fName in cards) {
        const used = cards[fName];
        const name = buildNameFromItemId(fName);
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

export default function CalcCards(props) {
    const infos = {
        "Temp Boosts": getCheckbox(props.tempPerks, props.setTempPerks, <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color: '#fff', backgroundColor: '#8a0044'}}><small>Gun Fu is not included.</small></p>),
        "Main Boosts": getCheckbox(props.mainPerks, props.setMainPerks),
        "Leg Boosts": getCheckbox(props.legPerks, props.setLegPerks),
        "Low HP": <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color:'#fff', backgroundColor: '#155a89'}}><small>20% / 100%</small></p>,
        "Power Armor": <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color:'#fff', backgroundColor: '#5b3115'}}><small>Used only for 'Heavy', ignored for other groups.</small></p>,
    }
    return (
        <CalcModOptionsView header={"Cards"} items={props.cards} setItems={props.setCards} frCrit={props.frCrit} setFrCrit={props.setFrCrit} infos={infos}></CalcModOptionsView>
    );
}