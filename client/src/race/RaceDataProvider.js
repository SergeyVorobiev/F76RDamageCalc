import raceItems from '../resources/race.json';


const raceMap = new Map();

for (let i = 0; i < raceItems.length; i++) {
        const item = raceItems[i];
        raceMap.set(item.id, item);
}

export default class RaceDataProvider {

    static getRaceById(id) {
        return raceMap.get(id);
    }
}