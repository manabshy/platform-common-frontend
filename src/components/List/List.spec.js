import React from "react"
import List from "./List"
import { shallow } from "enzyme"

/* global jest, it, expect */

it("renders correctly", () => {
  const tree = shallow(<List />)
  expect(tree).toMatchSnapshot()
})
