import React from "react"
import { shallow } from "enzyme"
import InformationModal from "./InformationModal"

/* global it, test, expect */

test("InformationModal should render correctly", () => {
  const component = shallow(<InformationModal />)
  expect(component).toMatchSnapshot()
})
