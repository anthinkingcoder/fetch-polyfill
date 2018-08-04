'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _iterator = require('./iterator');

var _iterator2 = _interopRequireDefault(_iterator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function () {
    function Map() {
        (0, _classCallCheck3.default)(this, Map);

        this.maps = []; // maps = [[k,v],[k,v]]
    }

    (0, _createClass3.default)(Map, [{
        key: 'set',
        value: function set(key, value) {
            var result = this.find(key);
            if (result) {
                this.maps[result.index][1] = value;
            } else {
                this.maps.push([key, value]);
                this.size++;
            }
            return this;
        }
    }, {
        key: 'get',
        value: function get(key) {
            var result = this.find(key);
            return result && result.value;
        }
    }, {
        key: 'has',
        value: function has(key) {
            if (this.find(key)) return true;
            return false;
        }
    }, {
        key: 'remove',
        value: function remove(key) {
            var result = this.find(key);
            if (!result) return false;
            this.maps.splice(result.index, 1);
            this.size--;
            return true;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.maps = [];
            this.size = 0;
        }
    }, {
        key: 'find',
        value: function find(key) {
            for (var i = 0; i < this.maps.length; i++) {
                if (this.maps[i][0] === key) return { index: i, value: this.maps[i][1], key: key };
            }
        }
    }, {
        key: 'values',
        value: function values() {
            return new _iterator2.default(this.maps.map(function (item) {
                return item[1];
            }));
        }
    }, {
        key: 'entries',
        value: function entries() {
            return new _iterator2.default(this.maps);
        }
    }, {
        key: 'forEach',
        value: function forEach(cb, thisArg) {
            this.maps.forEach(function (item) {
                cb.call(thisArg, item[1], item[0]);
            });
        }
    }]);
    return Map;
}();

exports.default = Map;