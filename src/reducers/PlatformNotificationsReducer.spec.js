/******************************************************************************************************/
// Imports
/******************************************************************************************************/
import PlatformNotificationsReducer from "./PlatformNotificationsReducer"
import initialState from "../store/PlatformNotificationsState"
import {
  PLATFORM_NOTIFICATIONS_FETCHING,
  PLATFORM_NOTIFICATIONS_SUCCESS,
  PLATFORM_NOTIFICATIONS_ERROR,
  PLATFORM_NOTIFICATIONS_TARGET_FETCHING,
  PLATFORM_NOTIFICATIONS_TARGET_SUCCESS,
  PLATFORM_NOTIFICATIONS_TARGET_CLEAR,
  PLATFORM_NOTIFICATIONS_TARGET_ERROR
} from "../actions/PlatformNotifications/actionTypes"

/* global test, expect */

test("Default state is a blank object", () => {
  const state = PlatformNotificationsReducer(undefined, {
    type: "UNDEFINED"
  })

  // Expected state is the initial state unchanged
  const expState = Object.assign({})

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_TARGET_FETCHING
 *
 * Fetch target
 */
test("PLATFORM_NOTIFICATIONS_TARGET_FETCHING", () => {
  const state = PlatformNotificationsReducer(
    initialState.platformNotifications,
    {
      type: PLATFORM_NOTIFICATIONS_TARGET_FETCHING
    }
  )

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications, {
    targetNotification: {
      ...initialState.platformNotifications.targetNotification
    }
  })
  expState.targetNotification.isFetching = true

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_TARGET_SUCCESS
 *
 * Set target
 */
test("PLATFORM_NOTIFICATIONS_TARGET_SUCCESS", () => {
  const exampleTarget = {
    subject: "Test notification",
    content: "This is a test"
  }
  const state = PlatformNotificationsReducer(
    initialState.platformNotifications,
    {
      type: PLATFORM_NOTIFICATIONS_TARGET_SUCCESS,
      payload: exampleTarget
    }
  )

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications, {
    targetNotification: {
      ...initialState.platformNotifications.targetNotification
    }
  })
  expState.targetNotification.data = exampleTarget

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_CLEAR_TARGET
 *
 * Clear Target
 */
test("PLATFORM_NOTIFICATIONS_TARGET_CLEAR", () => {
  const exampleTarget = {
    subject: "Test notification",
    content: "This is a test"
  }
  const testState = Object.assign({}, initialState.platformNotifications, {
    targetNotification: {
      data: exampleTarget,
      isFetching: false
    }
  })

  const state = PlatformNotificationsReducer(testState, {
    type: PLATFORM_NOTIFICATIONS_TARGET_CLEAR
  })

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications)

  expect(state).toEqual(expState)
})

test("PLATFORM_NOTIFICATIONS_TARGET_ERROR", () => {
  const exampleTarget = {
    subject: "Test notification",
    content: "This is a test"
  }
  const testState = Object.assign({}, initialState.platformNotifications, {
    targetNotification: {
      data: exampleTarget,
      isFetching: false
    }
  })

  const state = PlatformNotificationsReducer(testState, {
    type: PLATFORM_NOTIFICATIONS_TARGET_ERROR
  })

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications)

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_FETCHING
 *
 * Set state to is-fetching
 */
test("PLATFORM_NOTIFICATIONS_FETCHING", () => {
  const state = PlatformNotificationsReducer(
    initialState.platformNotifications,
    {
      type: PLATFORM_NOTIFICATIONS_FETCHING
    }
  )

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications)
  expState.isFetching = true

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_SUCCESS
 *
 * Set payload to data
 */
test("PLATFORM_NOTIFICATIONS_SUCCESS", () => {
  const testPayload = [{ fake: true }, { fake: true }, { fake: true }]
  const state = PlatformNotificationsReducer(
    initialState.platformNotifications,
    {
      type: PLATFORM_NOTIFICATIONS_SUCCESS,
      payload: testPayload
    }
  )

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications)
  expState.data = testPayload
  expState.isFetching = false

  expect(state).toEqual(expState)
})

/**
 * PLATFORM_NOTIFICATIONS_ERROR
 *
 * Set data to empty
 */
test("PLATFORM_NOTIFICATIONS_ERROR", () => {
  const state = PlatformNotificationsReducer(
    initialState.platformNotifications,
    {
      type: PLATFORM_NOTIFICATIONS_ERROR
    }
  )

  // Expected state
  const expState = Object.assign({}, initialState.platformNotifications)
  expState.data = []
  expState.isFetching = false

  expect(state).toEqual(expState)
})
