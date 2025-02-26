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

        // The data is hardcoded into a perk
        if (mult > 1) {
            if (health <= 20) {
                ar = 63.0;
            } else if (health <= 30) {
                ar = 55.0;
            } else if (health <= 40) {
                ar = 48.0;
            } else if (health <= 50) {
                ar = 39.0;
            } else if (health <= 60) {
                ar = 31.0;
            } else if (health <= 70) {
                ar = 24.0;
            } else if (health <= 80) {
                ar = 16.0;
            } else if (health <= 90) {
                ar = 8.0;
            }
        } else {
            if (health <= 20) {
                ar = 50.0;
            } else if (health <= 30) {
                ar = 44.0;
            } else if (health <= 40) {
                ar = 38.0;
            } else if (health <= 50) {
                ar = 31.0;
            } else if (health <= 60) {
                ar = 25.0;
            } else if (health <= 70) {
                ar = 19.0;
            } else if (health <= 80) {
                ar = 13.0;
            } else if (health <= 90) {
                ar = 6.0;
            }
        }
        return ar;
    },

    eagleEyes: (player, defValue) => {
        const mult = getStrangeMult(player);

        // Hardcoded in 003c4037
        if (mult > 1) {
            return 62.5
        }
        return defValue;
    },

    eagleEyesNegative: (player, defValue) => {
        const mult = getFreakReduction(player);
        return defValue * mult;
    },

    empathSerum: (player, defValue) => {
        const mult = getStrangeMult(player);
        if (mult > 1) {
            return 2;
        }
        return defValue;
    },

    carnivoreSerum: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },

    herbivoreSerum: (player, defValue) => {
        const mult = getStrangeMult(player);
        return mult * defValue;
    },

    foodCalc: (player, defValue, foodPref, foodType) => {
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

        // Positives is hardcoded inside 004e1f1e
        let posValue = defValue;
        if (mult > 1) {
            posValue = 3;
        }
        return (player.team) ? posValue : -defValue * red;
    },

    speedDemonMove: (player, defValue) => {
        const mult = getStrangeMult(player);

        // Hardcoded in 004df1e0
        if (mult > 1) {
            return 25;
        }
        return defValue;
    },

    speedDemonReload: (player, defValue) => {
        const mult = getStrangeMult(player);

        // Hardcoded in 004df1e0
        if (mult > 1) {
            return 40;
        }
        return defValue;
    },

    talons1: (player, defValue) => {
        const mult = getStrangeMult(player);

        // Hardcoded in 0028d3bc
        if (mult > 1) {
            return 35;
        }
        return defValue;
    },

    talons2: (player, defValue) => {
        return defValue;
    },

    twistedMuscles: (player, defValue) => {
        const mult = getStrangeMult(player);

        // Hardcoded in 00386acd
        if (mult > 1) {
            return 35;
        }
        return defValue;
    }
}