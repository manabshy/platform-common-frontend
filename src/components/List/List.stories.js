import React from "react"
import { storiesOf } from "@storybook/react"
import List from "./List"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

const mockItems = ["List item 1", "List item 2", "List item 3"]

const mockJSXItems = [
  <h3 className="heading-medium">header 3 content</h3>,
  <div>div content</div>,
  <ul>
    <li>li content</li>
  </ul>
]

storiesOf("List", module)
  .add(
    "Empty",
    withReadme(
      Readme,
      withInfo({
        text:
          "Note: Nothing is displayed if no items are passed to the component."
      })(() => <List />)
    )
  )
  .add(
    "Default",
    withReadme(Readme, withInfo()(() => <List items={mockItems} />))
  )
  .add(
    "JSX Content",
    withReadme(Readme, withInfo()(() => <List items={mockJSXItems} />))
  )
