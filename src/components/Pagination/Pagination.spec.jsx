import React from "react"
import { shallow, mount } from "enzyme"
import Pagination from "./Pagination.jsx"

describe("Pagination component:", () => {
  it("renders without crashing", () => {
    const mockPager = num => {}

    const tree = shallow(
      <Pagination
        pageNumber={1}
        onPageChange={mockPager}
        totalCount={10}
        perPage={1}
      />
    )
    expect(tree).toMatchSnapshot()
  })

  it("renders does not render if `perPage` is >= `totalCount`", () => {
    const mockPager = num => {}

    const tree = shallow(
      <Pagination
        pageNumber={1}
        onPageChange={mockPager}
        totalCount={10}
        perPage={10}
      />
    )
    expect(tree).toMatchSnapshot()
    expect(tree.props()).toEqual({})
    expect(tree.children().length).toEqual(0)
  })

  it("renders with correct defaults", () => {
    const mockPager = jnum => {}

    const tree = shallow(
      <Pagination
        pageNumber={1}
        onPageChange={mockPager}
        totalCount={10}
        perPage={1}
      />
    )

    expect(tree.prop("forcePage")).toEqual(0)
    expect(tree.prop("pageCount")).toEqual(10 / 1)
    expect(tree.prop("containerClassName")).toEqual("pcf-pagination")
    expect(tree.prop("pageClassName")).toEqual("pagination-page")
    expect(tree.prop("pageRangeDisplayed")).toEqual(2)
    expect(tree.prop("marginPagesDisplayed")).toEqual(2)
  })

  it("renders with correct overrided", () => {
    const mockPager = jnum => {}
    const extraClassName = "SUT"
    const totalCount = 10
    const perPage = 2

    const tree = shallow(
      <Pagination
        pageNumber={1}
        onPageChange={mockPager}
        totalCount={totalCount}
        perPage={perPage}
        containerClassName={extraClassName}
        pageClassName={extraClassName}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
      />
    )

    expect(tree).toMatchSnapshot()

    expect(tree.prop("containerClassName")).toEqual(
      `pcf-pagination ${extraClassName}`
    )
    expect(tree.prop("pageCount")).toEqual(totalCount / perPage)
    expect(tree.prop("pageClassName")).toEqual(
      `pagination-page ${extraClassName}`
    )
    expect(tree.prop("pageRangeDisplayed")).toEqual(3)
    expect(tree.prop("marginPagesDisplayed")).toEqual(1)
  })
})

it("calls the `onPageChange` function with a 1 based index number", () => {
  let page = 0
  const mockPager = jest.fn()

  const tree = shallow(
    <Pagination
      pageNumber={1}
      onPageChange={mockPager}
      totalCount={10}
      perPage={1}
    />
  )

  tree.prop("onPageChange")({ selected: 0 })

  expect(mockPager).toBeCalledWith(1)
})
