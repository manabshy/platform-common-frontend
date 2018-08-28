import React from "react"
import { storiesOf } from "@storybook/react"
import FeedbackBanner from "./FeedbackBanner"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("FeedbackBanner", module)
  .add("Default", withReadme(Readme, withInfo()(() => <FeedbackBanner />)))
  .add(
    "Custom (Beta)",
    withReadme(
      Readme,
      withInfo()(() => (
        <FeedbackBanner
          feedback={{
            message: text("Message", "This is a custom message"),
            build: text("Tag", "BETA")
          }}
        />
      ))
    )
  )
