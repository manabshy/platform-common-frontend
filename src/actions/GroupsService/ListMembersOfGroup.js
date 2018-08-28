import GroupsAxios from "../../helpers/axios/GroupsAxios"

// Constants
const _APIURL = "/ListMembersOfGroup"

/**
 * List Groups Helper
 * @author Ben Sheriff <ben.sheriff@digital.ndr.cesg.gov.uk>
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#listmembersofgroup
 *
 * Success Format:
 *
 * {
 *   "group-id": GROUP_ID,
 *   "members": [
 *   {
 *     "user-id": USER_ID,
 *     "email": USER_ID,
 *     "is-admin": BOOL
 *   },
 *   ...
 *   ]
 * }
 *
 * @param {number} serviceID
 * @param {number} groupID
 * @param {number} query.offset
 * @param {number} query.size
 * @returns Promise
 */
const ListMembersOfGroup = (serviceID, groupID, query) => {
  const { offset, size } = query
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "service-id": serviceID,
      "group-id": groupID,
      offset: offset,
      size: size
    }
  })
}

export default ListMembersOfGroup
