import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.InviteUserToGroupForAdmin

/**
 * InviteUserToGroupForAdmin Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#inviteusertogroupforadmin
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID
 *   "user-id": USER_ID
 *   "is-admin": BOOL
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {string} email
 * @returns Promise
 */
const InviteUserToGroupForAdmin = (serviceID, groupID, email) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID,
      email: email
    }
  })
}

export default InviteUserToGroupForAdmin
