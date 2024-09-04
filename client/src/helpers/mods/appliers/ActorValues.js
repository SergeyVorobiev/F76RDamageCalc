import { Apply } from './Apply';


export class ActorValues extends Apply {

    constructor() {
        super();
    }

    // TODO: For now 'Add' performs a function of 'Set'.
    apply(template, weaponId, mod, apply) {
        super.checkOp(mod, weaponId, "Add");
        const name = mod.val1;
        let value = super.getCurvValue(mod);
        if (value === 0) {
            value = parseFloat(mod.val2);
        }
        switch(name) {
            case '00058d36 / STAT_DmgVsScorched':
                this.damageToCreature(template, value, apply, "Scorched");
                break;
            case '0018eeee / STAT_DmgVsGhouls':
                this.damageToCreature(template, value, apply, "Ghoul");
                break;
            case '00674c85 / STAT_DmgVsMoleMiners':
                this.damageToCreature(template, value, apply, "MoleMiner");
                break;
            case '0018eef2 / STAT_DmgVsHumans':
                this.damageToCreature(template, value, apply, "Human");
                break;
            case '004f5775 / STAT_DmgVsBugs':
                this.damageToCreature(template, value, apply, "Insect");
                break;
            case '0018eeed / STAT_DmgVsSuperMutants':
                this.damageToCreature(template, value, apply, "Super_Mutant");
                break;
            case '0018eeef / STAT_DmgVsRobots':
                this.damageToCreature(template, value, apply, "Robot");
                break;
            case '00674c84 / STAT_DmgVsMolerats':
                this.damageToCreature(template, value, apply, "Molerat");
                break;
            case '00690c78 / STAT_DmgVsCryptids':
                this.damageToCreature(template, value, apply, "Cryptid");
                break;
            case '0018eeec / STAT_DmgVsMirelurks':
                this.damageToCreature(template, value, apply, "Mirelurks");
                break;
            case '00097341 / ArmorPenetration':
                super.add(template.antiArmor, value, apply)
                break;
            case '006e1052 / STAT_SneakAttackBonus':
                template.sneak[1] = (apply) ? value : template.sneak[0];
                break;
            default:
                break;
        }
    }

    damageToCreature(template, value, apply, name) {
        template.cd[1] = (apply) ? value : template.cd[0];
        template.creatureType[1] = (apply) ? name : template.creatureType[0];
    }
}