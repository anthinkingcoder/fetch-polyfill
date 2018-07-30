import Iterator from './iterator'

class Map {
    constructor() {
        this.maps = [] // maps = [[k,v],[k,v]]
    }

    set(key, value) {
        const result = this.find(key)
        if (result) {
            this.maps[result.index][1] = value
        } else {
            this.maps.push([key, value])
            this.size++
        }
        return this
    }

    get(key) {
        const result = this.find(key)
        return result && result.value
    }

    has(key) {
        if (this.find(key)) return true
        return false
    }

    remove(key) {
        const result = this.find(key)
        if (!result) return false
        this.maps.splice(result.index, 1)
        this.size--
        return true
    }

    clear() {
        this.maps = []
        this.size = 0
    }

    find(key) {
        for (let i = 0; i < this.maps.length; i++) {
            if (this.maps[i][0] === key) return {index: i, value: this.maps[i][1], key}
        }
    }

    values() {
        return new Iterator(this.maps.map(item => item[1]))
    }

    entries() {
        return new Iterator(this.maps)
    }

    forEach(cb, thisArg) {
        this.maps.forEach(function (item) {
            cb.call(thisArg, item[1], item[0])
        })
    }

}

export default Map