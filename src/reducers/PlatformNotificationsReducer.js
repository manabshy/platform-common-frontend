/******************************************************************************************************/
// Imports
/******************************************************************************************************/
import {
  PLATFORM_NOTIFICATIONS_TARGET_FETCHING,
  PLATFORM_NOTIFICATIONS_TARGET_SUCCESS,
  PLATFORM_NOTIFICATIONS_TARGET_ERROR,
  PLATFORM_NOTIFICATIONS_TARGET_CLEAR,
  PLATFORM_NOTIFICATIONS_FETCHING,
  PLATFORM_NOTIFICATIONS_SUCCESS,
  PLATFORM_NOTIFICATIONS_ERROR,
  PLATFORM_NOTIFICATIONS_TARGET_IS_READ
} from "../actions/PlatformNotifications/actionTypes"
/******************************************************************************************************/
// Const Export
/******************************************************************************************************/
export const reducerPropertyKeyName = "platformNotifications"
/******************************************************************************************************/
// Reducer
/******************************************************************************************************/
const platformNotifications = (state = {}, action) => {
  switch (action.type) {
    case PLATFORM_NOTIFICATIONS_TARGET_FETCHING:
      return {
        ...state,
        targetNotification: {
          ...state.targetNotification,
          isFetching: true
        }
      }
    case PLATFORM_NOTIFICATIONS_TARGET_SUCCESS:
      return {
        ...state,
        targetNotification: {
          ...state.targetNotification,
          isFetching: false,
          data: action.payload
        }
      }
    case PLATFORM_NOTIFICATIONS_TARGET_ERROR:
      return {
        ...state,
        targetNotification: {
          ...state.targetNotification,
          isFetching: false,
          data: {}
        }
      }
    case PLATFORM_NOTIFICATIONS_TARGET_CLEAR:
      return {
        ...state,
        targetNotification: { isFetching: false, data: {} }
      }
    case PLATFORM_NOTIFICATIONS_TARGET_IS_READ:
      return {
        ...state,
        data: state.data.map(n => {
          if (n.id === action.payload && !n.read) {
            n.read = new Date()
          }

          return n
        })
      }
    case PLATFORM_NOTIFICATIONS_FETCHING:
      return { ...state, isFetching: true }
    case PLATFORM_NOTIFICATIONS_SUCCESS:
      return { ...state, isFetching: false, data: action.payload }
    case PLATFORM_NOTIFICATIONS_ERROR:
      return { ...state, data: [], isFetching: false }
    default:
      return state
  }
}

export default platformNotifications
