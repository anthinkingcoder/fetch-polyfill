import support from './support'


const check = {
    isBlob: (data) => {
        return data && support.blob && Blob.prototype.isPrototypeOf(data)
    },

    isFormData: (data) => {
        return data && support.formData && FormData.prototype.isPrototypeOf(data)
    },
    isDataView(data) {
        return data && support.arrayBuffer && support.blob && DataView.prototype.isPrototypeOf(data)
    },

    isArrayBufferView: (function () {
        return ArrayBuffer.isView || function (data) {
            return data && [
                '[object Int8Array]',
                '[object Uint8Array]',
                '[object Uint8ClampedArray]',
                '[object Int16Array]',
                '[object Uint16Array]',
                '[object Int32Array]',
                '[object Uint32Array]',
                '[object Float32Array]',
                '[object Float64Array]'
            ].indexOf(Object.prototype.toString.call(data)) !== -1
        }
    })(),
    isArrayBuffer(data) {
        return support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(data)
    },
    isSearchParams(data) {
        return support.searchParams && URLSearchParams.prototype.isPrototypeOf(data)
    }

}

export default check