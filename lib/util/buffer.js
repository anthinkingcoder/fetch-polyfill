"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    clone: function clone(buf) {
        if (buf.slice) {
            return buf.slice(0);
        } else {
            var view = new Unit8Array(buf.byteLength);
            view.set(new Unit8Array(buf));
            return view.buffer;
        }
    }
};