import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import GDSInput from "./GDSInput"
import { text, number, boolean } from "@storybook/addon-knobs/react"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"
import Readme from "./README.md"

storiesOf("GDSInput", module)
  .add("Plain", withReadme(Readme, withInfo()(() => <GDSInput />)))
  .add(
    "Plus label",
    withReadme(
      Readme,
      withInfo()(() => <GDSInput labelText={text("Label", "Label text")} />)
    )
  )
  .add(
    "Plus hint",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
        />
      ))
    )
  )
  .add(
    "Plus error message",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
          errorMessage={text("Error Message", "This is required")}
          invalid={true}
        />
      ))
    )
  )
  .add(
    "Plus character counter",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
          errorMessage={text("Error Message", "This is required")}
          invalid={true}
          maxLength={number("Max Length", 50)}
          showCharactersRemaining={true}
        />
      ))
    )
  )
  .add(
    "Plus autofocus",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
          errorMessage={text("Error Message", "This is required")}
          invalid={boolean("Invalid", true)}
          maxLength={number("Max Length", 50)}
          showCharactersRemaining={boolean("Show Characters remaining", true)}
          autoFocus={true}
        />
      ))
    )
  )
  .add(
    "Plus onChange and onBlur actions",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
          errorMessage={text("Error Message", "This is required")}
          invalid={boolean("Invalid", true)}
          maxLength={number("Max Length", 50)}
          showCharactersRemaining={boolean("Show Characters remaining", true)}
          autoFocus={true}
          onChange={action("checkbox-changed")}
          onBlur={action("checkbox-blurred")}
        />
      ))
    )
  )
  .add(
    "Text Area plain",
    withReadme(Readme, withInfo()(() => <GDSInput textArea={true} />))
  )
  .add(
    "Text Area - all features",
    withReadme(
      Readme,
      withInfo()(() => (
        <GDSInput
          textArea={true}
          labelText={text("Label", "Label text")}
          hint={text("Hint", "hint")}
          errorMessage={text("Error Message", "This is required")}
          invalid={boolean("Invalid", true)}
          maxLength={number("Max Length", 50)}
          showCharactersRemaining={boolean("Show Characters remaining", true)}
          autoFocus={true}
        />
      ))
    )
  )
