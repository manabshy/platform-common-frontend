import React from "react"
import { storiesOf } from "@storybook/react"
import Badge from "./Badge"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"

storiesOf("Badge", module)
  .add("Plain", withReadme(Readme, withInfo()(() => <Badge>Normal</Badge>)))
  .add(
    "Plain with title",
    withReadme(Readme, withInfo()(() => <Badge title="title">Normal</Badge>))
  )
  .add(
    "With `badge--danger`",
    withReadme(
      Readme,
      withInfo()(() => (
        <Badge title="Danger" className="badge--danger">
          Urgent
        </Badge>
      ))
    )
  )
  .add(
    "With `badge--warning`",
    withReadme(
      Readme,
      withInfo()(() => (
        <Badge title="Warning" className="badge--warning">
          Warning
        </Badge>
      ))
    )
  )
  .add(
    "With `badge--info`",
    withReadme(
      Readme,
      withInfo()(() => (
        <Badge title="Information" className="badge--info">
          Information
        </Badge>
      ))
    )
  )
  .add(
    "With `badge--success`",
    withReadme(
      Readme,
      withInfo()(() => (
        <Badge title="Success" className="badge--success">
          Success
        </Badge>
      ))
    )
  )
