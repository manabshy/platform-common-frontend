/******************************************************************************************************/
// Imports
/******************************************************************************************************/
import GroupsService from "./GroupsService/"
import { inviteUser as InviteUser } from "./InviteUser/"
import SignInService from "./SignInService/"
import PlatformNotifications from "./PlatformNotifications/"
/******************************************************************************************************/
// Exports
/******************************************************************************************************/
const Actions = {
  GroupsService,
  InviteUser,
  SignInService,
  PlatformNotifications
}

export default Actions
