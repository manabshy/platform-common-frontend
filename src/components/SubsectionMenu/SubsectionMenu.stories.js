import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text, boolean } from "@storybook/addon-knobs"
import SubsectionMenu from "./SubsectionMenu"
import SubsectionReadMe from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("SubsectionMenu", module)
  .add(
    "Unselected",
    withReadme(
      SubsectionReadMe,
      withInfo()(() => (
        <SubsectionMenu title={text("Heading", "Subsection Menu")} />
      ))
    )
  )
  .add(
    "Selected",
    withInfo()(() => (
      <SubsectionMenu selected title={text("Heading", "Subsection Menu")} />
    ))
  )
  .add(
    "OnClickHandler",
    withInfo()(() => (
      <SubsectionMenu
        selected
        title={text("Heading", "Subsection Menu")}
        onClickHandler={action("subsection-button-clicked")}
      />
    ))
  )
  .add(
    "HideIcon",
    withInfo()(() => (
      <SubsectionMenu
        selected
        title={text("Heading", "Subsection Menu")}
        iconClassName="hide-arrow"
        selected={boolean("Selected", true)}
      />
    ))
  )
