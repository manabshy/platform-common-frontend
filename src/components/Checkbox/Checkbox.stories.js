import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text, boolean } from "@storybook/addon-knobs"
import Checkbox from "./Checkbox"
import CheckboxReadme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("Checkbox", module)
  .add(
    "Unchecked",
    withReadme(
      CheckboxReadme,
      withInfo()(() => (
        <Checkbox label={text("Label", "My checkbox")} checked={false} />
      ))
    )
  )
  .add(
    "Checked",
    withInfo()(() => (
      <Checkbox label={text("Label", "My checkbox")} checked={true} />
    ))
  )
  .add(
    "Group",
    withInfo()(() => {
      return (
        <fieldset>
          <legend>Radio group</legend>
          <Checkbox
            id="yes"
            name="radio-group"
            label={text("Label", "Yes")}
            checked={true}
            onChange={action("radio-button-changed")}
          />
          <Checkbox
            id="no"
            name="radio-group"
            label={text("Label", "No")}
            checked={false}
            onChange={action("radio-button-changed")}
          />
        </fieldset>
      )
    })
  )
  .add(
    "No label",
    withInfo()(() => <Checkbox label="" checked={boolean("Checked", true)} />)
  )
  .add(
    "With hidden label",
    withInfo()(() => (
      <Checkbox
        label="Should be hidden"
        labelTextClassName="visually-hidden"
        checked={boolean("Checked", true)}
      />
    ))
  )
  .add(
    "With change callback",
    withInfo()(() => (
      <Checkbox
        label={text("Label", "My checkbox")}
        onChange={action("checkbox-changed")}
      />
    ))
  )
  .add(
    "With change specific id override for random uuid",
    withInfo()(() => (
      <Checkbox label={text("Label", "My checkbox")} id="MySpecificId" />
    ))
  )
