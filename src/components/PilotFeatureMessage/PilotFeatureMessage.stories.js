import React from "react"
import { storiesOf } from "@storybook/react"
import PilotFeatureMessage from "./PilotFeatureMessage"

storiesOf("PilotFeatureMessage", module)
  .add("Plain", () => <PilotFeatureMessage />)
  .add("Change Text", () => <PilotFeatureMessage featureText="Hello World" />)
