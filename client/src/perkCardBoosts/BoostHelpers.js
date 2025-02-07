export function calculateSpecial(boostDamage) {
    for (let key in boostDamage.special) {
        boostDamage.special[key] = 0;
    }
    for (let key in boostDamage) {
        if (key === "special") {
            continue;
        }
        const card = boostDamage[key];
        const special = boostDamage.special;
        const type = card.category.toLowerCase();
        if (card.is_used) {
            special[type] += card.cost[card.rank - 1];
        }
    }
}