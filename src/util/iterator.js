import support from './support'

class Iterator {
    constructor(array) {
        this.array = array
        if (support.iterator) {
            this[Symbol.iterator] = () => this
        }
    }

    next() {
        const value = this.array.shift()
        return {done: value === undefined, value: value}
    }

}

export default Iterator