export default class PerkCardTools {

    static getColor(type) {
        return getComputedStyle(document.documentElement).getPropertyValue("--bg-" + type.toLowerCase() + "-card-color");
    }
}