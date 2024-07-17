function getStrangeMult(player) {
    return (player.team) ? (1 + player.strange / 100.0) : 1.0;
}

function getFreakReduction(player) {
    return (1 - player.freak / 100.0);
}

export const functions = {
    nukeTheMan: (player) => {
        return (player.team) ? 5 : 0;
    },
    partyGirlBoy: (player) => {
        return parseInt(player.alcoholEffects * 2);
    },
    adrenalineReaction: (player) => {
        const health = player.health.value;
        const mult = getStrangeMult(player);
        let ar = 0.0;
        if (health <= 20) {
            ar = mult * 50.0;
        } else if (health <= 30) {
            ar = mult * 44.0;
        } else if (health <= 40) {
            ar = mult * 38.0;
        } else if (health <= 50) {
            ar = mult * 31.0;
        } else if (health <= 60) {
            ar = mult * 25.0;
        } else if (health <= 70) {
            ar = mult * 19.0;
        } else if (health <= 80) {
            ar = mult * 13.0;
        } else if (health <= 90) {
            ar = mult * 6.0;
        }
        return ar;
    },
    eagleEyes: (player) => {
        const mult = getStrangeMult(player);
        return 50 * mult;
    },
    eagleEyesNegative: (player) => {
        const mult = getFreakReduction(player);
        return -4 * mult;
    },
    carnivoreSerum: (player) => {
        const mult = getStrangeMult(player);
        return mult * 2;
    },
    herbivoreSerum: (player) => {
        const mult = getStrangeMult(player);
        return mult * 2;
    },
    tastyMutantHoundStew: (player, foodPref, foodType) => {
        if ((foodType === "Meet" && foodPref.herbivore) || (foodType === "Plant" && foodPref.carnivore)) {
            return 0;
        }
        let mult = 1;
        let strange = getStrangeMult(player);
        if (foodType === "Meet" && foodPref.carnivore && !foodPref.herbivore) {
            mult = 2 * strange;
        } else if (foodType === "Plant" && foodPref.herbivore && !foodPref.carnivore) {
            mult = 2 * strange;
        }
        return mult * 85;
    },
    herdMentality: (player) => {
        const mult = getStrangeMult(player);
        const red = getFreakReduction(player);
        return (player.team) ? 2 * mult : -2 * red;
    },
    speedDemon: (player) => {
        const mult = getStrangeMult(player);
        return mult * 20;
    },
    talons1: (player) => {
        const mult = getStrangeMult(player);
        return mult * 25;
    },
    talons2: (player) => {
        const mult = getStrangeMult(player);
        return mult * 2;
    },
    twistedMuscles: (player) => {
        const mult = getStrangeMult(player);
        return mult * 25;
    }
}