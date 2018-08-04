'use strict';

var _fetch = require('.//core/fetch');

var _fetch2 = _interopRequireDefault(_fetch);

var _response = require('.//core/response');

var _response2 = _interopRequireDefault(_response);

var _request = require('.//core/request');

var _request2 = _interopRequireDefault(_request);

var _headers = require('.//core/headers');

var _headers2 = _interopRequireDefault(_headers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (typeof self !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = _fetch2.default;
  self.Response = _response2.default;
  self.Request = _request2.default;
  self.Headers = _headers2.default;
}