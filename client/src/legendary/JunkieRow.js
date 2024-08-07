import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    10: '10%',
    20: '20%',
    30: '30%',
    40: '40%',
    50: '50%',
};


function JunkieRow({setLegendary, legendary}) {
    return (
        <LegRow marks={marks} perk={legendary.junkie} setLegendary={setLegendary} legendary={legendary}></LegRow>
    );
}

export default JunkieRow;