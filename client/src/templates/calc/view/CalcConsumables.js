import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Drink": <>Only <strong>Whiskey, Sweet Mut Fruit, Ballistic Bock, High Voltage Hefe, Vintage Mire Magic Moonshine, Sugar-Free Nukashine</strong> are used to reduce the number of useless combinations.</>,
    "Food": <>Only <strong>Tasty Mutant Hound Stew, Deathclaw Wellington, Blight Soup, Spiked Venison & Tato Stew</strong> are used to reduce the number of useless combinations.</>,
    "Chemicals": <><strong>Nuclear Don's blend</strong> is not included. <b>Bufftats / Psychotats</b> is not included (<b>Psychobuff</b> is used instead). <b>Fury</b> is used instead of <b>Super Chem MK1/2/3/4</b> as it gives the same effect with <strong>Psychobuff</strong>. Only <strong>Psychobuff, Fury, Overdrive, Calmex</strong> are used to reduce the number of useless combinations.</>,
}

export default function CalcConsumables(props) {
    return (
        <CalcModOptionsView header={"Consumables"} items={props.stuff} setItems={props.setStuff} infos={infos}></CalcModOptionsView>
    );
}