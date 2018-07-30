const support = {
    blob: 'FileReader' in self && 'Blob' in self &&
    (function () {
        try {
            new Blob()
            return true
        } catch (e) {
            return false
        }
    })
    (),
    iterator: 'Symbol' in self && 'iterator' in Symbol,
    formData: 'FormDta' in FormData,
    arrayBuffer: 'ArrayBuffer' in ArrayBuffer,
    searchParams: 'URLSearchParams' in self
}

export default support