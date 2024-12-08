import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Legendary1": <>Only <strong>Quad, Aristocrat, Anti-Armor, Two Shot, Executioner, Bloodied</strong> are used to reduce the number of useless combinations.</>,
    "Legendary2": <>Only <strong>Steady, Melee Rapid, Hitman, Ranged Rapid, Vital, Explosive, Crippling</strong> are used to reduce the number of useless combinations.</>,
    "Legendary3": <>Only <strong>Swift, Strength</strong> are used to reduce the number of useless combinations.</>,
}

export default function CalcLegendary(props) {
    return (
        <CalcModOptionsView header={"Legendary"} items={props.leg} setItems={props.setLeg} infos={infos}></CalcModOptionsView>
    );
}