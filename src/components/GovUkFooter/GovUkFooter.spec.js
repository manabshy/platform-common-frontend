import React from "react"
import { shallow } from "enzyme"
import GovUkFooter from "./GovUkFooter"

/* global test, expect */

test("GovUkFooter should render correctly", () => {
  const component = shallow(<GovUkFooter />)
  expect(component).toMatchSnapshot()
})
