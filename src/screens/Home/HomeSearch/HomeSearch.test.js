import React from 'react'
import sinon from 'sinon'
import ReactDOM from 'react-dom'
import { compose, withProps } from 'recompose'

import HomeSearch from './index'
import { mountWithIntl as mount } from '../../../../__helpers__/intl-enzyme-test-helper'

describe('<HomeSearch />', () => {
  it('renders input with right title', () => {
    const wrapper = mount(<HomeSearch />)

    expect(wrapper.exists('.input')).toEqual(true)
    expect(wrapper.find('input').exists()).toEqual(true)
  })

  it('calls function when updating input', () => {
    const event = { target: { name: 'pollName', value: 'spam' } }
    const spyUpdateInput = sinon.spy()
    const Element = compose(withProps({ updateInput: spyUpdateInput }))(HomeSearch)
    const wrapper = mount(<Element />)

    wrapper.find('input').simulate('change', event)
    expect(spyUpdateInput.called).toEqual(true)
    expect(spyUpdateInput.calledWithExactly('spam')).toEqual(true)
  })
})
