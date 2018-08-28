/**
 * Initial state for Invite User integration
 */
const INITIAL_STATE = {
  invite: {
    inviteUserModalIsOpen: false,
    errors: {},
    invitations: [],
    loading: true,
    sendingInvite: false
  }
}

export default INITIAL_STATE
