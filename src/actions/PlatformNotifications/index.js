import es6Promise from "es6-promise"
import Notifications from "react-notification-system-redux"
import { notificationConfig } from "../../modules/notificationsConfig"

import { ListPlatformNotifications, GetPlatformNotification } from "./APIHelper"

import {
  PLATFORM_NOTIFICATIONS_MODAL_OPEN,
  PLATFORM_NOTIFICATIONS_MODAL_CLOSE,
  PLATFORM_NOTIFICATIONS_FETCHING,
  PLATFORM_NOTIFICATIONS_SUCCESS,
  PLATFORM_NOTIFICATIONS_ERROR,
  PLATFORM_NOTIFICATIONS_TARGET_FETCHING,
  PLATFORM_NOTIFICATIONS_TARGET_SUCCESS,
  PLATFORM_NOTIFICATIONS_TARGET_ERROR,
  PLATFORM_NOTIFICATIONS_TARGET_CLEAR,
  PLATFORM_NOTIFICATIONS_TARGET_IS_READ
} from "./actionTypes"

es6Promise.polyfill()

export function closePlatformNotificationsModal() {
  return { type: PLATFORM_NOTIFICATIONS_MODAL_CLOSE }
}

export function openPlatformNotificationsModal() {
  return { type: PLATFORM_NOTIFICATIONS_MODAL_OPEN }
}

export function isFetchingNotifications() {
  return { type: PLATFORM_NOTIFICATIONS_FETCHING }
}

export function setPlatformNotifications(data) {
  return {
    type: PLATFORM_NOTIFICATIONS_SUCCESS,
    payload: data
  }
}

export function platformNotificatonsError() {
  return { type: PLATFORM_NOTIFICATIONS_ERROR }
}

export function fetchNotifications() {
  return dispatch => {
    dispatch(isFetchingNotifications())
    ListPlatformNotifications()
      .then(resp => {
        dispatch(setPlatformNotifications(resp.data))
      })
      .catch(e => {
        console.log(e)
        dispatch(
          Notifications.error({
            title: "Error fetching platform notifications",
            message: `Platform Notifications could not be resolved.`,
            ...notificationConfig
          })
        )
        dispatch(platformNotificatonsError())
      })
  }
}

export function isFetchingNotification() {
  return { type: PLATFORM_NOTIFICATIONS_TARGET_FETCHING }
}

export function setPlatformNotification(data) {
  return {
    type: PLATFORM_NOTIFICATIONS_TARGET_SUCCESS,
    payload: data
  }
}

export function platformNotificatonError() {
  return { type: PLATFORM_NOTIFICATIONS_TARGET_ERROR }
}

export function platformNotificatonClear() {
  return { type: PLATFORM_NOTIFICATIONS_TARGET_CLEAR }
}

export function setPlatformNotificationInListToRead(id) {
  return {
    type: PLATFORM_NOTIFICATIONS_TARGET_IS_READ,
    payload: id
  }
}

export function fetchNotification(id) {
  return dispatch => {
    dispatch(isFetchingNotification())
    GetPlatformNotification(id)
      .then(resp => {
        dispatch(setPlatformNotification(resp.data))
        dispatch(setPlatformNotificationInListToRead(id))
      })
      .catch(e => {
        console.log(e)
        dispatch(
          Notifications.error({
            title: "Error fetching platform notification",
            message: `Platform Notification could not be resolved.`,
            ...notificationConfig
          })
        )
        dispatch(platformNotificatonError())
      })
  }
}
