import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
};


function None1Row({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.none1} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default None1Row;