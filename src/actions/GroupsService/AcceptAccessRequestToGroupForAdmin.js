import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.AcceptAccessRequestToGroupForAdmin

/**
 * List Groups Helper
 * @author Ben Sheriff <ben.sheriff@digital.ndr.cesg.gov.uk>
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#acceptaccessrequesttogroupforadmin
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID,
 *   "accepted-access-request": ACCESS_REQUEST_ID
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {number} accessRequestID
 * @returns Promise
 */
const AcceptAccessRequestToGroupForAdmin = (
  serviceID,
  groupID,
  accessRequestID
) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID,
      "access-request-id": accessRequestID
    }
  })
}

export default AcceptAccessRequestToGroupForAdmin
