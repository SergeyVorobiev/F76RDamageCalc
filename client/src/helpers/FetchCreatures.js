import csvFile from '../resources/creature_resistance_health.csv';


export default function readCreaturesFromFile(mapCreatures, setMapCreatures) {
    fetch(csvFile).then(response => {
        if (!response.ok) {
            throw new Error(response);
        }
        return response.blob();
    }).then(myBlob => {
        const reader = new FileReader();
        reader.onload = e => {
            console.log(myBlob);
            let map = new Map();
            let rows = e.target.result.split("\n");
            console.log("Loaded creature rows: " + rows.length);
            let levels = [];
            for (let i = 1; i <= 120; i++) {
                levels.push({label: i, key: i});
            }
            for (let i = 1; i < rows.length; i++) {
                let data = rows[i].split(",");
                let array = map.get(data[0]);
                if (typeof array === 'undefined') {
                    array = [];
                    map.set(data[0], array);
                }
                array.push([parseFloat(data[2]),
                            parseFloat(data[3]),
                            parseFloat(data[4]),
                            parseFloat(data[5]),
                            parseFloat(data[6]),
                            parseFloat(data[7]),
                            parseFloat(data[8])]);
            }
            mapCreatures.map = map;
            mapCreatures.levels = levels;
            mapCreatures.names = Array.from(map, ([key, value]) => ({label: key, key: key }));
            setMapCreatures({...mapCreatures,});
        };
        reader.readAsText(myBlob);
    }).catch(error => {console.error(error);});
};