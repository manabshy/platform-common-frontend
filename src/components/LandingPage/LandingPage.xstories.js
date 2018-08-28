import React from "react"
import { storiesOf } from "@storybook/react"
import LandingPage from "./LandingPage"

storiesOf("LandingPage", module)
  .add("Default", () => <LandingPage />)
  .add("Custom title/description", () => (
    <LandingPage title="Custom title" description="Custom description" />
  ))
