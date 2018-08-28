import React from "react"
import { storiesOf } from "@storybook/react"
import Spinner from "./Spinner"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("Spinner", module)
  .add("Plain", withReadme(Readme, withInfo()(() => <Spinner />)))
  .add(
    "Remove Wrapper",
    withReadme(Readme, withInfo()(() => <Spinner includeWrapper="false" />))
  )
  .add(
    "Custom Spinner size",
    withReadme(
      Readme,
      withInfo()(() => <Spinner size={text("Spinner Size", "8em")} />)
    )
  )
  .add(
    "Change text",
    withReadme(
      Readme,
      withInfo()(() => (
        <Spinner wrapperText={text("Loading Text", "Hello World")} />
      ))
    )
  )
