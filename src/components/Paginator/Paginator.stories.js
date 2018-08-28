import React from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import Paginator from "./Paginator"

storiesOf("Paginator", module)
  .add("First Page", () => (
    <Paginator count="100" offset="0" onPageChange={action("Page Change")} />
  ))
  .add("Middle Page", () => (
    <Paginator count="100" offset="50" onPageChange={action("Page Change")} />
  ))
  .add("Last Page", () => (
    <Paginator count="100" offset="99" onPageChange={action("Page Change")} />
  ))
