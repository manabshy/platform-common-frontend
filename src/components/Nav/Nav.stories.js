import React from "react"
import { storiesOf } from "@storybook/react"
import Nav from "./Nav"
import { action } from "@storybook/addon-actions"
import { MemoryRouter } from "react-router"
import { text } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("Nav", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo()(() => (
        <Nav
          display
          links={[
            { heading: "Link 1", to: "/link-1" },
            { heading: "Link 2", to: "/link-2" }
          ]}
        />
      ))
    )
  )
  /* .add("Display true", withReadme(Readme, withInfo()(() => (
    <Nav
      display={true}
      links={[
        { heading: "Link 1", to: "/link-1" },
        { heading: "Link 2", to: "/link-2" }
      ]}
    />
  ))))
  .add("Display false", withReadme(Readme, withInfo()(() => (
    <Nav
      display={false}
      links={[
        { heading: "Link 1", to: "/link-1" },
        { heading: "Link 2", to: "/link-2" }
      ]}
    />
  )))) */
  .add(
    "Click handler links",
    withReadme(
      Readme,
      withInfo({
        text: "Note: Check the action logger to track the click event handlers"
      })(() => (
        <Nav
          display={true}
          links={[
            {
              heading: "Link 1",
              to: "/link-1",
              onClickHandler: action("link-1-handler")
            },
            {
              heading: "Link 2",
              to: "/link-2",
              onClickHandler: action("link-2-handler")
            }
          ]}
        />
      ))
    )
  )
