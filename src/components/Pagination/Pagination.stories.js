import React from "react"
import { storiesOf } from "@storybook/react"
import Pagination from "./Pagination"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { number } from "@storybook/addon-knobs"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

storiesOf("Pagination", module).add(
  "With all knobs",
  withReadme(
    Readme,
    withInfo()(() => (
      <Pagination
        pageNumber={number("pageNumber", 1)}
        onPageChange={() => {
          action("Alt change")
        }}
        totalCount={number("totalCount", 200)}
        perPage={number("perPage", 20)}
        pageRangeDisplayed={number("pageRangeDisplayed", 4)}
        marginPagesDisplayed={number("marginPagesDisplayed", 4)}
        containerClassName="containerClassName"
        pageClassName="pageClassName"
        activeClassName="activeClassName"
        pageLinkClassName="pageLinkClassName"
      />
    ))
  )
)
