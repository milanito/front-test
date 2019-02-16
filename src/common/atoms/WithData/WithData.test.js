import React from 'react'
import ReactDOM from 'react-dom'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import { compose, withProps } from 'recompose'

import WithData from './index'

const Test = () => (<p>test</p>)

describe('WithData HOC', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const Elmnt = compose(WithData)(Test)

    ReactDOM.render(<Elmnt />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders nothing without data', () => {
    const Elmnt = compose(WithData)(Test)
    const wrapper = shallow(<Elmnt />)

    expect(wrapper.html()).toEqual('')
  })

  it('renders something with data', () => {
    const Elmnt = compose(withProps({ data: 'some_data' }), WithData)(Test)
    const wrapper = shallow(<Elmnt />)

    expect(wrapper.html()).toEqual('<p>test</p>')
  })
})
