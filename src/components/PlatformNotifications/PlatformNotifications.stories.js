import React from "react"
import { storiesOf } from "@storybook/react"
import PlatformNotifications from "./PlatformNotifications"
import { action } from "@storybook/addon-actions"
import { withInfo } from "@storybook/addon-info"
import { text } from "@storybook/addon-knobs"
import Readme from "./README.md"
import { withReadme } from "storybook-readme"

const defaultContainerProps = {
  fetchNotifications: action("fetching-notifications"),
  platformNotifications: {
    data: [],
    isfetching: false
  }
}

const sampleData = [
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
    read: "8th July 2018 19:52:31",
    created: "2018-07-05T17:20:00.000Z"
  }
]

storiesOf("PlatformNotifications", module)
  .add(
    "Empty",
    withReadme(
      Readme,
      withInfo()(() => <PlatformNotifications {...defaultContainerProps} />)
    )
  )
  .add(
    "With Notifications",
    withReadme(
      Readme,
      withInfo()(() => (
        <PlatformNotifications
          {...defaultContainerProps}
          platformNotifications={{
            isFetching: false,
            data: sampleData
          }}
        />
      ))
    )
  )
