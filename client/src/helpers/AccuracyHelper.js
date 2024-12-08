import { ConIronSight } from './mods/appliers/ConIronSight';
import { SightedTransition } from './mods/appliers/SightedTransition';
import { MaxConDegree } from './mods/appliers/MaxConDegree';
import { MinConDegree } from './mods/appliers/MinConDegree';
import { RecoilMaxDegree } from './mods/appliers/RecoilMaxDegree';
import { RecoilMinDegree } from './mods/appliers/RecoilMinDegree';
import { ModParser } from './mods/ModParser';
import TemplateTools from '../templates/TemplateTools';
import { ModTools } from './mods/ModTools';
import getMods from './Mods';


export default class AccuracyHelper {
    static RECOIL = 0;
    static CON = 1;
    static BALANCE = 2;

    static ACCURACY_INFO = (
        <>
            <p>
                <b>Only for range weapons.</b>
            </p>
            <p>
                The calculator does not calculate accuracy from these parameters, hence it has no influence on damage,
                but it still can choose the best among the raw values from mods.
            </p>
        </>
    );

    static ACC_PREFERENCE = {Recoil: AccuracyHelper.RECOIL, Spread: AccuracyHelper.CON, Balance: AccuracyHelper.BALANCE};

    constructor() {
        this.modEffects = new Map();
        this.modEffects.set("ConIronSight", new ConIronSight());
        this.modEffects.set("SightedTransition", new SightedTransition());
        this.modEffects.set("MaxConDegree", new MaxConDegree());
        this.modEffects.set("MinConDegree", new MinConDegree());
        this.modEffects.set("RecoilMaxDegree", new RecoilMaxDegree());
        this.modEffects.set("RecoilMinDegree", new RecoilMinDegree());
    }

    getCleanTemplate() {
        const result = {};
        result["maxConDegree"] = [1, 1];
        result["minConDegree"] = [1, 1];
        result["recoilMaxDegree"] = [1, 1];
        result["recoilMinDegree"] = [1, 1];
        result["conIronSight"] = [1, 1];
        result["sightedTransition"] = [1, 1];
        result["defaultMod"] = false;
        return result;
    }

    // Find best mods which do not affect on damage directly, not hidden and not excluded
    // If all are equal then default is used.
    getBestMods(template, includeGroups, preference) {
        const result = {}
        for (const categoryName in template.allMods) {
            const mods = template.allMods[categoryName];
            const resultMods = {};
            if (!includeGroups.includes(categoryName)) {
                continue;
            }
            for (let i = 0; i < mods.length; i++) {
                const temp = this.getCleanTemplate();
                const mod = mods[i];
                const modId = mod[0]
                const modData = getMods().get(modId);
                if (!modData || modData.hide || !AccuracyHelper.hasAccuracyData(modData)) {
                    continue;
                }

                // 4-useful (means directly affecting on damage, we skip them)
                // Consider silencer does not affect damage except some conditions
                const useful = (mod[4] && !ModTools.hasSilencer(modData));

                // 3-hidden
                if (!mod[3] && !useful && !TemplateTools.excludeMod(template.id, modId)) {
                    temp["defaultMod"] = mod[1];
                    ModParser.applySpecific(temp, modData, this.modEffects);
                    resultMods[modId] = temp;
                }
            }
            result[categoryName] = resultMods;
        }
        return this.getTheBestModsForCategory(result, preference);
    }

    getTheBestModsForCategory(allMods, preference) {
        const result = {};
        let pFunc = null;
        switch (preference) {
            case AccuracyHelper.RECOIL:
                pFunc = this.determineBestRecoilPriority;
                break;
            case AccuracyHelper.CON:
                pFunc = this.determineBestConPriority;
                break;
            case AccuracyHelper.BALANCE:
                pFunc = this.determineBestBalance;
                break;
            default:
                pFunc = this.determineBestBalance;
        }
        for (const groupName in allMods) {
            let best = null;
            const mods = allMods[groupName];
            for (const id in mods) {
                const modData = mods[id];
                best = pFunc(id, modData, best, this);
            }
            if (best) {
                result[groupName] = best[0];
            }
        }
        return result;
    }

