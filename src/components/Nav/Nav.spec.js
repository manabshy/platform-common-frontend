import React from "react"
import Nav from "./Nav"
import { shallow } from "enzyme"

const navMock = [
  {
    to: "/test1",
    heading: "Test Link 1"
  },
  {
    to: "/test2",
    heading: "Test Link 2"
  }
]

const navWithHandlersMock = [
  {
    to: "/test1",
    heading: "Test Link 1",
    onClickHandler: jest.fn()
  },
  {
    to: "/test2",
    heading: "Test Link 2",
    onClickHandler: jest.fn()
  }
]

const emptyNavMock = []

const missingPropNavMock = [
  {
    heading: "Test Link 1"
  },
  {
    to: "/test2"
  }
]
/* global jest, it, expect, spyOn */

it("renders correctly with undefined navigation data", () => {
  const tree = shallow(<Nav display={true} links={undefined} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("li").length).toEqual(0)
})

it("renders correctly with empty navigation data", () => {
  const tree = shallow(<Nav display={true} links={emptyNavMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("li").length).toEqual(0)
})

it("renders correctly with some navigation data", () => {
  const tree = shallow(<Nav display={true} links={navMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("li").length).toEqual(navMock.length)
})

it("renders correctly with broken navigation data", () => {
  const tree = shallow(<Nav display={true} links={missingPropNavMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("li").length).toEqual(0)
})

it("does not add the display-none class when display is true", () => {
  const tree = shallow(<Nav display={true} links={navMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("nav.display-none").length).toEqual(0)
})

it("adds the display-none class when display is false", () => {
  const tree = shallow(<Nav display={false} links={navMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("nav.display-none").length).toEqual(1)
})

it("adds the show-mobile-menu-links class when display is true", () => {
  const tree = shallow(<Nav display={true} links={navMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("ul.show-mobile-menu-links").length).toEqual(1)
})

it("fires off custom onClickHandlers for navigation items", () => {
  // let navLink1Spy = spyOn(...)

  const tree = shallow(<Nav display={true} links={navWithHandlersMock} />)

  tree
    .find("Link")
    .first()
    .simulate("click")
  tree
    .find("Link")
    .last()
    .simulate("click")

  expect(navWithHandlersMock[0].onClickHandler).toHaveBeenCalledTimes(1)
  expect(navWithHandlersMock[1].onClickHandler).toHaveBeenCalledTimes(1)
})
