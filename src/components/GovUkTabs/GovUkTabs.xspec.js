/**
 * Unit Test
 * @author    @author Gareth Parker <gareth.parker@digital.ncsc.gov.uk>
 */

import React from "react"
import { shallow, mount } from "enzyme"
import { Tabs, Tab } from "./GovUkTabs"

/* global jest, test, expect */

test("Empty Tabs should render properly", () => {
  const component = mount(<Tabs />)
  expect(component).toMatchSnapshot()
})

test("Empty Tab should render properly", () => {
  const component = mount(<Tab label="test" />)
  expect(component).toMatchSnapshot()
})

test("GovUkTabs and content should render correctly", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  expect(component).toMatchSnapshot()
})

test("GovUkTabs disabled tabs should not have click handlers", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab disabled label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  expect(component).toMatchSnapshot()
  expect(component.find("li.disabled")).toHaveLength(1)
  expect(component.find("a.disabled").prop("onClick")).toEqual(null)
})

test("GovUkTabs should apply header classes to tab li items", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab headerClass="first" label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab headerClass="second" label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  expect(component.find("li.nav-item.first")).toHaveLength(1)
  expect(component.find("li.nav-item.second")).toHaveLength(1)
})

test("GovUkTabs should change content on tab click", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab headerClass="clickTestTarget" label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  component.find("a.clickTestTarget").simulate("click")

  expect(component).toMatchSnapshot()
})

test("GovUkTabs should trigger on select events on tab click", () => {
  const onSelEvent = jest.fn()

  const component = shallow(
    <Tabs onSelect={onSelEvent} selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab headerClass="clickTestTarget" label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  component.find("a.clickTestTarget").simulate("click")
  expect(onSelEvent).toBeCalledWith(1, "Tab 2")
})

test("GovUkTabs should default to the first tab if non-valid selection", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab headerClass="clickTestTarget" label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  component.setState({ ...component.state, selected: "This does not exist" })
  expect(component.find(".tabContent").text()).toEqual("Tab 1 contents!")
})

test("GovUkTabs should default to the only child if non-valid selection", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
    </Tabs>
  )

  component.setState({ selected: "This does not exist" })

  expect(component.find(".tabContent").text()).toEqual("Tab 1 contents!")
})

test("GovUkTabs should default to the first tab if selection is lower than 0", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab headerClass="testActiveTarget" label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  component.setState({ selected: -5 })

  expect(component).toMatchSnapshot()
  expect(component.find(".testActiveTarget li.nav-item.active")).toHaveLength(1)
})

test("GovUkTabs should default to the only child if selection is lower than 0", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab headerClass="testActiveTarget" label="Tab 1">
        <div className="tabContent">Only Child Content</div>
      </Tab>
    </Tabs>
  )

  component.setState({
    ...component.state,
    selected: -5
  })

  expect(component).toMatchSnapshot()
  expect(component.find(".testActiveTarget li.nav-item.active")).toHaveLength(1)
})

test("GovUkTabs should default to the last tab if selection is higher than count", () => {
  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab label="Tab 1">
        <div className="tabContent">Tab 1 contents!</div>
      </Tab>
      <Tab headerClass="testActiveTarget" label="Tab 2">
        <div className="tabContent">Tab 2 contents!</div>
      </Tab>
    </Tabs>
  )

  component.setState({ selected: 5 })

  expect(component).toMatchSnapshot()
  expect(component.find(".testActiveTarget li.nav-item.active")).toHaveLength(1)
})

test("Click handler should call preventDefault if event is present", () => {
  const eventMock = {
    preventDefault: jest.fn()
  }

  const component = shallow(
    <Tabs selected="Tab 1">
      <Tab headerClass="testActiveTarget" label="Tab 1">
        <div className="tabContent">Only Child Content</div>
      </Tab>
    </Tabs>
  )

  component.instance()._handleClick(1, eventMock)

  expect(eventMock.preventDefault).toHaveBeenCalled()
})
