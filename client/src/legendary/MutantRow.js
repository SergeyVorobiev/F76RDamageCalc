import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    5: '5%',
    10: '10%',
    15: '15%',
    20: '20%',
    25: '25%',
};


function MutantRow({setLegendary, legendary}) {
    return (
        <LegRow marks={marks} perk={legendary.mutant} setLegendary={setLegendary} legendary={legendary}></LegRow>
    );
}

export default MutantRow;