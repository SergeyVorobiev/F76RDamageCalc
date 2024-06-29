import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
};


function None2Row({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.none2} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default None2Row;