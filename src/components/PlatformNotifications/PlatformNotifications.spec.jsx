import React from "react"
import PlatformNotifications from "./PlatformNotifications"
import { shallow, mount } from "enzyme"

const dataMock = [
  {
    id: "1",
    service: "webcheck",
    subject: "New urgent finding detected",
    data: "https://www.urlto.service.orgname.gov.uk",
    priority: "informational",
    created: "2018-06-07 15:52:31"
  },
  {
    id: "2",
    service: "mailcheck",
    subject: "New malicious pattern detected",
    data: "https://www.urltoother.service.orgname.gov.uk",
    priority: "informational",
    read: "2018-06-07 19:52:31",
    created: "2018-06-07 19:55:31"
  },
  {
    id: "3",
    service: "domaindiscovery",
    subject: "New gov domain detected",
    data: "https://www.govdomain1.service.orgname.gov.uk",
    priority: "informational",
    created: "2018-06-07 19:55:31"
  },
  {
    id: "4",
    service: "domaindiscovery",
    subject: "New gov domain  detected",
    data: "https://www.govdomain2.service.orgname.gov.uk",
    priority: "informational",
    read: "2018-06-07 19:52:31",
    created: "2018-06-07 19:55:31"
  },
  {
    id: "5",
    service: "webcheck",
    subject: "New urgent finding detected",
    data: "https://www.urlto.service.orgname.gov.uk",
    priority: "informational",
    read: "2018-06-07 19:52:31",
    created: "2018-06-07 15:52:31"
  }
]

const platformNotificationsMock = {
  isFetching: false,
  data: []
}

const platformNotificationsMockWithData = {
  isFetching: false,
  data: dataMock
}

const getServiceNameFromFilter = filterLink => {
  return filterLink
    .text()
    .replace(/\s\(.*\)$/, "")
    .trim()
}

/* global jest, it, expect */

it("renders correctly with no data", () => {
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMock}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("renders unread count in the title", () => {
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )
  expect(tree.find("#lead-heading").text()).toContain("2")
})

it("renders a 0 count in the title when none are unread", () => {
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMock}
    />
  )
  expect(tree.find("#lead-heading").text()).toContain("(0)")
})

it("requests notifications on mount", () => {
  let spy = jest.fn()
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={spy}
      platformNotifications={platformNotificationsMock}
    />
  )
  expect(spy).toHaveBeenCalled()
})

it("renders correctly with data", () => {
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )
  expect(tree).toMatchSnapshot()
})

it("does not render the filter box when there is no data", () => {
  const tree = shallow(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMock}
    />
  )
  expect(tree.find(".pcBox").length).toBe(0)
})

it("creates filter links for each unique service in the dataset", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // click the filter
  const filterLink = tree.find(".notification-filter")

  expect(filterLink.length).toBe(3)
})

it("styles unread filter links", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // Set a filter and check for styling
  expect(tree.find(".unread-filter").length).toBe(2)
})

it("counts the number of unread notifications per service for each filter", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // click the filter (should be webcheck due to sorting?)
  const filterLink = tree.find(".notification-filter").last()
  const serviceName = getServiceNameFromFilter(filterLink)

  expect(filterLink.text()).toContain("1")
})

it("filter updates the list showing only that service", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // click the filter
  const filterLink = tree.find(".notification-filter").first()
  const serviceName = getServiceNameFromFilter(filterLink)

  filterLink.simulate("click", { preventDefault: () => {} })

  // expect only webcheck items
  const notifications = tree.find("tr.notification")

  expect(notifications.length).toBe(
    dataMock.filter(e => e.service === serviceName).length
  )
})

it("clears the filter when the control is clicked", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // Select a filter
  tree.setState({ filter: { service: ["webcheck"] } })
  let notifications = tree.find("tr.notification")
  expect(notifications.length).toBe(
    dataMock.filter(e => e.service === "webcheck").length
  )

  // click the clear filter
  tree.find(".clear-filter").simulate("click", { preventDefault: () => {} })

  // expect only webcheck items
  notifications = tree.find("tr.notification")

  expect(notifications.length).toBe(dataMock.length)
})

it("allows multiple filters to be active at once", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // Select a filter
  const filterLink = tree.find(".notification-filter").first()
  filterLink.simulate("click", { preventDefault: () => {} })
  const otherFilterLink = tree.find(".notification-filter").last()
  otherFilterLink.simulate("click", { preventDefault: () => {} })

  let notifications = tree.find("tr.notification")
  expect(notifications.length).toBe(
    dataMock.filter(
      e => e.service === "webcheck" || e.service === "domaindiscovery"
    ).length
  )
})

it("displays multiple filters to be active at once", () => {
  const tree = mount(
    <PlatformNotifications
      fetchNotifications={jest.fn()}
      platformNotifications={platformNotificationsMockWithData}
    />
  )

  // Select a filter
  tree.setState({ filter: { service: ["webcheck", "domaindiscovery"] } })
  let notifications = tree.find("tr.notification")
  expect(notifications.length).toBe(
    dataMock.filter(
      e => e.service === "webcheck" || e.service === "domaindiscovery"
    ).length
  )
})
