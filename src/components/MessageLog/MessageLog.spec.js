import React from "react"
import MessageLog from "./MessageLog"
import { shallow, mount } from "enzyme"

/* global jest, it, expect */

it("renders correctly with error message data", () => {
  const spyFunc = jest.fn()
  const mockItems = {
    errorMessages: [
      {
        type: "Member",
        content: "TEST"
      }
    ]
  }

  const component = shallow(
    <MessageLog clearErrorHandler={spyFunc} items={mockItems} />
  )

  expect(component).toMatchSnapshot()
})

it("renders correctly when no messages are found", () => {
  const spyFunc = jest.fn()

  const component = shallow(
    <MessageLog clearErrorHandler={spyFunc} items={[]} />
  )

  expect(component).toMatchSnapshot()
})

it("does not display clear message control if no messages", () => {
  const spyFunc = () => true

  const component = mount(<MessageLog clearErrorHandler={spyFunc} items={[]} />)

  expect(component.find("a.error-control").length).toEqual(0)
})

it("calls a handler function when the clear messages button is clicked", () => {
  const spyFunc = jest.fn()

  const mockItems = {
    errorMessages: [
      {
        type: "Member",
        content: "TEST"
      }
    ]
  }

  const component = mount(
    <MessageLog clearErrorHandler={spyFunc} items={mockItems} />
  )

  component.find("a.error-control").simulate("click")

  expect(spyFunc).toHaveBeenCalledWith()
})
