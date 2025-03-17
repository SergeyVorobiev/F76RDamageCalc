const perks = require.context('../resources/perks', true, /\.webp/);


export default function getPerkImage(name) {
    try {
        return perks('./' + name + '.webp');
    } catch {
        return '';
    }
}