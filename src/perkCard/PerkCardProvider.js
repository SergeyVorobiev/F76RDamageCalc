import perkCards from '../resources/perkCards.json';
import { getEffect } from '../helpers/EffectProvider';


function prepareName(name, card) {
    if (!card.legendary && name.startsWith("Expert")) {
        name = name.slice(7, name.length) + " (Expert)";
    } else if (!card.legendary && name.startsWith("Master")) {
        name = name.slice(7, name.length) + " (Master)";
    }
    return name;
}

for (let i = 0; i < perkCards.length; i++) {
    const card = perkCards[i];
    let name;
    if (!card.mPerk1) {
        name = card.mName;
    } else {
        const mPerk = getEffect(card.mPerk1);
        name = mPerk.full;
    }
    name = prepareName(name, card);
    if (card.fPerk1 && card.fPerk1 !== "") {
        const fPerk = getEffect(card.fPerk1);
        const name2 = prepareName(fPerk.full, card);
        name = name + " / " + name2;
    }
    card["fullName"] = name;
}

function nameComparator(item1, item2) {
    return item1.fullName.localeCompare(item2.fullName);
}

const sortedItems = perkCards.sort(nameComparator);

export function getSortedPerkCards() {
    return sortedItems;
}

export function getPerkCard(id) {
    for (let i = 0; i < sortedItems.length; i++) {
        const item = sortedItems[i];
        if (item.id === id) {
            return item;
        }
    }
    return null;
}