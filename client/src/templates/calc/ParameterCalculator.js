import { defaultExtraDamage } from '../../entities/EResultDamage';
import { defaultCreatures } from '../../entities/ECreatures';
import { defaultAdds } from '../../entities/EAddDamages';
import { convertTemplateToSpecs } from '../../entities/EWeaponSpecs';
import { defaultPlayerStats } from '../../entities/EPlayerStats';
import { defaultPlayer } from '../../entities/EPlayer';
import WeaponFactory from '../../damage/weapon/WeaponFactory';
import DamageEmulator from '../../damage/DamageEmulator';
import { getTemplateCopyById } from '../../helpers/TemplatesRegister';
import { modsSetter } from '../TemplateItems';
import { millisToTime } from '../../helpers/Time';
import Combinator from '../../helpers/Combinator';
import AccuracyHelper from '../../helpers/AccuracyHelper';
import PerkBuilder from '../../boost/PerkBuilder';
import ConsumablesBuilder from '../../boostStuff/ConsumablesBuilder';
import TemplateTools from '../TemplateTools';
import { ModParser } from '../../helpers/mods/ModParser';
import LegendaryCalcBuilder from '../../helpers/LegendaryCalcBuilder';
import LegendarySetter from '../../helpers/mods/LegendarySetter';
import { getLegendaryNameFromSpec } from '../../helpers/LegendaryProvider';


export default class ParameterCalculator {
    static info = (
        <>
            <p>
                <b>ATTENTION!</b>
            </p>
            <p>
                ⁍ Not all weapons are tested in real game, therefore some of damage values can be incorrect or
                mods (which are presented in the calculator) can be not accessible for usage in the game. The calculator will run through mods, legendary mods, perks, consumables to find the best configuration provided that a weapon has 100% accuracy.
            </p>
            <p>
                ⁍ The calculator will try to pick mods with best recoil / spread, but they will not impact accuracy during calculations whereas in real game accuracy can greatly affect damage performance.
            </p>
            <p>
                ⁍ Possible AP benefits are ignored.
            </p>
            <p>
                ⁍ Weapons with default legendary mods will not be iterated through other legendary.
            </p>
            <p>
                ⁍ Gun-Foo, Glow Sight, Exterminator, Bash and some other perks affecting accuracy are ignored.
            </p>
            <p>
                ⁍ Power attack, Furious are ignored (as being not tested for now).
            </p>
        </>
    );
    static info1 = "Calculate through different settings to find the best. Gun-Foo, Glow Sight, Exterminator, Bash and Mister Sandman are not participated in calculations. " +
                    "Legendary1, Legendary2, Legendary3, Legendary4, Legendary5, Customname, Frontsight modification groups are excluded i.e. If " +
                    "some of mods from these groups are de / selected by default they will not be changed. Legendary for weapons are calculated separately except for weapons which have default legendary. " +
                    "There are mods from some groups (like 'Grip') that can have potential benefits which are not seen by the calculator. It is usually groups with " +
                    "next modifications: APCost, MaxRange, MinRange, ConIronSights, RecoilMaxDegree, RecoilMinDegree, MaxConDegree, MinConDegree, SightedTransition, " +
                    "BaseStability, RecoilArcDeg, RecoilArcRotateDeg. Lack of AP, in most of the cases, can be solved by using tea / coffee. Range, recoil, spread can be approximately fused into accuracy parameter, but " +
                    "as the calculator does not have this sophisticated converter you have to choose what of these mods are best for you manually. Sometimes for 'Agility' category the best configuration can require more than 15 points as it is slightly overwhelmed. In this case you have to handle this manually (otherwise it would greatly increase the number of combinations to check)";
    constructor(id, modGroups, cards, frCrit, frHead, main, stuff, legendaryOpts, accuracyPreference) {
        this.id = id;
        this.modGroups = modGroups;
        this.modCombinator = null;
        this.boostCombinator = null;
        this.bestParameters = null;
        this.lastParameters = null;
        this.bestTime = Infinity;
        this.lastTime = Infinity;
        this.creatureName = null;
        this.template = null;
        this.count = 0;
        this.maxCount = 0;
        this.cards = cards;
        this.frHead = frHead;
        this.frCrit = frCrit;
        this.main = main;
        this.stuff = stuff;
        this.modParser = new ModParser();
        this.legendary = null;
        this.legendaryOpts = legendaryOpts;
        this.defaultLegendary = null;
        this.hasGotLastCombination = false;
        this.currentConfig = {};
        this.bestConfig = null;
        this.accuracyHelper = new AccuracyHelper();
        this.accuracyPreference = accuracyPreference;
        this.defaultExplosive = false;
        this.perkImageNames = [];

        // Currently accuracy mods do not influence on damage but, best
        // values still can be calculated (without paying attention to distance)
        // specify such a mods in advance to reduce the number of computations
        this.bestAccuracyMods = null;
    }

