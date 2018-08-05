import fetch from './core/fetch'
import Response from './core/response'
import Request from './core/request'
import Headers from './core/headers'

export {
  fetch,
  Response,
  Request,
  Headers
}


const isNativeFetch = self && self.fetch && /native code/.test(self.fetch)
if (!isNativeFetch) {
  self.fetch = fetch
  self.Response = Response
  self.Request = Request
  self.Headers = Headers
}

