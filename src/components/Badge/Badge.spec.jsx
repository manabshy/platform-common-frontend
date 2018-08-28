import React from "react"
import Badge from "./Badge"
import { shallow } from "enzyme"

it("renders correctly and doesn't crash", () => {
  const tree = shallow(
    <Badge title="title" className="SUT">
      Normal
    </Badge>
  )
  expect(tree).toMatchSnapshot()
})
