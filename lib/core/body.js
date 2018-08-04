'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _dataTypeCheck = require('../util/dataTypeCheck');

var _dataTypeCheck2 = _interopRequireDefault(_dataTypeCheck);

var _buffer = require('../util/buffer');

var _buffer2 = _interopRequireDefault(_buffer);

var _dataTransform = require('../util/dataTransform');

var _dataTransform2 = _interopRequireDefault(_dataTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Body = function () {
    function Body() {
        (0, _classCallCheck3.default)(this, Body);

        this.body = '';
        this.bodyUsed = false;
    }

    (0, _createClass3.default)(Body, [{
        key: 'arrayBuffer',
        value: function arrayBuffer() {
            if (this._bodyArrayBuffer) {
                return this._consumed() || _promise2.default.resolve(this._bodyArrayBuffer);
            } else {
                return this.blob().then(_dataTransform2.default.blobToArrayBuffer);
            }
        }
    }, {
        key: 'text',
        value: function text() {
            var rejected = this._consumed();
            if (rejected) {
                return rejected;
            }

            if (this._bodyBlob) {
                return _dataTransform2.default.blobToText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                return _promise2.default.resolve(_dataTransform2.default.arrayBufferToText(this._bodyArrayBuffer));
            } else {
                return _promise2.default.resolve(this._bodyText);
            }
        }
    }, {
        key: 'json',
        value: function json() {
            return this.text().then(JSON.parse);
        }
    }, {
        key: 'formData',
        value: function formData() {
            this.formData = function () {
                return this.text().then();
            };
        }
    }, {
        key: 'blob',
        value: function blob() {
            var rejected = this._consumed();
            if (rejected) {
                return rejected;
            }
            if (this._bodyBlob) {
                return _promise2.default.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
                return _promise2.default.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
                throw new Error('could not read FormData body as blob');
            } else {
                return _promise2.default.resolve(new Blob[this._bodyText]());
            }
        }
    }, {
        key: '_consumed',
        value: function _consumed() {
            if (this.bodyUsed) {
                return _promise2.default.reject(new TypeError('body stream already read'));
            }
            this.bodyUsed = true;
        }
    }, {
        key: '_handleBody',
        value: function _handleBody(body) {
            this.body = body ? body : null;
            if (!body) {
                this._bodyText = '';
            } else if (typeof body === 'string') {
                this._bodyText = body;
            } else if (_dataTypeCheck2.default.isBlob(body)) {
                this._bodyBlob = body;
            } else if (_dataTypeCheck2.default.isFormData(body)) {
                this._bodyFormData = body;
            } else if (_dataTypeCheck2.default.isSearchParams(body)) {
                this._bodyText = body.toString();
            } else if (_dataTypeCheck2.default.isDataView(body)) {
                this._bodyArrayBuffer = _buffer2.default.clone(body.buffer);
                // IE 10-11 can't handle a DataView body.
                this.body = new Blob([this._bodyArrayBuffer]);
            } else if (_dataTypeCheck2.default.isArrayBuffer(body) && _dataTypeCheck2.default.isArrayBufferView(body)) {
                this._bodyArrayBuffer = _buffer2.default.clone(body);
            } else {
                throw new Error('unsupported body type');
            }

            //set content-type
            if (!this.headers.get('content-type')) {
                if (typeof body === 'string') {
                    this.headers.set('content-type', 'text/plain;charset=UTF-8');
                } else if (this._bodyBlob && this._bodyBlob.type) {
                    this.headers.set('content-type', this._bodyBlob.type);
                } else if (_dataTypeCheck2.default.isSearchParams(body)) {
                    this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
                }
            }
        }
    }]);
    return Body;
}();

exports.default = Body;