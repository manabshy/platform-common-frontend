import { getHttpHeader, getHttpJSON } from "../http/Http"
import _ from "lodash"
import KEYS from "./AuthKeynames"

/**
 * [getAccessStatus gets the access status for the user this is held in the respose header.
 *  getAccessStatus will default to LOGIN_REQUIRED if no access is return.]
 * @return {[String]}
 */
export const getAccessStatus = () => {
  const access = getHttpHeader(KEYS.ACCESS_KEY)
  if (!_.isNil(access)) {
    return access
  } else if (getHttpHeader(KEYS.USER_DATA)) {
    return KEYS.ACCESS.ACCESS
  } else {
    return KEYS.ACCESS.LOGIN_REQUIRED
  }
}
/**
 * [getUserData gets user data that is held in the respose header]
 * @return {[JSON]}
 */
export const getUserData = () => {
  return getHttpJSON(KEYS.USER_DATA)
}
