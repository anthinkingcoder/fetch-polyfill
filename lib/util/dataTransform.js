'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    blobToArrayBuffer: function blobToArrayBuffer(blob) {
        var reader = new FileReader();
        reader.readAsArrayBuffer(blob);
        return this.fileReaderReady(reader);
    },
    blobToText: function blobToText(blob) {
        var reader = new FileReader();
        reader.readAsText(blob);
        return this.fileReaderReady(reader);
    },
    arrayBufferToText: function arrayBufferToText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);

        chars.forEach(function (c, i) {
            chars[i] = String.fromCharCode(view[i]);
        });

        return chars.join('');
    },
    textToFormData: function textToFormData(text) {
        var form = new FormData();
        if (!text) {
            return form;
        }
        text.trim().split('&').forEach(function (bytes) {
            if (bytes) {
                var split = bytes.split('=');
                var name = split.shift().replace(/\+/g, ' ');
                var value = split.join('=').replace(/\+/g, ' ');
                form.append(decodeURIComponent(name), decodeURIComponent(value));
            }
        });
        return form;
    },
    fileReaderReady: function fileReaderReady(reader) {
        return new _promise2.default(function (resolve, reject) {
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject(reader.error);
            };
        });
    }
};