export default {

    blobToArrayBuffer(blob) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(blob)
        return this.fileReaderReady(reader)

    },

    blobToText(blob) {
        const reader = new FileReader()
        reader.readAsText(blob)
        return this.fileReaderReady(reader)
    },

    arrayBufferToText(buf) {
        const view = new Uint8Array(buf)
        const chars = new Array(view.length)

        chars.forEach((c, i) => {
            chars[i] = String.fromCharCode(view[i])
        })

        return chars.join('')
    },

    textToFormData(text) {
        const form = new FormData()
        if (!text) {
            return form;
        }
        text.trim().split('&').forEach(bytes => {
            if (bytes) {
                const split = bytes.split('=')
                const name = split.shift().replace(/\+/g, ' ')
                const value = split.join('=').replace(/\+/g, ' ')
                form.append(decodeURIComponent(name), decodeURIComponent(value))
            }
        })
        return form
    },

    fileReaderReady(reader) {
        return new Promise(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result)
            }
            reader.onerror = function () {
                reject(reader.error)
            }
        })
    }
}