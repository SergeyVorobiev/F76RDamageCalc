import CalcModOptionsView from './CalcModOptionsView';


const infos = {
    "Non-Automatic": <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color:'#fff', backgroundColor: '#006031'}}><small>Calculate among non-automatic mods only. If only automatic mods are presented then default config will be used.</small></p>,
    "Night": <p style={{fontWeight: 'bold', paddingLeft: '0.5rem', paddingRight: '0.5rem', color:'#fff', backgroundColor: '#303b36'}}><small>Only for weapons with suppressor in sneak mode.</small></p>,
}

export default function CalcMain(props) {
    return (
        <CalcModOptionsView header={"Main"} items={props.main} setItems={props.setMain} frHead={props.frHead} setFrHead={props.setFrHead} infos={infos}></CalcModOptionsView>
    );
}