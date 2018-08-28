import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import ConfirmationModal from "./ConfirmationModal"
import { text, boolean } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

const stories = storiesOf("ConfirmationModal", module)

stories.add(
  "Basic",
  withReadme(
    Readme,
    withInfo()(() => (
      <ConfirmationModal
        messageHeader={text(
          "Message Header",
          "Custom message header goes here"
        )}
        message={text("Message", "Custom message goes here")}
        isOpen={boolean("Is Open", true)}
        submit={text("Submit", "Custom button text")}
        onSubmitModal={action("onSubmitModal handler called")}
      />
    ))
  )
)
