'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _support = require('./support');

var _support2 = _interopRequireDefault(_support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var check = {
    isBlob: function isBlob(data) {
        return data && _support2.default.blob && Blob.prototype.isPrototypeOf(data);
    },

    isFormData: function isFormData(data) {
        return data && _support2.default.formData && FormData.prototype.isPrototypeOf(data);
    },
    isDataView: function isDataView(data) {
        return data && _support2.default.arrayBuffer && _support2.default.blob && DataView.prototype.isPrototypeOf(data);
    },


    isArrayBufferView: function () {
        return ArrayBuffer.isView || function (data) {
            return data && ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'].indexOf(Object.prototype.toString.call(data)) !== -1;
        };
    }(),
    isArrayBuffer: function isArrayBuffer(data) {
        return _support2.default.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(data);
    },
    isSearchParams: function isSearchParams(data) {
        return _support2.default.searchParams && URLSearchParams.prototype.isPrototypeOf(data);
    }
};

exports.default = check;