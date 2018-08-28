import React from "react"
import { mount, shallow } from "enzyme"
import StatementBar from "./StatementBar"

/* global test, expect */

it("Should render correctly", () => {
  const tree = shallow(<StatementBar message="testMessage" />)
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with no message", () => {
  const tree = shallow(<StatementBar />)
  expect(tree).toMatchSnapshot()
})
