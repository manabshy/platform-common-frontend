import React from "react"
import Box from "./Box"
import { shallow } from "enzyme"

/* global jest, it, expect */

it("renders correctly", () => {
  const tree = shallow(<Box />)
  expect(tree).toMatchSnapshot()
})
