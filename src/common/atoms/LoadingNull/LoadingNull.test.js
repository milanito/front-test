import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { shallow } from 'enzyme'

import LoadingNull from './index'

describe('<LoadingNull />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LoadingNull />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders nothing', () => {
    const wrapper = shallow(<LoadingNull />)
    expect(wrapper.html()).toEqual(null)
  })
})
