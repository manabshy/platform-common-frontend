import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.RemoveUserFromGroup

/**
 * RemoveUserFromGroup Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#removeuserfromgroup
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID
 *   "removed-user-id": USER_ID
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {number} userID
 * @returns Promise
 */
const RemoveUserFromGroup = (serviceID, groupID, userID) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID,
      "user-id": userID
    }
  })
}

export default RemoveUserFromGroup
