import React from "react"
import { storiesOf } from "@storybook/react"
import DropdownButton from "./DropdownButton"
import { object } from "@storybook/addon-knobs"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import { MemoryRouter } from "react-router"
import { Link } from "react-router-dom"

import Readme from "./README.md"
import { color } from "../../../node_modules/@storybook/addon-knobs/dist/react"

const mockItems = [{ content: "Option 1" }, { content: "Option 2" }, { content: "Option 3" }]
const mockItemsLinks = [
  { content: <Link to={"/"}>Link one</Link> },
  { content: <Link to={"/"}>Link two</Link> },
  { content: <Link to={"/"}>Link three</Link> }
]
const customFunction = () => {
  alert("You clicked an Event")
}
const mockItemsEvents = [
  {
    content: "Event 1",
    handler: customFunction
  },
  {
    content: "Event 2",
    handler: customFunction
  },
  {
    content: "Event 3",
    handler: customFunction
  }
]

storiesOf("DropdownButton", module)
  .addDecorator(story => <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>)
  .add(
    "Empty",
    withReadme(
      Readme,
      withInfo({
        text: "Note: Nothing is displayed if no items are passed to the component."
      })(() => <DropdownButton />)
    )
  )
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo()(() => <DropdownButton title="Dropdown Default" menu={mockItems} />)
    )
  )
  .add(
    "Links",
    withReadme(
      Readme,
      withInfo()(() => <DropdownButton title="Dropdown Links" menu={mockItemsLinks} />)
    )
  )
  .add(
    "Custom events",
    withReadme(
      Readme,
      withInfo()(() => <DropdownButton title="Dropdown Events" menu={mockItemsEvents} />)
    )
  )
