import React from "react"
import { storiesOf } from "@storybook/react"
import GovUkCookieMessage from "./GovUkCookieMessage"
import { boolean } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("GovUkCookieMessage", module)
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkCookieMessage visible={boolean("Visible", true)} />
      ))
    )
  )
  .add(
    "Custom content",
    withReadme(
      Readme,
      withInfo()(() => (
        <GovUkCookieMessage
          visible={boolean("Visible", true)}
          cookieMessage="Custom message with <a href=&quot;#&quot;>custom link</a>"
        />
      ))
    )
  )
