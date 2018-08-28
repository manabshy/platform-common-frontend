import React from "react"
import { storiesOf } from "@storybook/react"
import GovUkFooter from "./GovUkFooter"
import { MemoryRouter } from "react-router"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("GovUkFooter", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default", withReadme(Readme, withInfo()(() => <GovUkFooter />)))
  .add(
    "With nav",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkFooter
          footerNavigation={[
            {
              to: text("Nav Link 1", "/foo"),
              heading: text("Nav Link 1 text", "foo")
            },
            {
              to: text("Nav Link 2", "/bar"),
              heading: text("Nav Link 2 text", "bar")
            }
          ]}
        />
      ))
    )
  )
  .add(
    "With external link",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkFooter
          footerNavigation={[
            {
              to: text("Nav Link 1", "/foo"),
              heading: text("Nav Link 1 text", "foo")
            },
            {
              to: text("External Link 2", "https://www.google.com/"),
              heading: text("External Link 2 text", "Google Link"),
              external: true
            }
          ]}
        />
      ))
    )
  )
