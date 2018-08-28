import GroupsAxios from "../../helpers/axios/GroupsAxios"

// Constants
const _APIURL = "/RefuseAccessRequestToGroupForAdmin"

/**
 * List Groups Helper
 * @author Ben Sheriff <ben.sheriff@digital.ndr.cesg.gov.uk>
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#refuseaccessrequesttogroupforadmin
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID,
 *   "refused-access-request": ACCESS_REQUEST_ID
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {number} accessRequestID
 * @returns Promise
 */
const RefuseAccessRequestToGroupForAdmin = (
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

export default RefuseAccessRequestToGroupForAdmin
