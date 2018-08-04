'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Headers = exports.Request = exports.Response = exports.fetch = undefined;

var _fetch = require('./core/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _response = require('./core/response');

var _response2 = _interopRequireDefault(_response);

var _request = require('./core/request');

var _request2 = _interopRequireDefault(_request);

var _headers = require('./core/headers');

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.fetch = _fetch2.default;
exports.Response = _response2.default;
exports.Request = _request2.default;
exports.Headers = _headers2.default;