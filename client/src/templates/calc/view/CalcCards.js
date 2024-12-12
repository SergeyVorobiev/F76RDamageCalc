import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Temp Boosts": "Cards like Adrenaline, Tenderizer...",
    "Main Boosts": "Cards like Heavy Gunner, Stabilized...",
    "Leg Boosts": "TOFT, Follow Through.",
    "Low HP": "20% / 100%",
    "Power Armor": "Used only for 'Heavy', ignored for other groups",
}

export default function CalcCards(props) {
    return (
        <CalcModOptionsView header={"Cards"} items={props.cards} setItems={props.setCards} frCrit={props.frCrit} setFrCrit={props.setFrCrit} infos={infos}></CalcModOptionsView>
    );
}