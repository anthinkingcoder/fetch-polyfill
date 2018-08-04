import fetch from './/core/fetch'
import Response from './/core/response'
import Request from './/core/request'
import Headers from './/core/headers'


if (typeof self !== 'undefined' && typeof self !== 'undefined') {
  self.fetch = fetch
  self.Response = Response
  self.Request = Request
  self.Headers = Headers
}
