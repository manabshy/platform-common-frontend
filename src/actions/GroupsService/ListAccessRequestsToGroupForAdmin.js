import GroupsAxios from "../../helpers/axios/GroupsAxios"

// Constants
const _APIURL = "/ListAccessRequestsToGroupForAdmin"

/**
 * List Groups Helper
 * @author Ben Sheriff <ben.sheriff@digital.ndr.cesg.gov.uk>
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#listaccessrequeststogroupforadmin
 *
 * Success Format:
 *
 * {
 *    "group-id": GROUP_ID,
 *    "access-requests": [
 *    {
 *      "id": ACCESS_REQUEST_ID,
 *      "user-id": USER_ID,
 *      "is-requesting-admin": BOOL
 *    },
 *    ...
 *    ]
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @returns Promise
 */
const ListAccessRequestsToGroupForAdmin = (serviceID, groupID) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID
    }
  })
}

export default ListAccessRequestsToGroupForAdmin
