import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    20: '20%',
    40: '40%',
    60: '60%',
    80: '80%',
    95: '95%',
};


function BloodiedRow({setLegendary, legendary}) {
    return (
        <LegRow marks={marks} perk={legendary.bloodied} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default BloodiedRow;