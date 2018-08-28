import {
  OPEN_INVITE_MODAL,
  CLOSE_INVITE_MODAL,
  VALIDATE_INPUT,
  SENDING_INVITE,
  INVITE_SENT,
  INVITATIONS_ERROR
} from "../actions/InviteUser/actionTypes"

const invite = (state = {}, action) => {
  switch (action.type) {
    case OPEN_INVITE_MODAL:
      return {
        ...state,
        inviteUserModalIsOpen: true
      }
    case CLOSE_INVITE_MODAL:
      return {
        ...state,
        // Added this to ensure previous errors are removed AL
        errors: {},
        inviteUserModalIsOpen: false
      }
    case SENDING_INVITE:
      return { ...state, sendingInvite: true }
    case INVITE_SENT:
      return { ...state, sendingInvite: false }
    case INVITATIONS_ERROR:
      return { ...state, invitations: "ERROR", loading: false }
    case VALIDATE_INPUT:
      let errors = { ...state.errors }

      if (action.message) {
        errors[action.field] = action.message
      } else {
        delete errors[action.field]
      }

      return {
        ...state,
        errors: errors
      }

    default:
      return state
  }
}

export default invite
