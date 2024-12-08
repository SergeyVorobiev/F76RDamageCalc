
// Iterate through {name11: ['A', 'B', 1], name12: [], name13: ['D', obj]}
// Returning every possible combinations:
// {name11: 'A', name13: 'D'}, {name11: 'B', name13: 'D'} ... {name11: 1, name13: obj}
export default class Combinator {

    /*
        Usage:
            const comb = {name11: ['A', 'B', 'C'], name12: [], name13: ['D', 'E']};
            const combinator = new Combinator(comb);
            let result = combinator.current();
            console.log(result); // First combination
            while(combinator.next()) {
                combinator.current();
                console.log(result);
            }
    */
    constructor(combinations) {
        this.combinations = combinations;
        this.currentCombination = {};
        this.lastIndexes = [];
        this.curIndexes = [];
        this.names = [];
        this.hbRead = false;
        this.combinationsCount = 1;
        for (const groupName in combinations) {
            this.names.push(groupName);
            const group = combinations[groupName];
            const last = group.length - 1;
            this.lastIndexes.push(last);
            if (group.length > 0) {
                this.combinationsCount *= group.length;
                this.currentCombination[groupName] = this.combinations[groupName][0];
                this.curIndexes.push(0);
            } else {
                this.curIndexes.push(-1);
            }
        }
        this.currentNumber = 1;
    }

    getCombinationsCount() {
        return this.combinationsCount;
    }

    getCurrentNumber() {
        return this.currentNumber;
    }

    next() {
        if (this.isLast()) {
            return false;
        }
        this.currentNumber += 1;
        this.nextCombination();
        this.hbRead = false;
        return true;
    }

    // Only for reading
    current() {
        if (this.hbRead) {
            return this.currentCombinations;
        } else {
            for (let i = 0; i < this.curIndexes.length; i++) {
                const rowPos = this.curIndexes[i];
                const name = this.names[i];
                if (rowPos > -1) {
                    this.currentCombination[name] = this.combinations[name][rowPos];
                }
            }
            this.hbRead = true;
            return this.currentCombination;
        }
    }

    isLast() {
        let result = true;
        for (let i = 0; i < this.curIndexes.length; i++) {
            if (this.curIndexes[i] !== this.lastIndexes[i]) {
                result = false;
                break;
            }
        }
        return result;
    }

    nextCombination() {
        for (let i = 0; i < this.curIndexes.length; i++) {
            let next = false;
            if (this.curIndexes[i] > -1) {
                this.curIndexes[i] += 1;
                if (this.curIndexes[i] > this.lastIndexes[i]) {
                    this.curIndexes[i] = 0;
                    next = true;
                }
            } else {
                next = true;
            }
            if (!next) {
                break;
            }
        }
    }
}