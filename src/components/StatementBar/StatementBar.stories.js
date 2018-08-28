import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text, boolean } from "@storybook/addon-knobs"
import StatementBar from "./StatementBar"
import StatementBarReadMe from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("StatementBar", module)
  .add(
    "No message",
    withReadme(StatementBarReadMe, withInfo()(() => <StatementBar />))
  )
  .add(
    "With message",
    withInfo()(() => (
      <StatementBar message={text("Message", "This is a message")} />
    ))
  )
