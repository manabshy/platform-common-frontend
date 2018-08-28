import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.ListGroups

/**
 * List Groups Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#listgroups
 *
 * Success Format:
 *
 * {
 *   "service-id": SERVICE_ID,
 *   "groups": [
 *   {
 *     "group-id": GROUP_ID,
 *     "group-name": STRING
 *   },
 *   ...
 *   ]
 * }
 *
 * @param {number} serviceID
 * @returns Promise
 */
const ListGroups = serviceID => {
  return GroupsAxios({
    url: _APIURL,
    data: {
      "service-id": serviceID
    }
  })
}

export default ListGroups
