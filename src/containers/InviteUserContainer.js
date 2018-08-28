import React from "react"
import { connect } from "react-redux"
import UserInvite from "../components/InviteUser/InviteUser.jsx"

import {
  openInviteUserModal,
  closeInviteUserModal,
  inviteUser
} from "../actions/InviteUser/"

const mapStateToProps = state => {
  return {
    inviteUserModalIsOpen: state.invite.inviteUserModalIsOpen,
    errors: state.invite.errors,
    loading: state.invite.loading,
    sendingInvite: state.invite.sendingInvite,
    invitations: state.invite.invitations
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCloseInviteUserModal: () => {
      dispatch(closeInviteUserModal())
    },
    onOpenInviteUserModal: event => {
      event.preventDefault()
      dispatch(openInviteUserModal())
    },
    onInviteUser: (email, isInvitationCopiedToInviter) => {
      dispatch(inviteUser(email, isInvitationCopiedToInviter))
    }
  }
}

const InviteUserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInvite)

export default InviteUserContainer
