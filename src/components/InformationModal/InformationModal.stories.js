import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import InformationModal from "./InformationModal"
import { text, boolean } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

const stories = storiesOf("InformationModal", module)

stories.add(
  "Basic",
  withReadme(
    Readme,
    withInfo()(() => (
      <InformationModal
        header={text("Modal Header", "Custom message header goes here")}
        content={text("Content", "Custom message goes here")}
        isOpen={boolean("Is Open", true)}
        submit={text("Submit", "Custom button text")}
        onCloseModal={action("onCloseModal handler called")}
        modalBodyID={text("Modal Body ID", "1000")}
      />
    ))
  )
)
