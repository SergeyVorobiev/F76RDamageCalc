export function defaultLegendary() {
    let obj = {
        current: ["none1", "none2", "none3"],

        none1: {
            name: "None",
            value: 0.0,
            min: 0.0,
            max: 0.0,
            step: 0.0,
            is_used: true,
            star: 1,
            id: "none1",
            gameId: [""],
        },

        none2: {
            name: "None",
            value: 0.0,
            min: 0.0,
            max: 0.0,
            step: 0.0,
            is_used: true,
            star: 2,
            id: "none2",
            gameId: [""],
        },

        none3: {
            name: "None",
            value: 0.0,
            min: 0.0,
            max: 0.0,
            step: 0.0,
            is_used: true,
            star: 2,
            id: "none2",
            gameId: [""],
        },

        junkie: {
            name: "Junkie",
            value: 50.0,
            min: 0.0,
            max: 50.0,
            step: 10.0,
            is_used: false,
            star: 1,
            id: "junkie",
            gameId: ["004f6aab"],
        },

        aristocrat: {
            name: "Aristocrat",
            value: 50.0,
            min: 0.0,
            max: 50.0,
            step: 1.0,
            is_used: false,
            star: 1,
            id: "aristocrat",
            gameId: ["00606b71"],
        },

        antiarmor: {
            name: "Anti Armor",
            value: 50.0,
            min: 0.0,
            max: 50.0,
            step: 10.0,
            is_used: false,
            star: 1,
            id: "antiarmor",
            gameId: ["005281b4", "006e1315"],
        },

        bloodied: {
            name: "Bloodied",
            value: 0.0,
            min: 0.0,
            max: 95.0,
            step: 1.0,
            is_used: false,
            star: 1,
            id: "bloodied",
            gameId: ["004f6aa0"],
        },

        berserker: {
            name: "Berserker",
            value: 50.0,
            min: 0.0,
            max: 50.0,
            step: 1.0,
            is_used: false,
            star: 1,
            id: "berserker",
            gameId: ["004f6aa7"],
        },

        executioner: {
            name: "Executioner",
            value: 50.0,
            min: 0.0,
            max: 50.0,
            step: 10.0,
            is_used: false,
            star: 1,
            id: "executioner",
            gameId: ["004f6aa1"],
        },

        furious: {
            name: "Furious",
            value: 45.0,
            min: 0.0,
            max: 45.0,
            step: 5.0,
            is_used: false,
            star: 1,
            id: "furious",
            gameId: ["004f577d"],
        },

        quad: {
            name: "Quad",
            value: 300.0,
            min: 0.0,
            max: 300.0,
            step: 10.0,
            is_used: false,
            star: 1,
            id: "quad",
            gameId: ["004f6ab1", "00692275"],
        },

        two_shot: {
            name: "Two Shot",
            value: 25.0,
            min: 0.0,
            max: 25.0,
            step: 1.0,
            is_used: false,
            star: 1,
            id: "two_shot",
            gameId: ["004f6d76"],
        },

        mutant: {
            name: "Mutant",
            value: 25.0,
            min: 0.0,
            max: 25.0,
            step: 5.0,
            is_used: false,
            star: 1,
            id: "mutant",
            gameId: ["004f577b", "005299f5"],
        },

        // 2 star
        explosive: {
            name: "Explosive",
            value: 20.0,
            min: 0.0,
            max: 20.0,
            step: 1.0,
            is_used: false,
            star: 2,
            id: "explosive",
            gameId: ["00425e28", "004f5771", "001e73bd"],
        },

        hitman: {
            name: "Hitman",
            value: 25.0,
            min: 0.0,
            max: 25.0,
            step: 1.0,
            is_used: false,
            star: 2,
            id: "hitman",
            gameId: ["0052414e"],
        },

        rapid: {
            name: "Rapid",
            value: 25.0,
            min: 0.0,
            max: 50.0,
            step: 1.0,
            is_used: false,
            star: 2,
            id: "rapid",
            gameId: ["0052414f", "006d3c68", "0052414f"]
        },
    };
    return obj;
}