import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.RemoveMemberFromGroupForAdmin

/**
 * RemoveMemberFromGroupForAdmin Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#removememberfromgroupforadmin
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID
 *   "removed-user": USER_ID
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {number} userID
 * @returns Promise
 */
const RemoveMemberFromGroupForAdmin = (serviceID, groupID, userID) => {
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

export default RemoveMemberFromGroupForAdmin
