import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Drink": <>Only <strong>Whiskey, Sweet Mut Fruit, Ballistic Bock, High Voltage Hefe</strong> are used to reduce the number of useless combinations.</>,
    "Food": <>Only <strong>Tasty Mutant Hound Stew, Deathclaw Wellington, Blight Soup</strong> are used to reduce the number of useless combinations.</>,
    "Chemicals": <><strong>Nuclear Don's blend</strong> is not included. <strong>Fury</strong> is used instead of <strong>Super Chem MK1</strong> as it gives the same effect with <strong>Psychobuff</strong>. Only <strong>Psychobuff, Fury, Overdrive, Calmex</strong> are used to reduce the number of useless combinations.</>,
}

export default function CalcConsumables(props) {
    return (
        <CalcModOptionsView header={"Consumables"} items={props.stuff} setItems={props.setStuff} infos={infos}></CalcModOptionsView>
    );
}