import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text, boolean } from "@storybook/addon-knobs"
import ImportFile from "./ImportFile"
import ImportFileReadme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("ImportFile", module)
  .add(
    "basic",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile className="dropzone">
          <div>
            <a className="link">Browse</a> for a .txt file
          </div>
        </ImportFile>
      ))
    )
  )
  .add(
    "Use of callbacks",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile
          className="dropzone"
          onDropAccepted={action("Accepted drop")}
          onDrop={action("Dropped file")}
          onDropRejected={action("Rejected drop")}
          onFileDialogCancel={action("onFileDialogCancel")}
        >
          <div>
            <a className="link">Browse</a> for a .txt file
          </div>
        </ImportFile>
      ))
    )
  )
  .add(
    "Accept multiple files",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile
          className="dropzone"
          multiple={true}
          onDropAccepted={action("Accepted drop")}
        >
          <div>
            <a className="link">Browse</a> for a .txt file
          </div>
        </ImportFile>
      ))
    )
  )
  .add(
    "Disabled",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile
          className="dropzone"
          disabled={true}
          onDropAccepted={action("Accepted drop")}
        >
          <div>Disabled</div>
        </ImportFile>
      ))
    )
  )
  .add(
    "Disable click & allow drag",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile
          className="dropzone"
          disableClick={true}
          onDropAccepted={action("Accepted drop")}
        >
          <div>Drag in a file to import</div>
        </ImportFile>
      ))
    )
  )
  .add(
    "Min/Max size set",
    withReadme(
      ImportFileReadme,
      withInfo()(() => (
        <ImportFile
          className="dropzone"
          minSize={1000}
          maxSize={10000}
          onDropAccepted={action("Accepted drop")}
          onDropRejected={action("Rejected drop")}
        >
          <div>
            <a className="link">Browse</a> for a .txt file
          </div>
        </ImportFile>
      ))
    )
  )
