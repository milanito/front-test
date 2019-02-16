import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { mount } from 'enzyme'
import { compose, withProps } from 'recompose'

import Loading from './index'

describe('<Loading />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<Loading />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders spinner when no error', () => {
    const wrapper = mount(<Loading />)

    expect(wrapper.exists('.spinner')).toEqual(true)
    expect(wrapper.exists('.loading')).toEqual(true)
    expect(wrapper.exists('.icon')).toEqual(true)
    wrapper.unmount()
  })

  it('renders times when error', () => {
    const Elmnt = compose(withProps({ error: new Error('some_error') }))(Loading)
    const wrapper = mount(<Elmnt />)

    expect(wrapper.exists('.times')).toEqual(true)
    expect(wrapper.exists('.icon')).toEqual(true)
    wrapper.unmount()
  })
})
