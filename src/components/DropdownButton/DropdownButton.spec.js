import React from "react"
import { mount, shallow, ReactWrapper } from "enzyme"
import DropdownButton from "./DropdownButton"
import { Link } from "react-router-dom"
import ReactDOM from "react-dom"

/* global test, expect */

it("Should render correctly", () => {
  const mockFn = jest.fn()
  const tree = shallow(
    <DropdownButton
      title="Test Title"
      menu={[
        { content: <Link to={"/"}>Button 1</Link> },
        { content: "Button2", handler: () => mockFn },
        { content: <Link to={"/"}>Button3 </Link> }
      ]}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("Should render with 3 buttons in menu", () => {
  const mockFn = jest.fn()
  const tree = shallow(
    <DropdownButton
      title="Test Title"
      menu={[
        { content: <Link to={"/"}>Button 1</Link> },
        { content: "Button2", handler: () => mockFn },
        { content: <Link to={"/"}>Button3 </Link> }
      ]}
    />
  )
  expect(tree.find("li").length).toEqual(3)
})

it("Should render without menu prop", () => {
  const tree = shallow(<DropdownButton title="Test Title" menu={[{ content: "Option 1" }]} />)
  expect(tree.find("li").length).toEqual(1)
  expect(tree).toMatchSnapshot()
})

it("Should render list with length of two, when button click", () => {
  const mockFn = jest.fn()
  const button = mount(
    <DropdownButton title="Test Title" menu={[{ content: "Option 1" }, { content: "Option 2" }]} />
  )
  button.find("button").simulate("click")
  expect(button.find("li").length).toEqual(2)
})

it("Should close the dropdown box ", () => {
  const wrapper = mount(<DropdownButton title="Test Title" menu={[{ content: "Option 1" }]} />)
  wrapper.instance().close()
  expect(wrapper.state().showList).toEqual(false)
})

it("Should close downdown box, when clicking outside of the component", () => {
  const event = { target: "button" }
  const node = (
    <ul>
      <li className="dropdown-list">Option 1</li>
    </ul>
  )
  const reactNode = new ReactWrapper(node)
  const wrapper = mount(<DropdownButton title="Test Title" menu={[{ content: "Option 1" }]} />)
  wrapper.instance().setWrapperRef(reactNode)
  wrapper.instance().handleClickOutside(event)
  expect(wrapper.state().showList).toEqual(false)
})
