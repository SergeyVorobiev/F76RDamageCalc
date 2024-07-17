const magazines = require.context('../resources/boostStuff/magazines', true, /\.png/);
const magazinesList = magazines.keys().map(magazine => magazines(magazine));

const bobbleHeads = require.context('../resources/boostStuff/bobbleHeads', true, /\.png/);
const bobbleHeadsList = bobbleHeads.keys().map(bobbleHead => bobbleHeads(bobbleHead));

const foods = require.context('../resources/boostStuff/food', true, /\.png/);
const foodsList = foods.keys().map(food => foods(food));

const drinks = require.context('../resources/boostStuff/drink', true, /\.png/);
const drinksList = drinks.keys().map(drink => drinks(drink));

const psychos = require.context('../resources/boostStuff/psycho', true, /\.png/);
const psychoList = psychos.keys().map(psycho => psychos(psycho));

const serums = require.context('../resources/boostStuff/serums', true, /\.png/);
const serumList = serums.keys().map(serum => serums(serum));

export function getBobbleHead(name) {
    return getItem(name, bobbleHeadsList);
}

export function getMagazine(name) {
    return getItem(name, magazinesList);
}

export function getFood(name) {
    return getItem(name, foodsList);
}

export function getDrink(name) {
    return getItem(name, drinksList);
}

export function getPsycho(name) {
    return getItem(name, psychoList);
}

export function getSerum(name) {
    return getItem(name, serumList);
}

function getItem(name, nameList) {
    for (let i = 0; i < nameList.length; i++) {
        const item = nameList[i];
        const firstIndex = item.lastIndexOf("/") + 1;
        const lastIndex = item.indexOf(".");
        const mName = item.substring(firstIndex, lastIndex);
        if (mName === name) {
            return item;
        }
    }
    return null;
}