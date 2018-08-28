import React from "react"
import { storiesOf, action } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import { withReadme } from "storybook-readme"

import Table from "./Table"
import Readme from "./README.md"

const tdMock = [
  [
    <span>
      <input type="checkbox" id="row1" />
      <label htmlFor="row1" className="visually-hidden">
        Select row 1
      </label>
    </span>,
    "Text only",
    <span>Text in html</span>,
    ""
  ],
  [
    <span>
      <input type="checkbox" id="row2" />
      <label htmlFor="row2" className="visually-hidden">
        Select row 2
      </label>
    </span>,
    "Text and 123",
    <p>Text in html</p>,
    "This isn't empty"
  ]
]

const thMock = [
  <span>
    <input
      type="checkbox"
      id="select-all"
      onChange={() => {
        console.log("This was clicked")
      }}
    />
    <label htmlFor="select-all" className="visually-hidden">
      Select all
    </label>
  </span>,
  "Text",
  "Mixed content",
  "Maybe empty"
]

storiesOf("Table", module)
  .add(
    "With no headind and body data",
    withReadme(Readme, withInfo({ inline: true })(() => <Table />))
  )
  .add(
    "With heading data",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Table tableHeading={["Heading 1", "Heading 2", "Heading 3"]} />
      ))
    )
  )
  .add(
    "With body data",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Table
          tableHeading={["Heading 1", "Heading 2", "Heading 3"]}
          tableBody={[
            ["Cell 1", "Cell 2", ""],
            ["Cell 4", "Cell 5", "Cell 6 (not empty)"]
          ]}
        />
      ))
    )
  )
  .add(
    "With a caption",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Table
          tableCaption="My table caption"
          tableBody={[
            ["Cell 1", "Cell 2", ""],
            ["Cell 4", "Cell 5", "Cell 6 (not empty)"]
          ]}
        />
      ))
    )
  )
  .add(
    "With mixed content data",
    withReadme(
      Readme,
      withInfo({ inline: true })(() => (
        <Table tableBody={tdMock} tableHeading={thMock} />
      ))
    )
  )
