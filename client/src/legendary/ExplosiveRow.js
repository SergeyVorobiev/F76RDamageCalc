import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    5: '5%',
    10: '10%',
    15: '15%',
    20: '20%',
};


function ExplosiveRow({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.explosive} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default ExplosiveRow;