import React from "react"
import { shallow } from "enzyme"
import Paginator from "./Paginator"

// <Paginator offset={this.state.relatedDomainsPage}
//   count={pager.count()}
//   onPageChange={this.onRelatedDomainsPageChange.bind(this)} />

/* global jest, it, expect */
it("renders active domain", () => {
  const component = shallow(
    <Paginator offset={0} count={4} onPageChange={jest.fn()} />
  )
  expect(component).toMatchSnapshot()
})

it("fires onPageChange with the next page when called", () => {
  let onChangeSpy = jest.fn()

  const component = shallow(
    <Paginator offset={0} count={4} onPageChange={onChangeSpy} />
  )

  component.find(".nextPage").simulate("click")
  expect(onChangeSpy).toHaveBeenCalledWith(1)
})

/**
 * @TODO firstPage functionalty is missing
 */
xit("fires onPageChange with the first page when called", () => {
  let onChangeSpy = jest.fn()

  const component = shallow(
    <Paginator offset={1} count={4} onPageChange={onChangeSpy} />
  )

  component.find(".firstPage").simulate("click")
  expect(onChangeSpy).toHaveBeenCalledWith(0)
})
/**
 * @TODO firstPage functionalty is missing
 */
xit("does not fire onPageChange requesting first page when already on the first page", () => {
  let onChangeSpy = jest.fn()

  const component = shallow(
    <Paginator offset={0} count={4} onPageChange={onChangeSpy} />
  )

  component.find(".firstPage").simulate("click")
  expect(onChangeSpy).not.toHaveBeenCalledWith(0)
})

/**
 * @TODO lastPage functionalty is missing
 */
xit("fires onPageChange with the last page when called", () => {
  let onChangeSpy = jest.fn()

  const component = shallow(
    <Paginator offset={0} count={4} onPageChange={onChangeSpy} />
  )

  component.find(".lastPage").simulate("click")
  expect(onChangeSpy).toHaveBeenCalledWith(3)
})

/**
 * @TODO lastPage functionalty is missing
 */
xit("does not fire onPageChange requesting the last page when already on the last page", () => {
  let onChangeSpy = jest.fn()

  const component = shallow(
    <Paginator offset={3} count={4} onPageChange={onChangeSpy} />
  )

  component.find(".lastPage").simulate("click")
  expect(onChangeSpy).not.toHaveBeenCalledWith(3)
})
