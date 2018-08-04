'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getOwnPropertyNames = require('babel-runtime/core-js/object/get-own-property-names');

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _map = require('../util/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Headers = function () {
    function Headers(init) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Headers);

        this.maps = new _map2.default();
        if (init instanceof Headers) {
            init.forEach(function (value, name) {
                _this.append(name, value);
            });
        } else if (init) {
            (0, _getOwnPropertyNames2.default)(init).forEach(function (name) {
                _this.append(name, init[name]);
            });
        }
    }

    (0, _createClass3.default)(Headers, [{
        key: 'append',
        value: function append(name, value) {
            name = this._normalizeName(name);
            value = this._normalizeParams(value);
            var oldValue = this.maps.get(name);
            this.maps.set(name, oldValue ? oldValue + ',' + value : value);
        }
    }, {
        key: 'delete',
        value: function _delete(name) {
            return this.maps.remove(name);
        }
    }, {
        key: 'entries',
        value: function entries() {
            return this.maps.entries();
        }
    }, {
        key: 'forEach',
        value: function forEach(fn, thisArgs) {
            this.maps.forEach(fn, thisArgs ? thisArgs : this);
        }
    }, {
        key: 'get',
        value: function get(name) {
            return this.maps.get(name);
        }
    }, {
        key: 'has',
        value: function has(name) {
            return this.maps.has(name);
        }
    }, {
        key: 'keys',
        value: function keys() {
            return this.maps.entries().map(function (entry) {
                return entry[0];
            });
        }
    }, {
        key: 'set',
        value: function set(name, value) {
            this.maps.set(this._normalizeName(name), this._normalizeParams(value));
        }
    }, {
        key: 'values',
        value: function values() {
            return this.maps.values();
        }
    }, {
        key: '_normalizeName',
        value: function _normalizeName(name) {
            name = this._normalizeParams(name);
            if (/[^[a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
                throw new TypeError('Invalid character in header field name');
            }
            return name.toLowerCase();
        }
    }, {
        key: '_normalizeParams',
        value: function _normalizeParams(value) {
            if (typeof value !== 'string') {
                value = String(value);
            }
            return value;
        }
    }]);
    return Headers;
}();

exports.default = Headers;