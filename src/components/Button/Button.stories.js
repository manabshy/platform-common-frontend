import React from "react"

import { withInfo } from "@storybook/addon-info"
import { storiesOf } from "@storybook/react"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

import Button from "./Button"

const onClick = args => {
  console.log("Clicked with args: ", args)
}

storiesOf("Button", module)
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Button
          onClick={event => {
            onClick(event)
          }}
        >
          Default button
        </Button>
      ))
    )
  )
  .add(
    "Secondary button",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Button
          className="button--secondary"
          onClick={event => {
            onClick(event)
          }}
        >
          Secondary button
        </Button>
      ))
    )
  )
  .add(
    "Disabled button",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Button
          onClick={event => {
            onClick(event)
          }}
          disabled={true}
        >
          Disabled button
        </Button>
      ))
    )
  )
