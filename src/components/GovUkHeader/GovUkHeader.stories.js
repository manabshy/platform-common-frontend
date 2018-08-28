import React from "react"
import { storiesOf } from "@storybook/react"
import GovUkHeader from "./GovUkHeader"
import { MemoryRouter } from "react-router"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("GovUkHeader", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add("Default", withReadme(Readme, withInfo()(() => <GovUkHeader />)))
  .add(
    "With navigation",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkHeader
          navigation={[
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
    "No Auth",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkHeader
          navigation={[
            {
              to: text("Nav Link 1", "/foo"),
              heading: text("Nav Link 1 text", "foo")
            },
            {
              to: text("Nav Link 2", "/bar"),
              heading: text("Nav Link 2 text", "bar")
            }
          ]}
          noAuth={true}
        />
      ))
    )
  )
  .add(
    "Allow invite",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkHeader
          navigation={[
            {
              to: text("Nav Link 1", "/foo"),
              heading: text("Nav Link 1 text", "foo")
            },
            {
              to: text("Nav Link 2", "/bar"),
              heading: text("Nav Link 2 text", "bar")
            }
          ]}
          allowInvite={true}
        />
      ))
    )
  )
