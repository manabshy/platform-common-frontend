import SignInAxios from "../../helpers/axios/SignInAxios"
import SignInServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = SignInServiceAPI.GetUser

/**
 * Get User Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * Success Format:
 *
 * {
 *   "user-id": USER_ID,
 *   "email": EMAIL,
 *   "first_name": FIRST_NAME,
 *   ...
 * }
 *
 * @param {string} email
 * @returns Promise
 */
const GetUser = email => {
  return SignInAxios({
    url: _APIURL,
    method: "GET",
    params: {
      email: email
    }
  })
}

export default GetUser
