import React from "react"
import { storiesOf } from "@storybook/react"
import InviteUser from "./InviteUser"

storiesOf("Invite user", module)
  .add("Modal closed", () => <InviteUser />)
  .add("Modal open", () => <InviteUser inviteUserModalIsOpen={true} />)
  .add("Custom service name", () => (
    <InviteUser
      serviceName="Custom service name"
      inviteUserModalIsOpen={true}
    />
  ))
