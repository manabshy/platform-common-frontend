import React from "react"
import { shallow } from "enzyme"
import renderer from "react-test-renderer"

import { getHttpJSON } from "../../helpers/http/Http"
import SignIn from "./SignIn"
import KEYS from "../../helpers/auth/AuthKeynames"

/* global test, jest, expect */

jest.mock("../../helpers/http/Http", () => ({
  getHttpJSON: jest.fn()
}))
jest.mock("../../helpers/auth/Auth", () => ({
  getAccessStatus: jest.fn()
}))

test("Sign in should render with sign in", () => {
  getHttpJSON.mockImplementation(() => ({}))

  const tree = renderer.create(<SignIn />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("Sign in should render with sign out", () => {
  getHttpJSON.mockImplementation(() => ({
    userInfo: {
      Username: "fake.name-digital.ndr.cesg.gov.uk",
      name: "Fake Name",
      email: "fake.name@digital.ndr.cesg.gov.uk"
    }
  }))

  const tree = renderer.create(<SignIn />).toJSON()
  expect(tree).toMatchSnapshot()
})

test("Sign in should be called once clicked", () => {
  getHttpJSON.mockImplementation(() => ({
    userInfo: {
      Username: "fake.name-digital.ndr.cesg.gov.uk",
      name: "Fake Name",
      email: "fake.name@digital.ndr.cesg.gov.uk"
    }
  }))

  const spy = jest.spyOn(SignIn.prototype, "getURL")
  const component = shallow(<SignIn />)
  component.find("a.sign-link").simulate("click")
  expect(spy).toHaveBeenCalled()
})

/* test('Sign in components sets userData to state on mount', () => {
  let userInfoPayload = { 'Username': 'fake.name-digital.ndr.cesg.gov.uk',
    'name': 'Fake Name',
    'email': 'fake.name@digital.ndr.cesg.gov.uk'
  }
  getHttpJSON.mockImplementation(() => ({
    userInfo: userInfoPayload
  }))

  const spy = jest.spyOn(SignIn.prototype, 'componentWillMount')
  const component = shallow(<SignIn />)
  expect(spy).toHaveBeenCalled()
  component.setProps({ userData: KEYS.ACCESS.ACCESS })
  expect(component.state('userData')).toEqual({"userInfo": userInfoPayload})
}) */
