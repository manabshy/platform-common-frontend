/* global
XMLHttpRequest
*/

/**
 * [getHttpHeader description]
 * @param  {[type]} key [description]
 * @return {[XMLHttpResponseHeader]}     [description]
 */
export const getHttpHeader = key => {
  const req = new XMLHttpRequest()
  req.open("GET", document.location, false)
  req.send(null)
  const data = req.getResponseHeader(key)
  return data
}

/**
 * [getHttpJSON description]
 * @param  {[type]} data [description]
 * @return {[JSON]}      [description]
 */
export const getHttpJSON = data => {
  const userData = getHttpHeader(data)
  if (userData) {
    return JSON.parse(userData)
  } else {
    return {}
  }
}
