import Map from '../util/map'

class Headers {

    constructor(init) {
        this.maps = new Map()
        if (init instanceof Headers) {
            init.forEach((value, name) => {
                this.append(name, value)
            })
        } else if (init) {
            Object.getOwnPropertyNames(init).forEach((name) => {
                this.append(name, init[name])
            })
        }
    }


    append(name, value) {
        name = this._normalizeName(name)
        value = this._normalizeParams(value)
        const oldValue = this.maps.get(name)
        this.maps.set(name, oldValue ? `${oldValue},${value}` : value)
    }

    delete(name) {
        return this.maps.remove(name)
    }

    entries() {
        return this.maps.entries()
    }

    forEach(fn, thisArgs) {
        this.maps.forEach(fn, thisArgs ? thisArgs : this)
    }

    get(name) {
        return this.maps.get(name)
    }

    has(name) {
        return this.maps.has(name)
    }

    keys() {
        return this.maps.entries().map((entry) => {
            return entry[0]
        })
    }

    set(name, value) {
        this.maps.set(this._normalizeName(name), this._normalizeParams(value))
    }

    values() {
        return this.maps.values()
    }

    _normalizeName(name) {
        name = this._normalizeParams(name)
        if (/[^[a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
            throw new TypeError('Invalid character in header field name')
        }
        return name.toLowerCase()
    }

    _normalizeParams(value) {
        if (typeof value !== 'string') {
            value = String(value)
        }
        return value
    }
}

export default Headers