    getBestParameters() {

        // We are finished, but for Non-Automatic option best parameters can still be null
        // use the last one
        return (this.bestParameters) ? this.bestParameters : this.lastParameters;
    }

    getTemplate() {
        return this.template;
    }

    getCount() {
        return this.count;
    }

    getMaxCount() {
        return this.maxCount;
    }

    getBestTime(clockFormat=true) {
        const time = (this.bestParameters) ? this.bestTime : this.lastTime;
        if (clockFormat) {
            return millisToTime(time);
        }
        return time;
    }

    prepareAndCalcFirst(creatureName="Average") {

        // The order of invoking functions is important!
        this.creatureName = creatureName;
        this.template = getTemplateCopyById(this.id);
        this.bestAccuracyMods = this.accuracyHelper.getBestMods(this.template, this.modGroups, this.accuracyPreference);
        this.defaultLegendary = TemplateTools.getDefaultLegendary(this.template, new LegendarySetter());
        this.defaultExplosive = this.isDefaultExplosive();
        this.legendary = this.buildLegendary();
        const silencerDamage = this.main.Night && this.cards.Sneak;
        const modCombinations = TemplateTools.getDamagedModIndexes(this.template, this.modGroups, this.bestAccuracyMods, silencerDamage);
        this.modCombinator = new Combinator(modCombinations);
        this.maxCount = this.modCombinator.getCombinationsCount();
        this.applyMods();
        this.boostCombinator = this.buildBoostCombinator();
        let consList = null;
        let legsList = null;
        if (this.boostCombinator) {
            const current = this.boostCombinator.current();
            consList = this.buildConsumableList(current);
            legsList = this.buildLegendaryList(current);
        }
        this.calculateAndCount(consList, legsList);
    }

    buildLegendary() {
        const legendary = {};
        const range = TemplateTools.isWeaponRanged(this.template);
        const lowHP = this.cards["Low HP"];
        const scoped = this.main["Scoped"];
        let leg1 = [];
        let leg2 = [];
        let leg3 = [];
        if (this.defaultLegendary.length === 0) {
            if (this.legendaryOpts.Legendary1) {
                leg1 = LegendaryCalcBuilder.getLegendary1(range, lowHP);
            }
            if (this.legendaryOpts.Legendary2) {
                leg2 = LegendaryCalcBuilder.getLegendary2(range, this.defaultExplosive, scoped);
            }
            if (this.legendaryOpts.Legendary3) {
                leg3 = LegendaryCalcBuilder.getLegendary3(range);
            }
        }
        legendary['Legendary1_l'] = leg1;
        legendary['Legendary2_l'] = leg2;
        legendary['Legendary3_l'] = leg3;
        return legendary;
    }

