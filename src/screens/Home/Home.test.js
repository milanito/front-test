import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import mockAxios from 'jest-mock-axios'

import Home from './index'
import list from '../../../public/api/list.json'
import { mountWithIntl as mount } from '../../../__helpers__/intl-enzyme-test-helper'

describe('<Home />', () => {
  afterEach(() => mockAxios.reset())

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders something with data', done => {
    const wrapper = mount(<Home />)
    mockAxios.mockResponse(list)

    setTimeout(() => {
      expect(mockAxios.get).toHaveBeenCalledWith('http://localhost:3000/api/list.json')
      // Should have input
      expect(wrapper.exists('.input')).toEqual(true)
      wrapper.unmount()
      done()
    }, 1000)
  })
})
