import React from "react"
import { storiesOf } from "@storybook/react"
import PlatformNotificationsList from "./PlatformNotificationsList"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

const sampleTarget = {
  id: "1",
  service: "webcheck",
  subject: "New urgent finding detected",
  content:
    "#### Check Webcheck immediatly! \r\n * Log in \r\n * Go to findings \r\n * Click the new finding \r\n\r\n See http://www.webcheck.gov.uk/latest for **more** details",
  priority: "urgent",
  read: "2018-06-07 15:52:31",
  created: "2018-06-07 15:52:31"
}

const sampleList = [
  {
    id: "1",
    service: "webcheck",
    subject: "New urgent finding detected",
    priority: "informational",
    read: "6th July 2018 15:52:31",
    created: "2018-07-17T16:48:00.000Z"
  },
  {
    id: "2",
    service: "infracheck",
    subject: "New malicious pattern detected",
    priority: "informational",
    read: "6th July 2018 19:52:31",
    created: "2018-07-12T06:18:00.000Z"
  },
  {
    id: "3",
    service: "domain discovery",
    subject: "New malicious pattern detected",
    priority: "informational",
    created: "2018-07-10T18:30:00.000"
  },
  {
    id: "4",
    service: "domain discovery",
    subject:
      "New malicious pattern detected and this has a very very long subject",
    priority: "informational",
    created: "2018-07-08T11:11:00.000"
  },
  {
    id: "5",
    service: "webcheck",
    subject:
      "The UI should be able to cope with multiple very very long subject lines",
    priority: "advisory",
    created: "2018-07-06T17:10:00.000"
  },
  {
    id: "6",
    service: "infracheck",
    subject:
      "The UI should be able to cope with multiple very very long subject lines",
    priority: "advisory",
    created: "2018-07-05T17:20:00.000Z"
  }
]

const defaultProps = {
  fetchNotifications: action("fetching-notifications"),
  targetNotification: {
    isFetching: false,
    data: sampleTarget
  },
  data: []
}

storiesOf("PlatformNotificationsList", module)
  .add(
    "Empty",
    withReadme(
      Readme,
      withInfo()(() => <PlatformNotificationsList {...defaultProps} />)
    )
  )
  .add(
    "With data",
    withReadme(
      Readme,
      withInfo()(() => (
        <PlatformNotificationsList {...defaultProps} data={sampleList} />
      ))
    )
  )
