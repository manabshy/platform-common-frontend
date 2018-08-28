import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.ListServicesForUser

/**
 * List Groups Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#listservicesforuser
 *
 * Success Format:
 *
 * {
 *   "user-id": USER_ID,
 *   "services": [
 *   {
 *     "service-id": SERVICE_ID,
 *     "service-name": STRING
 *   },
 *   ...
 *   ]
 * }
 *
 * @param {number} userID [optional]
 * @returns Promise
 */
const ListServicesForUser = userID => {
  return GroupsAxios({
    url: _APIURL,
    method: "GET",
    params: {
      "user-id": userID
    }
  })
}

export default ListServicesForUser
