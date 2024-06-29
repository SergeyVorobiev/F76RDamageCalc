import LegRow from './LegRow';


const marks: SliderSingleProps['marks'] = {
    0: '0%',
    10: '10%',
    20: '20%',
    30: '30%',
    40: '40%',
    50: '50%',
};

const answer = "Executioner damage will be seen as a shot damage in the result section depending on the situation: If an enemy is killed in one shot " +
"then shot damage is normal damage, if last shot was <= 40% then shot damage is +50% TDB or average between normal and boosted if only " +
"the number of simulation steps exceeds the limit. Non the less total damage applied to an enemy and its life time will be correct."

function ExecutionerRow({setLegendary, legendary}) {
    return (
            <LegRow marks={marks} perk={legendary.executioner} setLegendary={setLegendary} legendary={legendary} disabled={true} answer={answer}></LegRow>
    );
}

export default ExecutionerRow;