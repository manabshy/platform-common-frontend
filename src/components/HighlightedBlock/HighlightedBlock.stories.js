import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import HighlightedBlock from "./HighlightedBlock"
import HighlightedBlockReadMe from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("HighlightedBlock", module)
  .add(
    "Simple example",
    withReadme(
      HighlightedBlockReadMe,
      withInfo()(() => (
        <HighlightedBlock backgroundColour="#edf7ff" borderLeftColour="#005ea4">
          <div>
            <span>{text("Text", "This is a highlighted block")}</span>
          </div>
        </HighlightedBlock>
      ))
    )
  )
  .add(
    "Text & function",
    withReadme(
      HighlightedBlockReadMe,
      withInfo()(() => (
        <HighlightedBlock
          backgroundColour={text("Background Colour", "#edf7ff")}
          borderLeftColour={text("Border Left Colour", "#005ea4")}
        >
          <div>
            <span>{text("Text", "Example of list selected text. ")}</span>
            <span className="link" onClick={action("Cleared Selection")}>
              {text("Functional Text", "Example to clear selected")}
            </span>
          </div>
        </HighlightedBlock>
      ))
    )
  )
