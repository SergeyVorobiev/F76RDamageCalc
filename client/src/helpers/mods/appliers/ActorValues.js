import { Apply } from './Apply';


export class ActorValues extends Apply {

    getValue(mod, weapId) {
        super.checkOp(mod, weapId, "Add");
        let value = super.getCurvValue(mod);
        if (value === 0) {
            value = parseFloat(mod.val2);
        }
        return value;
    }

    applyValue(mod, obj, name, value, apply, isLegendary=false) {
        switch(mod.val1) {
            case '00058d36 / STAT_DmgVsScorched':
                this.damageToCreature(obj, name, value, apply, "Scorched");
                break;
            case '0018eeee / STAT_DmgVsGhouls':
                this.damageToCreature(obj, name, value, apply, "Ghoul");
                break;
            case '00674c85 / STAT_DmgVsMoleMiners':
                this.damageToCreature(obj, name, value, apply, "MoleMiner");
                break;
            case '0018eef2 / STAT_DmgVsHumans':
                this.damageToCreature(obj, name, value, apply, "Human");
                break;
            case '004f5775 / STAT_DmgVsBugs':
                this.damageToCreature(obj, name, value, apply, "Bug");
                break;
            case '0018eeed / STAT_DmgVsSuperMutants':
                this.damageToCreature(obj, name, value, apply, "SuperMutant");
                break;
            case '0018eeef / STAT_DmgVsRobots':
                this.damageToCreature(obj, name, value, apply, "Robot");
                break;
            case '00674c84 / STAT_DmgVsMolerats':
                this.damageToCreature(obj, name, value, apply, "Molerat");
                break;
            case '00690c78 / STAT_DmgVsCryptids':
                this.damageToCreature(obj, name, value, apply, "Cryptid");
                break;
            case '0018eeec / STAT_DmgVsMirelurks':
                this.damageToCreature(obj, name, value, apply, "Mirelurk");
                break;
            case '0018eeeb / STAT_DmgVsAnimals':
                this.damageToCreature(obj, name, value, apply, "Animal");
                break;
            case '00097341 / ArmorPenetration':
                if (isLegendary) {
                    super.addToProperty(obj, "aa", value, apply);
                } else {
                    super.add(obj.antiArmor, value, apply);
                }
                break;
            case '006e1052 / STAT_SneakAttackBonus':
                if (isLegendary) {
                    super.addToProperty(obj, "sneak", value, apply);
                } else {
                    super.add(obj.sneak, value, apply);
                }
                break;
            case '007a6c35 / LGND_ExplosivePayload':
                if (isLegendary) {
                    super.addToProperty(obj, "exp", value, apply);
                } else {
                    this.checkZero(obj.exp, obj.id);
                    obj.exp[1] = (apply) ? value : obj.exp[0];
                }
                break;
            case '001ef5d9 / STAT_DmgLimbs':
                if (isLegendary) {
                    super.addToProperty(obj, "cripple", value, apply);
                } else {
                    super.add(obj.cripple, value, apply);
                }
                break;

            case '006c1fa9 / STAT_DmgPowerAttack':
                if (isLegendary) {
                    super.addToProperty(obj, "powerAttack", value, apply);
                } else {
                    super.add(obj.powerAttack, value, apply);
                }
                break;
            case '006c2221 / STAT_DmgBash':
                if (isLegendary) {
                    super.addToProperty(obj, "bash", value, apply);
                } else {
                    super.add(obj.bash, value, apply);
                }
                break;
            case '00527f83 / LGND_ExecuteDmg':
                if (isLegendary) {
                    super.addToProperty(obj, "totalD", value, apply);
                } else {
                    super.add(obj.totalD, value, apply);
                }
                break;
            case '000002c2 / Strength':
                if (isLegendary) {
                    super.addToProperty(obj, "strPoints", value, apply);
                } else {
                    super.add(obj.strPoints, value, apply);
                }
                break;
            default:
                break;
        }
    }

    apply(template, mod, apply) {
        const value = this.getValue(mod, template.id);
        this.applyValue(mod, template, "creature", value, apply);
    }

    applyLegendary(wSpec, mod, modId, starIndex, health, update, apply) {
        if (update) {
            return;
        }
        const value = this.getValue(mod, "Legendary");
        this.applyValue(mod, wSpec, "creature", value, apply, true);
    }

    damageToCreature(obj, property, value, apply, name) {
        const creatures = obj[property];
        let applied = false;
        let needToRemove = -1;

        // Apply to existing one
        for (let i = 0; i < creatures.length; i++) {
            const creature = creatures[i];
            if (creature.name === name) {
                applied = true;
                if (apply) {
                    creature.value += value;
                } else {
                    creature.value -= value;
                }
                if (creature.value <= 0) {
                    needToRemove = i;
                }
                break;
            }
        }

        // Remove existed because the value of it less than or equal to zero
        if (needToRemove > -1) {
            creatures.splice(needToRemove, 1);
        }

        // Add new one
        if (apply && !applied) {
            creatures.push({ "name": name, "value": value });
        }
    }

    checkZero(field, weaponId) {
        if (field[1] > 0) {
            console.log("ActorValues already has a value: " + weaponId);
        }
    }
}