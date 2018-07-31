import typeCheck from '../util/dataTypeCheck'
import buffer from '../util/buffer'
import dataTransform from '../util/dataTransform'

class Body {
    constructor() {
        this.body = ''
        this.bodyUsed = false
    }

    arrayBuffer() {
        if (this._bodyArrayBuffer) {
            return this._consumed() || Promise.resolve(this._bodyArrayBuffer)
        } else {
            return this.blob().then(dataTransform.blobToArrayBuffer)
        }
    }

    text() {
        const rejected = this._consumed()
        if (rejected) {
            return rejected
        }

        if (this._bodyBlob) {
            return dataTransform.blobToText(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
            return Promise.resolve(dataTransform.arrayBufferToText(this._bodyArrayBuffer))
        } else {
            return Promise.resolve(this._bodyText)
        }
    }

    json() {
        return this.text().then((JSON.parse))
    }

    formData() {
        this.formData = function () {
            return this.text().then()
        }
    }

    blob() {
        const rejected = this._consumed()
        if (rejected) {
            return rejected
        }
        if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
            return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob')
        } else {
            return Promise.resolve(new Blob[this._bodyText])
        }
    }

    _consumed() {
        if (this.bodyUsed) {
            return Promise.reject(new TypeError('body stream already read'))
        }
        this.bodyUsed = true
    }


    _handleBody(body) {
        this.body = body ? body : null
        if (!body) {
            this._bodyText = ''
        } else if (typeof body === 'string') {
            this._bodyText = body
        } else if (typeCheck.isBlob(body)) {
            this._bodyBlob = body
        } else if (typeCheck.isFormData(body)) {
            this._bodyFormData = body
        } else if (typeCheck.isSearchParams(body)) {
            this._bodyText = body.toString()
        } else if (typeCheck.isDataView(body)) {
            this._bodyArrayBuffer = buffer.clone(body.buffer)
            // IE 10-11 can't handle a DataView body.
            this.body = new Blob([this._bodyArrayBuffer])
        } else if (typeCheck.isArrayBuffer(body) && typeCheck.isArrayBufferView(body)) {
            this._bodyArrayBuffer = buffer.clone(body)
        } else {
            throw new Error('unsupported body type')
        }


        //set content-type
        if (!this.headers.get('content-type')) {
            if (typeof body === 'string') {
                this.headers.set('content-type', 'text/plain;charset=UTF-8')
            } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set('content-type', this._bodyBlob.type)
            } else if (typeCheck.isSearchParams(body)) {
                this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
            }
        }
    }


}

export default Body