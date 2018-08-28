import React from 'react'
import { shallow } from 'enzyme'
import GovUkHead from './GovUkHead'

/* global it, test, expect */

test('GovUkHead should render correctly', () => {
  const component = shallow(<GovUkHead />)
  expect(component).toMatchSnapshot()
})

it('should render a document title', () => {
  const wrapper = shallow(<GovUkHead title='Test Title' />)
  expect(wrapper.prop('title')).toEqual('Test Title')
})
