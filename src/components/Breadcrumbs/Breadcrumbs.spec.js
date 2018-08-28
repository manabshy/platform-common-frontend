import React from "react"
import { shallow } from "enzyme"
import Breadcrumbs from "./Breadcrumbs"

/* global test, expect */

it("Should render correctly", () => {
  const tree = shallow(
    <Breadcrumbs
      trail={["TestHomepage", "TestPage1", "TestPage2", "TestPage3"]}
      links={["/", "/test1", "/test2"]}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with no links", () => {
  const tree = shallow(<Breadcrumbs trail={["TestHomepage"]} />)
  expect(tree).toMatchSnapshot()
})

it("Should render correctly with 3 breadcrumbs", () => {
  const tree = shallow(
    <Breadcrumbs
      trail={["TestHomepage", "TestPage1", "TestPage2"]}
      links={["/", "/test1", "/test2"]}
    />
  )
  expect(tree.find("li").length).toEqual(3)
  expect(tree).toMatchSnapshot()
})
