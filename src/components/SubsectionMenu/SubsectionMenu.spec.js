import React from "react"
import { shallow } from "enzyme"
import SubsectionMenu from "./SubsectionMenu"

/* global test, expect */

it("Simulates click", () => {
  const mockFn = jest.fn()
  const tree = shallow(
    <SubsectionMenu
      id="test"
      selected={true}
      title="test"
      onClickHandler={mockFn}
    />
  )
  tree.simulate("click")
  expect(mockFn).toHaveBeenCalled()
})

it("Should render correctly", () => {
  const tree = shallow(
    <SubsectionMenu
      id="test"
      selected={true}
      title="test"
      onClickHandler={jest.fn()}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("Should render without certain props", () => {
  const tree = shallow(
    <SubsectionMenu id="test" selected={true} title="test" />
  )
  expect(tree).toMatchSnapshot()
})

it("Should render active class if selected = true", () => {
  const tree = shallow(
    <SubsectionMenu selected={true} title="test" onClickHandler={jest.fn()} />
  )
  expect(tree.find(`.CCactive`).length).toEqual(1)
})

it("Should not render active class if selected = false", () => {
  const tree = shallow(
    <SubsectionMenu selected={false} title="test" onClickHandler={jest.fn()} />
  )
  expect(tree.find(`.CCactive`).length).toEqual(0)
})
