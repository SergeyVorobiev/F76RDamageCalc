import { Collapse } from 'antd';
import CreatureDataProvider from './CreatureDataProvider';
import CreatureDropdown from './CreatureDropdown';
import { useState } from 'react';
import CreatureResHealthChartsView from './CreatureResHealthChartsView';


function getView(creatureName, setCreatureName) {
    const creatureNames = CreatureDataProvider.getCreatureNames();
    let title = null;
    if (creatureName) {
        title = CreatureDataProvider.capitalizeCreatureName(creatureName);
    }
    return (
        <>
            <CreatureDropdown title={title} names={creatureNames} setCreatureName={setCreatureName} />
            <CreatureResHealthChartsView creatureName={creatureName} />
        </>
    );
}

export default function CreatureDataView(props) {
    const [creatureName, setCreatureName] = useState(null);
    // let title = creatureName;
    // if (!title) {
    let title = 'Creature Curves';
    // } else {
        title = CreatureDataProvider.capitalizeCreatureName(title);
    // }
    const item = {
        key: 1,
        label: <b className="creature-label-text">{title}</b>,
        children: getView(creatureName, setCreatureName),
    };
    const items = [];
    items.push(item);
    return (
        <Collapse accordion key={"Creature"} items={items} />
    );
}