import React from "react"
import SearchBox from "./SearchBox"
import { shallow, mount } from "enzyme"

/* global jest, it, expect */

const returnMockInputEventTarget = value => ({
  target: { value: value }
})

it("renders correctly with defaults", () => {
  const mockChangeHandler = jest.fn()
  const mockChangeSubmit = jest.fn()

  const tree = shallow(
    <SearchBox
      onFieldValueChange={mockChangeHandler}
      onFieldSubmit={mockChangeSubmit}
    />
  )

  expect(tree).toMatchSnapshot()
  expect(tree.length).toEqual(1)
  expect(tree.find('input[placeholder="Search"]').length).toEqual(1)
})

it("renders with placeholder text", () => {
  const mockChangeHandler = jest.fn()
  const mockChangeSubmit = jest.fn()
  const placeholder = "New Placeholder"

  const tree = shallow(
    <SearchBox
      onFieldValueChange={mockChangeHandler}
      onFieldSubmit={mockChangeSubmit}
      placeholderText={placeholder}
    />
  )

  expect(tree.find(`input[placeholder="${placeholder}"]`).length).toEqual(1)
  expect(tree.find(`input[placeholder="Search"]`).length).toEqual(0)
})

it("renders with passed in classNames", () => {
  const mockChangeHandler = jest.fn()
  const mockChangeSubmit = jest.fn()
  const className = "new-class-name"

  const tree = shallow(
    <SearchBox
      onFieldValueChange={mockChangeHandler}
      onFieldSubmit={mockChangeSubmit}
      className={className}
      searchButtonClassName={className}
      searchInputClassName={className}
      searchWrapperClassName={className}
    />
  )

  expect(tree.find(`.pcf-search-box.${className}`).length).toEqual(1)
  expect(tree.find(`.search-box-input.${className}`).length).toEqual(1)
  expect(tree.find(`.search-box-icon-wrapper.${className}`).length).toEqual(1)
})

it("fires change callback on change and Enter", () => {
  const mockChangeHandler = jest.fn()
  const mockChangeSubmit = jest.fn()

  const tree = mount(
    <SearchBox
      onFieldValueChange={mockChangeHandler}
      onFieldSubmit={mockChangeSubmit}
    />
  )

  const input = tree.find(`.search-box-input`)
  input.simulate("change", returnMockInputEventTarget("p"))

  expect(mockChangeHandler).toBeCalledWith("p")

  input.simulate("change", returnMockInputEventTarget("i"))

  expect(mockChangeHandler).toBeCalledWith("i")
  input.simulate("keyPress", { key: "Enter" })
  expect(mockChangeSubmit).toBeCalled()
})

it("fires change callback on change and Enter", () => {
  const mockChangeHandler = jest.fn()
  const mockChangeSubmit = jest.fn()

  const tree = shallow(
    <SearchBox
      onFieldValueChange={mockChangeHandler}
      onFieldSubmit={mockChangeSubmit}
      fieldValue="SUT"
    />
  )

  const sut = tree.find(`.search-box-icon-wrapper`)
  sut.simulate("click")

  expect(mockChangeSubmit).toBeCalledWith("SUT")
})
