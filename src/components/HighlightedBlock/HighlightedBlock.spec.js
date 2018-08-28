import React from "react"
import { mount, shallow } from "enzyme"
import HighlightedBlock from "./HighlightedBlock"

/* global test, expect */

it("Should render correctly with all props", () => {
  const tree = shallow(
    <HighlightedBlock backgroundColour="blue" borderLeftColour="red">
      <span>Testing text displayed in highlighted block</span>
    </HighlightedBlock>
  )
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with no props", () => {
  const tree = shallow(
    <HighlightedBlock>
      <span>Testing text displayed in highlighted block</span>
    </HighlightedBlock>
  )
  expect(tree).toMatchSnapshot()
})
