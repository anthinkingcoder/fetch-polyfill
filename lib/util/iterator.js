'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _iterator = require('babel-runtime/core-js/symbol/iterator');

var _iterator2 = _interopRequireDefault(_iterator);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _support = require('./support');

var _support2 = _interopRequireDefault(_support);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Iterator = function () {
    function Iterator(array) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Iterator);

        this.array = array;
        if (_support2.default.iterator) {
            this[_iterator2.default] = function () {
                return _this;
            };
        }
    }

    (0, _createClass3.default)(Iterator, [{
        key: 'next',
        value: function next() {
            var value = this.array.shift();
            return { done: value === undefined, value: value };
        }
    }]);
    return Iterator;
}();

exports.default = Iterator;