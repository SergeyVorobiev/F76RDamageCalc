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
    partyGirlBoy: (player, defValue) => {
        return parseInt(player.alcoholEffects * defValue);
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
    eagleEyes: (player, defValue) => {
        const mult = getStrangeMult(player);
        return defValue * mult;
    },
    eagleEyesNegative: (player, defValue) => {
        const mult = getFreakReduction(player);
        return defValue * mult;
    },
    carnivoreSerum: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    herbivoreSerum: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    tastyMutantHoundStew: (player, defValue, foodPref, foodType) => {
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
        return mult * defValue;
    },
    herdMentality: (player, defValue) => {
        const mult = getStrangeMult(player);
        const red = getFreakReduction(player);
        return (player.team) ? defValue * mult : -defValue * red;
    },
    speedDemon: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    talons1: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    talons2: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },
    twistedMuscles: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    }
}