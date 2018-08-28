import React from "react"
import { storiesOf } from "@storybook/react"
import MessageLog from "./MessageLog"
import { action } from "@storybook/addon-actions"

storiesOf("MessageLog", module)
  .add("Default", () => (
    <MessageLog
      items={{
        errorMessages: [
          {
            type: "Member",
            content: "TEST"
          },
          {
            type: "Data",
            content: "Another test"
          }
        ]
      }}
    />
  ))
  .add("clearErrorHandler", () => (
    <MessageLog
      items={{
        errorMessages: [
          {
            type: "Member",
            content: "TEST"
          },
          {
            type: "Data",
            content: "Another test"
          }
        ]
      }}
      clearErrorHandler={action("clearErrorHandler")}
    />
  ))
