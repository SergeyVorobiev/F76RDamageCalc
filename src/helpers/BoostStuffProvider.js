const magazines = require.context('../resources/boostStuff/magazines', true, /\.webp/);
const bobbleHeads = require.context('../resources/boostStuff/bobbleHeads', true, /\.webp/);
const foods = require.context('../resources/boostStuff/food', true, /\.webp/);
const drinks = require.context('../resources/boostStuff/drink', true, /\.webp/);
const psychos = require.context('../resources/boostStuff/psycho', true, /\.webp/);
const serums = require.context('../resources/boostStuff/serums', true, /\.webp/);
const others = require.context('../resources/boostStuff/others', true, /\.webp/);


export function getOther(name) {
    return getItem(name, others);
}

export function getBobbleHead(name) {
    return getItem(name, bobbleHeads);
}

export function getMagazine(name) {
    return getItem(name, magazines);
}

export function getFood(name) {
    return getItem(name, foods);
}

export function getDrink(name) {
    return getItem(name, drinks);
}

export function getPsycho(name) {
    return getItem(name, psychos);
}

export function getSerum(name) {
    return getItem(name, serums);
}

function getItem(name, collection) {
    return collection('./' + name + '.webp');
}