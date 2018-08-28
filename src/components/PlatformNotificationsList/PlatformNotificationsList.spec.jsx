import React from "react"
import PlatformNotificationsList from "./PlatformNotificationsList"
import { shallow, mount, ReactWrapper } from "enzyme"

const dataMock = [
  {
    id: "1",
    service: "webcheck",
    subject: "New urgent finding detected",
    content: "https://www.urlto.service.orgname.gov.uk",
    priority: "informational",
    read: "2018-06-07 15:52:31",
    created: "2018-07-17T16:48:00.000Z"
  },
  {
    id: "2",
    service: "mailcheck",
    subject: "New malicious pattern detected",
    content:
      "#### Check Webcheck immediatly! \r\n * Log in \r\n * Go to findings \r\n * Click the new finding \r\n\r\n See http://www.webcheck.gov.uk/latest for more details",
    priority: "informational",
    read: "2018-06-07 19:52:31",
    created: "2018-07-16T16:48:00.000Z"
  }
]

/* global jest, it, expect */

it("renders correctly with group data", () => {
  const tree = shallow(
    <PlatformNotificationsList system={{ errorMessages: [] }} data={dataMock} />
  )
  expect(tree).toMatchSnapshot()
  expect(tree.find(".notification").length).toEqual(dataMock.length)
})

it("renders correctly when no members are found", () => {
  const tree = shallow(
    <PlatformNotificationsList system={{ errorMessages: [] }} data={[]} />
  )
  expect(tree).toMatchSnapshot()
  expect(tree.find("#no-data-message").length).toEqual(1)
})

/** 
 NOT-20 Notification Detail tests
*/

it("triggers handler when notification is clicked", () => {
  let spy = spyOn(
    PlatformNotificationsList.prototype,
    "onNotificationClickHandler"
  )

  let fetchMock = jest.fn()

  const tree = shallow(
    <PlatformNotificationsList fetchNotification={fetchMock} data={dataMock} />
  )

  tree
    .find("td > a")
    .first()
    .simulate("click", { preventDefault: jest.fn() })

  expect(spy).toHaveBeenCalledWith(expect.anything(), "1")
})

it("triggers fetchNotification on click handler with ID", () => {
  let fetchMock = jest.fn()

  const tree = shallow(
    <PlatformNotificationsList fetchNotification={fetchMock} data={dataMock} />
  )

  tree
    .find("td > a")
    .first()
    .simulate("click", { preventDefault: jest.fn() })

  expect(fetchMock).toHaveBeenCalledWith("1")
})

it("sets the modal to be open once a nitification is clicked", () => {
  let fetchMock = jest.fn()

  const tree = mount(
    <PlatformNotificationsList fetchNotification={fetchMock} data={dataMock} />
  )

  tree
    .find("td > a")
    .first()
    .simulate("click", { preventDefault: jest.fn() })

  // state change: modalIsOpen = true
  let modalOpen = tree.state().showNotification
  expect(modalOpen).toBeTruthy()

  const modal = tree.find("InformationModal")

  expect(modal.instance().props.isOpen).toBe(true)
})

it("should render markdown as html", () => {
  const tree = mount(
    <PlatformNotificationsList fetchNotification={jest.fn()} data={dataMock} />
  )

  const markdownContentTest = tree.instance().renderData(dataMock[1])
  const markdownReact = new ReactWrapper(markdownContentTest)
  expect(markdownReact.find("a").length).toBe(1)
  expect(markdownReact.find("li").length).toBe(3)
})

xit("formats the date on the list view", () => {})

xit("formats the created date on the description modal view", () => {})
