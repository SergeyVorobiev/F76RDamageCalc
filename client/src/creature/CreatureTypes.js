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
    ]),
    molerat: new Set([
        "molerat",
    ]),
    animal: new Set([
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
        "sheepsquatch",
        "sheepsquatchimposterling",
        "thrasher",
        "viciousdog",
        "wolf",
        "yaoguai",
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
    ]),
    super_mutant: new Set([
        "supermutant",
        "supermutantbrawler",
        "supermutantfirestarter",
    ]),
    cryptid: new Set([
        "alien",
        "alien_cpt-alpha-omega",
        "alien_general-zeta",
        "alien_lt-kappa",
        "alienexotrooper",
        "flatwoodsmonster",
        "grafton",
        "jerseydevil",
        "ogua",
        "snallygaster",
        "wendigo",
        "wendigocolossus",
    ]),
    mirelurk: new Set([
        "mirelurkcrab",
        "mirelurkhunter",
        "mirelurkking",
        "mirelurkqueen",
        "mirelurkspawn",

    ]),
    ghoul: new Set([
        "feralghoul",
        "feralghoulglowing",
        "lostchampion",
        "lostdweller",
        "lostferalsuicider",
    ]),
    glowing: new Set([
        "feralghoulglowing"
    ]),
    moleminer: new Set([
        "moleminer",
        "moleminerjuggernaut",
    ]),
    scorched: new Set([
        "scorchbeast",
        "scorched",
        "scorchedexterminator",
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
    ]),
}

export function determineType(name) {
    for (const property in creatureTypes) {
        if (creatureTypes[property].has(name)) {
            return property;
        }
    }
    return "";
}

export function determineBody(name) {
    if (creatureTypes.glowing.has(name)) {
        return "glowing";
    } else if (creatureTypes.scorched.has(name)) {
        return "scorched";
    } else {
        return "normal";
    }
}