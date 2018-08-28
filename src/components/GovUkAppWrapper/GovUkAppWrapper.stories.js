import React from "react"
import { storiesOf } from "@storybook/react"
import GovUkAppWrapper from "./GovUkAppWrapper"
import { MemoryRouter } from "react-router"
import { text, boolean } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

const appWrapperProps = ({
  title,
  feedback,
  navigation,
  version,
  contactEmail,
  noAuth,
  authBody
}) => ({
  title,
  feedback,
  navigation,
  version,
  contactEmail,
  noAuth,
  authBody
})

storiesOf("GovUkAppWrapper", module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
  ))
  .add(
    "With content",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkAppWrapper>
          <h1>{text("Content Text", "Page content goes here")}</h1>
        </GovUkAppWrapper>
      ))
    )
  )
  .add(
    "With custom props",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkAppWrapper
          {...appWrapperProps({
            title: text("Title", "Title Text"),
            feedback: {
              build: text("Build", "v0.0.0"),
              message: text(
                "Feedback Message",
                "Example feedback request message"
              )
            },
            navigation: [
              {
                to: text("Nav Item 1 Link", "/notifications"),
                heading: text("Nav Item 1 Text", "Notifications")
              },
              {
                to: text("Nav Item 2 Link", "/invite"),
                heading: text("Nav Item 2 Text", "Invite Others")
              }
            ],
            version: text("Version Info", "Platform Common v0.0.0"),
            contactEmail: text("Contact Email", "storybookfake@mail.com"),
            noAuth: boolean("No Auth", false),
            authBody: text("Auth Body", "Auth Body Content")
          })}
        >
          <h1>{text("Content Text", "Page content goes here")}</h1>
        </GovUkAppWrapper>
      ))
    )
  )
