import es6Promise from "es6-promise"
import axios from "axios"
import Notifications from "react-notification-system-redux"
import { notificationConfig } from "../../modules/notificationsConfig"
import validator from "validator"

import {
  OPEN_INVITE_MODAL,
  CLOSE_INVITE_MODAL,
  VALIDATE_INPUT,
  SENDING_INVITE,
  INVITE_SENT
} from "./actionTypes"

es6Promise.polyfill()

export function closeInviteUserModal() {
  return { type: CLOSE_INVITE_MODAL }
}

export function openInviteUserModal() {
  return { type: OPEN_INVITE_MODAL }
}

export function validateInput(field, message) {
  return {
    type: VALIDATE_INPUT,
    field,
    message
  }
}

export function inviteUser(email, isInvitationCopiedToInviter) {
  return dispatch => {
    // validation
    let emailIsValid = false

    if (!email.length) {
      dispatch(validateInput("email", "Email address is required"))
    } else if (!validator.isEmail(email)) {
      dispatch(validateInput("email", "Invalid email address"))
    } else {
      dispatch(validateInput("email", null))
      emailIsValid = true
    }

    // validation passed - send the XHR
    if (emailIsValid) {
      // disable the submit button while POSTing
      dispatch({
        type: SENDING_INVITE
      })

      isInvitationCopiedToInviter = isInvitationCopiedToInviter ? 1 : 0

      return axios
        .post(`/api/invite`, {
          email: email,
          isInvitationCopiedToInviter: isInvitationCopiedToInviter
        })
        .then(response => {
          // re-enable the submit button
          dispatch({
            type: INVITE_SENT
          })

          // Cast status code to string for safety
          let statusCode = "" + response.data.status

          // whether or not the modal should close after handling the response - default to true
          let closeModalAfterResponse = true

          if (statusCode.startsWith("4")) {
            if (statusCode === "422") {
              dispatch(
                validateInput(
                  "email",
                  "You can only invite users with a public sector email address. " +
                    "Other users should visit the service " +
                    "and request access from there."
                )
              )

              // prevent modal closing so we can display the validation message
              closeModalAfterResponse = false
            } else if (statusCode === "409") {
              dispatch(
                validateInput(
                  "email",
                  "This person has already been invited to use this service. " +
                    "Please ask them to sign in to respond to their invitation."
                )
              )

              // prevent modal closing so we can display the validation message
              closeModalAfterResponse = false
            } else {
              // unexpected 400 response
              dispatch(
                Notifications.error({
                  title: "Invite not sent",
                  message: response.data.message,
                  ...notificationConfig
                })
              )
            }
          } else if (statusCode.startsWith("5")) {
            // unexpected 500 response
            dispatch(
              Notifications.error({
                title: "Invite not sent",
                message: response.data.message,
                ...notificationConfig
              })
            )
          } else {
            let message = ""
            if (isInvitationCopiedToInviter) {
              message =
                "You have successfully sent an invitation to " +
                email +
                " and we have also sent a copy to your email account"
            } else {
              message = "You have successfully sent an invitation to " + email
            }
            dispatch(
              Notifications.success({
                title: "Invite sent",
                message: message,
                ...notificationConfig
              })
            )
          }

          // close the modal and reload the invitation list
          if (closeModalAfterResponse) {
            dispatch(closeInviteUserModal())
          }
        })
        .catch(error => {
          // @todo this should probably render in a notification banner within the modal if it's a 500
          if (error.response.status === 404 || error.response.status === 500) {
            dispatch(
              Notifications.error({
                title: "Unable to invite user",
                message: "An error occurred when attempting to invite the user",
                ...notificationConfig
              })
            )
          } else {
            dispatch(validateInput("email", error.response.data.message, true))
          }
        })
    }
  }
}
