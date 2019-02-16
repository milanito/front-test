import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { mount } from 'enzyme'

import MainContainer from './index'

describe('<MainContainer />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<MainContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders container', () => {
    const wrapper = mount(<MainContainer />)

    expect(wrapper.html()).not.toEqual(null)
    expect(wrapper.exists('.ui')).toEqual(true)
    expect(wrapper.exists('.container')).toEqual(true)
    wrapper.unmount()
  })
})
