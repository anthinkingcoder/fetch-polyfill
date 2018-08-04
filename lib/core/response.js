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

var _body = require("./body");

var _body2 = _interopRequireDefault(_body);

var _headers = require("./headers");

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Response = function (_Body) {
    (0, _inherits3.default)(Response, _Body);

    // static REDIRECT_STATUS = [301, 302, 303, 307, 308]
    function Response(body, init) {
        (0, _classCallCheck3.default)(this, Response);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Response.__proto__ || (0, _getPrototypeOf2.default)(Response)).call(this));

        init = init || {};
        _this.type = 'basic';
        _this.status = init.status === undefined ? 200 : init.status;
        _this.ok = _this.status >= 200 && _this.status < 300;
        _this.statusText = init.statusText ? init.statusText : 'OK';
        _this.headers = new _headers2.default(init.headers);
        _this.redirected = false;
        _this.url = init.url || '';
        _this._handleBody(body);
        return _this;
    }

    (0, _createClass3.default)(Response, [{
        key: "clone",
        value: function clone() {
            return new Response(this.body, {
                status: this.status,
                statusText: this.statusText,
                headers: new _headers2.default(this.headers),
                url: this.url
            });
        }
    }]);
    return Response;
}(_body2.default);

Response.error = function () {
    var response = new Response(null, { status: 0, statusText: '' });
    response.type = 'error';
    return response;
};

Response.redirect = function (url, status) {
    if ([301, 302, 303, 307, 308].indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
    }

    return new Response(null, { status: status, headers: { location: url } });
};

exports.default = Response;