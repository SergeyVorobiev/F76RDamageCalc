export function defaultLegendary() {
    let obj = {
        current: ["bloodied", "explosive"],

        none1: {
            name: "None",
            value: 0.0,
            min: 0.0,
            max: 0.0,
            step: 0.0,
            is_used: false,
            star: 1,
            id: "none1",
        },

        none2: {
            name: "None",
            value: 0.0,
            min: 0.0,
            max: 0.0,
            step: 0.0,
            is_used: false,
            star: 2,
            id: "none2",
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
        },

        bloodied: {
            name: "Bloodied",
            value: 0.0,
            min: 0.0,
            max: 95.0,
            step: 1.0,
            is_used: true,
            star: 1,
            id: "bloodied",
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
        },

        // 2 star
        explosive: {
            name: "Explosive",
            value: 20.0,
            min: 0.0,
            max: 20.0,
            step: 1.0,
            is_used: true,
            star: 2,
            id: "explosive",
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
        },

        rapid: {
            name: "Rapid",
            value: 25.0,
            min: 0.0,
            max: 25.0,
            step: 1.0,
            is_used: false,
            star: 2,
            id: "rapid",
        },
    };
    return obj;
}