export function numberToString(number, round=0) {
    if (round > 0) {
        return (+number.toFixed(round)).toString();
    }
    return number.toString();
}

const emojis = ['🍦', '🍧', '🍨', '🍩', '🍪', '🎂', '🍰', '🧁', '🥧', '🍫', '🍬', '🍭', '🥨', '🥯',
                '🥞', '🧇', '🧀', '🍖', '🍗', '🥩', '🥓', '🍔', '🍮', '🍯'];

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

export function getRandomEmoji() {
    return emojis[getRandomNumber(emojis.length)];
}

export function buildRandomEmojiString(length, space=1) {
    const spaceChar = '\xa0';
    let spaceChars = "";
    if (space > 0) {
        spaceChars = spaceChar.repeat(space);
    }
    let result = "";
    const eSize = emojis.length;
    for (let i = 0; i < length; i++) {
        result += emojis[getRandomNumber(eSize)];
        if (i < (length - 1)) {
            result += spaceChars;
        }
    }
    return result;
}