export default {
    clone: function (buf) {
        if (buf.slice) {
            return buf.slice(0)
        } else {
            const view = new Unit8Array(buf.byteLength)
            view.set(new Unit8Array(buf))
            return view.buffer

        }
    }
}