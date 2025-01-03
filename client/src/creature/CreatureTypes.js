import CreatureDataProvider from './CreatureDataProvider';


export const creatureTypes = {
    human: new Set([
        "bloodeagledestroyer",
        "communistcommander",
        "fanaticboss_dailyops",
        "cultisthighpriest",
        "cultistprophet",
        "humanciviliancompetitor",
        "humanfanatic",
        "humanfanaticboss",
        "humanfanaticminiboss",
        "humanfanaticminibosselite",
        "humanfanaticpowerarmor",
        "humanmobster",
        "humanmunicipalauditor",
        "humanraider",
        "humansettler",
        "humanshowman",
        "hellcatmercenary",
        "bloodeagle",
        "bloodeaglepowerarmor",
        "communist",
        "communistpowerarmor",
        "hewsen",
        "humancultist",
        "humancultistpowerarmor",
        "humanraiderpowerarmor",
        "kit",
        "norland",
        "prcboss",
        "shin",
    ]),
    trog: new Set([
        "trogfledgling",
        "trogglowing",
        "trogmelee",
        "trogsuperior",
    ]),
    molerat: new Set([
        "molerat",
    ]),
    floater: new Set([
        "floater",
        "floaterflamer",
        "floaterfreezer",
        "floatergnasher",
    ]),
    arthropod: new Set([
        "hermitcrab",
        "storm_e01_hermitcrab",
    ]),
    animal: new Set([
        "attackdog",
        "angler",
        "bluedevil",
        "brahmin",
        "gulper",
        "megasloth",
        "molerat",
        "mutanthound",
        "radrat",
        "radstag",
        "radtoad",
        "scorchbeast",
        "scorchbeastqueen",
        "sheepsquatch",
        "sheepsquatchimposterling",
        "thrasher",
        "viciousdog",
        "wolf",
        "yaoguai",
        "molerat",
    ]),
    critter: new Set([
        "critter",
    ]),
    reptile: new Set([
        "deathclaw",
    ]),
    insect: new Set([
        "radant",
        "bloatfly",
        "bloodbug",
        "cavecricket",
        "fogcrawler",
        "honeybeast",
        "mothman",
        "radroach",
        "radscorpion",
        "stingwing",
        "tick",
        "honeybeastbeeswarm",
    ]),
    super_mutant: new Set([
        "supermutant",
        "supermutantbrawler",
        "supermutantfirestarter",
        "behemothboss",
        "smbehemoth",
    ]),
    wendigo: new Set([
        "wendigo",
    ]),
    wendigocolossus: new Set([
        "wendigocolossus",
        "en06_wendigocolossus",
    ]),
    grafton: new Set([
        "grafton",
        "e09b_grafton",
        "sfs08_grafton",
        "sfs09_grafton",
    ]),
    cryptid: new Set([
        "alien",
        "alien_cpt-alpha-omega",
        "alien_general-zeta",
        "alien_lt-kappa",
        "alienexotrooper",
        "flatwoodsmonster",
        "grafton",
        "e09b_grafton",
        "sfs08_grafton",
        "sfs09_grafton",
        "jerseydevil",
        "ogua",
        "snallygaster",
        "wendigo",
        "wendigocolossus",
        "en06_wendigocolossus",
        "lesserdevil",
        "zetaninquisitor",
    ]),
    mirelurk: new Set([
        "mirelurkcrab",
        "mirelurkhunter",
        "mirelurkking",
        "mirelurkqueen",
        "mirelurkspawn",
    ]),
    ultracit_abomination: new Set([
        "ultraciteabomination",
    ]),
    overgrown: new Set([
        "overgrownboss",
        "overgrownboss_dailyops",
        "overgrowndrone",
        "overgrownsporemaster",
        "overgrownstandard",
        "overgrowntank",

    ]),
    ghoul: new Set([
        "feralghoul",
        "feralghoulglowing",
        "lostchampion",
        "lostdweller",
        "lostferalsuicider",
        "lostengineer",
    ]),
    glowing: new Set([
        "feralghoulglowing",
        "trogglowing",
    ]),
    moleminer: new Set([
        "e09a_moleminer",
        "moleminer",
        "moleminerjuggernaut",
    ]),
    scorched: new Set([
        "scorchbeast",
        "scorched",
        "scorchedexterminator",
        "scorchbeastqueen",
    ]),
    robot: new Set([
        "zetandrone",
        "zetanelitedrone",
        "zetanexplosivedrone",
        "turret",
        "vertibird",
        "vertibot",
        "asamturret",
        "assaultron",
        "assaultronintimidator",
        "eyebot",
        "liberator",
        "mrhandy",
        "protectron",
        "robobrain",
        "sentrybot",
        "stormboss",
    ]),
}

export function determineType(name) {
    for (const property in creatureTypes) {
        if (property === "glowing" || property === "normal" || property === "wendigo" || property === "grafton" || property === "wendigocolossus") { // Body, Sub type
            continue;
        }
        if (creatureTypes[property].has(name)) {
            return property;
        }
    }
    return "";
}

export function determineBody(name) {
    verifyTypes();
    if (creatureTypes.glowing.has(name)) {
        return "glowing";
    } else if (creatureTypes.scorched.has(name)) {
        return "scorched";
    } else {
        return "normal";
    }
}

function verifyTypes() {
    const names = CreatureDataProvider.getCreatureNames();
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        let found = false;
        for (const creatureType in creatureTypes) {
            const creatureCollection = creatureTypes[creatureType];
            if (creatureCollection.has(name)) {
                found = true;
                break;
            }
        }
        if (!found) {
            console.log(name + " is not found among types");
        }
    }
}