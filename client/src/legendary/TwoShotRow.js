import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    5: '5%',
    10: '10%',
    15: '15%',
    20: '20%',
    25: '25%',
};


function TwoShotRow({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.two_shot} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default TwoShotRow;