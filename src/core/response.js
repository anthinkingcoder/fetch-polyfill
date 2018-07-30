import Body from "./body";
import Headers from "./headers";

class Response extends Body {
    // static REDIRECT_STATUS = [301, 302, 303, 307, 308]
    constructor(body, init) {
        super()
        init = init || {}
        this.type = 'default'
        this.status = init.status === undefined ? 200 : init.status
        this.ok = this.status >= 200 && this.status < 300
        this.statusText = init.statusText ? init.statusText : 'OK'
        this.headers = new Headers(init.headers)
        this.redirected = false
        this.url = init.url || ''
        this._handleBody(body)
    }

    clone() {
        return new Response(this.body, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
        })
    }
}

Response.error = () => {
    const response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
}

Response.redirect = (url, status) => {
    // if (Response.REDIRECT_STATUS.indexOf(status) === -1) {
    //     throw new RangeError('Invalid status code')
    // }

    return new Response(null, {status: status, headers: {location: url}})
}

export default Response