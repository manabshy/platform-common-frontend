import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text, boolean } from "@storybook/addon-knobs"
import RadioButton from "./RadioButton"
import RadioButtonReadme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("RadioButton", module)
  .add(
    "Unselected",
    withReadme(
      RadioButtonReadme,
      withInfo()(() => (
        <fieldset>
          <RadioButton
            label={text("Label", "My radio button")}
            checked={false}
          />
        </fieldset>
      ))
    )
  )
  .add(
    "Selected",
    withInfo()(() => (
      <fieldset>
        <RadioButton label={text("Label", "My radio button")} checked={true} />
      </fieldset>
    ))
  )
  .add(
    "Group",
    withInfo()(() => {
      return (
        <fieldset>
          <legend>Radio group</legend>
          <RadioButton
            id="yes"
            name="radio-group"
            label={text("Label", "Yes")}
            checked={true}
            onChange={action("radio-button-changed")}
          />
          <RadioButton
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
    withInfo()(() => (
      <fieldset>
        <RadioButton label="" checked={true} />
      </fieldset>
    ))
  )
  .add(
    "With change callback",
    withInfo()(() => (
      <fieldset>
        <RadioButton
          label={text("Label", "My radio button")}
          onChange={action("radio-button-changed")}
        />
      </fieldset>
    ))
  )
  .add(
    "Small radio button",
    withInfo()(() => (
      <fieldset>
        <RadioButton
          label={text("Label", "My radio button")}
          checked={true}
          wrapperClassName="small-wrapper"
          className="small-input"
          labelClassName="small-label"
        />
      </fieldset>
    ))
  )
