import React from "react"
import { storiesOf, action } from "@storybook/react"
import SearchBox from "./SearchBox"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("SearchBox", module)
  .add(
    "Default",
    withReadme(
      Readme,
      withInfo()(() => (
        <SearchBox
          onFieldValueChange={value => action("FieldValueChange", value)}
        />
      ))
    )
  )
  .add(
    "Placeholder text",
    withReadme(
      Readme,
      withInfo()(() => (
        <SearchBox
          onFieldValueChange={value => action("FieldValueChange", value)}
          placeholderText="Different placeholder text"
        />
      ))
    )
  )
  .add(
    "With value",
    withReadme(
      Readme,
      withInfo()(() => (
        <SearchBox
          onFieldValueChange={value => action("FieldValueChange", value)}
          fieldValue={text("fieldValue", "kittens")}
          placeholderText={text("placeholderText", null)}
          onFieldSubmit={value => action("FieldSubmit", value)}
          className={text("className", "myClassName")}
        />
      ))
    )
  )
