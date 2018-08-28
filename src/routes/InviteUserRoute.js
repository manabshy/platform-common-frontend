import React from "react"
import { Route } from "react-router"
import InviteUserContainer from "../containers/InviteUserContainer"

const InviteUserRoute = () => (
  <Route exact path="/invite" component={InviteUserContainer} />
)

export default InviteUserRoute
