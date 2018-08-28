import React from "react"
import { shallow, mount } from "enzyme"
import GovUkHeader from "./GovUkHeader"
/* global it, test, expect */

// Mount with Router
//const mountWithRouter = node => mount(<Router>{node}</Router>)

const mockNav = [
  {
    to: "/Example1",
    heading: "Example1"
  },
  {
    to: "/Example2",
    heading: "Example2"
  }
]

test("GovUkHeader should render correctly", () => {
  const component = shallow(<GovUkHeader />)
  expect(component).toMatchSnapshot()
})

it("should not render navigation when empty", () => {
  const wrapper = shallow(<GovUkHeader title="Test Title" />)
  expect(wrapper.find("Nav").length).toEqual(0)
})

it("should render navigation when provided", () => {
  const wrapper = shallow(<GovUkHeader navigation={mockNav} />)
  expect(wrapper.find("Nav").length).toEqual(1)
})

it("should show authentication controls when turned on", () => {
  const wrapper = shallow(<GovUkHeader noAuth={false} />)
  expect(wrapper.find("SignIn").length).toEqual(1)
})

it("should not show authentication controls when turned off", () => {
  const wrapper = shallow(<GovUkHeader noAuth />)
  expect(wrapper.find("SignIn").length).toEqual(0)
})