    getConsumables() {
        const result = {};
        const wType = this.template.type[1];
        const wName = this.template.name;
        const tags = this.template.tags;
        const ammo = (this.template.ammoType) ? this.template.ammoType.codeName : "";
        const crit = this.cards.Crit;
        const sneak = this.cards.Sneak;
        const team = this.cards.Team;
        const lowHP = this.cards["Low HP"];
        const scoped = this.main["Scoped"];
        if (this.stuff["Magazines"]) {
            result["Magazines_c"] = ConsumablesBuilder.getMagazineItems(wType, wName, tags, crit, team, scoped);
        }
        if (this.stuff["Endangerol Syringer"]) {
            const others = ConsumablesBuilder.getOtherItems(TemplateTools.hasPhysicalDamage(this.template));
            if (others.length > 0) {
                result["Syringer_c"] = others;
            }
        }
        if (this.stuff["Bobble Heads"]) {
            const bobble = ConsumablesBuilder.getBobbleHeadItems(wType, tags, ammo);
            if (bobble.length > 0) {
                result["Bobble_c"] = bobble;
            }
        }
        if (this.stuff["Drink"]) {
            const drink = ConsumablesBuilder.getDrinkItems(wType, tags, crit);
            if (drink.length > 0) {
                result["Drink_c"] = drink;
            }
        }
        if (this.stuff["Chemicals"]) {
            result["Chemicals_c"] = ConsumablesBuilder.getChemicalItems(wType, crit, sneak);
        }
        if (this.stuff["Food"]) {
            const food = ConsumablesBuilder.getFoodItems(wType, crit);
            if (food.length > 0) {
                result["Food_c"] = food;
            }
        }
        if (this.stuff["Serums"]) {
            result["Serums_c"] = ConsumablesBuilder.getSerumItems(wType, crit, lowHP, team, this.stuff["Food"]);
        }
        return (Object.keys(result).length === 0) ? null : result;
    }

    calculateAndCount(consumableBoostsList, legendary) {
        this.lastParameters = this.calculateCombination(consumableBoostsList, legendary);
        this.lastTime = this.lastParameters[this.creatureName];
        if (!this.lastParameters["Rejected"]) {
            if (this.lastTime <= this.bestTime) {
                this.bestParameters = this.lastParameters;
                this.bestTime = this.lastParameters[this.creatureName];
                this.updateBestConfig();
            }
        }
        this.count += 1;
    }

    buildBoostCombinator() {
        let consCombinations = this.getConsumables();
        if (!consCombinations) {
            consCombinations = {};
        }
        for (const name in this.legendary) {
            consCombinations[name] = this.legendary[name];
        }
        if (Object.keys(consCombinations).length > 0) {
            return new Combinator(consCombinations);
        }
        return null;
    }

    buildConsumableList(boostCombinations) {
        const result = [];
        if (!boostCombinations) {
            return result;
        }
        for (const name in boostCombinations) {
            if (name.endsWith("_c")) {
                const array = boostCombinations[name];
                for (let i = 0; i < array.length; i++) {
                    result.push(array[i]);
                }
            }
        }
        return result;
    }

    buildLegendaryList(boostCombinations) {
        const result = [];
        if (!boostCombinations) {
            return result;
        }
        for (const name in boostCombinations) {
            if (name.endsWith("1_l")) {
                result.push([boostCombinations[name], 0]);
            } else if (name.endsWith("2_l")) {
                result.push([boostCombinations[name], 1]);
            } else if (name.endsWith("3_l")) {
                result.push([boostCombinations[name], 2]);
            }
        }
        return result;
    }

    nextBoostExists() {
        return this.boostCombinator && this.boostCombinator.next();
    }

