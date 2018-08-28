import React from "react"
import { storiesOf } from "@storybook/react"
import CountCard from "./CountCard"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("CountCard", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo()(() => (
        <CountCard to="" text="default" total={12} backgroundColour="green" />
      ))
    )
  )
  .add(
    "Disabled",
    withReadme(
      Readme,
      withInfo()(() => (
        <CountCard
          to="/link-1"
          text="default"
          total={12}
          wrapperClassName="disabled"
        />
      ))
    )
  )
  .add(
    "onChange & no link",
    withReadme(
      Readme,
      withInfo()(() => (
        <CountCard onChangeHandler={action("Test")} text="default" total={12} />
      ))
    )
  )
