import { reducerPropertyKeyName as platformNotificationsProp } from "../reducers/PlatformNotificationsReducer"

/**
 * Initial state for Platform Notifications
 */
let INITIAL_STATE = {}
INITIAL_STATE[platformNotificationsProp] = {
  targetNotification: {
    data: {},
    isFetching: false
  },
  data: [],
  isFetching: false
}

export default INITIAL_STATE