    calculateCombinations(maxCount=1) {
        let count = 0;
        while (count < maxCount) {
            let modCombinationExists = false;
            let currentBoosts = null;
            if (!this.nextBoostExists()) {
                modCombinationExists = this.modCombinator.next();
                if (modCombinationExists) {
                    this.applyMods();
                    this.boostCombinator = this.buildBoostCombinator();
                    if (this.boostCombinator) {
                        currentBoosts = this.boostCombinator.current();
                    }
                } else {
                    break;
                }
            } else {
                currentBoosts = this.boostCombinator.current();
            }
            const consList = this.buildConsumableList(currentBoosts);
            const legsList = this.buildLegendaryList(currentBoosts);
            this.calculateAndCount(consList, legsList);
            count += 1;
        }
        this.hasGotLastCombination = (count === 0);
        return !this.hasGotLastCombination;
    }

    isFinished() {
        return this.hasGotLastCombination;
    }

    getCompletionPercent() {
        if (!this.modCombinator) {
            return 0;
        }
        const onePart =  100 / this.modCombinator.getCombinationsCount();
        return parseInt(onePart * this.modCombinator.getCurrentNumber());
    }

    applyMods() {
        TemplateTools.resetMods(this.template);
        const combinations = this.modCombinator.current();
        for (const name in combinations) {
            const modGroup = this.template.allMods[name];
            if (modGroup) {
                const modIndex = combinations[name];
                if (modIndex > -1) {
                    modGroup[modIndex][1] = true;
                }
            }
        }
        modsSetter.cleanTemplateAndApplyCurrentMods(this.template);
    }

    // Considers that if explosive exists by default then it will exist for any other configuration
    // must be applied before resetting template
    isDefaultExplosive() {
        modsSetter.cleanTemplateAndApplyCurrentMods(this.template);
        return TemplateTools.isWeaponExplosive(this.template);
    }

    nonAutomatic() {
        return (this.main["Non-Automatic"] && this.template.isAuto[1] === 1);
    }

    applyLegendaryToWSpec(wSpec, legendary, update) {
        if (!legendary) {
            return;
        }
        const lowHP = this.cards["Low HP"];
        for(let i = 0; i < legendary.length; i++) {
            const leg = legendary[i];
            const legId = leg[0];
            const legIndex = leg[1];
            this.modParser.applyLegendaryModToWSpec(legId, wSpec, legIndex, ((lowHP) ? 20 : 100), update, true);
            wSpec.legendary[legIndex][0] = legId;
        }
    }

    memoConfig(wSpec, consumableBoostsList) {
        const mods = [];
        const leg1 = getLegendaryNameFromSpec(wSpec, 1);
        const leg2 = getLegendaryNameFromSpec(wSpec, 2);
        const leg3 = getLegendaryNameFromSpec(wSpec, 3);
        for (let i = 0; i < wSpec.mods.length; i++) {
            const mod = wSpec.mods[i];
            mods.push({group: mod.group, name: mod.name});
        }
        this.currentConfig["mods"] = mods;
        this.currentConfig["consumables"] = consumableBoostsList;
        this.currentConfig["legendary"] = [leg1, leg2, leg3];
        this.currentConfig["perks"] = this.perkImageNames;
        return this.currentConfig;
    }

    updateBestConfig() {
        this.bestConfig = {};
        const mods = [];
        const legs = [];
        const consumables = [];
        const perks = [];
        this.bestConfig['mods'] = mods;
        this.bestConfig['legendary'] = legs;
        this.bestConfig['consumables'] = consumables;
        this.bestConfig['perks'] = perks;
        for (let i = 0; i < this.currentConfig.mods.length; i++) {
            const mod = this.currentConfig.mods[i];
            mods.push({group: mod.group, name: mod.name});
        }

        for (let i = 0; i < this.currentConfig.legendary.length; i++) {
            const leg = this.currentConfig.legendary[i];
            legs.push(leg);
        }

        for (let i = 0; i < this.currentConfig.consumables.length; i++) {
            const cons = this.currentConfig.consumables[i];
            consumables.push(cons);
        }

        for (let i = 0; i < this.currentConfig.perks.length; i++) {
            const perk = this.currentConfig.perks[i];
            perks.push(perk);
        }
    }

