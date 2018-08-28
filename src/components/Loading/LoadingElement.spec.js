import React from "react"
import { mount } from "enzyme"
import LoadingElement from "./LoadingElement"

/* global test, expect */

test("Loading element should render properly", () => {
  const component = mount(<LoadingElement />)
  expect(component).toMatchSnapshot()
})

test("Loading element should render properly as paragraph element", () => {
  const component = mount(<LoadingElement type="paragraph" />)
  expect(component).toMatchSnapshot()
})

test("Loading element should render properly as button element", () => {
  const component = mount(<LoadingElement type="button" />)
  expect(component).toMatchSnapshot()
})
