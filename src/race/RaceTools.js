export default class RaceTools {

    static prepareRaceName(name) {
        if (name.endsWith("_Race")) {
            name = name.substring(0, name.length - 5);
        }
        else if (name.endsWith("Race")) {
            name = name.substring(0, name.length - 4);
        }
        if (name.startsWith("ZZZ_") || name.startsWith("zzz_") || name.startsWith("ATX_") || name.startsWith("XPD_")) {
            name = name.substring(4, name.length);
        }
        return name;
    }
}