    determineBestBalance(currentId, currentData, best, th) {
        if (!best) {
            return [currentId, currentData];
        }
        const bestCon = th.getAverageCon(best[1]);
        const currentCon = th.getAverageCon(currentData);
        const bestRecoil = th.getAverageRecoil(best[1]);
        const currentRecoil = th.getAverageRecoil(currentData);
        const bestBalance = (bestCon + bestRecoil) / 2.0;
        const currentBalance = (currentCon + currentRecoil) / 2.0;
        if (bestBalance > currentBalance) {
            return [currentId, currentData];
        } else if (bestBalance === currentBalance) {
            const bestTransition = th.getTransition(best[1]);
            const currentTransition = th.getTransition(currentData);
            if (bestTransition > currentTransition) {
                return [currentId, currentData];
            } else if (bestTransition === currentTransition) {
                const bestSight = th.getSight(best[1]);
                const currentSight = th.getSight(currentData);
                if (bestSight > currentSight) {
                    return [currentId, currentData];
                } else if (bestSight === currentSight) {
                    if (currentData['defaultMod']) { // Everything is equal then default is preferred
                        return [currentId, currentData];
                    }
                }
            }
        }
        return best;
    }

    determineBestConPriority(currentId, currentData, best, th) {
        if (!best) {
            return [currentId, currentData];
        }
        const bestCon = th.getAverageCon(best[1]);
        const currentCon = th.getAverageCon(currentData);
        if (bestCon > currentCon) {
            return [currentId, currentData];
        } else if (bestCon === currentCon) {
            const bestRecoil = th.getAverageRecoil(best[1]);
            const currentRecoil = th.getAverageRecoil(currentData);
            if (bestRecoil > currentRecoil) {
                return [currentId, currentData];
            } else if (bestRecoil === currentRecoil) {
                const bestTransition = th.getTransition(best[1]);
                const currentTransition = th.getTransition(currentData);
                if (bestTransition > currentTransition) {
                    return [currentId, currentData];
                } else if (bestTransition === currentTransition) {
                    const bestSight = th.getSight(best[1]);
                    const currentSight = th.getSight(currentData);
                    if (bestSight > currentSight) {
                        return [currentId, currentData];
                    } else if (bestSight === currentSight) {
                        if (currentData['defaultMod']) { // Everything is equal then default is preferred
                            return [currentId, currentData];
                        }
                    }
                }
            }
        }
        return best;
    }

    determineBestRecoilPriority(currentId, currentData, best, th) {
        if (!best) {
            return [currentId, currentData];
        }
        const bestRecoil = th.getAverageRecoil(best[1]);
        const currentRecoil = th.getAverageRecoil(currentData);
        if (bestRecoil > currentRecoil) {
            return [currentId, currentData];
        } else if (bestRecoil === currentRecoil) {
            const bestCon = th.getAverageCon(best[1]);
            const currentCon = th.getAverageCon(currentData);
            if (bestCon > currentCon) {
                return [currentId, currentData];
            } else if (bestCon === currentCon) {
                const bestTransition = th.getTransition(best[1]);
                const currentTransition = th.getTransition(currentData);
                if (bestTransition > currentTransition) {
                    return [currentId, currentData];
                } else if (bestTransition === currentTransition) {
                    const bestSight = th.getSight(best[1]);
                    const currentSight = th.getSight(currentData);
                    if (bestSight > currentSight) {
                        return [currentId, currentData];
                    } else if (bestSight === currentSight) {
                        if (currentData['defaultMod']) { // Everything is equal then default is preferred
                            return [currentId, currentData];
                        }
                    }
                }
            }
        }
        return best;
    }

    getAverageRecoil(modData) {
        const maxR = modData.recoilMaxDegree[1];
        const minR = modData.recoilMinDegree[1];
        return (maxR + minR) / 2.0;
    }

    getAverageCon(modData) {
        const maxC = modData.maxConDegree[1];
        const minC = modData.minConDegree[1];
        return (maxC + minC) / 2.0;
    }

    getTransition(modData) {
        return modData.sightedTransition[1];
    }

    getSight(modData) {
        return modData.conIronSight[1];
    }

    static accuracyProps = ["conIronSight", "maxConDegree", "minConDegree", "recoilMaxDegree", "recoilMinDegree", "sightedTransition"]

    static hasAccuracyData(modData) {
        /*
        let result = false;
        for (let i = 0; i < modData.modifiers.length; i++) {
            const mod = modData.modifiers[i];
        }
        return AccuracyHelper.accuracyProps.includes(modData.props)
        */
        return true;
    }
}