import React from "react"
import { storiesOf } from "@storybook/react"
import HideShowPanel from "./HideShowPanel"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("HideShowPanel", module).add(
  "Default",
  withReadme(
    Readme,
    withInfo()(() => (
      <HideShowPanel heading={text("Heading", "read more...")}>
        {text("Hidden Content", "Panel Content")}
      </HideShowPanel>
    ))
  )
)
