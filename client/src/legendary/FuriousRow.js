import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    5: '5%',
    10: '10%',
    15: '15%',
    20: '20%',
    25: '25%',
    30: '30%',
    35: '35%',
    40: '40%',
    45: '45%',
};

// Is not used, is it BDB or TDB? (It is completely useless as BDB and it requires additional computations to calculate it)
function FuriousRow({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.furious} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default FuriousRow;