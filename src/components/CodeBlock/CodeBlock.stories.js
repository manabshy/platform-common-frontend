import React from "react"
import { storiesOf } from "@storybook/react"
import CodeBlock from "./CodeBlock"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"
import { withInfo } from "@storybook/addon-info"

storiesOf("CodeBlock", module)
  .add(
    "Plain",
    withReadme(
      Readme,
      withInfo()(() => (
        <CodeBlock>
          const output = "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit." console.log(output)
        </CodeBlock>
      ))
    )
  )
  .add(
    "Javascript Language",
    withReadme(
      Readme,
      withInfo()(() => (
        <CodeBlock language="javascript">
          const output = "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit." console.log(output)
        </CodeBlock>
      ))
    )
  )
