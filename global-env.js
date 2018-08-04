import fetch from './src/core/fetch'
import Response from './src/core/response'
import Request from './src/core/request'
import Headers from './src/core/headers'


if (typeof self !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = fetch
  self.Response = Response
  self.Request = Request
  self.Headers = Headers
}
