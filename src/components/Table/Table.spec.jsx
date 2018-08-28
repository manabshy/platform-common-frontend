import React from "react"
import Table from "./Table"
import { shallow } from "enzyme"

const tdMock = [
  [
    <span>
      <input type="checkbox" id="row1" />
      <label htmlFor="row1" className="visually-hidden">
        Select row 1
      </label>
    </span>,
    "Text only",
    <span>Text in html</span>,
    ""
  ],
  [
    <span>
      <input type="checkbox" id="row2" />
      <label htmlFor="row2" className="visually-hidden">
        Select row 2
      </label>
    </span>,
    "Text and 123",
    <p>Text in html</p>,
    "This isn't empty"
  ]
]

const thMock = [
  <span>
    <input type="checkbox" id="select-all" onChange={() => {}} />
    <label htmlFor="select-all" className="visually-hidden">
      Select all
    </label>
  </span>,
  "Text",
  "Mixed content",
  "Maybe empty"
]

it("renders nothing with no `tableHeading` data and no `tableBody` data", () => {
  const tree = shallow(<Table />)
  expect(tree).toMatchSnapshot()
  expect(tree.children().length).toEqual(0)
})

it("renders heading if `tableHeading` data is supplied", () => {
  const tree = shallow(<Table tableHeading={thMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.children().length).toEqual(1)
  expect(tree.find("th").length).toEqual(thMock.length)
})

it("renders body if `tableBody` data is supplied", () => {
  const tree = shallow(<Table tableBody={tdMock} />)
  expect(tree).toMatchSnapshot()
  expect(tree.find("tr").length).toEqual(tdMock.length)
})

it("renders caption if `tableCaption` string is supplied", () => {
  const caption = "Table caption"
  const tree = shallow(<Table tableBody={tdMock} tableCaption={caption} />)

  expect(tree).toMatchSnapshot()
  expect(tree.find("caption").length).toEqual(1)
  expect(tree.find("caption").text()).toEqual(caption)
})