    getBestConfig() {
        return (this.bestConfig) ? this.bestConfig : this.currentConfig;
    }

    getCurrentConfig() {
        return this.currentConfig;
    }

    calculateCombination(consumableBoostsList, legendary) {
        const wSpec = convertTemplateToSpecs(this.template, false);

        // Update default legs or apply new in wSpec
        const updateLeg = this.defaultLegendary.length > 0;
        const legToApply = (this.defaultLegendary.length > 0) ? this.defaultLegendary : legendary;
        this.applyLegendaryToWSpec(wSpec, legToApply, updateLeg);
        const extraDamage = defaultExtraDamage();
        extraDamage.useCrit = this.cards["Crit"];
        extraDamage.critFreq = this.frCrit;
        extraDamage.useSneak = this.cards["Sneak"];
        extraDamage.headFreq = this.frHead;
        extraDamage.useHead = this.main["Head Shot"];
        const additionalDamages = defaultAdds();
        const player = defaultPlayer();
        const playerStats = defaultPlayerStats();
        playerStats.strength.value = this.main["Strength"];
        const boostDamage = this.buildPerks(wSpec, player);
        this.memoConfig(wSpec, consumableBoostsList);
        const creatures = defaultCreatures();
        const [, consumableBoosts] = ConsumablesBuilder.buildFromList(consumableBoostsList, player);
        const weaponFactory = new WeaponFactory(wSpec, boostDamage, extraDamage, additionalDamages, consumableBoosts, playerStats);
        const timeLimit = (this.bestTime === Infinity) ? null : [this.creatureName, this.bestTime];
        const result = new DamageEmulator(weaponFactory.build(WeaponFactory.DEFAULT), creatures).emulate(35000, timeLimit);
        
        return {
            "Rejected": this.nonAutomatic(),
            "Parameters": {
                wSpec: wSpec,
                creatures: creatures,
                extraDamage: extraDamage,
                additionalDamages: additionalDamages,
                player: player,
                playerStats: playerStats,
                boostDamage: boostDamage,
                result: result,
                consumableList: consumableBoostsList,
            },
            "SBQ": creatures.sbq.lifeTime,
            "Earle": creatures.earle.lifeTime,
            "UTitan": creatures.titan.lifeTime,
            "Average": Math.floor((creatures.sbq.lifeTime + creatures.earle.lifeTime + creatures.titan.lifeTime) / 3.0),
        };
    }

    buildPerks(wSpec, player) {
        const wType = wSpec.type;
        const automatic = (wSpec.is_auto === 1);
        const energyTag = wSpec.tags.includes("Energy");
        const explosiveTag = wSpec.tags.includes("Explosive");
        const fusionTag = wSpec.tags.includes("FusionCore");
        const oneHandedTag = wSpec.tags.includes("Melee1H");
        const twoHandedTag = wSpec.tags.includes("Melee2H");
        const silencerTag = wSpec.tags.includes("HasSilencer");
        const shotgunTag = wSpec.tags.includes("Shotgun");
        const main = this.cards["Main Boosts"];
        const temp = this.cards["Temp Boosts"];
        const leg = this.cards["Leg Boosts"];
        const team = this.cards["Team"];
        const lowHp = this.cards["Low HP"];
        const explosive = (wSpec.exp > 0);
        const crit = this.cards["Crit"];
        const sneak = this.cards["Sneak"];
        const night = this.main["Night"];
        const useSerums = this.stuff["Serums"];
        const drink = this.stuff["Drink"];
        const boosts = PerkBuilder.buildWithOptions(wType, automatic, energyTag, explosiveTag, fusionTag, oneHandedTag, twoHandedTag, silencerTag, shotgunTag, main, temp, leg, drink, team, lowHp, explosive, crit, sneak, night, useSerums, player);
        this.perkImageNames = PerkBuilder.getImageNamesForPickedCards(boosts);
        return boosts;
    }
}