import Creature from './Creature';
import { getDummy } from '../entities/ECreatures';


export default class CreaturesProduction {

    static produce(materials, antiArmor) {
        const creatures = [];
        for (const property in materials) {
            const creatureInfo = materials[property];
            const creature = new Creature(creatureInfo);
            creature.reduceArmor(antiArmor);
            creatures.push(creature);
        }
        return creatures;
    }

    static produceByArmor(creatureInfo, armor) {
        const dummy = getDummy(creatureInfo);
        dummy.b = armor[0];
        dummy.e = armor[1];
        dummy.f = armor[2];
        dummy.p = armor[3];
        dummy.c = armor[4];
        dummy.r = armor[5];
        return new Creature(dummy);
    }
}

