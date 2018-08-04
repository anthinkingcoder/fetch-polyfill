'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var support = {
    blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
            new Blob();
            return true;
        } catch (e) {
            return false;
        }
    }(),
    iterator: 'Symbol' in self && 'iterator' in _symbol2.default,
    formData: 'FormDta' in FormData,
    arrayBuffer: 'ArrayBuffer' in ArrayBuffer,
    searchParams: 'URLSearchParams' in self
};

exports.default = support;