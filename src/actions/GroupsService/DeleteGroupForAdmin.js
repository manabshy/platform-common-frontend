import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.DeleteGroupForAdmin

/**
 * DeleteGroupForAdmin Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#deletegroupforadmin
 *
 * Success Format:
 *
 * {
 *   "deleted-id": GROUP_ID
 * }
 *
 * @param {number} serviceID
 * @returns Promise
 */
const DeleteGroupForAdmin = (serviceID, groupID) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID
    }
  })
}

export default DeleteGroupForAdmin
