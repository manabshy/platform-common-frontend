import React from "react"
import { shallow } from "enzyme"
import CountCard from "./CountCard"

/* global test, expect */

it("Should render correctly", () => {
  const tree = shallow(
    <CountCard
      //to='/test'
      textColour="#000000"
      backgroundColour="#cccccc"
      text="test"
      total={1}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with missing props", () => {
  const tree = shallow(<CountCard to="/test" text="test" total={1} />)
  expect(tree).toMatchSnapshot()
})

it("Should render trigger on change event", () => {
  const changeSpy = jest.fn()
  const tree = shallow(
    <CountCard onChangeHandler={changeSpy} text="test" total={1} />
  )
  expect(changeSpy).not.toHaveBeenCalled()
  tree.find("input").simulate("change")

  expect(changeSpy).toHaveBeenCalled()
})
