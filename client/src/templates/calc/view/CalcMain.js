import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Non-Automatic": "Calculate among non-automatic mods only. If only automatic mods are presented then default config will be used.",
    "Night": "Only for weapons with suppressor in sneak mode.",
}

export default function CalcMain(props) {
    return (
        <CalcModOptionsView header={"Main"} items={props.main} setItems={props.setMain} frHead={props.frHead} setFrHead={props.setFrHead} infos={infos}></CalcModOptionsView>
    );
}