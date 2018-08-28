import React from "react"
import { storiesOf } from "@storybook/react"
import { MemoryRouter } from "react-router"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Breadcrumbs from "./Breadcrumbs"
import BreadcrumbsReadme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("Breadcrumbs", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Without links",
    withReadme(
      BreadcrumbsReadme,
      withInfo()(() => (
        <Breadcrumbs
          trail={[
            text("Trail 1", "Homepage"),
            text("Trail 2", "Main Page"),
            text("Trail 3", "Index")
          ]}
        />
      ))
    )
  )
  .add(
    "With links",
    withReadme(
      BreadcrumbsReadme,
      withInfo()(() => (
        <Breadcrumbs
          trail={[
            text("Trail 1", "Homepage"),
            text("Trail 2", "Main Page"),
            text("Trail 3", "Index")
          ]}
          links={[text("Link 1", "foo"), text("Link 2", "bar")]}
        />
      ))
    )
  )
