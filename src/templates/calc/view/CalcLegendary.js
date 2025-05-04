import CalcModOptionsView from './CalcModOptionsView';
import { UCheckbox } from '../../../viewComponents/checkbox/UCheckbox';
import LegsId from '../../../helpers/LegsId';


function getCheckbox(leg, setLeg, description=null) {
    const result = [];
    if (!description) {
        description = "Only legendary below are used to reduce the number of useless combinations:";
    }
    function onChange(e) {
        leg[e.target.id] = !leg[e.target.id];
        setLeg({...leg});
    }
    for (const fName in leg) {
        const used = leg[fName];
        const name = LegsId.getName(fName);
        result.push(<div key={fName} className="m-1"><UCheckbox id={fName} onChange={onChange} checked={used}><strong className="ps-1"><small>{name}</small></strong></UCheckbox></div>);
    }
    return (
        <>
            <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', color:'#fff', backgroundColor: '#dc8e00'}}><small>{description}</small></p>
            {result}
            <div className="m-1" />
        </>
    )
}

export default function CalcLegendary(props) {
    const infos = {
        "Legendary1": getCheckbox(props.leg1, props.setLeg1),
        "Legendary2": getCheckbox(props.leg2, props.setLeg2),
        "Legendary3": getCheckbox(props.leg3, props.setLeg3),
        "Legendary4": getCheckbox(props.leg4, props.setLeg4, "To reduce complexity of conditions and to get rid of useless combinations, the only Encircler's will be applied as it gives +50% damage bonus. You can expect similar behaviour from other 4-star mods"),
        "Legendary5": getCheckbox(props.leg4, props.setLeg4, "Not Accessible"),
    }
    return (
        <CalcModOptionsView header={"Legendary"} items={props.leg} setItems={props.setLeg} infos={infos}></CalcModOptionsView>
    );
}