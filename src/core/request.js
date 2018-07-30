import Headers from "./headers";
import Body from './body'

class Request extends Body {
    constructor(input, init) {
        super()
        if (!input && !init) {
            throw new TypeError("Failed to construct 'Request': 1 argument required, but only 0 present.")
        }
        init = init || {}
        this.headers = new Headers(init.headers)
        const body = init.body
        if (input instanceof Request) {
            if (input.bodyUsed) {
                throw new TypeError('Already read')
            }
            this.url = input.url
            this.credentials = input.credentials
            if (!this.headers) {
                this.headers = new Headers(input.headers)
            }
            this.method = input.method
            this.mode = input.mode
            this.signal = request.signal
            this.cache = input.cache
            this.destination = input.destination
            this.integrity = input.integrity
            this.keepalive = input.keepalive
            this.redirect = input.redirect
            this.referrerPolicy = input.referrerPolicy

            if (!this.body && input.body !== null) {
                this.body = input.body
                input.bodyUsed = true
            }
        } else {
            this.url = input
        }

        if (init.headers || !this.headers) {
            this.headers = new Headers(init.headers)
        }

        this.credentials = init.credentials || this.credentials || 'same-origin'
        this.method = this._normalizeMethod(init.method || this.method || 'GET')
        this.referrer = 'about:client'
        this.mode = init.mode || this.mode || null
        this.cache = init.cache ? init.cache : 'default'
        this.destination = init.destination
        this.integrity = init.integrity
        this.redirect = init.redirect
        this.referrerPolicy = init.referrerPolicy

        if ((this.method === 'GET' || this.method === 'HEAD') && body) {
            throw new TypeError('Body not allowed for GET or HEAD requests')
        }

        this._handleBody(body)
    }


    clone() {
        return new Request(this, {body: this.body})
    }

    _normalizeMethod(method) {
        const uc = method.toUpperCase()
        return ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'].indexOf(uc) !== -1 ? uc : method
    }


}

export default Request