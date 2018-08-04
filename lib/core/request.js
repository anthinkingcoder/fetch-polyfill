"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _headers = require("./headers");

var _headers2 = _interopRequireDefault(_headers);

var _body = require("./body");

var _body2 = _interopRequireDefault(_body);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Request = function (_Body) {
  (0, _inherits3.default)(Request, _Body);

  function Request(input, init) {
    (0, _classCallCheck3.default)(this, Request);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Request.__proto__ || (0, _getPrototypeOf2.default)(Request)).call(this));

    if (!input && !init) {
      throw new TypeError("Failed to construct 'Request': 1 argument required, but only 0 present.");
    }
    init = init || {};
    _this.headers = new _headers2.default(init.headers);
    var body = init.body;
    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read');
      }
      _this.url = input.url;
      _this.credentials = input.credentials;
      if (!_this.headers) {
        _this.headers = new _headers2.default(input.headers);
      }
      _this.method = input.method;
      _this.mode = input.mode;
      _this.signal = input.signal;
      _this.referrer = input.referrer;

      if (!_this.body && input.body !== null) {
        _this.body = input.body;
        input.bodyUsed = true;
      }
    } else {
      _this.url = input;
    }

    if (init.headers || !_this.headers) {
      _this.headers = new _headers2.default(init.headers);
    }

    _this.credentials = init.credentials || _this.credentials || 'omit';
    _this.method = _this._normalizeMethod(init.method || _this.method || 'GET');
    _this.referrer = _this.referrer || 'about:client';
    _this.mode = init.mode || _this.mode || null;

    if ((_this.method === 'GET' || _this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests');
    }

    _this._handleBody(body);
    return _this;
  }

  (0, _createClass3.default)(Request, [{
    key: "clone",
    value: function clone() {
      return new Request(this, { body: this.body });
    }
  }, {
    key: "_normalizeMethod",
    value: function _normalizeMethod(method) {
      var uc = method.toUpperCase();
      return ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'].indexOf(uc) !== -1 ? uc : method;
    }
  }]);
  return Request;
}(_body2.default);

exports.default = Request;