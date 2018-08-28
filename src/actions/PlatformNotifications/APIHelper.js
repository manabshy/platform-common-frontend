import PlatformNotificationsAxios from "../../helpers/axios/PlatformNotificationsAxios"
import PlatformNotificationsAPI from "./APIEndpoints.js"

// Constants
const _LISTAPIURL = PlatformNotificationsAPI.ListPlatformNotifications
const _GETAPIURL = PlatformNotificationsAPI.GetPlatformNotification

/**
 * ListPlatformNotifications helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 *
 * @returns Promise
 */
export const ListPlatformNotifications = () => {
  return PlatformNotificationsAxios({
    url: _LISTAPIURL,
    method: "GET",
    data: {}
  })
}

/**
 * GetPlatformNotifications helper
 * @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 *
 * @returns Promise
 */
export const GetPlatformNotification = id => {
  return PlatformNotificationsAxios({
    url: `${_GETAPIURL}/${id}`,
    method: "GET",
    data: {}
  })
}
