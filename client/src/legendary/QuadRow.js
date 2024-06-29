import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    50: '50%',
    100: '100%',
    150: '150%',
    200: '200%',
    250: '250%',
    300: '300%',
};


function QuadRow({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.quad} setLegendary={setLegendary} legendary={legendary} disabled={true}></LegRow>
    );
}

export default QuadRow;