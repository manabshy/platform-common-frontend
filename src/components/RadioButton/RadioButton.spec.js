import React from "react"
import { shallow } from "enzyme"

import RadioButton from "./RadioButton"

/* global jest, test, expect */

it("Should render correctly", () => {
  const tree = shallow(<RadioButton id="test" name="name" label="test" />)
  expect(tree).toMatchSnapshot()
})

it("Simulate change", () => {
  const onChange = jest.fn()
  const tree = shallow(<RadioButton label="test" onChange={onChange} />)
  tree.find("input").simulate("change")
  expect(onChange).toHaveBeenCalled()
})

it("Render correctly without label", () => {
  const tree = shallow(<RadioButton id="test" label="test" />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("label span").length).toEqual(1)
})
