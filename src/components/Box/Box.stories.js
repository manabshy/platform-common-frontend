import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Box from "./Box"
import BoxReadme from "./README.md"
import { withReadme } from "storybook-readme"

const customHeader = () => (
  <span>
    Filter{" "}
    <a
      href="#"
      onClick={e => {
        action("on-click-header-handler")
        e.preventDefault()
      }}
      className="clear-filter pull-right"
    >
      clear all
    </a>
  </span>
)

const customContent = () => (
  <ul className="list list-bullet">
    <li>Sample list item</li>
    <li>Sample list item</li>
    <li>Sample list item</li>
  </ul>
)

storiesOf("Box", module)
  .add(
    "Basic",
    withReadme(
      BoxReadme,
      withInfo()(() => (
        <Box
          header={text("Header", "My Box")}
          content={text("Content", "Box Content")}
        />
      ))
    )
  )
  .add(
    "JSX header",
    withReadme(
      BoxReadme,
      withInfo()(() => (
        <Box header={customHeader()} content={text("Content", "Box Content")} />
      ))
    )
  )
  .add(
    "JSX content",
    withReadme(
      BoxReadme,
      withInfo()(() => <Box header={"My Box"} content={customContent()} />)
    )
  )
