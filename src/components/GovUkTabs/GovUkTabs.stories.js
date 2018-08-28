import React from "react"
import { storiesOf } from "@storybook/react"
import { Tabs, Tab } from "./GovUkTabs"
import { MemoryRouter } from "react-router"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

const generateTabContent = text => (
  <div className="tab-content" style={{ "margin-top": "1rem" }}>
    <p>{text}</p>
  </div>
)

storiesOf("GovUkTabs", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Basic",
    withReadme(
      Readme,
      withInfo()(() => (
        <Tabs>
          <Tab label="Tab 1">
            {generateTabContent(text("Tab 1 Content", "Tab 1 Content"))}
          </Tab>
          <Tab label="Tab 2">
            {generateTabContent(text("Tab 2 Content", "Tab 2 Content"))}
          </Tab>
        </Tabs>
      ))
    )
  )
  .add(
    "Tab 2 selected",
    withReadme(
      Readme,
      withInfo()(() => (
        <Tabs selected={2}>
          <Tab label="Tab 1">
            {generateTabContent(text("Tab 1 Content", "Tab 1 Content"))}
          </Tab>
          <Tab label="Tab 2">
            {generateTabContent(text("Tab 2 Content", "Tab 2 Content"))}
          </Tab>
        </Tabs>
      ))
    )
  )
  .add(
    "With disabled tab",
    withReadme(
      Readme,
      withInfo()(() => (
        <Tabs>
          <Tab label="Tab 1">
            {generateTabContent(text("Tab 1 Content", "Tab 1 Content"))}
          </Tab>
          <Tab label="Tab 2">
            {generateTabContent(text("Tab 2 Content", "Tab 2 Content"))}
          </Tab>
          <Tab label="Tab 3" disabled={true}>
            {generateTabContent(text("Tab 3 Content", "Tab 3 Content"))}
          </Tab>
        </Tabs>
      ))
    )
  )
