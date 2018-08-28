import GroupsAxios from "../../helpers/axios/GroupsAxios"
import GroupsServiceAPI from "./APIEndpoints.js"

// Constants
const _APIURL = GroupsServiceAPI.ListGroupsForUser

/**
 * List Groups For User Helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 * @note  user-id is omitted from the request data as it is added in middleware later on but is required by the backend API
 * @see https://github.com/ukncsc/groups-service-ncsc/blob/master/APIs.md#listgroupsforuser
 *
 * Success Format:
 *
 * {
      "user-id": USER_ID,
      "groups": [
        {
          "group-id": GROUP_ID,
          "group-name": STRING,
          "is-admin": BOOL
        },
        ...
      ]
    }
 * }
 *
 * @param {number} userID
 * @param {number} serviceID
 * @returns Promise
 */
const ListGroupsForUser = (userID, serviceID) => {
  return GroupsAxios({
    url: _APIURL,
    method: "POST",
    data: {
      "user-id": userID,
      "service-id": serviceID
    }
  })
}

export default ListGroupsForUser
