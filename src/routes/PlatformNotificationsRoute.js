import React from "react"
import { Route } from "react-router"
import PlatformNotificationsContainer from "../containers/PlatformNotificationsContainer"

const PlatformNotificationsRoute = () => (
  <Route
    exact
    path="/notifications"
    component={PlatformNotificationsContainer}
  />
)

export default PlatformNotificationsRoute
