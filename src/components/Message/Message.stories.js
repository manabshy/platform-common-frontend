import React from "react"
import { storiesOf } from "@storybook/react"
import Message from "./Message"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("Message", module)
  .add("Default", withReadme(Readme, withInfo()(() => <Message />)))
  .add(
    "Custom header/message",
    withReadme(
      Readme,
      withInfo()(() => (
        <Message
          headerText="Custom header text"
          messageText="Custom message text"
        />
      ))
    )
  )
