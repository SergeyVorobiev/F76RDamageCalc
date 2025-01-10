import { Collapse } from 'antd';
import CreatureStats from "../creature/CreatureStats";


function getLabel(creature) {
    return (
        <>
            <div style={{float: "left", width: "auto"}}>
                <b className="creature-label-text">{creature.capName}</b>
            </div>
            <div style={{float: "right", width: "auto"}}>
                <b style={{color: '#091503'}}>Lvl:</b> <b style={{fontSize: '0.9rem', color: '#bb0000'}}>{creature.level}</b>
            </div>
        </>
    );
}
function getItems(creatureNamesRef, creatures, setCreatures, resultDamage) {
    const items = [];
    let i = 0;
    for (const name in creatures) {
        const creature = creatures[name];
        const item = {
            key: i,
            label: getLabel(creature),
            children: <CreatureStats creatureNamesRef={creatureNamesRef} creatures={creatures} setCreatures={setCreatures} creature={creature} resultDamage={resultDamage} />,
        };
        i++;
        items.push(item);
    }
    return items;
}

export default function CreaturesStats(props) {
    const items = getItems(props.creatureNamesRef, props.creatures, props.setCreatures, props.resultDamage);
    return (
        <div className="mt-1 mb-3">
            <Collapse accordion key={"Creatures"} items={items} />
        </div>
    );
}